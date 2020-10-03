window.onload=function(){
    if (window.location.href.includes('nytimes')) {
        document.getElementById('site-content').style.position='unset';
        document.querySelector('div[class^=css]').style.position = 'unset';
        document.getElementById('gateway-content').style.display='none';
    } else if (window.location.href.includes('bloomberg')) {
        (function hideWall(){
            setTimeout(function(){
                try{
                    document.querySelector('div#graphics-paywall-overlay').setAttribute('data-status', 'hide')
                    document.querySelector('body[data-paywall-overlay-status]').setAttribute('data-paywall-overlay-status', 'hide')
                    document.querySelector('html[data-paywall-overlay-status]').setAttribute('data-paywall-overlay-status', 'hide')
                } catch {}
                hideWall()
        }, 1000)})();
    }
}