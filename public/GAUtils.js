/**
 * GAUtils.js
 * Support Hybrid App
 * FIXME: ES6으로 개발 시 국내 기준 1% 미지원
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
     * GTM에서 재선언을 하기 때문에 Window Object에 선언되어야 한다.
     */
    const dataLayer = (function(window){
        window[dataLayerName] = window[dataLayerName] || [];
        return window[dataLayerName];
    })(window);

    //===================== [PRIVATE FUNCTIONS : S] ==========================/
    /**
     * obj에 정의된 데이터를 초기화 한다.
     * FIXME : 이벤트에서 기존 데이터를 Overriding 하는 경우 처리는
     */
    function pushResetObject(obj){
        const resetObj = {};
        for(const key in obj){
            resetObj[key] = undefined;
        }
        dataLayer.push(resetObj)
    }

    /**
     * 웹 이벤트를 네이티브 이벤트로 변경한다.
     */
    const updateNativeEvent = (function(){
        const events = {};
        events['page_view'] = 'screen';

        return function (obj){
            obj.event = events[obj.event] || obj.event;
        }
    })();

    //===================== [PRIVATE FUNCTIONS : E] ==========================/

    //===================== [PUBLIC FUNCTIONS : S] ==========================/
    const pageView = (obj) => {
        //valid
        /**
         * FIXME: 가상 페이지 여부를 요기서 처리해도 될려나??
         * dataLayer push 시에는 이미 이벤트가 발생되었는데...
         */
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
        //valid
        //ex default currency 추가

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
            return attr.name.indexOf(prefixAttrDataSet) === 0 || attr.name.indexOf(prefixAttrData) === 0;
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
         * !!!ga4 공식 문서 사용가능
         */
        dataLayer.push = (function (){
            const _push = dataLayer.push;
            const dataObjectStack = [];
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
            const dataObjectStack = [];
            return function (param) {
                const rtn = _push.apply(dataLayer, arguments);

                // 가상 페이지는 어떻게 한번에 하지....
                // 구현 목표 : 페이지 뷰 데이터 > 가상 페이지 > 이벤트 > 가상 페이지 > 이벤트 > close > 이벤트 > close > 이벤트
                // 이벤트 전송 시 각 뷰에 맞는 이벤트 파라미터가 전송될 수 있도록
                // 가상 페이지 기존 페이지 뷰 데이터 초기화 후 가상 페이지뷰 정보로 셋팅 !! 이부분이 dataLayer에서 처리 할 수 없는데.
                // 가상 페이지가 close 시 페이지 뷰 데이터 초기화 이전 페이지뷰 정보로 push
                // REPLACE 시 이전 페이지 데이터 초기화 후 신규로 추가.
                // 가상 페이지 > 가상페이지 인 경우 대비 해 stack 구조로 구성
                // if(!param.event){
                //
                // } else if (param.event === COMMAND_VIRTUAL_PAGE_VIEW){
                //     viewStack.push({
                //         curr : '', prev : ''
                //     });
                // } else if( param.event === COMMAND_POP_VIRTUAL_PAGE_VIEW) {
                //
                // } else if( param.event === COMMAND_REPLACE_VIRTUAL_PAGE_VIEW) {
                //
                // }

                //초기화 처리
                //FIXME : 기본 이벤트 항목 추가 필요.
                if( param.event && !(param.event.indexOf('gtm') === 0) ){
                    pushResetObject(param);
                }

                if(this.length === 1){
                    startGTMSnippetCode();
                }
                return rtn;
            }
        })();
    }
    //===================== [INSTALL : E] ==========================/
})(window, document, undefined);