var AndroidWebview = 'GA_Android';			// Android userAgent
var iOS_Webview_WK = 'GA_iOS_WK';			// WKWebView userAgent
var CommonData = new Object;
var isMoveFlag = false;
var browserInfo = navigator.userAgent;


// 화면 데이터 설정 예시
// 데이터 전송 페이지마다 <head> 태그 안에 설정해 주시기 바랍니다.
// var pageviewObj = new Object();
// pageviewObj.title = '메인';
// pageviewObj.location = "https://www.eqlstore.com/main";
// pageviewObj.dimension1 = "934862305.1561968380" ;
// pageviewObj.dimension2 = "MB202006240014681";
// pageviewObj.dimension3 = "ad+i9Vj/sY193CjTbzYVMg==";
// pageviewObj.dimension4 = "서울시 강남구";
// pageviewObj.dimension5 = "U";
// 중간생략

// GA_DataScreen(pageviewObj);


function Convert_Element(RemoveValue){
    var return_Value = new Object();
    for(key in RemoveValue){
        if(RemoveValue[key] === "" || RemoveValue[key] === undefined || RemoveValue[key] === null){
            delete RemoveValue[key]
        }
    }
    return_Value = RemoveValue;
    return return_Value
}

// 공통 하이브리드 함수
function Hybrid(GADATA){
    var emptyObject = JSON.parse(JSON.stringify(Convert_Element(CommonData)));
    emptyObject = Object.assign(emptyObject, Convert_Element(GADATA))
    if (browserInfo.indexOf(AndroidWebview) > -1) window.gascriptAndroid.GA_DATA(JSON.stringify(emptyObject));
    else if (browserInfo.indexOf(iOS_Webview_WK) > -1) webkit.messageHandlers.gascriptCallbackHandler.postMessage(JSON.stringify(emptyObject));
}

// 공통 화면 함수
function GADataScreen(Object){
    try{
        CommonData = Object;
        if(browserInfo.indexOf('GA_iOS_WK') > -1 || browserInfo.indexOf('GA_Android') > -1){
            CommonData.type = "screen"
            Hybrid(CommonData);
        }
        else{
            dataLayer = [CommonData];
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','G-RC6LK6MGRQ'); //GTM 컨테이너 ID 설정
        }
    }catch(e){
        if(e.message.indexOf("dataLayer")){ console.log("GADataScreen 함수 ERROR");}
        else{ console.log("APP 코드 시 ERROR") }
    }
}

// 공통 이벤트 함수
function GA_Event(category, action, label){
    try{
        if(browserInfo.indexOf('GA_iOS_WK') > -1 || browserInfo.indexOf('GA_Android') > -1){
            var GAData = new Object();
            GAData.event_name = "click_event";
            GAData.category = category;
            GAData.action = action;
            GAData.label = label;
            GAData.type = "event";
            Hybrid(GAData);
        }else{
            dataLayer.push({
                "event" : "ga_event",
                "event_name" : "click_event",
                "category" : category,
                "action" : action,
                "label" : label,
            });
        }
    }catch(e){
        if(e.message.indexOf("dataLayer")){ console.log("GA_Event 함수 ERROR");}
        else{ console.log("APP 코드 시 ERROR") }
    }
}

function GA_Event2({ category, action, label, ...params}){
    try{
        if(browserInfo.indexOf('GA_iOS_WK') > -1 || browserInfo.indexOf('GA_Android') > -1){
            var GAData = new Object();
            GAData.event_name = params.eventName ? params.eventName : "click_event";
            GAData.category = category;
            GAData.action = action;
            GAData.label = label;
            GAData.type = "event";
            GAData = {...GAData, ...params};
            Hybrid(GAData);
        }else{
            dataLayer.push({
                "event" : "ga_event",
                "event_name" : "click_event",
                "category" : category,
                "action" : action,
                "label" : label,
            });
        }
    }catch(e){
        if(e.message.indexOf("dataLayer")){ console.log("GA_Event 함수 ERROR");}
        else{ console.log("APP 코드 시 ERROR") }
    }
}

function GA_Attr_Event(event){
    try{
        var ele = event.currentTarget
        var category = ele.getAttribute('ga-category');
        var action = ele.getAttribute('ga-action');
        var label = ele.getAttribute('ga-label');
        if (category == null) {category = undefined};
        if (action == null) {action = undefined};
        if (label == null) {label = undefined};

        if(browserInfo.indexOf('GA_iOS_WK') > -1 || browserInfo.indexOf('GA_Android') > -1){
            var GAData = new Object();
            GAData.event_name = "click_event";
            GAData.category = category;
            GAData.action = action;
            GAData.label = label;
            GAData.type = "event";
            Hybrid(GAData);
        }else{
            dataLayer.push({
                "event" : "ga_event",
                "event_name" : "click_event",
                "category" : category,
                "action" : action,
                "label" : label,
            });
        }

    }catch(e){
        if(e.message.indexOf("dataLayer")){ console.log("GA_Attr_Event 함수 ERROR");}
        else{ console.log("APP 코드 시 ERROR") }
    }
}


// 공통 전자상거래 함수
function EcommerceSet(E_step, Products, actionList, addDimension, addMetric){
    try{
        if(browserInfo.indexOf('GA_iOS_WK') > -1 || browserInfo.indexOf('GA_Android') > -1){
            var APPData = new Object();
            APPData.EcommerceStep  = E_step;
            APPData.type  = 'ecommerce';
            APPData.Products = Products;
            APPData.transaction = actionList;
            if(APPData.transaction.currencyCode === "" || APPData.transaction.currencyCode === undefined || APPData.transaction.currencyCode === null){
                APPData.transaction.currencyCode = "KRW"
            }
            APPData = Object.assign(APPData, addDimension, addMetric);
            Hybrid(APPData);
        }else{
            var EcommerceData = new Object();
            var Ecommerce = new Object();
            var EcommerceStep = E_step;
            EcommerceData = Object.assign({}, addDimension, addMetric);
            EcommerceData.event = 'ga_ecommerce';
            Ecommerce[EcommerceStep] = {actionField : {}, products : []}
            Ecommerce[EcommerceStep].products = Products;
            Ecommerce[EcommerceStep].actionField = actionList;
            if(Ecommerce.currencyCode === "" || Ecommerce.currencyCode === undefined || Ecommerce.currencyCode === null){
                Ecommerce.currencyCode = "KRW"
            }
            EcommerceData.ecommerce = Ecommerce;
            dataLayer.push(EcommerceData)
            dataLayer.push({
                'ecommerce' : undefined,
                'nonInteraction' : false,
                'category' : undefined,
                'action' : undefined,
                'label' : undefined,
                'metric1' : undefined,
                'metric2' : undefined,
                'metric3' : undefined
            });
        }
    }catch(e){
        if(e.message.indexOf("dataLayer")){ console.log("EcommerceSet 함수 ERROR");}
        else{ console.log("APP 코드 시 ERROR") }
    }
}

// 공통 가상페이지뷰 함수
function GA_Virtual(VirtualObject){
    try{
        var VirtualData = VirtualObject
        if(browserInfo.indexOf("GA_iOS_WK") > -1 || browserInfo.indexOf("GA_Android") > -1){
            VirtualData.type = 'screen';
            Hybrid(VirtualData);
        }else{
            VirtualData.event = 'ga_virtual';
            dataLayer.push(VirtualData);
        }
    }catch(e){
        if(e.message.indexOf("dataLayer")){ console.log("GA_Virtual 함수 ERROR");}
        else{ console.log("APP 코드 시 ERROR") }
    }
}