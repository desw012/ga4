/**
 * [ES6] GoogleAnlayticsBuilder
 * Support Hybrid App
 */
(function(window, document, options){
    //예약어
    const COMMAND_RESET = 'gp.reset';
    const COMMAND_VIRTUAL_PAGE_VIEW = 'gp.virtual_page_view';
    const COMMAND_POP_VIRTUAL_PAGE_VIEW = 'gp.pop_virtual_page_view';
    const COMMAND_REPLACE_VIRTUAL_PAGE_VIEW = 'gp.replace_virtual_page_view'

    const DEFAULT_OPTIONS = {
        prefixFnName : '',
        prefixAttrDataSet : 'data-ga-',
        prefixAttrData : 'ga-',
        dataLayerName : 'dataLayer',
        aosInterfaceName : 'GAInterface',
        iosInterfaceName : 'GAInterface',
        containerId : (function(src){
            const queryParams = new URLSearchParams(new URL(src).search);
            return queryParams.get('id');
        })(document.currentScript.src) || 'GTM-XXXXXXX' //
    }
    const {
        prefixFnName,
        prefixAttrDataSet,
        prefixAttrData,
        dataLayerName,
        aosInterfaceName,
        iosInterfaceName,
        containerId
    } = {...DEFAULT_OPTIONS, ...options}

    /**
     * [isNative] 네이티브 App 여부 확인
     * javascript interface 존재 여부로 확인하며 javascript Interface는 네이티브에서 웹뷰 선언 시 적용되어야 된다.
     */
    const isNative = (function(window){
        return !!window[aosInterfaceName]
            || (window.webkit && window.webkit.messageHandlers
                && window.webkit.messageHandlers[iosInterfaceName] );
    })(window);

    /**
     * [DataLayer] GA로 전달하는 인터페이스
    * Array로 추적코드가 로딩 전 발생된 이벤트를 처리하기 위해 queue 방식으로 이벤트를 처리한다.
    * Window Object에 선언되어야 한다.
    */
    const dataLayer = (function(window){
        window[dataLayerName] = window[dataLayerName] || [];
        return window[dataLayerName];
    })(window);

    //===================== [PRIVATE FUNCTIONS : S] ==========================/
    function pushResetObject(obj){
        const resetObj = {};
        for(const key in obj){
            resetObj[key] = undefined;
        }
        resetObj.event = COMMAND_RESET;
        dataLayer.push(resetObj)
    }

    /**
     * 웹 이벤트를 네이티브 이벤트 명으로 변경한다.
     */
    const updateNativeEvent = (function(){
        const events = {};
        events['page_view'] = 'screen';

        return function (obj){
            obj.event = events[obj.event] || obj.event;
        }
    })();

    //===================== [PRIVATE FUNCTIONS : S] ==========================/

    //===================== [PUBLIC FUNCTIONS : S] ==========================/
    const pageView = (obj) => {
        if(dataLayer.length > 0){
            obj = { ...obj, event : COMMAND_VIRTUAL_PAGE_VIEW }
        }
        dataLayer.push(obj);
    };

    const event = (obj) => {
        //valid
        dataLayer.push(obj);
    }

    const ecommerce = (obj) => {



        dataLayer.push(obj);
    }

    const exception = ({error, fatal}) => {
        dataLayer.push({
            event : 'ga_exception',
            eventName : 'exception',
            description : error,
            fatal : !!fatal
        });
    }

    const eventByAttr = (el) => {
        const obj = Array.from(el.attributes).filter(function(attr){
            return attr.name.startsWith(prefixAttrDataSet) || attr.name.startsWith(prefixAttrData);
        }).reduce(function(newObj, obj) {
            newObj[obj.name] = obj.value;
            return newObj;
        }, {});
        event(obj);
    }
    //===================== [PUBLIC FUNCTIONS : E] ==========================/

    //===================== [EXPORT : S] ==========================/
    window.GAUtils = { };
    window[prefixFnName+'sendPageView'] = pageView;
    window[prefixFnName+'sendEvent'] = event;
    window[prefixFnName+'sendEcommerce'] = ecommerce
    window[prefixFnName+'sendEventByAttr'] = eventByAttr;
    window[prefixFnName+'sendException'] = exception;
    //===================== [EXPORT : E] ==========================/

    //===================== [GLOBAL EVENT : S] ==========================/
    document.addEventListener('click', (e)=>{
        try {
            const el = e.target && e.target.closest('.ga-event');
            el && eventByAttr(el);
        }catch (e){}
    });
    //===================== [GLOBAL EVENT : E] ==========================/

    //===================== [INSTALL : S] ==========================/
    /**
     * GTM Snippet Code
     */
    const startGTMSnippetCode = function(){
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script', dataLayerName, containerId);
    }

    if(isNative){
        /**
         * [Hybrid] dataLayer에 Object Push 되는 경우 네이티브로 전송한다.
         * 1. pageview
         */
        dataLayer.push = (function (){
            const _push = dataLayer.push;
            const viewStack = [];
            return function (param){
                const rtn = _push.apply(dataLayer, arguments);

                updateNativeEvent(param);

                const jsonStr = JSON.stringify(param)
                if(window[aosInterfaceName]){
                    window[aosInterfaceName].send(jsonStr)
                } else {
                    window.webkit.messageHandlers[iosInterfaceName].postMessage(jsonStr);
                }
                return rtn;
            }
        })();
    } else {
        /**
         * [WEB]dataLayer에 push시 GTM 스니펫 코드가 실행되도록 한다.
         */
        dataLayer.push = (function(){
            const _push = dataLayer.push;
            const viewStack = [];
            return function (param) {
                const rtn = _push.apply(dataLayer, arguments);

                if(!param.event){

                } else if (param.event === COMMAND_VIRTUAL_PAGE_VIEW){
                    viewStack.push({
                        curr : '', prev : ''
                    });
                } else if( param.event === COMMAND_POP_VIRTUAL_PAGE_VIEW) {

                } else if( param.event === COMMAND_REPLACE_VIRTUAL_PAGE_VIEW) {

                }

                //초기화 처리
                if(!param.event ||
                    (!param.event.startsWith('gtm') && param.event !== COMMAND_RESET )){
                    pushResetObject(param);
                }

                if(this.length === 1){
                    startGTMSnippetCode();
                }

                return rtn;
            }
        })();
        if(dataLayer.length > 0){
            startGTMSnippetCode();
        }
    }
    //===================== [INSTALL : E] ==========================/
})(window, document, undefined);