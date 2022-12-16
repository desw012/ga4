/**
 * GP GoogleAnlayticsBuilder
 * Support Hybrid App
 *
 * @param window {Window}
 */
(function(window, document, dataLayerName, containerId, prefixFnName){
    var isMobileApp = false;
    var isLoaded = false;

    var startGTMSnippetCode = function(){
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script',dataLayerName,containerId);
    }

    window[dataLayerName] = window[dataLayerName] || [];
    var dataLayer = window[dataLayerName];
    var fn_dataLayerPush = dataLayer.push;

    // dataLayer.push
    if(isMobileApp){
        dataLayer.push = (function (){
            var currDataObject = {};
            return function (...param){
                for( var obj of param)  currDataObject = {...currDataObject, ...obj}
                return fn_dataLayerPush.apply(dataLayer, param);
            }
        })()
    } else {
        if(dataLayer.length > 0){
            startGTMSnippetCode();
        }
        dataLayer.push = function (...param){
            var rtn = fn_dataLayerPush.apply(dataLayer, param);
            if(this.length === 0){
                startGTMSnippetCode();
            }
            return rtn;
        }
    }







    //window[dataLayerName].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
})(window, document, 'dataLayer', 'G-RC6LK6MGRQ', 'GA');