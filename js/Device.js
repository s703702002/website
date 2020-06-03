// 自動判斷Device 並分別引導到不同目標

var userAgent = navigator.userAgent.toLowerCase();
    var platform;
    if(userAgent == null || userAgent == ''){
        platform = 'WEB' ; 
    }else{
        if(userAgent.indexOf("android") != -1 ){ 
            platform = 'ANDROID';	// Aodroid裝置
            location.href = "market://details?id=com.cosmosbank.bank";
        }else if(userAgent.indexOf("ios") != -1 || userAgent.indexOf("iphone") != -1 || userAgent.indexOf("ipad") != -1){ 
            platform = 'IOS';	// iOs裝置
            location.href = "https://itunes.apple.com/tw/app/id561390351";
        }else if(userAgent.indexOf("windows phone") != -1 ){ 
            platform = 'WP';	// WindowsPhone裝置
            location.href = "index.html";
        }else{
            platform = 'WEB' ;	// 一般PC
            location.href = "index.html";
        }
    }