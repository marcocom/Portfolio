jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,o){return jQuery.easing[jQuery.easing.def](t,e,i,n,o)},easeInQuad:function(t,e,i,n,o){return n*(e/=o)*e+i},easeOutQuad:function(t,e,i,n,o){return-n*(e/=o)*(e-2)+i},easeInOutQuad:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,o){return n*(e/=o)*e*e+i},easeOutCubic:function(t,e,i,n,o){return n*((e=e/o-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,o){return n*(e/=o)*e*e*e+i},easeOutQuart:function(t,e,i,n,o){return-n*((e=e/o-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,o){return n*(e/=o)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,o){return n*((e=e/o-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,o){return-n*Math.cos(e/o*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,o){return n*Math.sin(e/o*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,o){return-n/2*(Math.cos(Math.PI*e/o)-1)+i},easeInExpo:function(t,e,i,n,o){return 0==e?i:n*Math.pow(2,10*(e/o-1))+i},easeOutExpo:function(t,e,i,n,o){return e==o?i+n:n*(-Math.pow(2,-10*e/o)+1)+i},easeInOutExpo:function(t,e,i,n,o){return 0==e?i:e==o?i+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(-Math.pow(2,-10*--e)+2)+i},easeInCirc:function(t,e,i,n,o){return-n*(Math.sqrt(1-(e/=o)*e)-1)+i},easeOutCirc:function(t,e,i,n,o){return n*Math.sqrt(1-(e=e/o-1)*e)+i},easeInOutCirc:function(t,e,i,n,o){return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,o){var r=1.70158,s=0,a=n
    if(0==e)return i
    if(1==(e/=o))return i+n
    if(s||(s=.3*o),a<Math.abs(n)){a=n
        var r=s/4}else var r=s/(2*Math.PI)*Math.asin(n/a)
    return-(a*Math.pow(2,10*(e-=1))*Math.sin(2*(e*o-r)*Math.PI/s))+i},easeOutElastic:function(t,e,i,n,o){var r=1.70158,s=0,a=n
    if(0==e)return i
    if(1==(e/=o))return i+n
    if(s||(s=.3*o),a<Math.abs(n)){a=n
        var r=s/4}else var r=s/(2*Math.PI)*Math.asin(n/a)
    return a*Math.pow(2,-10*e)*Math.sin(2*(e*o-r)*Math.PI/s)+n+i},easeInOutElastic:function(t,e,i,n,o){var r=1.70158,s=0,a=n
    if(0==e)return i
    if(2==(e/=o/2))return i+n
    if(s||(s=.3*o*1.5),a<Math.abs(n)){a=n
        var r=s/4}else var r=s/(2*Math.PI)*Math.asin(n/a)
    return 1>e?-.5*a*Math.pow(2,10*(e-=1))*Math.sin(2*(e*o-r)*Math.PI/s)+i:a*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*o-r)*Math.PI/s)*.5+n+i},easeInBack:function(t,e,i,n,o,r){return void 0==r&&(r=1.70158),n*(e/=o)*e*((r+1)*e-r)+i},easeOutBack:function(t,e,i,n,o,r){return void 0==r&&(r=1.70158),n*((e=e/o-1)*e*((r+1)*e+r)+1)+i},easeInOutBack:function(t,e,i,n,o,r){return void 0==r&&(r=1.70158),(e/=o/2)<1?n/2*e*e*(((r*=1.525)+1)*e-r)+i:n/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+i},easeInBounce:function(t,e,i,n,o){return n-jQuery.easing.easeOutBounce(t,o-e,0,n,o)+i},easeOutBounce:function(t,e,i,n,o){return(e/=o)<1/2.75?7.5625*n*e*e+i:2/2.75>e?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:2.5/2.75>e?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,o){return o/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,n,o)+i:.5*jQuery.easing.easeOutBounce(t,2*e-o,0,n,o)+.5*n+i}}),function(t,e,i){function n(t,i){this.wrapper="string"==typeof t?e.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0}
    for(var n in i)this.options[n]=i[n]
    this.translateZ=this.options.HWCompositing&&a.hasPerspective?" translateZ(0)":"",this.options.useTransition=a.hasTransition&&this.options.useTransition,this.options.useTransform=a.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY,this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?a.ease[this.options.bounceEasing]||a.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,3==this.options.probeType&&(this.options.useTransition=!1),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function o(t,i,n){var o=e.createElement("div"),r=e.createElement("div")
    return n===!0&&(o.style.cssText="position:absolute;z-index:9999",r.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),r.className="iScrollIndicator","h"==t?(n===!0&&(o.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",r.style.height="100%"),o.className="iScrollHorizontalScrollbar"):(n===!0&&(o.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",r.style.width="100%"),o.className="iScrollVerticalScrollbar"),o.style.cssText+=";overflow:hidden",i||(o.style.pointerEvents="none"),o.appendChild(r),o}function r(i,n){this.wrapper="string"==typeof n.el?e.querySelector(n.el):n.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=i,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0}
    for(var o in n)this.options[o]=n[o]
    this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(a.addEvent(this.indicator,"touchstart",this),a.addEvent(t,"touchend",this)),this.options.disablePointer||(a.addEvent(this.indicator,"MSPointerDown",this),a.addEvent(t,"MSPointerUp",this)),this.options.disableMouse||(a.addEvent(this.indicator,"mousedown",this),a.addEvent(t,"mouseup",this))),this.options.fade&&(this.wrapperStyle[a.style.transform]=this.scroller.translateZ,this.wrapperStyle[a.style.transitionDuration]=a.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")}var s=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)},a=function(){function n(t){return s===!1?!1:""===s?t:s+t.charAt(0).toUpperCase()+t.substr(1)}var o={},r=e.createElement("div").style,s=function(){for(var t,e=["t","webkitT","MozT","msT","OT"],i=0,n=e.length;n>i;i++)if(t=e[i]+"ransform",t in r)return e[i].substr(0,e[i].length-1)
    return!1}()
    o.getTime=Date.now||function(){return(new Date).getTime()},o.extend=function(t,e){for(var i in e)t[i]=e[i]},o.addEvent=function(t,e,i,n){t.addEventListener(e,i,!!n)},o.removeEvent=function(t,e,i,n){t.removeEventListener(e,i,!!n)},o.momentum=function(t,e,n,o,r,s){var a,l,c=t-e,h=i.abs(c)/n
        return s=void 0===s?6e-4:s,a=t+h*h/(2*s)*(0>c?-1:1),l=h/s,o>a?(a=r?o-r/2.5*(h/8):o,c=i.abs(a-t),l=c/h):a>0&&(a=r?r/2.5*(h/8):0,c=i.abs(t)+a,l=c/h),{destination:i.round(a),duration:l}}
    var a=n("transform")
    return o.extend(o,{hasTransform:a!==!1,hasPerspective:n("perspective")in r,hasTouch:"ontouchstart"in t,hasPointer:navigator.msPointerEnabled,hasTransition:n("transition")in r}),o.isBadAndroid=/Android /.test(t.navigator.appVersion)&&!/Chrome\/\d/.test(t.navigator.appVersion),o.extend(o.style={},{transform:a,transitionTimingFunction:n("transitionTimingFunction"),transitionDuration:n("transitionDuration"),transitionDelay:n("transitionDelay"),transformOrigin:n("transformOrigin")}),o.hasClass=function(t,e){var i=RegExp("(^|\\s)"+e+"(\\s|$)")
        return i.test(t.className)},o.addClass=function(t,e){if(!o.hasClass(t,e)){var i=t.className.split(" ")
        i.push(e),t.className=i.join(" ")}},o.removeClass=function(t,e){if(o.hasClass(t,e)){var i=RegExp("(^|\\s)"+e+"(\\s|$)","g")
        t.className=t.className.replace(i," ")}},o.offset=function(t){for(var e=-t.offsetLeft,i=-t.offsetTop;t=t.offsetParent;)e-=t.offsetLeft,i-=t.offsetTop
        return{left:e,top:i}},o.preventDefaultException=function(t,e){for(var i in e)if(e[i].test(t[i]))return!0
        return!1},o.extend(o.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),o.extend(o.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return i.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var e=4
        return(t-=1)*t*((e+1)*t+e)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var e=.22,n=.4
        return 0===t?0:1==t?1:n*i.pow(2,-10*t)*i.sin(2*(t-e/4)*i.PI/e)+1}}}),o.tap=function(t,i){var n=e.createEvent("Event")
        n.initEvent(i,!0,!0),n.pageX=t.pageX,n.pageY=t.pageY,t.target.dispatchEvent(n)},o.click=function(t){var i,n=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(n.tagName)||(i=e.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,t.view,1,n.screenX,n.screenY,n.clientX,n.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),i._constructed=!0,n.dispatchEvent(i))},o}()
    n.prototype={version:"5.1.1",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(!(1!=a.eventType[t.type]&&0!==t.button||!this.enabled||this.initiated&&a.eventType[t.type]!==this.initiated)){!this.options.preventDefault||a.isBadAndroid||a.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault()
        var e,n=t.touches?t.touches[0]:t
        this.initiated=a.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=a.getTime(),this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,e=this.getComputedPosition(),this._translate(i.round(e.x),i.round(e.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=n.pageX,this.pointY=n.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault()
        var e,n,o,r,s=t.touches?t.touches[0]:t,l=s.pageX-this.pointX,c=s.pageY-this.pointY,h=a.getTime()
        if(this.pointX=s.pageX,this.pointY=s.pageY,this.distX+=l,this.distY+=c,o=i.abs(this.distX),r=i.abs(this.distY),!(h-this.endTime>300&&10>o&&10>r)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=o>r+this.options.directionLockThreshold?"h":r>=o+this.options.directionLockThreshold?"v":"n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault()
        else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1)
            c=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault()
        else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1)
            l=0}l=this.hasHorizontalScroll?l:0,c=this.hasVerticalScroll?c:0,e=this.x+l,n=this.y+c,(e>0||e<this.maxScrollX)&&(e=this.options.bounce?this.x+l/3:e>0?0:this.maxScrollX),(n>0||n<this.maxScrollY)&&(n=this.options.bounce?this.y+c/3:n>0?0:this.maxScrollY),this.directionX=l>0?-1:0>l?1:0,this.directionY=c>0?-1:0>c?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(e,n),h-this.startTime>300&&(this.startTime=h,this.startX=this.x,this.startY=this.y,1==this.options.probeType&&this._execEvent("scroll")),this.options.probeType>1&&this._execEvent("scroll")}}},_end:function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&!a.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault()
        var e,n,o=(t.changedTouches?t.changedTouches[0]:t,a.getTime()-this.startTime),r=i.round(this.x),s=i.round(this.y),l=i.abs(r-this.startX),c=i.abs(s-this.startY),h=0,u=""
        if(this.isInTransition=0,this.initiated=0,this.endTime=a.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(r,s),!this.moved)return this.options.tap&&a.tap(t,this.options.tap),this.options.click&&a.click(t),void this._execEvent("scrollCancel")
            if(this._events.flick&&200>o&&100>l&&100>c)return void this._execEvent("flick")
            if(this.options.momentum&&300>o&&(e=this.hasHorizontalScroll?a.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:r,duration:0},n=this.hasVerticalScroll?a.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:s,duration:0},r=e.destination,s=n.destination,h=i.max(e.duration,n.duration),this.isInTransition=1),this.options.snap){var d=this._nearestSnap(r,s)
                this.currentPage=d,h=this.options.snapSpeed||i.max(i.max(i.min(i.abs(r-d.x),1e3),i.min(i.abs(s-d.y),1e3)),300),r=d.x,s=d.y,this.directionX=0,this.directionY=0,u=this.options.bounceEasing}return r!=this.x||s!=this.y?((r>0||r<this.maxScrollX||s>0||s<this.maxScrollY)&&(u=a.ease.quadratic),void this.scrollTo(r,s,h,u)):void this._execEvent("scrollEnd")}}},_resize:function(){var t=this
        clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var e=this.x,i=this.y
        return t=t||0,!this.hasHorizontalScroll||this.x>0?e=0:this.x<this.maxScrollX&&(e=this.maxScrollX),!this.hasVerticalScroll||this.y>0?i=0:this.y<this.maxScrollY&&(i=this.maxScrollY),e==this.x&&i==this.y?!1:(this.scrollTo(e,i,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight
        this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=a.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,e){this._events[t]||(this._events[t]=[]),this._events[t].push(e)},off:function(t,e){if(this._events[t]){var i=this._events[t].indexOf(e)
        i>-1&&this._events[t].splice(i,1)}},_execEvent:function(t){if(this._events[t]){var e=0,i=this._events[t].length
        if(i)for(;i>e;e++)this._events[t][e].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,e,i,n){t=this.x+t,e=this.y+e,i=i||0,this.scrollTo(t,e,i,n)},scrollTo:function(t,e,i,n){n=n||a.ease.circular,this.isInTransition=this.options.useTransition&&i>0,!i||this.options.useTransition&&n.style?(this._transitionTimingFunction(n.style),this._transitionTime(i),this._translate(t,e)):this._animate(t,e,i,n.fn)},scrollToElement:function(t,e,n,o,r){if(t=t.nodeType?t:this.scroller.querySelector(t)){var s=a.offset(t)
        s.left-=this.wrapperOffset.left,s.top-=this.wrapperOffset.top,n===!0&&(n=i.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),o===!0&&(o=i.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),s.left-=n||0,s.top-=o||0,s.left=s.left>0?0:s.left<this.maxScrollX?this.maxScrollX:s.left,s.top=s.top>0?0:s.top<this.maxScrollY?this.maxScrollY:s.top,e=void 0===e||null===e||"auto"===e?i.max(i.abs(this.x-s.left),i.abs(this.y-s.top)):e,this.scrollTo(s.left,s.top,e,r)}},_transitionTime:function(t){if(t=t||0,this.scrollerStyle[a.style.transitionDuration]=t+"ms",!t&&a.isBadAndroid&&(this.scrollerStyle[a.style.transitionDuration]="0.001s"),this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTime(t)},_transitionTimingFunction:function(t){if(this.scrollerStyle[a.style.transitionTimingFunction]=t,this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTimingFunction(t)},_translate:function(t,e){if(this.options.useTransform?this.scrollerStyle[a.style.transform]="translate("+t+"px,"+e+"px)"+this.translateZ:(t=i.round(t),e=i.round(e),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=e+"px"),this.x=t,this.y=e,this.indicators)for(var n=this.indicators.length;n--;)this.indicators[n].updatePosition()},_initEvents:function(e){var i=e?a.removeEvent:a.addEvent,n=this.options.bindToWrapper?this.wrapper:t
        i(t,"orientationchange",this),i(t,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(n,"mousemove",this),i(n,"mousecancel",this),i(n,"mouseup",this)),a.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,"MSPointerDown",this),i(n,"MSPointerMove",this),i(n,"MSPointerCancel",this),i(n,"MSPointerUp",this)),a.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(n,"touchmove",this),i(n,"touchcancel",this),i(n,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var e,i,n=t.getComputedStyle(this.scroller,null)
        return this.options.useTransform?(n=n[a.style.transform].split(")")[0].split(", "),e=+(n[12]||n[4]),i=+(n[13]||n[5])):(e=+n.left.replace(/[^-\d.]/g,""),i=+n.top.replace(/[^-\d.]/g,"")),{x:e,y:i}},_initIndicators:function(){function t(t){for(var e=a.indicators.length;e--;)t.call(a.indicators[e])}var e,i=this.options.interactiveScrollbars,n="string"!=typeof this.options.scrollbars,s=[],a=this
        this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(e={el:o("v",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:n,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(e.el),s.push(e)),this.options.scrollX&&(e={el:o("h",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:n,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(e.el),s.push(e))),this.options.indicators&&(s=s.concat(this.options.indicators))
        for(var l=s.length;l--;)this.indicators.push(new r(this,s[l]))
        this.options.fadeScrollbars&&(this.on("scrollEnd",function(){t(function(){this.fade()})}),this.on("scrollCancel",function(){t(function(){this.fade()})}),this.on("scrollStart",function(){t(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){t(function(){this.fade(1,!0)})})),this.on("refresh",function(){t(function(){this.refresh()})}),this.on("destroy",function(){t(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){a.addEvent(this.wrapper,"wheel",this),a.addEvent(this.wrapper,"mousewheel",this),a.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){a.removeEvent(this.wrapper,"wheel",this),a.removeEvent(this.wrapper,"mousewheel",this),a.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){t.preventDefault(),t.stopPropagation()
        var e,n,o,r,s=this
        if(void 0===this.wheelTimeout&&s._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){s._execEvent("scrollEnd"),s.wheelTimeout=void 0},400),"deltaX"in t)e=-t.deltaX,n=-t.deltaY
        else if("wheelDeltaX"in t)e=t.wheelDeltaX/120*this.options.mouseWheelSpeed,n=t.wheelDeltaY/120*this.options.mouseWheelSpeed
        else if("wheelDelta"in t)e=n=t.wheelDelta/120*this.options.mouseWheelSpeed
        else{if(!("detail"in t))return
            e=n=-t.detail/3*this.options.mouseWheelSpeed}if(e*=this.options.invertWheelDirection,n*=this.options.invertWheelDirection,this.hasVerticalScroll||(e=n,n=0),this.options.snap)return o=this.currentPage.pageX,r=this.currentPage.pageY,e>0?o--:0>e&&o++,n>0?r--:0>n&&r++,void this.goToPage(o,r)
        o=this.x+i.round(this.hasHorizontalScroll?e:0),r=this.y+i.round(this.hasVerticalScroll?n:0),o>0?o=0:o<this.maxScrollX&&(o=this.maxScrollX),r>0?r=0:r<this.maxScrollY&&(r=this.maxScrollY),this.scrollTo(o,r,0),this.options.probeType>1&&this._execEvent("scroll")}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,e,n,o,r,s,a=0,l=0,c=0,h=this.options.snapStepX||this.wrapperWidth,u=this.options.snapStepY||this.wrapperHeight
        if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(this.options.snap===!0)for(n=i.round(h/2),o=i.round(u/2);c>-this.scrollerWidth;){for(this.pages[a]=[],t=0,r=0;r>-this.scrollerHeight;)this.pages[a][t]={x:i.max(c,this.maxScrollX),y:i.max(r,this.maxScrollY),width:h,height:u,cx:c-n,cy:r-o},r-=u,t++
            c-=h,a++}else for(s=this.options.snap,t=s.length,e=-1;t>a;a++)(0===a||s[a].offsetLeft<=s[a-1].offsetLeft)&&(l=0,e++),this.pages[l]||(this.pages[l]=[]),c=i.max(-s[a].offsetLeft,this.maxScrollX),r=i.max(-s[a].offsetTop,this.maxScrollY),n=c-i.round(s[a].offsetWidth/2),o=r-i.round(s[a].offsetHeight/2),this.pages[l][e]={x:c,y:r,width:s[a].offsetWidth,height:s[a].offsetHeight,cx:n,cy:o},c>this.maxScrollX&&l++
            this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1===0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||i.max(i.max(i.min(i.abs(this.x-this.startX),1e3),i.min(i.abs(this.y-this.startY),1e3)),300)
        this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,e){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0}
        var n=0,o=this.pages.length,r=0
        if(i.abs(t-this.absStartX)<this.snapThresholdX&&i.abs(e-this.absStartY)<this.snapThresholdY)return this.currentPage
        for(t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),e>0?e=0:e<this.maxScrollY&&(e=this.maxScrollY);o>n;n++)if(t>=this.pages[n][0].cx){t=this.pages[n][0].x
            break}for(o=this.pages[n].length;o>r;r++)if(e>=this.pages[0][r].cy){e=this.pages[0][r].y
            break}return n==this.currentPage.pageX&&(n+=this.directionX,0>n?n=0:n>=this.pages.length&&(n=this.pages.length-1),t=this.pages[n][0].x),r==this.currentPage.pageY&&(r+=this.directionY,0>r?r=0:r>=this.pages[0].length&&(r=this.pages[0].length-1),e=this.pages[0][r].y),{x:t,y:e,pageX:n,pageY:r}},goToPage:function(t,e,n,o){o=o||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:0>t&&(t=0),e>=this.pages[t].length?e=this.pages[t].length-1:0>e&&(e=0)
        var r=this.pages[t][e].x,s=this.pages[t][e].y
        n=void 0===n?this.options.snapSpeed||i.max(i.max(i.min(i.abs(r-this.x),1e3),i.min(i.abs(s-this.y),1e3)),300):n,this.currentPage={x:r,y:s,pageX:t,pageY:e},this.scrollTo(r,s,n,o)},next:function(t,e){var i=this.currentPage.pageX,n=this.currentPage.pageY
        i++,i>=this.pages.length&&this.hasVerticalScroll&&(i=0,n++),this.goToPage(i,n,t,e)},prev:function(t,e){var i=this.currentPage.pageX,n=this.currentPage.pageY
        i--,0>i&&this.hasVerticalScroll&&(i=0,n--),this.goToPage(i,n,t,e)},_initKeys:function(){var e,i={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40}
        if("object"==typeof this.options.keyBindings)for(e in this.options.keyBindings)"string"==typeof this.options.keyBindings[e]&&(this.options.keyBindings[e]=this.options.keyBindings[e].toUpperCase().charCodeAt(0))
        else this.options.keyBindings={}
        for(e in i)this.options.keyBindings[e]=this.options.keyBindings[e]||i[e]
        a.addEvent(t,"keydown",this),this.on("destroy",function(){a.removeEvent(t,"keydown",this)})},_key:function(t){if(this.enabled){var e,n=this.options.snap,o=n?this.currentPage.pageX:this.x,r=n?this.currentPage.pageY:this.y,s=a.getTime(),l=this.keyTime||0,c=.25
        switch(this.options.useTransition&&this.isInTransition&&(e=this.getComputedPosition(),this._translate(i.round(e.x),i.round(e.y)),this.isInTransition=!1),this.keyAcceleration=200>s-l?i.min(this.keyAcceleration+c,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?o+=n?1:this.wrapperWidth:r+=n?1:this.wrapperHeight
            break
            case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?o-=n?1:this.wrapperWidth:r-=n?1:this.wrapperHeight
                break
            case this.options.keyBindings.end:o=n?this.pages.length-1:this.maxScrollX,r=n?this.pages[0].length-1:this.maxScrollY
                break
            case this.options.keyBindings.home:o=0,r=0
                break
            case this.options.keyBindings.left:o+=n?-1:5+this.keyAcceleration>>0
                break
            case this.options.keyBindings.up:r+=n?1:5+this.keyAcceleration>>0
                break
            case this.options.keyBindings.right:o-=n?-1:5+this.keyAcceleration>>0
                break
            case this.options.keyBindings.down:r-=n?1:5+this.keyAcceleration>>0
                break
            default:return}if(n)return void this.goToPage(o,r)
        o>0?(o=0,this.keyAcceleration=0):o<this.maxScrollX&&(o=this.maxScrollX,this.keyAcceleration=0),r>0?(r=0,this.keyAcceleration=0):r<this.maxScrollY&&(r=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(o,r,0),this.keyTime=s}},_animate:function(t,e,i,n){function o(){var d,p,f,m=a.getTime()
        return m>=u?(r.isAnimating=!1,r._translate(t,e),void(r.resetPosition(r.options.bounceTime)||r._execEvent("scrollEnd"))):(m=(m-h)/i,f=n(m),d=(t-l)*f+l,p=(e-c)*f+c,r._translate(d,p),r.isAnimating&&s(o),void(3==r.options.probeType&&r._execEvent("scroll")))}var r=this,l=this.x,c=this.y,h=a.getTime(),u=h+i
        this.isAnimating=!0,o()},handleEvent:function(t){switch(t.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(t)
        break
        case"touchmove":case"MSPointerMove":case"mousemove":this._move(t)
            break
        case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(t)
            break
        case"orientationchange":case"resize":this._resize()
            break
        case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t)
            break
        case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t)
            break
        case"keydown":this._key(t)
            break
        case"click":t._constructed||(t.preventDefault(),t.stopPropagation())}}},r.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(t)
        break
        case"touchmove":case"MSPointerMove":case"mousemove":this._move(t)
            break
        case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.interactive&&(a.removeEvent(this.indicator,"touchstart",this),a.removeEvent(this.indicator,"MSPointerDown",this),a.removeEvent(this.indicator,"mousedown",this),a.removeEvent(t,"touchmove",this),a.removeEvent(t,"MSPointerMove",this),a.removeEvent(t,"mousemove",this),a.removeEvent(t,"touchend",this),a.removeEvent(t,"MSPointerUp",this),a.removeEvent(t,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(e){var i=e.touches?e.touches[0]:e
        e.preventDefault(),e.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=a.getTime(),this.options.disableTouch||a.addEvent(t,"touchmove",this),this.options.disablePointer||a.addEvent(t,"MSPointerMove",this),this.options.disableMouse||a.addEvent(t,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var e,i,n,o,r=t.touches?t.touches[0]:t,s=a.getTime()
        this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,e=r.pageX-this.lastPointX,this.lastPointX=r.pageX,i=r.pageY-this.lastPointY,this.lastPointY=r.pageY,n=this.x+e,o=this.y+i,this._pos(n,o),1==this.scroller.options.probeType&&s-this.startTime>300?(this.startTime=s,this.scroller._execEvent("scroll")):this.scroller.options.probeType>1&&this.scroller._execEvent("scroll"),t.preventDefault(),t.stopPropagation()},_end:function(e){if(this.initiated){if(this.initiated=!1,e.preventDefault(),e.stopPropagation(),a.removeEvent(t,"touchmove",this),a.removeEvent(t,"MSPointerMove",this),a.removeEvent(t,"mousemove",this),this.scroller.options.snap){var n=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),o=this.options.snapSpeed||i.max(i.max(i.min(i.abs(this.scroller.x-n.x),1e3),i.min(i.abs(this.scroller.y-n.y),1e3)),300);(this.scroller.x!=n.x||this.scroller.y!=n.y)&&(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=n,this.scroller.scrollTo(n.x,n.y,o,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0,this.indicatorStyle[a.style.transitionDuration]=t+"ms",!t&&a.isBadAndroid&&(this.indicatorStyle[a.style.transitionDuration]="0.001s")},transitionTimingFunction:function(t){this.indicatorStyle[a.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.indicatorStyle.display=this.options.listenX&&!this.options.listenY?this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.scroller.hasVerticalScroll?"block":"none":this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(a.addClass(this.wrapper,"iScrollBothScrollbars"),a.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(a.removeClass(this.wrapper,"iScrollBothScrollbars"),a.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"))
        this.wrapper.offsetHeight
        this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=i.max(i.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=-this.indicatorWidth+8,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=i.max(i.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=-this.indicatorHeight+8,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&i.round(this.sizeRatioX*this.scroller.x)||0,e=this.options.listenY&&i.round(this.sizeRatioY*this.scroller.y)||0
        this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=i.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=i.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",t=this.maxPosX+this.indicatorWidth-this.width):t=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),e<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=i.max(this.indicatorHeight+3*e,8),this.indicatorStyle.height=this.height+"px"),e=this.minBoundaryY):e>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=i.max(this.indicatorHeight-3*(e-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",e=this.maxPosY+this.indicatorHeight-this.height):e=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=e,this.scroller.options.useTransform?this.indicatorStyle[a.style.transform]="translate("+t+"px,"+e+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=e+"px")},_pos:function(t,e){0>t?t=0:t>this.maxPosX&&(t=this.maxPosX),0>e?e=0:e>this.maxPosY&&(e=this.maxPosY),t=this.options.listenX?i.round(t/this.sizeRatioX):this.scroller.x,e=this.options.listenY?i.round(e/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,e)},fade:function(t,e){if(!e||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null
        var i=t?250:500,n=t?0:300
        t=t?"1":"0",this.wrapperStyle[a.style.transitionDuration]=i+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),n)}}},n.utils=a,"undefined"!=typeof module&&module.exports?module.exports=n:t.IScroll=n}(window,document,Math),function(t,e){"use strict"
    function i(){n.READY||(n.event.determineEventTypes(),n.utils.each(n.gestures,function(t){n.detection.register(t)}),n.event.onTouch(n.DOCUMENT,n.EVENT_MOVE,n.detection.detect),n.event.onTouch(n.DOCUMENT,n.EVENT_END,n.detection.detect),n.READY=!0)}var n=function(t,e){return new n.Instance(t,e||{})}
    n.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},n.HAS_POINTEREVENTS=t.navigator.pointerEnabled||t.navigator.msPointerEnabled,n.HAS_TOUCHEVENTS="ontouchstart"in t,n.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,n.NO_MOUSEEVENTS=n.HAS_TOUCHEVENTS&&t.navigator.userAgent.match(n.MOBILE_REGEX),n.EVENT_TYPES={},n.DIRECTION_DOWN="down",n.DIRECTION_LEFT="left",n.DIRECTION_UP="up",n.DIRECTION_RIGHT="right",n.POINTER_MOUSE="mouse",n.POINTER_TOUCH="touch",n.POINTER_PEN="pen",n.EVENT_START="start",n.EVENT_MOVE="move",n.EVENT_END="end",n.DOCUMENT=t.document,n.plugins=n.plugins||{},n.gestures=n.gestures||{},n.READY=!1,n.utils={extend:function(t,i,n){for(var o in i)t[o]!==e&&n||(t[o]=i[o])
        return t},each:function(t,i,n){var o,r
        if("forEach"in t)t.forEach(i,n)
        else if(t.length!==e){for(o=0,r=t.length;r>o;o++)if(i.call(n,t[o],o,t)===!1)return}else for(o in t)if(t.hasOwnProperty(o)&&i.call(n,t[o],o,t)===!1)return},hasParent:function(t,e){for(;t;){if(t==e)return!0
        t=t.parentNode}return!1},getCenter:function(t){var i=[],o=[]
        return n.utils.each(t,function(t){i.push(e!==t.clientX?t.clientX:t.pageX),o.push(e!==t.clientY?t.clientY:t.pageY)}),{pageX:(Math.min.apply(Math,i)+Math.max.apply(Math,i))/2,pageY:(Math.min.apply(Math,o)+Math.max.apply(Math,o))/2}},getVelocity:function(t,e,i){return{x:Math.abs(e/t)||0,y:Math.abs(i/t)||0}},getAngle:function(t,e){var i=e.pageY-t.pageY,n=e.pageX-t.pageX
        return 180*Math.atan2(i,n)/Math.PI},getDirection:function(t,e){var i=Math.abs(t.pageX-e.pageX),o=Math.abs(t.pageY-e.pageY)
        return i>=o?t.pageX-e.pageX>0?n.DIRECTION_LEFT:n.DIRECTION_RIGHT:t.pageY-e.pageY>0?n.DIRECTION_UP:n.DIRECTION_DOWN},getDistance:function(t,e){var i=e.pageX-t.pageX,n=e.pageY-t.pageY
        return Math.sqrt(i*i+n*n)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==n.DIRECTION_UP||t==n.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){e&&t&&t.style&&(n.utils.each(["webkit","khtml","moz","Moz","ms","o",""],function(i){n.utils.each(e,function(e,n){i&&(n=i+n.substring(0,1).toUpperCase()+n.substring(1)),n in t.style&&(t.style[n]=e)})}),"none"==e.userSelect&&(t.onselectstart=function(){return!1}),"none"==e.userDrag&&(t.ondragstart=function(){return!1}))}},n.Instance=function(t,e){var o=this
        return i(),this.element=t,this.enabled=!0,this.options=n.utils.extend(n.utils.extend({},n.defaults),e||{}),this.options.stop_browser_behavior&&n.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),n.event.onTouch(t,n.EVENT_START,function(t){o.enabled&&n.detection.startDetect(o,t)}),this},n.Instance.prototype={on:function(t,e){var i=t.split(" ")
        return n.utils.each(i,function(t){this.element.addEventListener(t,e,!1)},this),this},off:function(t,e){var i=t.split(" ")
        return n.utils.each(i,function(t){this.element.removeEventListener(t,e,!1)},this),this},trigger:function(t,e){e||(e={})
        var i=n.DOCUMENT.createEvent("Event")
        i.initEvent(t,!0,!0),i.gesture=e
        var o=this.element
        return n.utils.hasParent(e.target,o)&&(o=e.target),o.dispatchEvent(i),this},enable:function(t){return this.enabled=t,this}}
    var o=null,r=!1,s=!1
    n.event={bindDom:function(t,e,i){var o=e.split(" ")
        n.utils.each(o,function(e){t.addEventListener(e,i,!1)})},onTouch:function(t,e,i){var a=this
        this.bindDom(t,n.EVENT_TYPES[e],function(l){var c=l.type.toLowerCase()
            if(!c.match(/mouse/)||!s){c.match(/touch/)||c.match(/pointerdown/)||c.match(/mouse/)&&1===l.which?r=!0:c.match(/mouse/)&&!l.which&&(r=!1),c.match(/touch|pointer/)&&(s=!0)
                var h=0
                r&&(n.HAS_POINTEREVENTS&&e!=n.EVENT_END?h=n.PointerEvent.updatePointer(e,l):c.match(/touch/)?h=l.touches.length:s||(h=c.match(/up/)?0:1),h>0&&e==n.EVENT_END?e=n.EVENT_MOVE:h||(e=n.EVENT_END),(h||null===o)&&(o=l),i.call(n.detection,a.collectEventData(t,e,a.getTouchList(o,e),l)),n.HAS_POINTEREVENTS&&e==n.EVENT_END&&(h=n.PointerEvent.updatePointer(e,l))),h||(o=null,r=!1,s=!1,n.PointerEvent.reset())}})},determineEventTypes:function(){var t
        t=n.HAS_POINTEREVENTS?n.PointerEvent.getEvents():n.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],n.EVENT_TYPES[n.EVENT_START]=t[0],n.EVENT_TYPES[n.EVENT_MOVE]=t[1],n.EVENT_TYPES[n.EVENT_END]=t[2]},getTouchList:function(t){return n.HAS_POINTEREVENTS?n.PointerEvent.getTouchList():t.touches?t.touches:(t.identifier=1,[t])},collectEventData:function(t,e,i,o){var r=n.POINTER_TOUCH
        return(o.type.match(/mouse/)||n.PointerEvent.matchType(n.POINTER_MOUSE,o))&&(r=n.POINTER_MOUSE),{center:n.utils.getCenter(i),timeStamp:(new Date).getTime(),target:o.target,touches:i,eventType:e,pointerType:r,srcEvent:o,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return n.detection.stopDetect()}}}},n.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[]
        return n.utils.each(t.pointers,function(t){e.push(t)}),e},updatePointer:function(t,e){return t==n.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1
        var i=e.pointerType,o={}
        return o[n.POINTER_MOUSE]=i===e.MSPOINTER_TYPE_MOUSE||i===n.POINTER_MOUSE,o[n.POINTER_TOUCH]=i===e.MSPOINTER_TYPE_TOUCH||i===n.POINTER_TOUCH,o[n.POINTER_PEN]=i===e.MSPOINTER_TYPE_PEN||i===n.POINTER_PEN,o[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},n.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:n.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t)
        var i=this.current.inst.options
        return n.utils.each(this.gestures,function(n){return this.stopped||i[n.name]===!1||n.handler.call(n,t,this.current.inst)!==!1?e:(this.stopDetect(),!1)},this),this.current&&(this.current.lastEvent=t),t.eventType==n.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=n.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent
        !e||t.touches.length==e.touches.length&&t.touches!==e.touches||(e.touches=[],n.utils.each(t.touches,function(t){e.touches.push(n.utils.extend({},t))}))
        var i,o,r=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,l=n.utils.getVelocity(r,s,a)
        return"end"===t.eventType?(i=this.current.lastEvent&&this.current.lastEvent.interimAngle,o=this.current.lastEvent&&this.current.lastEvent.interimDirection):(i=this.current.lastEvent&&n.utils.getAngle(this.current.lastEvent.center,t.center),o=this.current.lastEvent&&n.utils.getDirection(this.current.lastEvent.center,t.center)),n.utils.extend(t,{deltaTime:r,deltaX:s,deltaY:a,velocityX:l.x,velocityY:l.y,distance:n.utils.getDistance(e.center,t.center),angle:n.utils.getAngle(e.center,t.center),interimAngle:i,direction:n.utils.getDirection(e.center,t.center),interimDirection:o,scale:n.utils.getScale(e.touches,t.touches),rotation:n.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var i=t.defaults||{}
        return i[t.name]===e&&(i[t.name]=!0),n.utils.extend(n.defaults,i,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},n.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,i){if(n.detection.current.name!=this.name&&this.triggered)return i.trigger(this.name+"end",t),this.triggered=!1,e
        if(!(i.options.drag_max_touches>0&&t.touches.length>i.options.drag_max_touches))switch(t.eventType){case n.EVENT_START:this.triggered=!1
            break
            case n.EVENT_MOVE:if(t.distance<i.options.drag_min_distance&&n.detection.current.name!=this.name)return
                if(n.detection.current.name!=this.name&&(n.detection.current.name=this.name,i.options.correct_for_drag_min_distance&&t.distance>0)){var o=Math.abs(i.options.drag_min_distance/t.distance)
                    n.detection.current.startEvent.center.pageX+=t.deltaX*o,n.detection.current.startEvent.center.pageY+=t.deltaY*o,t=n.detection.extendEventData(t)}(n.detection.current.lastEvent.drag_locked_to_axis||i.options.drag_lock_to_axis&&i.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0)
                var r=n.detection.current.lastEvent.direction
                t.drag_locked_to_axis&&r!==t.direction&&(t.direction=n.utils.isVertical(r)?t.deltaY<0?n.DIRECTION_UP:n.DIRECTION_DOWN:t.deltaX<0?n.DIRECTION_LEFT:n.DIRECTION_RIGHT),this.triggered||(i.trigger(this.name+"start",t),this.triggered=!0),i.trigger(this.name,t),i.trigger(this.name+t.direction,t),(i.options.drag_block_vertical&&n.utils.isVertical(t.direction)||i.options.drag_block_horizontal&&!n.utils.isVertical(t.direction))&&t.preventDefault()
                break
            case n.EVENT_END:this.triggered&&i.trigger(this.name+"end",t),this.triggered=!1}}},n.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case n.EVENT_START:clearTimeout(this.timer),n.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==n.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout)
        break
        case n.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer)
            break
        case n.EVENT_END:clearTimeout(this.timer)}}},n.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==n.EVENT_END&&e.trigger(this.name,t)}},n.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_min_touches:1,swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==n.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length<e.options.swipe_min_touches&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},n.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==n.EVENT_END&&"touchcancel"!=t.srcEvent.type){var i=n.detection.previous,o=!1
        if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return
        i&&"tap"==i.name&&t.timeStamp-i.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),o=!0),(!o||e.options.tap_always)&&(n.detection.current.name="tap",e.trigger(n.detection.current.name,t))}}},n.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,i){return i.options.prevent_mouseevents&&t.pointerType==n.POINTER_MOUSE?(t.stopDetect(),e):(i.options.prevent_default&&t.preventDefault(),t.eventType==n.EVENT_START&&i.trigger(this.name,t),e)}},n.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,i){if(n.detection.current.name!=this.name&&this.triggered)return i.trigger(this.name+"end",t),this.triggered=!1,e
        if(!(t.touches.length<2))switch(i.options.transform_always_block&&t.preventDefault(),t.eventType){case n.EVENT_START:this.triggered=!1
            break
            case n.EVENT_MOVE:var o=Math.abs(1-t.scale),r=Math.abs(t.rotation)
                if(o<i.options.transform_min_scale&&r<i.options.transform_min_rotation)return
                n.detection.current.name=this.name,this.triggered||(i.trigger(this.name+"start",t),this.triggered=!0),i.trigger(this.name,t),r>i.options.transform_min_rotation&&i.trigger("rotate",t),o>i.options.transform_min_scale&&(i.trigger("pinch",t),i.trigger("pinch"+(t.scale<1?"in":"out"),t))
                break
            case n.EVENT_END:this.triggered&&i.trigger(this.name+"end",t),this.triggered=!1}}},"function"==typeof define&&define.amd?define(function(){return n}):"object"==typeof module&&module.exports?module.exports=n:t.Hammer=n}(window),function(t,e){"use strict"
    function i(t,i){t.event.bindDom=function(t,n,o){i(t).on(n,function(t){var i=t.originalEvent||t
        i.pageX===e&&(i.pageX=t.pageX,i.pageY=t.pageY),i.target||(i.target=t.target),i.which===e&&(i.which=i.button),i.preventDefault||(i.preventDefault=t.preventDefault),i.stopPropagation||(i.stopPropagation=t.stopPropagation),o.call(this,i)})},t.Instance.prototype.on=function(t,e){return i(this.element).on(t,e)},t.Instance.prototype.off=function(t,e){return i(this.element).off(t,e)},t.Instance.prototype.trigger=function(t,e){var n=i(this.element)
        return n.has(e.target).length&&(n=i(e.target)),n.trigger({type:t,gesture:e})},i.fn.hammer=function(e){return this.each(function(){var n=i(this),o=n.data("hammer")
        o?o&&e&&t.utils.extend(o.options,e):n.data("hammer",new t(this,e||{}))})}}"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(["hammerjs","jquery"],i):i(t.Hammer,t.jQuery||t.Zepto)}(this),function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,l=this.length;l>a;a++){var c=this[a],h=t.data(c,e)
    if(h)if(t.isFunction(h[o])&&"_"!==o.charAt(0)){var u=h[o].apply(h,s)
        if(void 0!==u)return u}else r("no such method '"+o+"' for "+e+" instance")
    else r("cannot call methods on "+e+" prior to initialization; attempted to call '"+o+"'")}return this}return this.each(function(){var n=t.data(this,e)
    n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)}
    return t.bridget=function(t,e){i(e),o(t,e)},t.bridget}}var n=Array.prototype.slice
    "function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)}(window),function(t){function e(e){var i=t.event
    return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,n=function(){}
    i.addEventListener?n=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(n=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t)
        n.handleEvent.call(n,i)}:function(){var i=e(t)
        n.call(t,i)},t.attachEvent("on"+i,t[i+n])})
    var o=function(){}
    i.removeEventListener?o=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(o=function(t,e,i){t.detachEvent("on"+e,t[e+i])
        try{delete t[e+i]}catch(n){t[e+i]=void 0}})
    var r={bind:n,unbind:o}
    "function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==o.readyState
    if(!e.isReady&&!i){e.isReady=!0
        for(var n=0,s=r.length;s>n;n++){var a=r[n]
            a()}}}function n(n){return n.bind(o,"DOMContentLoaded",i),n.bind(o,"readystatechange",i),n.bind(t,"load",i),e}var o=t.document,r=[]
    e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],n)):t.docReady=n(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i
    return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype,o=this,r=o.EventEmitter
    n.getListeners=function(t){var e,i,n=this._getEvents()
        if(t instanceof RegExp){e={}
            for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[])
        return e},n.flattenListeners=function(t){var e,i=[]
        for(e=0;e<t.length;e+=1)i.push(t[e].listener)
        return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t)
        return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i
        for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1})
        return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e])
        return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t)
        for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1))
        return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners
        if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n])
        else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o))
        return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents()
        if("string"===i)delete n[t]
        else if(t instanceof RegExp)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e]
        else delete this._events
        return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t)
        for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener)
        return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1)
        return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return o.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof n[t])return t
    t=t.charAt(0).toUpperCase()+t.slice(1)
    for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style
    "function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e)
    return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var n=s[e]
    t[n]=0}return t}function n(t){function n(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var n=r(t)
    if("none"===n.display)return i()
    var o={}
    o.width=t.offsetWidth,o.height=t.offsetHeight
    for(var h=o.isBorderBox=!(!c||!n[c]||"border-box"!==n[c]),u=0,d=s.length;d>u;u++){var p=s[u],f=n[p]
        f=a(t,f)
        var m=parseFloat(f)
        o[p]=isNaN(m)?0:m}var g=o.paddingLeft+o.paddingRight,v=o.paddingTop+o.paddingBottom,y=o.marginLeft+o.marginRight,_=o.marginTop+o.marginBottom,E=o.borderLeftWidth+o.borderRightWidth,b=o.borderTopWidth+o.borderBottomWidth,x=h&&l,w=e(n.width)
    w!==!1&&(o.width=w+(x?0:g+E))
    var T=e(n.height)
    return T!==!1&&(o.height=T+(x?0:v+b)),o.innerWidth=o.width-(g+E),o.innerHeight=o.height-(v+b),o.outerWidth=o.width+y,o.outerHeight=o.height+_,o}}function a(t,e){if(o||-1===e.indexOf("%"))return e
    var i=t.style,n=i.left,r=t.runtimeStyle,s=r&&r.left
    return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=n,s&&(r.left=s),e}var l,c=t("boxSizing")
    return function(){if(c){var t=document.createElement("div")
        t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[c]="border-box"
        var i=document.body||document.documentElement
        i.appendChild(t)
        var n=r(t)
        l=200===e(n.width),i.removeChild(t)}}(),n}var o=t.getComputedStyle,r=o?function(t){return o(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"]
    "function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],n):"object"==typeof exports?module.exports=n(require("get-style-property")):t.getSize=n(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function n(t){if(!t.parentNode){var e=document.createDocumentFragment()
    e.appendChild(t)}}function o(t,e){n(t)
    for(var i=t.parentNode.querySelectorAll(e),o=0,r=i.length;r>o;o++)if(i[o]===t)return!0
    return!1}function r(t,e){return n(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector"
    for(var t=["webkit","moz","ms","o"],i=0,n=t.length;n>i;i++){var o=t[i],r=o+"MatchesSelector"
        if(e[r])return r}}()
    if(a){var l=document.createElement("div"),c=i(l,"div")
        s=c?i:r}else s=o
    "function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i]
    return t}function i(t){for(var e in t)return!1
    return e=null,!0}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(t,o,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var l=r("transition"),c=r("transform"),h=l&&c,u=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[l],p=["transform","transition","transitionDuration","transitionProperty"],f=function(){for(var t={},e=0,i=p.length;i>e;e++){var n=p[e],o=r(n)
    o&&o!==n&&(t[n]=o)}return t}()
    e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type
        this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=o(this.element)},a.prototype.css=function(t){var e=this.element.style
        for(var i in t){var n=f[i]||i
            e[n]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,n=e.isOriginTop,o=parseInt(t[i?"left":"right"],10),r=parseInt(t[n?"top":"bottom"],10)
        o=isNaN(o)?0:o,r=isNaN(r)?0:r
        var a=this.layout.size
        o-=i?a.paddingLeft:a.paddingRight,r-=n?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={}
        e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])}
    var m=u?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"}
    a.prototype._transitionTo=function(t,e){this.getPosition()
        var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y
        if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition()
        var a=t-i,l=e-n,c={},h=this.layout.options
        a=h.isOriginLeft?a:-a,l=h.isOriginTop?l:-l,c.transform=m(a,l),this.transition({to:c,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to)
        for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t)
        var e=this._transn
        for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i]
        for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0)
        if(t.from){this.css(t.from)
            var n=this.element.offsetHeight
            n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}
    var g=c&&n(c)+",opacity"
    a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:g,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[l?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)}
    var v={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"}
    a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=v[t.propertyName]||t.propertyName
        if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n]
            o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={}
        for(var i in t)e[i]=""
        this.css(e)}
    var y={transitionProperty:"",transitionDuration:""}
    return a.prototype.removeTransitionStyles=function(){this.css(y)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!l||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem()
        var t=this
        this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""})
        var t=this.layout.options
        this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""})
        var t=this.layout.options
        this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=document.defaultView,s=r&&r.getComputedStyle?function(t){return r.getComputedStyle(t,null)}:function(t){return t.currentStyle}
    "function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],o):(t.Outlayer={},t.Outlayer.Item=o(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i]
    return t}function i(t){return"[object Array]"===u.call(t)}function n(t){var e=[]
    if(i(t))e=t
    else if(t&&"number"==typeof t.length)for(var n=0,o=t.length;o>n;n++)e.push(t[n])
    else e.push(t)
    return e}function o(t,e){var i=p(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,u,p,f,m){function g(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return void(l&&l.error("Bad "+this.constructor.namespace+" element: "+t))
    this.element=t,this.options=e({},this.options),this.option(i)
    var n=++y
    this.element.outlayerGUID=n,_[n]=this,this._create(),this.options.isInitLayout&&this.layout()}function v(t,i){t.prototype[i]=e({},g.prototype[i])}var y=0,_={}
    return g.namespace="outlayer",g.Item=m,g.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(g.prototype,u.prototype),g.prototype.option=function(t){e(this.options,t)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new i(s,this)
        n.push(a)}return n},g.prototype._filterFindItemElements=function(t){t=n(t)
        for(var e=this.options.itemSelector,i=[],o=0,r=t.length;r>o;o++){var s=t[o]
            if(d(s))if(e){f(s,e)&&i.push(s)
                for(var a=s.querySelectorAll(e),l=0,c=a.length;c>l;l++)i.push(a[l])}else i.push(s)}return i},g.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element)
        return t},g.prototype.layout=function(){this._resetLayout(),this._manageStamps()
        var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited
        this.layoutItems(this.items,t),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=p(this.element)},g.prototype._getMeasurement=function(t,e){var i,n=this.options[t]
        n?("string"==typeof n?i=this.element.querySelector(n):d(n)&&(i=n),this[t]=i?p(i)[e]:n):this[t]=0},g.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},g.prototype._getItemsForLayout=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i]
        o.isIgnored||e.push(o)}return e},g.prototype._layoutItems=function(t,e){function i(){n.emitEvent("layoutComplete",[n,t])}var n=this
        if(!t||!t.length)return void i()
        this._itemsOn(t,"layout",i)
        for(var o=[],r=0,s=t.length;s>r;r++){var a=t[r],l=this._getItemLayoutPosition(a)
            l.item=a,l.isInstant=e||a.isLayoutInstant,o.push(l)}this._processLayoutQueue(o)},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e]
        this._positionItem(n.item,n.x,n.y,n.isInstant)}},g.prototype._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},g.prototype._postLayout=function(){var t=this._getContainerSize()
        t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))},g.prototype._getContainerSize=h,g.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size
        i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},g.prototype._itemsOn=function(t,e,i){function n(){return o++,o===r&&i.call(s),!0}for(var o=0,r=t.length,s=this,a=0,l=t.length;l>a;a++){var c=t[a]
        c.on(e,n)}},g.prototype.ignore=function(t){var e=this.getItem(t)
        e&&(e.isIgnored=!0)},g.prototype.unignore=function(t){var e=this.getItem(t)
        e&&delete e.isIgnored},g.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t)
        for(var e=0,i=t.length;i>e;e++){var n=t[e]
            this.ignore(n)}}},g.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var n=t[e]
        o(n,this.stamps),this.unignore(n)}},g.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n(t)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect()
        for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t]
            this._manageStamp(i)}}},g.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size
        this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},g.prototype._manageStamp=h,g.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=p(t),o={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom}
        return o},g.prototype.handleEvent=function(t){var e="on"+t.type
        this[e]&&this[e](t)},g.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){i.unbind(t,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout)
        var e=this
        this.resizeTimeout=setTimeout(t,100)},g.prototype.resize=function(){var t=p(this.element),e=this.size&&t
        e&&t.innerWidth===this.size.innerWidth||this.layout()},g.prototype.addItems=function(t){var e=this._itemize(t)
        return e.length&&(this.items=this.items.concat(e)),e},g.prototype.appended=function(t){var e=this.addItems(t)
        e.length&&(this.layoutItems(e,!0),this.reveal(e))},g.prototype.prepended=function(t){var e=this._itemize(t)
        if(e.length){var i=this.items.slice(0)
            this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},g.prototype.reveal=function(t){var e=t&&t.length
        if(e)for(var i=0;e>i;i++){var n=t[i]
            n.reveal()}},g.prototype.hide=function(t){var e=t&&t.length
        if(e)for(var i=0;e>i;i++){var n=t[i]
            n.hide()}},g.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e]
        if(n.element===t)return n}},g.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],r=this.getItem(o)
        r&&e.push(r)}return e}},g.prototype.remove=function(t){t=n(t)
        var e=this.getItems(t)
        if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])})
            for(var i=0,r=e.length;r>i;i++){var s=e[i]
                s.remove(),o(s,this.items)}}},g.prototype.destroy=function(){var t=this.element.style
        t.height="",t.position="",t.width=""
        for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e]
            n.destroy()}this.unbindResize(),delete this.element.outlayerGUID,c&&c.removeData(this.element,this.constructor.namespace)},g.data=function(t){var e=t&&t.outlayerGUID
        return e&&_[e]},g.create=function(t,i){function n(){g.apply(this,arguments)}return Object.create?n.prototype=Object.create(g.prototype):e(n.prototype,g.prototype),n.prototype.constructor=n,v(n,"options"),e(n.prototype.options,i),n.namespace=t,n.data=g.data,n.Item=function(){m.apply(this,arguments)},n.Item.prototype=new m,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),o="data-"+e+"-options",s=0,h=i.length;h>s;s++){var u,d=i[s],p=d.getAttribute(o)
        try{u=p&&JSON.parse(p)}catch(f){l&&l.error("Error parsing "+o+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+f)
            continue}var m=new n(d,u)
        c&&c.data(d,t,m)}}),c&&c.bridget&&c.bridget(t,n),n},g.Item=m,g}var a=t.document,l=t.console,c=t.jQuery,h=function(){},u=Object.prototype.toString,d="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},p=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i
    return-1}
    "function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t,e){var n=t.create("masonry")
    return n.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns()
        var t=this.cols
        for(this.colYs=[];t--;)this.colYs.push(0)
        this.maxY=0},n.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element
        this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},n.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t)
        this.containerWidth=i&&i.innerWidth},n.prototype._getItemLayoutPosition=function(t){t.getSize()
        var e=t.size.outerWidth%this.columnWidth,n=e&&1>e?"round":"ceil",o=Math[n](t.size.outerWidth/this.columnWidth)
        o=Math.min(o,this.cols)
        for(var r=this._getColGroup(o),s=Math.min.apply(Math,r),a=i(r,s),l={x:this.columnWidth*a,y:s},c=s+t.size.outerHeight,h=this.cols+1-r.length,u=0;h>u;u++)this.colYs[a+u]=c
        return l},n.prototype._getColGroup=function(t){if(2>t)return this.colYs
        for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t)
            e[n]=Math.max.apply(Math,o)}return e},n.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this.options.isOriginLeft?n.left:n.right,r=o+i.outerWidth,s=Math.floor(o/this.columnWidth)
        s=Math.max(0,s)
        var a=Math.floor(r/this.columnWidth)
        a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a)
        for(var l=(this.options.isOriginTop?n.top:n.bottom)+i.outerHeight,c=s;a>=c;c++)this.colYs[c]=Math.max(l,this.colYs[c])},n.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs)
        var t={height:this.maxY}
        return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},n.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++
        return(this.cols-t)*this.columnWidth-this.gutter},n.prototype.resize=function(){var t=this.containerWidth
        this.getContainerWidth(),t!==this.containerWidth&&this.layout()},n}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++){var o=t[i]
    if(o===e)return i}return-1}
    "function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e,i){for(var n=(i||0)-1,o=t.length;++n<o;)if(t[n]===e)return n
    return-1}function i(t,e){var i=t.index,n=e.index
    if(t=t.criteria,e=e.criteria,t!==e){if(t>e||Ge===t)return 1
        if(e>t||Ge===e)return-1}return n>i?-1:1}function n(t){return"\\"+fi[t]}function o(){}function r(t){return t instanceof r?t:new s(t)}function s(t){this.__wrapped__=t}function a(t,e,i,n){function o(){var n=arguments,h=s?this:e
    if(r||(t=e[a]),i.length&&(n=n.length?(n=Wi.call(n),c?n.concat(i):i.concat(n)):i),this instanceof o){h=l(t.prototype)
        var u=t.apply(h,n)
        return M(u)?u:h}return t.apply(h,n)}var r=S(t),s=!i,a=e
    if(s){var c=n
        i=e}else if(!r){if(!n)throw new TypeError
        e=t}return o}function l(t){return M(t)?Li(t):{}}function c(t){return Fi[t]}function h(){var t=(t=r.indexOf)===ce?e:t
    return t}function u(t){return $i[t]}function d(t){return Oi.call(t)==oi}function p(t){if(!t)return t
    for(var e=1,i=arguments.length;i>e;e++){var n=arguments[e]
        if(n)for(var o in n)t[o]=n[o]}return t}function f(t){return M(t)?ji(t)?Wi.call(t):p({},t):t}function m(t){if(!t)return t
    for(var e=1,i=arguments.length;i>e;e++){var n=arguments[e]
        if(n)for(var o in n)null==t[o]&&(t[o]=n[o])}return t}function g(t){var e=[]
    return qi(t,function(t,i){S(t)&&e.push(i)}),e.sort()}function v(t,e){return t?Mi.call(t,e):!1}function y(t){for(var e=-1,i=Vi(t),n=i.length,o={};++e<n;){var r=i[e]
    o[t[r]]=r}return o}function _(t){return t===!0||t===!1||Oi.call(t)==si}function E(t){return t?"object"==typeof t&&Oi.call(t)==ai:!1}function b(t){return t?1===t.nodeType:!1}function x(t){if(!t)return!0
    if(ji(t)||L(t))return!t.length
    for(var e in t)if(Mi.call(t,e))return!1
    return!0}function w(t,e,i,n){if(t===e)return 0!==t||1/t==1/e
    var o=typeof t,s=typeof e
    if(t===t&&(!t||"function"!=o&&"object"!=o)&&(!e||"function"!=s&&"object"!=s))return!1
    if(null==t||null==e)return t===e
    var a=Oi.call(t),l=Oi.call(e)
    if(a!=l)return!1
    switch(a){case si:case ai:return+t==+e
        case ci:return t!=+t?e!=+e:0==t?1/t==1/e:t==+e
        case ui:case di:return t==e+""}var c=a==ri
    if(!c){if(t instanceof r||e instanceof r)return w(t.__wrapped__||t,e.__wrapped__||e,i,n)
        if(a!=hi)return!1
        var h=t.constructor,u=e.constructor
        if(h!=u&&!(S(h)&&h instanceof h&&S(u)&&u instanceof u))return!1}i||(i=[]),n||(n=[])
    for(var d=i.length;d--;)if(i[d]==t)return n[d]==e
    var p=!0,f=0
    if(i.push(t),n.push(e),c){if(f=e.length,p=f==t.length)for(;f--&&(p=w(t[f],e[f],i,n)););return p}return qi(e,function(e,o,r){return Mi.call(r,o)?(f++,!(p=Mi.call(t,o)&&w(t[o],e,i,n))&&Qe):Ge}),p&&qi(t,function(t,e,i){return Mi.call(i,e)?!(p=--f>-1)&&Qe:Ge}),p}function T(t){return Ai(t)&&!Ri(parseFloat(t))}function S(t){return"function"==typeof t}function M(t){return!(!t||!pi[typeof t])}function C(t){return O(t)&&t!=+t}function P(t){return null===t}function O(t){return"number"==typeof t||Oi.call(t)==ci}function I(t){return!(!t||!pi[typeof t])&&Oi.call(t)==ui}function L(t){return"string"==typeof t||Oi.call(t)==di}function k(t){return Ge===t}function A(t){var e=h(),i=Ti.apply(yi,Wi.call(arguments,1)),n={}
    return qi(t,function(t,o){e(i,o)<0&&(n[o]=t)}),n}function R(t){for(var e=-1,i=Vi(t),n=i.length,o=Array(n);++e<n;){var r=i[e]
    o[e]=[r,t[r]]}return o}function N(t){for(var e=-1,i=Ti.apply(yi,Wi.call(arguments,1)),n=i.length,o={};++e<n;){var r=i[e]
    r in t&&(o[r]=t[r])}return o}function D(t){for(var e=-1,i=Vi(t),n=i.length,o=Array(n);++e<n;)o[e]=t[i[e]]
    return o}function H(t,e){var i=h(),n=t?t.length:0,o=!1
    return n&&"number"==typeof n?o=i(t,e)>-1:Gi(t,function(t){return(o=t===e)&&Qe}),o}function B(t,e,i){var n={}
    return e=Me(e,i),j(t,function(t,i,o){i=e(t,i,o)+"",Mi.call(n,i)?n[i]++:n[i]=1}),n}function W(t,e,i){var n=!0
    e=Me(e,i)
    var o=-1,r=t?t.length:0
    if("number"==typeof r)for(;++o<r&&(n=!!e(t[o],o,t)););else Gi(t,function(t,i,o){return!(n=!!e(t,i,o))&&Qe})
    return n}function z(t,e,i){var n=[]
    e=Me(e,i)
    var o=-1,r=t?t.length:0
    if("number"==typeof r)for(;++o<r;){var s=t[o]
        e(s,o,t)&&n.push(s)}else Gi(t,function(t,i,o){e(t,i,o)&&n.push(t)})
    return n}function X(t,e,i){e=Me(e,i)
    var n=-1,o=t?t.length:0
    if("number"!=typeof o){var r
        return Gi(t,function(t,i,n){return e(t,i,n)?(r=t,Qe):Ge}),r}for(;++n<o;){var s=t[n]
        if(e(s,n,t))return s}}function Y(t,e){return oe(t,e,!0)}function j(t,e,i){var n=-1,o=t?t.length:0
    if(e=e&&Ge===i?e:Me(e,i),"number"==typeof o)for(;++n<o&&e(t[n],n,t)!==Qe;);else Gi(t,e)}function U(t,e,i){var n={}
    return e=Me(e,i),j(t,function(t,i,o){i=e(t,i,o)+"",(Mi.call(n,i)?n[i]:n[i]=[]).push(t)}),n}function V(t,e){var i=Wi.call(arguments,2),n=-1,o="function"==typeof e,r=t?t.length:0,s=Array("number"==typeof r?r:0)
    return j(t,function(t){s[++n]=(o?e:t[e]).apply(t,i)}),s}function F(t,e,i){var n=-1,o=t?t.length:0
    if(e=Me(e,i),"number"==typeof o)for(var r=Array(o);++n<o;)r[n]=e(t[n],n,t)
    else r=[],Gi(t,function(t,i,o){r[++n]=e(t,i,o)})
    return r}function $(t,e,i){var n=-1/0,o=n,r=-1,s=t?t.length:0
    if(e||"number"!=typeof s)e=Me(e,i),j(t,function(t,i,r){var s=e(t,i,r)
        s>n&&(n=s,o=t)})
    else for(;++r<s;){var a=t[r]
        a>o&&(o=a)}return o}function q(t,e,i){var n=1/0,o=n,r=-1,s=t?t.length:0
    if(e||"number"!=typeof s)e=Me(e,i),j(t,function(t,i,r){var s=e(t,i,r)
        n>s&&(n=s,o=t)})
    else for(;++r<s;){var a=t[r]
        o>a&&(o=a)}return o}function G(t,e){var i=-1,n=t?t.length:0
    if("number"==typeof n)for(var o=Array(n);++i<n;)o[i]=t[i][e]
    return o||F(t,e)}function Z(t,e,i,n){if(!t)return i
    var o=arguments.length<3
    e=Me(e,n,4)
    var r=-1,s=t.length
    if("number"==typeof s)for(o&&(i=t[++r]);++r<s;)i=e(i,t[r],r,t)
    else Gi(t,function(t,n,r){i=o?(o=!1,t):e(i,t,n,r)})
    return i}function Q(t,e,i,n){var o=t,r=t?t.length:0,s=arguments.length<3
    if("number"!=typeof r){var a=Vi(t)
        r=a.length}return e=Me(e,n,4),j(t,function(t,n,l){n=a?a[--r]:--r,i=s?(s=!1,o[n]):e(i,o[n],n,l)}),i}function K(t,e,i){return e=Me(e,i),z(t,function(t,i,n){return!e(t,i,n)})}function J(t){var e=-1,i=t?t.length:0,n=Array("number"==typeof i?i:0)
    return j(t,function(t){var i=Si(Bi()*(++e+1))
        n[e]=n[i],n[i]=t}),n}function te(t){var e=t?t.length:0
    return"number"==typeof e?e:Vi(t).length}function ee(t,e,i){var n
    e=Me(e,i)
    var o=-1,r=t?t.length:0
    if("number"==typeof r)for(;++o<r&&!(n=e(t[o],o,t)););else Gi(t,function(t,i,o){return(n=e(t,i,o))&&Qe})
    return!!n}function ie(t,e,n){var o=-1,r=t?t.length:0,s=Array("number"==typeof r?r:0)
    for(e=Me(e,n),j(t,function(t,i,n){s[++o]={criteria:e(t,i,n),index:o,value:t}}),r=s.length,s.sort(i);r--;)s[r]=s[r].value
    return s}function ne(t){return ji(t)?Wi.call(t):t&&"number"==typeof t.length?F(t):D(t)}function oe(t,e,i){return i&&x(e)?null:(i?X:z)(t,e)}function re(t){for(var e=-1,i=t?t.length:0,n=[];++e<i;){var o=t[e]
    o&&n.push(o)}return n}function se(t){for(var e=-1,i=h(),n=t.length,o=Ti.apply(yi,Wi.call(arguments,1)),r=[];++e<n;){var s=t[e]
    i(o,s)<0&&r.push(s)}return r}function ae(t,e,i){if(t){var n=0,o=t.length
    if("number"!=typeof e&&null!=e){var r=-1
        for(e=Me(e,i);++r<o&&e(t[r],r,t);)n++}else if(n=e,null==n||i)return t[0]
    return Wi.call(t,0,Hi(Di(0,n),o))}}function le(t,e){for(var i=-1,n=t?t.length:0,o=[];++i<n;){var r=t[i]
    ji(r)?Ci.apply(o,e?r:le(r)):o.push(r)}return o}function ce(t,i,n){if("number"==typeof n){var o=t?t.length:0
    n=0>n?Di(0,o+n):n||0}else if(n){var r=ge(t,i)
    return t[r]===i?r:-1}return t?e(t,i,n):-1}function he(t,e,i){if(!t)return[]
    var n=0,o=t.length
    if("number"!=typeof e&&null!=e){var r=o
        for(e=Me(e,i);r--&&e(t[r],r,t);)n++}else n=null==e||i?1:e||n
    return Wi.call(t,0,Hi(Di(0,o-n),o))}function ue(t){var e=arguments,i=e.length,n=-1,o=h(),r=t?t.length:0,s=[]
    t:for(;++n<r;){var a=t[n]
        if(o(s,a)<0){for(var l=i;--l;)if(o(e[l],a)<0)continue t
            s.push(a)}}return s}function de(t,e,i){if(t){var n=0,o=t.length
    if("number"!=typeof e&&null!=e){var r=o
        for(e=Me(e,i);r--&&e(t[r],r,t);)n++}else if(n=e,null==n||i)return t[o-1]
    return Wi.call(t,Di(0,o-n))}}function pe(t,e,i){var n=t?t.length:0
    for("number"==typeof i&&(n=(0>i?Di(0,n+i):Hi(i,n-1))+1);n--;)if(t[n]===e)return n
    return-1}function fe(t,e,i){t=+t||0,i=+i||1,null==e&&(e=t,t=0)
    for(var n=-1,o=Di(0,xi((e-t)/i)),r=Array(o);++n<o;)r[n]=t,t+=i
    return r}function me(t,e,i){if("number"!=typeof e&&null!=e){var n=0,o=-1,r=t?t.length:0
    for(e=Me(e,i);++o<r&&e(t[o],o,t);)n++}else n=null==e||i?1:Di(0,e)
    return Wi.call(t,n)}function ge(t,e,i,n){var o=0,r=t?t.length:o
    for(i=i?Me(i,n,1):De,e=i(e);r>o;){var s=o+r>>>1
        i(t[s])<e?o=s+1:r=s}return o}function ve(t){return ji(t)||(arguments[0]=t?Wi.call(t):yi),ye(Ti.apply(yi,arguments))}function ye(t,e,i,n){var o=-1,r=h(),s=t?t.length:0,a=[],l=a
    for("boolean"!=typeof e&&null!=e&&(n=i,i=e,e=!1),null!=i&&(l=[],i=Me(i,n));++o<s;){var c=t[o],u=i?i(c,o,t):c;(e?!o||l[l.length-1]!==u:r(l,u)<0)&&(i&&l.push(u),a.push(c))}return a}function _e(t){return se(t,Wi.call(arguments,1))}function Ee(t){for(var e=-1,i=t?$(G(arguments,"length")):0,n=Array(0>i?0:i);++e<i;)n[e]=G(arguments,e)
    return n}function be(t,e){for(var i=-1,n=t?t.length:0,o={};++i<n;){var r=t[i]
    e?o[r]=e[i]:o[r[0]]=r[1]}return o}function xe(t,e){return 1>t?e():function(){return--t<1?e.apply(this,arguments):Ge}}function we(t,e){return Yi.fastBind||Ii&&arguments.length>2?Ii.call.apply(Ii,arguments):a(t,e,Wi.call(arguments,2))}function Te(t){for(var e=arguments.length>1?Ti.apply(yi,Wi.call(arguments,1)):g(t),i=-1,n=e.length;++i<n;){var o=e[i]
    t[o]=we(t[o],t)}return t}function Se(){var t=arguments
    return function(){for(var e=arguments,i=t.length;i--;)e=[t[i].apply(this,e)]
        return e[0]}}function Me(t,e,i){if(null==t)return De
    var n=typeof t
    if("function"!=n){if("object"!=n)return function(e){return e[t]}
        var o=Vi(t)
        return function(e){for(var i=o.length,n=!1;i--&&(n=e[o[i]]===t[o[i]]););return n}}return Ge===e?t:1===i?function(i){return t.call(e,i)}:2===i?function(i,n){return t.call(e,i,n)}:4===i?function(i,n,o,r){return t.call(e,i,n,o,r)}:function(i,n,o){return t.call(e,i,n,o)}}function Ce(t,e,i){function n(){a=null,i||(r=t.apply(s,o))}var o,r,s,a=null
    return function(){var l=i&&!a
        return o=arguments,s=this,wi(a),a=Pi(n,e),l&&(r=t.apply(s,o)),r}}function Pe(t){var e=Wi.call(arguments,1)
    return Pi(function(){t.apply(Ge,e)},1)}function Oe(t,e){var i=Wi.call(arguments,2)
    return Pi(function(){t.apply(Ge,i)},e)}function Ie(t,e){var i={}
    return function(){var n=Ke+(e?e.apply(this,arguments):arguments[0])
        return Mi.call(i,n)?i[n]:i[n]=t.apply(this,arguments)}}function Le(t){var e,i
    return function(){return e?i:(e=!0,i=t.apply(this,arguments),t=null,i)}}function ke(t){return a(t,Wi.call(arguments,1))}function Ae(t,e){function i(){s=new Date,a=null,o=t.apply(r,n)}var n,o,r,s=0,a=null
    return function(){var l=new Date,c=e-(l-s)
        return n=arguments,r=this,0>=c?(wi(a),a=null,s=l,o=t.apply(r,n)):a||(a=Pi(i,c)),o}}function Re(t,e){return function(){var i=[t]
    return Ci.apply(i,arguments),e.apply(this,i)}}function Ne(t){return null==t?"":(t+"").replace(ii,c)}function De(t){return t}function He(t){j(g(t),function(e){var i=r[e]=t[e]
    r.prototype[e]=function(){var t=[this.__wrapped__]
        Ci.apply(t,arguments)
        var e=i.apply(r,t)
        return this.__chain__&&(e=new s(e),e.__chain__=!0),e}})}function Be(){return t._=Ei,this}function We(t,e){null==t&&null==e&&(e=1),t=+t||0,null==e?(e=t,t=0):e=+e||0
    var i=Bi()
    return t%1||e%1?t+Hi(i*(e-t+parseFloat("1e-"+((i+"").length-1))),e):t+Si(i*(e-t+1))}function ze(t,e){var i=t?t[e]:null
    return S(i)?t[e]():i}function Xe(t,e,i){var o=r.templateSettings
    t||(t=""),i=m({},i,o)
    var s=0,a="__p += '",l=i.variable,c=RegExp((i.escape||ei).source+"|"+(i.interpolate||ei).source+"|"+(i.evaluate||ei).source+"|$","g")
    t.replace(c,function(e,i,o,r,l){return a+=t.slice(s,l).replace(ni,n),i&&(a+="' +\n_.escape("+i+") +\n'"),r&&(a+="';\n"+r+";\n__p += '"),o&&(a+="' +\n((__t = ("+o+")) == null ? '' : __t) +\n'"),s=l+e.length,e}),a+="';\n",l||(l="obj",a="with ("+l+" || {}) {\n"+a+"\n}\n"),a="function("+l+") {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"+a+"return __p\n}"
    try{var h=Function("_","return "+a)(r)}catch(u){throw u.source=a,u}return e?h(e):(h.source=a,h)}function Ye(t,e,i){for(var n=-1,o=Array(t>-1?t:0);++n<t;)o[n]=e.call(i,n)
    return o}function je(t){return null==t?"":(t+"").replace(Je,u)}function Ue(t){var e=++Ze+""
    return t?t+e:e}function Ve(t){return t=new s(t),t.__chain__=!0,t}function Fe(t,e){return e(t),t}function $e(){return this.__chain__=!0,this}function qe(){return this.__wrapped__}var Ge,Ze=0,Qe={},Ke=+new Date+"",Je=/&(?:amp|lt|gt|quot|#39);/g,ti=/<%=([\s\S]+?)%>/g,ei=/($^)/,ii=/[&<>"']/g,ni=/['\n\r\t\u2028\u2029\\]/g,oi="[object Arguments]",ri="[object Array]",si="[object Boolean]",ai="[object Date]",li="[object Function]",ci="[object Number]",hi="[object Object]",ui="[object RegExp]",di="[object String]",pi={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},fi={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},mi=pi[typeof exports]&&exports,gi=pi[typeof module]&&module&&module.exports==mi&&module,vi=pi[typeof global]&&global
    !vi||vi.global!==vi&&vi.window!==vi||(t=vi)
    var yi=[],_i=Object.prototype,Ei=(String.prototype,t._),bi=RegExp("^"+(_i.valueOf+"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),xi=Math.ceil,wi=t.clearTimeout,Ti=yi.concat,Si=Math.floor,Mi=_i.hasOwnProperty,Ci=yi.push,Pi=(_i.propertyIsEnumerable,t.setTimeout),Oi=_i.toString,Ii=bi.test(Ii=Oi.bind)&&Ii,Li=bi.test(Li=Object.create)&&Li,ki=bi.test(ki=Array.isArray)&&ki,Ai=t.isFinite,Ri=t.isNaN,Ni=bi.test(Ni=Object.keys)&&Ni,Di=Math.max,Hi=Math.min,Bi=Math.random,Wi=yi.slice,zi=bi.test(t.attachEvent),Xi=Ii&&!/\n|true/.test(Ii+zi)
    s.prototype=r.prototype
    var Yi={}
    if(function(){var t={0:1,length:1}
        Yi.fastBind=Ii&&!Xi,Yi.spliceObjects=(yi.splice.call(t,0,1),!t[0])}(1),r.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:ti,variable:""},!Li)var l=function(t){if(M(t)){o.prototype=t
        var e=new o
        o.prototype=null}return e||{}}
    d(arguments)||(d=function(t){return t?Mi.call(t,"callee"):!1})
    var ji=ki||function(t){return t?"object"==typeof t&&Oi.call(t)==ri:!1},Ui=function(t){var e,i=t,n=[]
        if(!i)return n
        if(!pi[typeof t])return n
        for(e in i)Mi.call(i,e)&&n.push(e)
        return n},Vi=Ni?function(t){return M(t)?Ni(t):[]}:Ui,Fi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$i=y(Fi),qi=function(t,e){var i,n=t,o=n
        if(!n)return o
        if(!pi[typeof n])return o
        for(i in n)if(e(n[i],i,t)===Qe)return o
        return o},Gi=function(t,e){var i,n=t,o=n
        if(!n)return o
        if(!pi[typeof n])return o
        for(i in n)if(Mi.call(n,i)&&e(n[i],i,t)===Qe)return o
        return o}
    S(/x/)&&(S=function(t){return"function"==typeof t&&Oi.call(t)==li}),r.after=xe,r.bind=we,r.bindAll=Te,r.compact=re,r.compose=Se,r.countBy=B,r.debounce=Ce,r.defaults=m,r.defer=Pe,r.delay=Oe,r.difference=se,r.filter=z,r.flatten=le,r.forEach=j,r.functions=g,r.groupBy=U,r.initial=he,r.intersection=ue,r.invert=y,r.invoke=V,r.keys=Vi,r.map=F,r.max=$,r.memoize=Ie,r.min=q,r.omit=A,r.once=Le,r.pairs=R,r.partial=ke,r.pick=N,r.pluck=G,r.range=fe,r.reject=K,r.rest=me,r.shuffle=J,r.sortBy=ie,r.tap=Fe,r.throttle=Ae,r.times=Ye,r.toArray=ne,r.union=ve,r.uniq=ye,r.values=D,r.where=oe,r.without=_e,r.wrap=Re,r.zip=Ee,r.collect=F,r.drop=me,r.each=j,r.extend=p,r.methods=g,r.object=be,r.select=z,r.tail=me,r.unique=ye,r.chain=Ve,r.clone=f,r.contains=H,r.escape=Ne,r.every=W,r.find=X,r.has=v,r.identity=De,r.indexOf=ce,r.isArguments=d,r.isArray=ji,r.isBoolean=_,r.isDate=E,r.isElement=b,r.isEmpty=x,r.isEqual=w,r.isFinite=T,r.isFunction=S,r.isNaN=C,r.isNull=P,r.isNumber=O,r.isObject=M,r.isRegExp=I,r.isString=L,r.isUndefined=k,r.lastIndexOf=pe,r.mixin=He,r.noConflict=Be,r.random=We,r.reduce=Z,r.reduceRight=Q,r.result=ze,r.size=te,r.some=ee,r.sortedIndex=ge,r.template=Xe,r.unescape=je,r.uniqueId=Ue,r.all=W,r.any=ee,r.detect=X,r.findWhere=Y,r.foldl=Z,r.foldr=Q,r.include=H,r.inject=Z,r.first=ae,r.last=de,r.take=ae,r.head=ae,r.VERSION="1.3.1",He(r),r.prototype.chain=$e,r.prototype.value=qe,j(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=yi[t]
        r.prototype[t]=function(){var t=this.__wrapped__
            return e.apply(t,arguments),Yi.spliceObjects||0!==t.length||delete t[0],this}}),j(["concat","join","slice"],function(t){var e=yi[t]
        r.prototype[t]=function(){var t=this.__wrapped__,i=e.apply(t,arguments)
            return this.__chain__&&(i=new s(i),i.__chain__=!0),i}}),"function"==typeof define&&"object"==typeof define.amd&&define.amd?(t._=r,define(function(){return r})):mi&&!mi.nodeType?gi?(gi.exports=r)._=r:mi._=r:t._=r}(this),function(){{var t,e=this,i=e.Backbone,n=[],o=(n.push,n.slice)
    n.splice}t="undefined"!=typeof exports?exports:e.Backbone={},t.VERSION="1.1.0"
    var r=e._
    r||"undefined"==typeof require||(r=require("underscore")),t.$=e.jQuery||e.Zepto||e.ender||e.$,t.noConflict=function(){return e.Backbone=i,this},t.emulateHTTP=!1,t.emulateJSON=!1
    var s=t.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this
        this._events||(this._events={})
        var n=this._events[t]||(this._events[t]=[])
        return n.push({callback:e,context:i,ctx:i||this}),this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this
        var n=this,o=r.once(function(){n.off(t,o),e.apply(this,arguments)})
        return o._callback=e,this.on(t,o,i)},off:function(t,e,i){var n,o,s,a,c,h,u,d
        if(!this._events||!l(this,"off",t,[e,i]))return this
        if(!t&&!e&&!i)return this._events={},this
        for(a=t?[t]:r.keys(this._events),c=0,h=a.length;h>c;c++)if(t=a[c],s=this._events[t]){if(this._events[t]=n=[],e||i)for(u=0,d=s.length;d>u;u++)o=s[u],(e&&e!==o.callback&&e!==o.callback._callback||i&&i!==o.context)&&n.push(o)
            n.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this
        var e=o.call(arguments,1)
        if(!l(this,"trigger",t,e))return this
        var i=this._events[t],n=this._events.all
        return i&&c(i,e),n&&c(n,arguments),this},stopListening:function(t,e,i){var n=this._listeningTo
        if(!n)return this
        var o=!e&&!i
        i||"object"!=typeof e||(i=this),t&&((n={})[t._listenId]=t)
        for(var s in n)t=n[s],t.off(e,i,this),(o||r.isEmpty(t._events))&&delete this._listeningTo[s]
        return this}},a=/\s+/,l=function(t,e,i,n){if(!i)return!0
        if("object"==typeof i){for(var o in i)t[e].apply(t,[o,i[o]].concat(n))
            return!1}if(a.test(i)){for(var r=i.split(a),s=0,l=r.length;l>s;s++)t[e].apply(t,[r[s]].concat(n))
            return!1}return!0},c=function(t,e){var i,n=-1,o=t.length,r=e[0],s=e[1],a=e[2]
        switch(e.length){case 0:for(;++n<o;)(i=t[n]).callback.call(i.ctx)
            return
            case 1:for(;++n<o;)(i=t[n]).callback.call(i.ctx,r)
                return
            case 2:for(;++n<o;)(i=t[n]).callback.call(i.ctx,r,s)
                return
            case 3:for(;++n<o;)(i=t[n]).callback.call(i.ctx,r,s,a)
                return
            default:for(;++n<o;)(i=t[n]).callback.apply(i.ctx,e)}},h={listenTo:"on",listenToOnce:"once"}
    r.each(h,function(t,e){s[e]=function(e,i,n){var o=this._listeningTo||(this._listeningTo={}),s=e._listenId||(e._listenId=r.uniqueId("l"))
        return o[s]=e,n||"object"!=typeof i||(n=this),e[t](i,n,this),this}}),s.bind=s.on,s.unbind=s.off,r.extend(t,s)
    var u=t.Model=function(t,e){var i=t||{}
        e||(e={}),this.cid=r.uniqueId("c"),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(i=this.parse(i,e)||{}),i=r.defaults({},i,r.result(this,"defaults")),this.set(i,e),this.changed={},this.initialize.apply(this,arguments)}
    r.extend(u.prototype,s,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return r.clone(this.attributes)},sync:function(){return t.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return r.escape(this.get(t))},has:function(t){return null!=this.get(t)},set:function(t,e,i){var n,o,s,a,l,c,h,u
        if(null==t)return this
        if("object"==typeof t?(o=t,i=e):(o={})[t]=e,i||(i={}),!this._validate(o,i))return!1
        s=i.unset,l=i.silent,a=[],c=this._changing,this._changing=!0,c||(this._previousAttributes=r.clone(this.attributes),this.changed={}),u=this.attributes,h=this._previousAttributes,this.idAttribute in o&&(this.id=o[this.idAttribute])
        for(n in o)e=o[n],r.isEqual(u[n],e)||a.push(n),r.isEqual(h[n],e)?delete this.changed[n]:this.changed[n]=e,s?delete u[n]:u[n]=e
        if(!l){a.length&&(this._pending=!0)
            for(var d=0,p=a.length;p>d;d++)this.trigger("change:"+a[d],this,u[a[d]],i)}if(c)return this
        if(!l)for(;this._pending;)this._pending=!1,this.trigger("change",this,i)
        return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,r.extend({},e,{unset:!0}))},clear:function(t){var e={}
        for(var i in this.attributes)e[i]=void 0
        return this.set(e,r.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!r.isEmpty(this.changed):r.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?r.clone(this.changed):!1
        var e,i=!1,n=this._changing?this._previousAttributes:this.attributes
        for(var o in t)r.isEqual(n[o],e=t[o])||((i||(i={}))[o]=e)
        return i},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return r.clone(this._previousAttributes)},fetch:function(t){t=t?r.clone(t):{},void 0===t.parse&&(t.parse=!0)
        var e=this,i=t.success
        return t.success=function(n){return e.set(e.parse(n,t),t)?(i&&i(e,n,t),void e.trigger("sync",e,n,t)):!1},D(this,t),this.sync("read",this,t)},save:function(t,e,i){var n,o,s,a=this.attributes
        if(null==t||"object"==typeof t?(n=t,i=e):(n={})[t]=e,i=r.extend({validate:!0},i),n&&!i.wait){if(!this.set(n,i))return!1}else if(!this._validate(n,i))return!1
        n&&i.wait&&(this.attributes=r.extend({},a,n)),void 0===i.parse&&(i.parse=!0)
        var l=this,c=i.success
        return i.success=function(t){l.attributes=a
            var e=l.parse(t,i)
            return i.wait&&(e=r.extend(n||{},e)),r.isObject(e)&&!l.set(e,i)?!1:(c&&c(l,t,i),void l.trigger("sync",l,t,i))},D(this,i),o=this.isNew()?"create":i.patch?"patch":"update","patch"===o&&(i.attrs=n),s=this.sync(o,this,i),n&&i.wait&&(this.attributes=a),s},destroy:function(t){t=t?r.clone(t):{}
        var e=this,i=t.success,n=function(){e.trigger("destroy",e,e.collection,t)}
        if(t.success=function(o){(t.wait||e.isNew())&&n(),i&&i(e,o,t),e.isNew()||e.trigger("sync",e,o,t)},this.isNew())return t.success(),!1
        D(this,t)
        var o=this.sync("delete",this,t)
        return t.wait||n(),o},url:function(){var t=r.result(this,"urlRoot")||r.result(this.collection,"url")||N()
        return this.isNew()?t:t+("/"===t.charAt(t.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(t){return this._validate({},r.extend(t||{},{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0
        t=r.extend({},this.attributes,t)
        var i=this.validationError=this.validate(t,e)||null
        return i?(this.trigger("invalid",this,i,r.extend(e,{validationError:i})),!1):!0}})
    var d=["keys","values","pairs","invert","pick","omit"]
    r.each(d,function(t){u.prototype[t]=function(){var e=o.call(arguments)
        return e.unshift(this.attributes),r[t].apply(r,e)}})
    var p=t.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,r.extend({silent:!0},e))},f={add:!0,remove:!0,merge:!0},m={add:!0,remove:!1}
    r.extend(p.prototype,s,{model:u,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return t.sync.apply(this,arguments)},add:function(t,e){return this.set(t,r.extend({merge:!1},e,m))},remove:function(t,e){var i=!r.isArray(t)
        t=i?[t]:r.clone(t),e||(e={})
        var n,o,s,a
        for(n=0,o=t.length;o>n;n++)a=t[n]=this.get(t[n]),a&&(delete this._byId[a.id],delete this._byId[a.cid],s=this.indexOf(a),this.models.splice(s,1),this.length--,e.silent||(e.index=s,a.trigger("remove",a,this,e)),this._removeReference(a))
        return i?t[0]:t},set:function(t,e){e=r.defaults({},e,f),e.parse&&(t=this.parse(t,e))
        var i=!r.isArray(t)
        t=i?t?[t]:[]:r.clone(t)
        var n,o,s,a,l,c,h,d=e.at,p=this.model,m=this.comparator&&null==d&&e.sort!==!1,g=r.isString(this.comparator)?this.comparator:null,v=[],y=[],_={},E=e.add,b=e.merge,x=e.remove,w=!m&&E&&x?[]:!1
        for(n=0,o=t.length;o>n;n++){if(l=t[n],s=l instanceof u?a=l:l[p.prototype.idAttribute],c=this.get(s))x&&(_[c.cid]=!0),b&&(l=l===a?a.attributes:l,e.parse&&(l=c.parse(l,e)),c.set(l,e),m&&!h&&c.hasChanged(g)&&(h=!0)),t[n]=c
        else if(E){if(a=t[n]=this._prepareModel(l,e),!a)continue
            v.push(a),a.on("all",this._onModelEvent,this),this._byId[a.cid]=a,null!=a.id&&(this._byId[a.id]=a)}w&&w.push(c||a)}if(x){for(n=0,o=this.length;o>n;++n)_[(a=this.models[n]).cid]||y.push(a)
            y.length&&this.remove(y,e)}if(v.length||w&&w.length)if(m&&(h=!0),this.length+=v.length,null!=d)for(n=0,o=v.length;o>n;n++)this.models.splice(d+n,0,v[n])
        else{w&&(this.models.length=0)
            var T=w||v
            for(n=0,o=T.length;o>n;n++)this.models.push(T[n])}if(h&&this.sort({silent:!0}),!e.silent){for(n=0,o=v.length;o>n;n++)(a=v[n]).trigger("add",a,this,e);(h||w&&w.length)&&this.trigger("sort",this,e)}return i?t[0]:t},reset:function(t,e){e||(e={})
        for(var i=0,n=this.models.length;n>i;i++)this._removeReference(this.models[i])
        return e.previousModels=this.models,this._reset(),t=this.add(t,r.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,r.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1)
        return this.remove(e,t),e},unshift:function(t,e){return this.add(t,r.extend({at:0},e))},shift:function(t){var e=this.at(0)
        return this.remove(e,t),e},slice:function(){return o.apply(this.models,arguments)},get:function(t){return null==t?void 0:this._byId[t.id]||this._byId[t.cid]||this._byId[t]},at:function(t){return this.models[t]},where:function(t,e){return r.isEmpty(t)?e?void 0:[]:this[e?"find":"filter"](function(e){for(var i in t)if(t[i]!==e.get(i))return!1
        return!0})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw Error("Cannot sort a set without a comparator")
        return t||(t={}),r.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(r.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return r.invoke(this.models,"get",t)},fetch:function(t){t=t?r.clone(t):{},void 0===t.parse&&(t.parse=!0)
        var e=t.success,i=this
        return t.success=function(n){var o=t.reset?"reset":"set"
            i[o](n,t),e&&e(i,n,t),i.trigger("sync",i,n,t)},D(this,t),this.sync("read",this,t)},create:function(t,e){if(e=e?r.clone(e):{},!(t=this._prepareModel(t,e)))return!1
        e.wait||this.add(t,e)
        var i=this,n=e.success
        return e.success=function(t,e,o){o.wait&&i.add(t,o),n&&n(t,e,o)},t.save(null,e),t},parse:function(t){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(t instanceof u)return t.collection||(t.collection=this),t
        e=e?r.clone(e):{},e.collection=this
        var i=new this.model(t,e)
        return i.validationError?(this.trigger("invalid",this,i.validationError,e),!1):i},_removeReference:function(t){this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){("add"!==t&&"remove"!==t||i===this)&&("destroy"===t&&this.remove(e,n),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],null!=e.id&&(this._byId[e.id]=e)),this.trigger.apply(this,arguments))}})
    var g=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain"]
    r.each(g,function(t){p.prototype[t]=function(){var e=o.call(arguments)
        return e.unshift(this.models),r[t].apply(r,e)}})
    var v=["groupBy","countBy","sortBy"]
    r.each(v,function(t){p.prototype[t]=function(e,i){var n=r.isFunction(e)?e:function(t){return t.get(e)}
        return r[t](this.models,n,i)}})
    var y=t.View=function(t){this.cid=r.uniqueId("view"),t||(t={}),r.extend(this,r.pick(t,E)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},_=/^(\S+)\s*(.*)$/,E=["model","collection","el","id","attributes","className","tagName","events"]
    r.extend(y.prototype,s,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(e,i){return this.$el&&this.undelegateEvents(),this.$el=e instanceof t.$?e:t.$(e),this.el=this.$el[0],i!==!1&&this.delegateEvents(),this},delegateEvents:function(t){if(!t&&!(t=r.result(this,"events")))return this
        this.undelegateEvents()
        for(var e in t){var i=t[e]
            if(r.isFunction(i)||(i=this[t[e]]),i){var n=e.match(_),o=n[1],s=n[2]
                i=r.bind(i,this),o+=".delegateEvents"+this.cid,""===s?this.$el.on(o,i):this.$el.on(o,s,i)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(r.result(this,"el"),!1)
    else{var e=r.extend({},r.result(this,"attributes"))
        this.id&&(e.id=r.result(this,"id")),this.className&&(e["class"]=r.result(this,"className"))
        var i=t.$("<"+r.result(this,"tagName")+">").attr(e)
        this.setElement(i,!1)}}}),t.sync=function(e,i,n){var o=x[e]
        r.defaults(n||(n={}),{emulateHTTP:t.emulateHTTP,emulateJSON:t.emulateJSON})
        var s={type:o,dataType:"json"}
        if(n.url||(s.url=r.result(i,"url")||N()),null!=n.data||!i||"create"!==e&&"update"!==e&&"patch"!==e||(s.contentType="application/json",s.data=JSON.stringify(n.attrs||i.toJSON(n))),n.emulateJSON&&(s.contentType="application/x-www-form-urlencoded",s.data=s.data?{model:s.data}:{}),n.emulateHTTP&&("PUT"===o||"DELETE"===o||"PATCH"===o)){s.type="POST",n.emulateJSON&&(s.data._method=o)
            var a=n.beforeSend
            n.beforeSend=function(t){return t.setRequestHeader("X-HTTP-Method-Override",o),a?a.apply(this,arguments):void 0}}"GET"===s.type||n.emulateJSON||(s.processData=!1),"PATCH"===s.type&&b&&(s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")})
        var l=n.xhr=t.ajax(r.extend(s,n))
        return i.trigger("request",i,l,n),l}
    var b=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),x={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"}
    t.ajax=function(){return t.$.ajax.apply(t.$,arguments)}
    var w=t.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},T=/\((.*?)\)/g,S=/(\(\?)?:\w+/g,M=/\*\w+/g,C=/[\-{}\[\]+?.,\\\^$|#\s]/g
    r.extend(w.prototype,s,{initialize:function(){},route:function(e,i,n){r.isRegExp(e)||(e=this._routeToRegExp(e)),r.isFunction(i)&&(n=i,i=""),n||(n=this[i])
        var o=this
        return t.history.route(e,function(r){var s=o._extractParameters(e,r)
            n&&n.apply(o,s),o.trigger.apply(o,["route:"+i].concat(s)),o.trigger("route",i,s),t.history.trigger("route",o,i,s)}),this},navigate:function(e,i){return t.history.navigate(e,i),this},_bindRoutes:function(){if(this.routes){this.routes=r.result(this,"routes")
        for(var t,e=r.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(C,"\\$&").replace(T,"(?:$1)?").replace(S,function(t,e){return e?t:"([^/]+)"}).replace(M,"(.*?)"),RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1)
        return r.map(i,function(t){return t?decodeURIComponent(t):null})}})
    var P=t.History=function(){this.handlers=[],r.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},O=/^[#\/]|\s+$/g,I=/^\/+|\/+$/g,L=/msie [\w.]+/,k=/\/$/,A=/[?#].*$/
    P.started=!1,r.extend(P.prototype,s,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/)
        return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname
        var i=this.root.replace(k,"")
        t.indexOf(i)||(t=t.slice(i.length))}else t=this.getHash()
        return t.replace(O,"")},start:function(e){if(P.started)throw Error("Backbone.history has already been started")
        P.started=!0,this.options=r.extend({root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState)
        var i=this.getFragment(),n=document.documentMode,o=L.exec(navigator.userAgent.toLowerCase())&&(!n||7>=n)
        this.root=("/"+this.root+"/").replace(I,"/"),o&&this._wantsHashChange&&(this.iframe=t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(i)),this._hasPushState?t.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!o?t.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=i
        var s=this.location,a=s.pathname.replace(/[^\/]$/,"$&/")===this.root
        if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!a)return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0
            this._hasPushState&&a&&s.hash&&(this.fragment=this.getHash().replace(O,""),this.history.replaceState({},document.title,this.root+this.fragment+s.search))}return this.options.silent?void 0:this.loadUrl()},stop:function(){t.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),P.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment()
        return t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t===this.fragment?!1:(this.iframe&&this.navigate(t),void this.loadUrl())},loadUrl:function(t){return t=this.fragment=this.getFragment(t),r.any(this.handlers,function(e){return e.route.test(t)?(e.callback(t),!0):void 0})},navigate:function(t,e){if(!P.started)return!1
        e&&e!==!0||(e={trigger:!!e})
        var i=this.root+(t=this.getFragment(t||""))
        if(t=t.replace(A,""),this.fragment!==t){if(this.fragment=t,""===t&&"/"!==i&&(i=i.slice(0,-1)),this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,i)
        else{if(!this._wantsHashChange)return this.location.assign(i)
            this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"")
        t.replace(n+"#"+e)}else t.hash="#"+e}}),t.history=new P
    var R=function(t,e){var i,n=this
        i=t&&r.has(t,"constructor")?t.constructor:function(){return n.apply(this,arguments)},r.extend(i,n,e)
        var o=function(){this.constructor=i}
        return o.prototype=n.prototype,i.prototype=new o,t&&r.extend(i.prototype,t),i.__super__=n.prototype,i}
    u.extend=p.extend=w.extend=y.extend=P.extend=R
    var N=function(){throw Error('A "url" property or function must be specified')},D=function(t,e){var i=e.error
        e.error=function(n){i&&i(t,n,e),t.trigger("error",t,n,e)}}}.call(this),function(){Array.prototype.forEach||(Array.prototype.forEach=function(t,e){for(var i=0,n=this.length;n>i;++i)t.call(e||this,this[i],i,this)}),Function.prototype.bind=function(){var t=Array.prototype.slice
    return function(e){var i=this,n=t.call(arguments,1)
        return n.length?function(){return arguments.length?i.apply(e,t.call(arguments).concat(n)):i.apply(e,n)}:function(){return arguments.length?i.apply(e,arguments):i.call(e)}}}(),String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.unparam=function(){var t,e,i,n={},o=this.replace("?","").split("&")
    for(e=0,i=o.length;i>e;e++)t=o[e].split("=",2),n[decodeURIComponent(t[0])]=2==t.length?decodeURIComponent(t[1].replace(/\+/g," ")):!0
    return n},jQuery.unparam=function(t){return t.unparam()},function(){var t=!1,e=/xyz/.test(function(){})?/\b_super\b/:/.*/
    this.Class=function(){},Class.extend=function(i){function n(){!t&&this._construct&&this._construct.apply(this,arguments)}var o=this.prototype
        t=!0
        var r=new this
        t=!1
        for(var s in i)r[s]="function"==typeof i[s]&&"function"==typeof o[s]&&e.test(i[s])?function(t,e){return function(){var i=this._super
            this._super=o[t]
            var n=e.apply(this,arguments)
            return this._super=i,n}}(s,i[s]):i[s]
        return n.prototype=r,n.constructor=n,n.extend=arguments.callee,n}}(),$empty=function(){},$returnTrue=function(){return!0},String.format=function(){for(var t=arguments[0],e=0;e<arguments.length-1;e++){var i=RegExp("\\{"+e+"\\}","gm")
    t=t.replace(i,arguments[e+1])}return t},$.fn.clearForm=function(){return this.each(function(){$(this).data("validator").resetForm(),$(":input",this).each(function(){var t=this.type,e=this.tagName.toLowerCase()
    if("text"==t||"password"==t||"textarea"==e)this.value=""
    else if("checkbox"==t||"radio"==t)this.checked=!1,elm=$(this).parent(),$(this).is(":checked")?elm.addClass("checked"):elm.removeClass("checked")
    else if("select"==e){this.selectedIndex=-1
        var i=$(this).attr("id")
        $(this).prev().text($(i+" :selected").text())}})})},$log=function(){try{arguments.length>1?console.dir(arguments):console.log(arguments[0])}catch(t){}},$dir=function(){try{console.dir(arguments)}catch(t){}}}(),function(t){function e(t,e,i,n){if("addEventListener"in t)try{t.addEventListener(e,i,n)}catch(o){if("object"!=typeof i||!i.handleEvent)throw o
    t.addEventListener(e,function(t){i.handleEvent.call(i,t)},n)}else"attachEvent"in t&&("object"==typeof i&&i.handleEvent?t.attachEvent("on"+e,function(){i.handleEvent.call(i)}):t.attachEvent("on"+e,i))}function i(t,e,i,n){if("removeEventListener"in t)try{t.removeEventListener(e,i,n)}catch(o){if("object"!=typeof i||!i.handleEvent)throw o
    t.removeEventListener(e,function(t){i.handleEvent.call(i,t)},n)}else"detachEvent"in t&&("object"==typeof i&&i.handleEvent?t.detachEvent("on"+e,function(){i.handleEvent.call(i)}):t.detachEvent("on"+e,i))}window.MBP=window.MBP||{},MBP.viewportmeta=t.querySelector&&t.querySelector('meta[name="viewport"]'),MBP.ua=navigator.userAgent,MBP.scaleFix=function(){MBP.viewportmeta&&/iPhone|iPad|iPod/.test(MBP.ua)&&!/Opera Mini/.test(MBP.ua)&&(MBP.viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0",t.addEventListener("gesturestart",MBP.gestureStart,!1))},MBP.gestureStart=function(){MBP.viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"},MBP.BODY_SCROLL_TOP=!1,MBP.getScrollTop=function(){var e=window,i=t
    return e.pageYOffset||"CSS1Compat"===i.compatMode&&i.documentElement.scrollTop||i.body.scrollTop||0},MBP.hideUrlBar=function(){var t=window
    location.hash||MBP.BODY_SCROLL_TOP===!1||t.scrollTo(0,1===MBP.BODY_SCROLL_TOP?0:1)},MBP.hideUrlBarOnLoad=function(){var t,e=window,i=e.document
    !location.hash&&e.addEventListener&&(window.scrollTo(0,1),MBP.BODY_SCROLL_TOP=1,t=setInterval(function(){i.body&&(clearInterval(t),MBP.BODY_SCROLL_TOP=MBP.getScrollTop(),MBP.hideUrlBar())},15),e.addEventListener("load",function(){setTimeout(function(){MBP.getScrollTop()<20&&MBP.hideUrlBar()},0)}))},MBP.fastButton=function(t,e,i){if(this.handler=e,this.pressedClass=void 0===i?"pressed":i,MBP.listenForGhostClicks(),t.length&&t.length>1)for(var n in t)this.addClickEvent(t[n])
else this.addClickEvent(t)},MBP.fastButton.prototype.handleEvent=function(t){switch(t=t||window.event,t.type){case"touchstart":this.onTouchStart(t)
    break
    case"touchmove":this.onTouchMove(t)
        break
    case"touchend":this.onClick(t)
        break
    case"click":this.onClick(t)}},MBP.fastButton.prototype.onTouchStart=function(e){var i=e.target||e.srcElement
    e.stopPropagation(),i.addEventListener("touchend",this,!1),t.body.addEventListener("touchmove",this,!1),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY,i.className+=" "+this.pressedClass},MBP.fastButton.prototype.onTouchMove=function(t){(Math.abs(t.touches[0].clientX-this.startX)>10||Math.abs(t.touches[0].clientY-this.startY)>10)&&this.reset(t)},MBP.fastButton.prototype.onClick=function(t){t=t||window.event
    var e=t.target||t.srcElement
    t.stopPropagation&&t.stopPropagation(),this.reset(t),this.handler.apply(t.currentTarget,[t]),"touchend"==t.type&&MBP.preventGhostClick(this.startX,this.startY)
    var i=RegExp(" ?"+this.pressedClass,"gi")
    e.className=e.className.replace(i,"")},MBP.fastButton.prototype.reset=function(e){var n=e.target||e.srcElement
    i(n,"touchend",this,!1),i(t.body,"touchmove",this,!1)
    var o=RegExp(" ?"+this.pressedClass,"gi")
    n.className=n.className.replace(o,"")},MBP.fastButton.prototype.addClickEvent=function(t){e(t,"touchstart",this,!1),e(t,"click",this,!1)},MBP.preventGhostClick=function(t,e){MBP.coords.push(t,e),window.setTimeout(function(){MBP.coords.splice(0,2)},2500)},MBP.ghostClickHandler=function(t){if(!MBP.hadTouchEvent&&MBP.dodgyAndroid)return t.stopPropagation(),void t.preventDefault()
    for(var e=0,i=MBP.coords.length;i>e;e+=2){var n=MBP.coords[e],o=MBP.coords[e+1]
        Math.abs(t.clientX-n)<25&&Math.abs(t.clientY-o)<25&&(t.stopPropagation(),t.preventDefault())}},MBP.dodgyAndroid="ontouchstart"in window&&-1!=navigator.userAgent.indexOf("Android 2.3"),MBP.listenForGhostClicks=function(){var i=!1
    return function(){i||(t.addEventListener&&t.addEventListener("click",MBP.ghostClickHandler,!0),e(t.documentElement,"touchstart",function(){MBP.hadTouchEvent=!0},!1),i=!0)}}(),MBP.coords=[],MBP.autogrow=function(t,e){function i(){var t=this.scrollHeight,e=this.clientHeight
    t>e&&(this.style.height=t+3*o+"px")}var n=e?e:12,o=t.currentStyle?t.currentStyle.lineHeight:getComputedStyle(t,null).lineHeight
    o=-1==o.indexOf("px")?n:parseInt(o,10),t.style.overflow="hidden",t.addEventListener?t.addEventListener("input",i,!1):t.attachEvent("onpropertychange",i)},MBP.enableActive=function(){t.addEventListener("touchstart",function(){},!1)},MBP.preventScrolling=function(){t.addEventListener("touchmove",function(t){"range"!==t.target.type&&t.preventDefault()},!1)},MBP.preventZoom=function(){for(var e=t.querySelectorAll("input, select, textarea"),i="width=device-width,initial-scale=1,maximum-scale=",n=0,o=e.length,r=function(){MBP.viewportmeta.content=i+"1"},s=function(){MBP.viewportmeta.content=i+"10"};o>n;n++)e[n].onfocus=r,e[n].onblur=s},MBP.startupImage=function(){var e,i,n,o,r,s
    n=window.devicePixelRatio,o=t.getElementsByTagName("head")[0],"iPad"===navigator.platform?(e=2===n?"img/startup/startup-tablet-portrait-retina.png":"img/startup/startup-tablet-portrait.png",i=2===n?"img/startup/startup-tablet-landscape-retina.png":"img/startup/startup-tablet-landscape.png",r=t.createElement("link"),r.setAttribute("rel","apple-touch-startup-image"),r.setAttribute("media","screen and (orientation: portrait)"),r.setAttribute("href",e),o.appendChild(r),s=t.createElement("link"),s.setAttribute("rel","apple-touch-startup-image"),s.setAttribute("media","screen and (orientation: landscape)"),s.setAttribute("href",i),o.appendChild(s)):(e=2===n?"img/startup/startup-retina.png":"img/startup/startup.png",e=568===screen.height?"img/startup/startup-retina-4in.png":e,r=t.createElement("link"),r.setAttribute("rel","apple-touch-startup-image"),r.setAttribute("href",e),o.appendChild(r)),568===screen.height&&MBP.viewportmeta&&(MBP.viewportmeta.content=MBP.viewportmeta.content.replace(/\bwidth\s*=\s*320\b/,"width=320.1").replace(/\bwidth\s*=\s*device-width\b/,""))}}(document),function(t){t.flexslider=function(e,i){var n=t(e)
    n.vars=t.extend({},t.flexslider.defaults,i)
    var o,r=n.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,a=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,l="click touchend MSPointerUp",c="",h="vertical"===n.vars.direction,u=n.vars.reverse,d=n.vars.itemWidth>0,p="fade"===n.vars.animation,f=""!==n.vars.asNavFor,m={},g=!0
    t.data(e,"flexslider",n),m={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=t(n.vars.selector,n),n.container=t(n.containerSelector,n),n.count=n.slides.length,n.syncExists=t(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=h?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var t=document.createElement("div"),e=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]
        for(var i in e)if(void 0!==t.style[e[i]])return n.pfx=e[i].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0
        return!1}(),""!==n.vars.controlsContainer&&(n.controlsContainer=t(n.vars.controlsContainer).length>0&&t(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=t(n.vars.manualControls).length>0&&t(n.vars.manualControls)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&m.controlNav.setup(),n.vars.directionNav&&m.directionNav.setup(),n.vars.keyboard&&(1===t(n.containerSelector).length||n.vars.multipleKeyboard)&&t(document).bind("keyup",function(t){var e=t.keyCode
        if(!n.animating&&(39===e||37===e)){var i=39===e?n.getTarget("next"):37===e?n.getTarget("prev"):!1
            n.flexAnimate(i,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(t,e){t.preventDefault()
        var i=n.getTarget(0>e?"next":"prev")
        n.flexAnimate(i,n.vars.pauseOnAction)}),n.vars.pausePlay&&m.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&m.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&m.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),f&&m.asNav.setup(),a&&n.vars.touch&&m.touch(),(!p||p&&n.vars.smoothHeight)&&t(window).bind("resize orientationchange focus",m.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(r+"active-slide").eq(n.currentItem).addClass(r+"active-slide"),s?(e._slider=n,n.slides.each(function(){var e=this
        e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(t){t.preventDefault(),t.currentTarget._gesture&&t.currentTarget._gesture.addPointer(t.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault()
            var i=t(this),o=i.index()
            t(n.vars.asNavFor).data("flexslider").animating||i.hasClass("active")||(n.direction=n.currentItem<o?"next":"prev",n.flexAnimate(o,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(l,function(e){e.preventDefault()
        var i=t(this),o=i.index(),s=i.offset().left-t(n).scrollLeft()
        0>=s&&i.hasClass(r+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):t(n.vars.asNavFor).data("flexslider").animating||i.hasClass(r+"active-slide")||(n.direction=n.currentItem<o?"next":"prev",n.flexAnimate(o,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?m.controlNav.setupManual():m.controlNav.setupPaging()},setupPaging:function(){var e,i,o="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",s=1
        if(n.controlNavScaffold=t('<ol class="'+r+"control-nav "+r+o+'"></ol>'),n.pagingCount>1)for(var a=0;a<n.pagingCount;a++){if(i=n.slides.eq(a),e="thumbnails"===n.vars.controlNav?'<img src="'+i.attr("data-thumb")+'"/>':"<a>"+s+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var h=i.attr("data-thumbcaption")
            ""!=h&&void 0!=h&&(e+='<span class="'+r+'caption">'+h+"</span>")}n.controlNavScaffold.append("<li>"+e+"</li>"),s++}n.controlsContainer?t(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),m.controlNav.set(),m.controlNav.active(),n.controlNavScaffold.delegate("a, img",l,function(e){if(e.preventDefault(),""===c||c===e.type){var i=t(this),o=n.controlNav.index(i)
            i.hasClass(r+"active")||(n.direction=o>n.currentSlide?"next":"prev",n.flexAnimate(o,n.vars.pauseOnAction))}""===c&&(c=e.type),m.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,m.controlNav.active(),n.controlNav.bind(l,function(e){if(e.preventDefault(),""===c||c===e.type){var i=t(this),o=n.controlNav.index(i)
        i.hasClass(r+"active")||(n.direction=o>n.currentSlide?"next":"prev",n.flexAnimate(o,n.vars.pauseOnAction))}""===c&&(c=e.type),m.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a"
        n.controlNav=t("."+r+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(r+"active").eq(n.animatingTo).addClass(r+"active")},update:function(e,i){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append(t("<li><a>"+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(i).closest("li").remove(),m.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(i,e):m.controlNav.active()}},directionNav:{setup:function(){var e=t('<ul class="'+r+'direction-nav"><li><a class="'+r+'prev" href="#">'+n.vars.prevText+'</a></li><li><a class="'+r+'next" href="#">'+n.vars.nextText+"</a></li></ul>")
        n.controlsContainer?(t(n.controlsContainer).append(e),n.directionNav=t("."+r+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=t("."+r+"direction-nav li a",n)),m.directionNav.update(),n.directionNav.bind(l,function(e){e.preventDefault()
            var i;(""===c||c===e.type)&&(i=n.getTarget(t(this).hasClass(r+"next")?"next":"prev"),n.flexAnimate(i,n.vars.pauseOnAction)),""===c&&(c=e.type),m.setToClearWatchedEvent()})},update:function(){var t=r+"disabled"
        1===n.pagingCount?n.directionNav.addClass(t).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(t).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(t).filter("."+r+"prev").addClass(t).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(t).filter("."+r+"next").addClass(t).attr("tabindex","-1"):n.directionNav.removeClass(t).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=t('<div class="'+r+'pauseplay"><a></a></div>')
        n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=t("."+r+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=t("."+r+"pauseplay a",n)),m.pausePlay.update(n.vars.slideshow?r+"pause":r+"play"),n.pausePlay.bind(l,function(e){e.preventDefault(),(""===c||c===e.type)&&(t(this).hasClass(r+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===c&&(c=e.type),m.setToClearWatchedEvent()})},update:function(t){"play"===t?n.pausePlay.removeClass(r+"pause").addClass(r+"play").html(n.vars.playText):n.pausePlay.removeClass(r+"play").addClass(r+"pause").html(n.vars.pauseText)}},touch:function(){function t(t){n.animating?t.preventDefault():(window.navigator.msPointerEnabled||1===t.touches.length)&&(n.pause(),g=h?n.h:n.w,y=+new Date,E=t.touches[0].pageX,b=t.touches[0].pageY,m=d&&u&&n.animatingTo===n.last?0:d&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:d&&n.currentSlide===n.last?n.limit:d?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*g:(n.currentSlide+n.cloneOffset)*g,c=h?b:E,f=h?E:b,e.addEventListener("touchmove",i,!1),e.addEventListener("touchend",o,!1))}function i(t){E=t.touches[0].pageX,b=t.touches[0].pageY,v=h?c-b:c-E,_=h?Math.abs(v)<Math.abs(E-f):Math.abs(v)<Math.abs(b-f)
        var e=500;(!_||+new Date-y>e)&&(t.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(v/=0===n.currentSlide&&0>v||n.currentSlide===n.last&&v>0?Math.abs(v)/g+2:1),n.setProps(m+v,"setTouch")))}function o(){if(e.removeEventListener("touchmove",i,!1),n.animatingTo===n.currentSlide&&!_&&null!==v){var t=u?-v:v,r=n.getTarget(t>0?"next":"prev")
        n.canAdvance(r)&&(+new Date-y<550&&Math.abs(t)>50||Math.abs(t)>g/2)?n.flexAnimate(r,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}e.removeEventListener("touchend",o,!1),c=null,f=null,v=null,m=null}function r(t){t.stopPropagation(),n.animating?t.preventDefault():(n.pause(),e._gesture.addPointer(t.pointerId),x=0,g=h?n.h:n.w,y=+new Date,m=d&&u&&n.animatingTo===n.last?0:d&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:d&&n.currentSlide===n.last?n.limit:d?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*g:(n.currentSlide+n.cloneOffset)*g)}function a(t){t.stopPropagation()
        var i=t.target._slider
        if(i){var n=-t.translationX,o=-t.translationY
            return x+=h?o:n,v=x,_=h?Math.abs(x)<Math.abs(-n):Math.abs(x)<Math.abs(-o),t.detail===t.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){e._gesture.stop()}):void((!_||+new Date-y>500)&&(t.preventDefault(),!p&&i.transitions&&(i.vars.animationLoop||(v=x/(0===i.currentSlide&&0>x||i.currentSlide===i.last&&x>0?Math.abs(x)/g+2:1)),i.setProps(m+v,"setTouch"))))}}function l(t){t.stopPropagation()
        var e=t.target._slider
        if(e){if(e.animatingTo===e.currentSlide&&!_&&null!==v){var i=u?-v:v,n=e.getTarget(i>0?"next":"prev")
            e.canAdvance(n)&&(+new Date-y<550&&Math.abs(i)>50||Math.abs(i)>g/2)?e.flexAnimate(n,e.vars.pauseOnAction):p||e.flexAnimate(e.currentSlide,e.vars.pauseOnAction,!0)}c=null,f=null,v=null,m=null,x=0}}var c,f,m,g,v,y,_=!1,E=0,b=0,x=0
        s?(e.style.msTouchAction="none",e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",r,!1),e._slider=n,e.addEventListener("MSGestureChange",a,!1),e.addEventListener("MSGestureEnd",l,!1)):e.addEventListener("touchstart",t,!1)},resize:function(){!n.animating&&n.is(":visible")&&(d||n.doMath(),p?m.smoothHeight():d?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):h?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&m.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(t){if(!h||p){var e=p?n:n.viewport
        t?e.animate({height:n.slides.eq(n.animatingTo).height()},t):e.height(n.slides.eq(n.animatingTo).height())}},sync:function(e){var i=t(n.vars.sync).data("flexslider"),o=n.animatingTo
        switch(e){case"animate":i.flexAnimate(o,n.vars.pauseOnAction,!1,!0)
            break
            case"play":i.playing||i.asNav||i.play()
                break
            case"pause":i.pause()}},uniqueID:function(e){return e.find("[id]").each(function(){var e=t(this)
        e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var t=["webkit","moz","ms","o"]
        if("hidden"in document)return"hidden"
        for(var e=0;e<t.length;e++)t[e]+"Hidden"in document&&(m.pauseInvisible.visProp=t[e]+"Hidden")
        if(m.pauseInvisible.visProp){var i=m.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange"
            document.addEventListener(i,function(){m.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){return document[m.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(o),o=setTimeout(function(){c=""},3e3)}},n.flexAnimate=function(e,i,o,s,l){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),f&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,l)||o)&&n.is(":visible")){if(f&&s){var c=t(n.vars.asNavFor).data("flexslider")
        if(n.atEnd=0===e||e===n.count-1,c.flexAnimate(e,!0,!1,!0,l),n.direction=n.currentItem<e?"next":"prev",c.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(r+"active-slide").eq(e).addClass(r+"active-slide"),!1
        n.currentItem=e,n.slides.removeClass(r+"active-slide").eq(e).addClass(r+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,i&&n.pause(),n.vars.before(n),n.syncExists&&!l&&m.sync("animate"),n.vars.controlNav&&m.controlNav.active(),d||n.slides.removeClass(r+"active-slide").eq(e).addClass(r+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&m.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)a?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(_)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup))
    else{var g,v,y,_=h?n.slides.filter(":first").height():n.computedW
        d?(g=n.vars.itemMargin,y=(n.itemW+g)*n.move*n.animatingTo,v=y>n.limit&&1!==n.visible?n.limit:y):v=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*_:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*_:u?(n.count-1-e+n.cloneOffset)*_:(e+n.cloneOffset)*_,n.setProps(v,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){n.wrapup(_)})):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(_)})}n.vars.smoothHeight&&m.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(t){p||d||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(t,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(t,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&g&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&m.pausePlay.update("play"),n.syncExists&&m.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&m.pausePlay.update("pause"),n.syncExists&&m.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(t,e){var i=f?n.pagingCount-1:n.last
        return e?!0:f&&n.currentItem===n.count-1&&0===t&&"prev"===n.direction?!0:f&&0===n.currentItem&&t===n.pagingCount-1&&"next"!==n.direction?!1:t!==n.currentSlide||f?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&t===i&&"next"!==n.direction?!1:n.atEnd&&n.currentSlide===i&&0===t&&"next"===n.direction?!1:!0:!1},n.getTarget=function(t){return n.direction=t,"next"===t?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(t,e,i){var o=function(){var i=t?t:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,o=function(){if(d)return"setTouch"===e?t:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:i
        switch(e){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*t:(n.currentSlide+n.cloneOffset)*t
            case"setTouch":return u?t:t
            case"jumpEnd":return u?t:n.count*t
            case"jumpStart":return u?n.count*t:t
            default:return t}}()
        return-1*o+"px"}()
        n.transitions&&(o=h?"translate3d(0,"+o+",0)":"translate3d("+o+",0,0)",i=void 0!==i?i/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",i),n.container.css("transition-duration",i)),n.args[n.prop]=o,(n.transitions||void 0===i)&&n.container.css(n.args),n.container.css("transform",o)},n.setup=function(e){if(p)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(a?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&m.smoothHeight()
    else{var i,o
        "init"===e&&(n.viewport=t('<div class="'+r+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(o=t.makeArray(n.slides).reverse(),n.slides=t(o),n.container.empty().append(n.slides))),n.vars.animationLoop&&!d&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),m.uniqueID(n.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(n.container),m.uniqueID(n.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(n.container)),n.newSlides=t(n.vars.selector,n),i=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,h&&!d?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(i*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(i*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,"float":"left",display:"block"}),n.vars.smoothHeight&&m.smoothHeight()},"init"===e?100:0))}d||n.slides.removeClass(r+"active-slide").eq(n.currentSlide).addClass(r+"active-slide"),n.vars.init(n)},n.doMath=function(){var t=n.slides.first(),e=n.vars.itemMargin,i=n.vars.minItems,o=n.vars.maxItems
        n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=t.height(),n.boxPadding=t.outerWidth()-t.width(),d?(n.itemT=n.vars.itemWidth+e,n.minW=i?i*n.itemT:n.w,n.maxW=o?o*n.itemT-e:n.w,n.itemW=n.minW>n.w?(n.w-e*(i-1))/i:n.maxW<n.w?(n.w-e*(o-1))/o:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+e*(n.count-1):(n.itemW+e)*n.count-n.w-e):(n.itemW=n.w,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding},n.update=function(t,e){n.doMath(),d||(t<n.currentSlide?n.currentSlide+=1:t<=n.currentSlide&&0!==t&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===e&&!d||n.pagingCount>n.controlNav.length?m.controlNav.update("add"):("remove"===e&&!d||n.pagingCount<n.controlNav.length)&&(d&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),m.controlNav.update("remove",n.last))),n.vars.directionNav&&m.directionNav.update()},n.addSlide=function(e,i){var o=t(e)
        n.count+=1,n.last=n.count-1,h&&u?void 0!==i?n.slides.eq(n.count-i).after(o):n.container.prepend(o):void 0!==i?n.slides.eq(i).before(o):n.container.append(o),n.update(i,"add"),n.slides=t(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var i=isNaN(e)?n.slides.index(t(e)):e
        n.count-=1,n.last=n.count-1,isNaN(e)?t(e,n.slides).remove():h&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(i,"remove"),n.slides=t(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},m.init()},t(window).blur(function(){focused=!1}).focus(function(){focused=!0}),t.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},t.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var i=t(this),n=e.selector?e.selector:".slides > li",o=i.find(n)
    1===o.length&&e.allowOneSlide===!0||0===o.length?(o.fadeIn(400),e.start&&e.start(i)):void 0===i.data("flexslider")&&new t.flexslider(this,e)})
    var i=t(this).data("flexslider")
    switch(e){case"play":i.play()
        break
        case"pause":i.pause()
            break
        case"stop":i.stop()
            break
        case"next":i.flexAnimate(i.getTarget("next"),!0)
            break
        case"prev":case"previous":i.flexAnimate(i.getTarget("prev"),!0)
        break
        default:"number"==typeof e&&i.flexAnimate(e,!0)}}}(jQuery),function(t,e,i,n){"use strict"
    var o=i("html"),r=i(t),s=i(e),a=i.fancybox=function(){a.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),c=null,h=e.createTouch!==n,u=function(t){return t&&t.hasOwnProperty&&t instanceof i},d=function(t){return t&&"string"===i.type(t)},p=function(t){return d(t)&&t.indexOf("%")>0},f=function(t){return t&&!(t.style.overflow&&"hidden"===t.style.overflow)&&(t.clientWidth&&t.scrollWidth>t.clientWidth||t.clientHeight&&t.scrollHeight>t.clientHeight)},m=function(t,e){var i=parseInt(t,10)||0
        return e&&p(t)&&(i=a.getViewport()[e]/100*i),Math.ceil(i)},g=function(t,e){return m(t,e)+"px"}
    i.extend(a,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!h,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(t,e){return t&&(i.isPlainObject(e)||(e={}),!1!==a.close(!0))?(i.isArray(t)||(t=u(t)?i(t).get():[t]),i.each(t,function(o,r){var s,l,c,h,p,f,m,g={}
        "object"===i.type(r)&&(r.nodeType&&(r=i(r)),u(r)?(g={href:r.data("fancybox-href")||r.attr("href"),title:r.data("fancybox-title")||r.attr("title"),isDom:!0,element:r},i.metadata&&i.extend(!0,g,r.metadata())):g=r),s=e.href||g.href||(d(r)?r:null),l=e.title!==n?e.title:g.title||"",c=e.content||g.content,h=c?"html":e.type||g.type,!h&&g.isDom&&(h=r.data("fancybox-type"),h||(p=r.prop("class").match(/fancybox\.(\w+)/),h=p?p[1]:null)),d(s)&&(h||(a.isImage(s)?h="image":a.isSWF(s)?h="swf":"#"===s.charAt(0)?h="inline":d(r)&&(h="html",c=r)),"ajax"===h&&(f=s.split(/\s+/,2),s=f.shift(),m=f.shift())),c||("inline"===h?s?c=i(d(s)?s.replace(/.*(?=#[^\s]+$)/,""):s):g.isDom&&(c=r):"html"===h?c=s:h||s||!g.isDom||(h="inline",c=r)),i.extend(g,{href:s,type:h,content:c,title:l,selector:m}),t[o]=g}),a.opts=i.extend(!0,{},a.defaults,e),e.keys!==n&&(a.opts.keys=e.keys?i.extend({},a.defaults.keys,e.keys):!1),a.group=t,a._start(a.opts.index)):n},cancel:function(){var t=a.coming
        t&&!1!==a.trigger("onCancel")&&(a.hideLoading(),a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload&&(a.imgPreload.onload=a.imgPreload.onerror=null),t.wrap&&t.wrap.stop(!0,!0).trigger("onReset").remove(),a.coming=null,a.current||a._afterZoomOut(t))},close:function(t){a.cancel(),!1!==a.trigger("beforeClose")&&(a.unbindEvents(),a.isActive&&(a.isOpen&&t!==!0?(a.isOpen=a.isOpened=!1,a.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),a.wrap.stop(!0,!0).removeClass("fancybox-opened"),a.transitions[a.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),a._afterZoomOut())))},play:function(t){var e=function(){clearTimeout(a.player.timer)},i=function(){e(),a.current&&a.player.isActive&&(a.player.timer=setTimeout(a.next,a.current.playSpeed))},n=function(){e(),s.unbind(".player"),a.player.isActive=!1,a.trigger("onPlayEnd")},o=function(){a.current&&(a.current.loop||a.current.index<a.group.length-1)&&(a.player.isActive=!0,s.bind({"onCancel.player beforeClose.player":n,"onUpdate.player":i,"beforeLoad.player":e}),i(),a.trigger("onPlayStart"))}
        t===!0||!a.player.isActive&&t!==!1?o():n()},next:function(t){var e=a.current
        e&&(d(t)||(t=e.direction.next),a.jumpto(e.index+1,t,"next"))},prev:function(t){var e=a.current
        e&&(d(t)||(t=e.direction.prev),a.jumpto(e.index-1,t,"prev"))},jumpto:function(t,e,i){var o=a.current
        o&&(t=m(t),a.direction=e||o.direction[t>=o.index?"next":"prev"],a.router=i||"jumpto",o.loop&&(0>t&&(t=o.group.length+t%o.group.length),t%=o.group.length),o.group[t]!==n&&(a.cancel(),a._start(t)))},reposition:function(t,e){var n,o=a.current,r=o?o.wrap:null
        r&&(n=a._getPosition(e),t&&"scroll"===t.type?(delete n.position,r.stop(!0,!0).animate(n,200)):(r.css(n),o.pos=i.extend({},o.dim,n)))},update:function(t){var e=t&&t.type,i=!e||"orientationchange"===e
        i&&(clearTimeout(c),c=null),a.isOpen&&!c&&(c=setTimeout(function(){var n=a.current
            n&&!a.isClosing&&(a.wrap.removeClass("fancybox-tmp"),(i||"load"===e||"resize"===e&&n.autoResize)&&a._setDimension(),"scroll"===e&&n.canShrink||a.reposition(t),a.trigger("onUpdate"),c=null)},i&&!h?0:300))},toggle:function(t){a.isOpen&&(a.current.fitToView="boolean"===i.type(t)?t:!a.current.fitToView,h&&(a.wrap.removeAttr("style").addClass("fancybox-tmp"),a.trigger("onUpdate")),a.update())},hideLoading:function(){s.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var t,e
        a.hideLoading(),t=i('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"),s.bind("keydown.loading",function(t){27===(t.which||t.keyCode)&&(t.preventDefault(),a.cancel())}),a.defaults.fixed||(e=a.getViewport(),t.css({position:"absolute",top:.5*e.h+e.y,left:.5*e.w+e.x}))},getViewport:function(){var e=a.current&&a.current.locked||!1,i={x:r.scrollLeft(),y:r.scrollTop()}
        return e?(i.w=e[0].clientWidth,i.h=e[0].clientHeight):(i.w=h&&t.innerWidth?t.innerWidth:r.width(),i.h=h&&t.innerHeight?t.innerHeight:r.height()),i},unbindEvents:function(){a.wrap&&u(a.wrap)&&a.wrap.unbind(".fb"),s.unbind(".fb"),r.unbind(".fb")},bindEvents:function(){var t,e=a.current
        e&&(r.bind("orientationchange.fb"+(h?"":" resize.fb")+(e.autoCenter&&!e.locked?" scroll.fb":""),a.update),t=e.keys,t&&s.bind("keydown.fb",function(o){var r=o.which||o.keyCode,s=o.target||o.srcElement
            return 27===r&&a.coming?!1:(o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||s&&(s.type||i(s).is("[contenteditable]"))||i.each(t,function(t,s){return e.group.length>1&&s[r]!==n?(a[t](s[r]),o.preventDefault(),!1):i.inArray(r,s)>-1?(a[t](),o.preventDefault(),!1):n}),n)}),i.fn.mousewheel&&e.mouseWheel&&a.wrap.bind("mousewheel.fb",function(t,n,o,r){for(var s=t.target||null,l=i(s),c=!1;l.length&&!(c||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)c=f(l[0]),l=i(l).parent()
            0===n||c||a.group.length>1&&!e.canShrink&&(r>0||o>0?a.prev(r>0?"down":"left"):(0>r||0>o)&&a.next(0>r?"up":"right"),t.preventDefault())}))},trigger:function(t,e){var n,o=e||a.coming||a.current
        if(o){if(i.isFunction(o[t])&&(n=o[t].apply(o,Array.prototype.slice.call(arguments,1))),n===!1)return!1
            o.helpers&&i.each(o.helpers,function(e,n){n&&a.helpers[e]&&i.isFunction(a.helpers[e][t])&&a.helpers[e][t](i.extend(!0,{},a.helpers[e].defaults,n),o)}),s.trigger(t)}},isImage:function(t){return d(t)&&t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(t){return d(t)&&t.match(/\.(swf)((\?|#).*)?$/i)},_start:function(t){var e,o,r,s,l,c={}
        if(t=m(t),e=a.group[t]||null,!e)return!1
        if(c=i.extend(!0,{},a.opts,e),s=c.margin,l=c.padding,"number"===i.type(s)&&(c.margin=[s,s,s,s]),"number"===i.type(l)&&(c.padding=[l,l,l,l]),c.modal&&i.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),c.autoSize&&(c.autoWidth=c.autoHeight=!0),"auto"===c.width&&(c.autoWidth=!0),"auto"===c.height&&(c.autoHeight=!0),c.group=a.group,c.index=t,a.coming=c,!1===a.trigger("beforeLoad"))return a.coming=null,n
        if(r=c.type,o=c.href,!r)return a.coming=null,a.current&&a.router&&"jumpto"!==a.router?(a.current.index=t,a[a.router](a.direction)):!1
        if(a.isActive=!0,("image"===r||"swf"===r)&&(c.autoHeight=c.autoWidth=!1,c.scrolling="visible"),"image"===r&&(c.aspectRatio=!0),"iframe"===r&&h&&(c.scrolling="scroll"),c.wrap=i(c.tpl.wrap).addClass("fancybox-"+(h?"mobile":"desktop")+" fancybox-type-"+r+" fancybox-tmp "+c.wrapCSS).appendTo(c.parent||"body"),i.extend(c,{skin:i(".fancybox-skin",c.wrap),outer:i(".fancybox-outer",c.wrap),inner:i(".fancybox-inner",c.wrap)}),i.each(["Top","Right","Bottom","Left"],function(t,e){c.skin.css("padding"+e,g(c.padding[t]))}),a.trigger("onReady"),"inline"===r||"html"===r){if(!c.content||!c.content.length)return a._error("content")}else if(!o)return a._error("href")
        "image"===r?a._loadImage():"ajax"===r?a._loadAjax():"iframe"===r?a._loadIframe():a._afterLoad()},_error:function(t){i.extend(a.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:t,content:a.coming.tpl.error}),a._afterLoad()},_loadImage:function(){var t=a.imgPreload=new Image
        t.onload=function(){this.onload=this.onerror=null,a.coming.width=this.width/a.opts.pixelRatio,a.coming.height=this.height/a.opts.pixelRatio,a._afterLoad()},t.onerror=function(){this.onload=this.onerror=null,a._error("image")},t.src=a.coming.href,t.complete!==!0&&a.showLoading()},_loadAjax:function(){var t=a.coming
        a.showLoading(),a.ajaxLoad=i.ajax(i.extend({},t.ajax,{url:t.href,error:function(t,e){a.coming&&"abort"!==e?a._error("ajax",t):a.hideLoading()},success:function(e,i){"success"===i&&(t.content=e,a._afterLoad())}}))},_loadIframe:function(){var t=a.coming,e=i(t.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",h?"auto":t.iframe.scrolling).attr("src",t.href)
        i(t.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(t){}}),t.iframe.preload&&(a.showLoading(),e.one("load",function(){i(this).data("ready",1),h||i(this).bind("load.fb",a.update),i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),a._afterLoad()})),t.content=e.appendTo(t.inner),t.iframe.preload||a._afterLoad()},_preloadImages:function(){var t,e,i=a.group,n=a.current,o=i.length,r=n.preload?Math.min(n.preload,o-1):0
        for(e=1;r>=e;e+=1)t=i[(n.index+e)%o],"image"===t.type&&t.href&&((new Image).src=t.href)},_afterLoad:function(){var t,e,o,r,s,l,c=a.coming,h=a.current,d="fancybox-placeholder"
        if(a.hideLoading(),c&&a.isActive!==!1){if(!1===a.trigger("afterLoad",c,h))return c.wrap.stop(!0).trigger("onReset").remove(),a.coming=null,n
            switch(h&&(a.trigger("beforeChange",h),h.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),a.unbindEvents(),t=c,e=c.content,o=c.type,r=c.scrolling,i.extend(a,{wrap:t.wrap,skin:t.skin,outer:t.outer,inner:t.inner,current:t,previous:h}),s=t.href,o){case"inline":case"ajax":case"html":t.selector?e=i("<div>").html(e).find(t.selector):u(e)&&(e.data(d)||e.data(d,i('<div class="'+d+'"></div>').insertAfter(e).hide()),e=e.show().detach(),t.wrap.bind("onReset",function(){i(this).find(e).length&&e.hide().replaceAll(e.data(d)).data(d,!1)}))
                break
                case"image":e=t.tpl.image.replace("{href}",s)
                    break
                case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+s+'"></param>',l="",i.each(t.swf,function(t,i){e+='<param name="'+t+'" value="'+i+'"></param>',l+=" "+t+'="'+i+'"'}),e+='<embed src="'+s+'" type="application/x-shockwave-flash" width="100%" height="100%"'+l+"></embed></object>"}u(e)&&e.parent().is(t.inner)||t.inner.append(e),a.trigger("beforeShow"),t.inner.css("overflow","yes"===r?"scroll":"no"===r?"hidden":r),a._setDimension(),a.reposition(),a.isOpen=!1,a.coming=null,a.bindEvents(),a.isOpened?h.prevMethod&&a.transitions[h.prevMethod]():i(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(),a.transitions[a.isOpened?t.nextMethod:t.openMethod](),a._preloadImages()}},_setDimension:function(){var t,e,n,o,r,s,l,c,h,u,d,f,v,y,_,E=a.getViewport(),b=0,x=!1,w=!1,T=a.wrap,S=a.skin,M=a.inner,C=a.current,P=C.width,O=C.height,I=C.minWidth,L=C.minHeight,k=C.maxWidth,A=C.maxHeight,R=C.scrolling,N=C.scrollOutside?C.scrollbarWidth:0,D=C.margin,H=m(D[1]+D[3]),B=m(D[0]+D[2])
        if(T.add(S).add(M).width("auto").height("auto").removeClass("fancybox-tmp"),t=m(S.outerWidth(!0)-S.width()),e=m(S.outerHeight(!0)-S.height()),n=H+t,o=B+e,r=p(P)?(E.w-n)*m(P)/100:P,s=p(O)?(E.h-o)*m(O)/100:O,"iframe"===C.type){if(y=C.content,C.autoHeight&&1===y.data("ready"))try{y[0].contentWindow.document.location&&(M.width(r).height(9999),_=y.contents().find("body"),N&&_.css("overflow-x","hidden"),s=_.outerHeight(!0))}catch(W){}}else(C.autoWidth||C.autoHeight)&&(M.addClass("fancybox-tmp"),C.autoWidth||M.width(r),C.autoHeight||M.height(s),C.autoWidth&&(r=M.width()),C.autoHeight&&(s=M.height()),M.removeClass("fancybox-tmp"))
        if(P=m(r),O=m(s),h=r/s,I=m(p(I)?m(I,"w")-n:I),k=m(p(k)?m(k,"w")-n:k),L=m(p(L)?m(L,"h")-o:L),A=m(p(A)?m(A,"h")-o:A),l=k,c=A,C.fitToView&&(k=Math.min(E.w-n,k),A=Math.min(E.h-o,A)),f=E.w-H,v=E.h-B,C.aspectRatio?(P>k&&(P=k,O=m(P/h)),O>A&&(O=A,P=m(O*h)),I>P&&(P=I,O=m(P/h)),L>O&&(O=L,P=m(O*h))):(P=Math.max(I,Math.min(P,k)),C.autoHeight&&"iframe"!==C.type&&(M.width(P),O=M.height()),O=Math.max(L,Math.min(O,A))),C.fitToView)if(M.width(P).height(O),T.width(P+t),u=T.width(),d=T.height(),C.aspectRatio)for(;(u>f||d>v)&&P>I&&O>L&&!(b++>19);)O=Math.max(L,Math.min(A,O-10)),P=m(O*h),I>P&&(P=I,O=m(P/h)),P>k&&(P=k,O=m(P/h)),M.width(P).height(O),T.width(P+t),u=T.width(),d=T.height()
        else P=Math.max(I,Math.min(P,P-(u-f))),O=Math.max(L,Math.min(O,O-(d-v)))
        N&&"auto"===R&&s>O&&f>P+t+N&&(P+=N),M.width(P).height(O),T.width(P+t),u=T.width(),d=T.height(),x=(u>f||d>v)&&P>I&&O>L,w=C.aspectRatio?l>P&&c>O&&r>P&&s>O:(l>P||c>O)&&(r>P||s>O),i.extend(C,{dim:{width:g(u),height:g(d)},origWidth:r,origHeight:s,canShrink:x,canExpand:w,wPadding:t,hPadding:e,wrapSpace:d-S.outerHeight(!0),skinSpace:S.height()-O}),!y&&C.autoHeight&&O>L&&A>O&&!w&&M.height("auto")},_getPosition:function(t){var e=a.current,i=a.getViewport(),n=e.margin,o=a.wrap.width()+n[1]+n[3],r=a.wrap.height()+n[0]+n[2],s={position:"absolute",top:n[0],left:n[3]}
        return e.autoCenter&&e.fixed&&!t&&r<=i.h&&o<=i.w?s.position="fixed":e.locked||(s.top+=i.y,s.left+=i.x),s.top=g(Math.max(s.top,s.top+(i.h-r)*e.topRatio)),s.left=g(Math.max(s.left,s.left+(i.w-o)*e.leftRatio)),s},_afterZoomIn:function(){var t=a.current
        t&&(a.isOpen=a.isOpened=!0,a.wrap.css("overflow","visible").addClass("fancybox-opened"),a.update(),(t.closeClick||t.nextClick&&a.group.length>1)&&a.inner.css("cursor","pointer").bind("click.fb",function(e){i(e.target).is("a")||i(e.target).parent().is("a")||(e.preventDefault(),a[t.closeClick?"close":"next"]())}),t.closeBtn&&i(t.tpl.closeBtn).appendTo(a.skin).bind("click.fb",function(t){t.preventDefault(),a.close()}),t.arrows&&a.group.length>1&&((t.loop||t.index>0)&&i(t.tpl.prev).appendTo(a.outer).bind("click.fb",a.prev),(t.loop||t.index<a.group.length-1)&&i(t.tpl.next).appendTo(a.outer).bind("click.fb",a.next)),a.trigger("afterShow"),t.loop||t.index!==t.group.length-1?a.opts.autoPlay&&!a.player.isActive&&(a.opts.autoPlay=!1,a.play()):a.play(!1))},_afterZoomOut:function(t){t=t||a.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(a,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),a.trigger("afterClose",t)}}),a.transitions={getOrigPosition:function(){var t=a.current,e=t.element,i=t.orig,n={},o=50,r=50,s=t.hPadding,l=t.wPadding,c=a.getViewport()
        return!i&&t.isDom&&e.is(":visible")&&(i=e.find("img:first"),i.length||(i=e)),u(i)?(n=i.offset(),i.is("img")&&(o=i.outerWidth(),r=i.outerHeight())):(n.top=c.y+(c.h-r)*t.topRatio,n.left=c.x+(c.w-o)*t.leftRatio),("fixed"===a.wrap.css("position")||t.locked)&&(n.top-=c.y,n.left-=c.x),n={top:g(n.top-s*t.topRatio),left:g(n.left-l*t.leftRatio),width:g(o+l),height:g(r+s)}},step:function(t,e){var i,n,o,r=e.prop,s=a.current,l=s.wrapSpace,c=s.skinSpace;("width"===r||"height"===r)&&(i=e.end===e.start?1:(t-e.start)/(e.end-e.start),a.isClosing&&(i=1-i),n="width"===r?s.wPadding:s.hPadding,o=t-n,a.skin[r](m("width"===r?o:o-l*i)),a.inner[r](m("width"===r?o:o-l*i-c*i)))},zoomIn:function(){var t=a.current,e=t.pos,n=t.openEffect,o="elastic"===n,r=i.extend({opacity:1},e)
        delete r.position,o?(e=this.getOrigPosition(),t.openOpacity&&(e.opacity=.1)):"fade"===n&&(e.opacity=.1),a.wrap.css(e).animate(r,{duration:"none"===n?0:t.openSpeed,easing:t.openEasing,step:o?this.step:null,complete:a._afterZoomIn})},zoomOut:function(){var t=a.current,e=t.closeEffect,i="elastic"===e,n={opacity:.1}
        i&&(n=this.getOrigPosition(),t.closeOpacity&&(n.opacity=.1)),a.wrap.animate(n,{duration:"none"===e?0:t.closeSpeed,easing:t.closeEasing,step:i?this.step:null,complete:a._afterZoomOut})},changeIn:function(){var t,e=a.current,i=e.nextEffect,n=e.pos,o={opacity:1},r=a.direction,s=200
        n.opacity=.1,"elastic"===i&&(t="down"===r||"up"===r?"top":"left","down"===r||"right"===r?(n[t]=g(m(n[t])-s),o[t]="+="+s+"px"):(n[t]=g(m(n[t])+s),o[t]="-="+s+"px")),"none"===i?a._afterZoomIn():a.wrap.css(n).animate(o,{duration:e.nextSpeed,easing:e.nextEasing,complete:a._afterZoomIn})},changeOut:function(){var t=a.previous,e=t.prevEffect,n={opacity:.1},o=a.direction,r=200
        "elastic"===e&&(n["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"="+r+"px"),t.wrap.animate(n,{duration:"none"===e?0:t.prevSpeed,easing:t.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},a.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!h,fixed:!0},overlay:null,fixed:!1,el:i("html"),create:function(t){t=i.extend({},this.defaults,t),this.overlay&&this.close(),this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(a.coming?a.coming.parent:t.parent),this.fixed=!1,t.fixed&&a.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(t){var e=this
        t=i.extend({},this.defaults,t),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(t),this.fixed||(r.bind("resize.overlay",i.proxy(this.update,this)),this.update()),t.closeClick&&this.overlay.bind("click.overlay",function(t){return i(t.target).hasClass("fancybox-overlay")?(a.isActive?a.close():e.close(),!1):n}),this.overlay.css(t.css).show()},close:function(){var t,e
        r.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(i(".fancybox-margin").removeClass("fancybox-margin"),t=r.scrollTop(),e=r.scrollLeft(),this.el.removeClass("fancybox-lock"),r.scrollTop(t).scrollLeft(e)),i(".fancybox-overlay").remove().hide(),i.extend(this,{overlay:null,fixed:!1})},update:function(){var t,i="100%"
        this.overlay.width(i).height("100%"),l?(t=Math.max(e.documentElement.offsetWidth,e.body.offsetWidth),s.width()>t&&(i=s.width())):s.width()>r.width()&&(i=s.width()),this.overlay.width(i).height(s.height())},onReady:function(t,e){var n=this.overlay
        i(".fancybox-overlay").stop(!0,!0),n||this.create(t),t.locked&&this.fixed&&e.fixed&&(n||(this.margin=s.height()>r.height()?i("html").css("margin-right").replace("px",""):!1),e.locked=this.overlay.append(e.wrap),e.fixed=!1),t.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(t,e){var n,o
        e.locked&&(this.margin!==!1&&(i("*").filter(function(){return"fixed"===i(this).css("position")&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),n=r.scrollTop(),o=r.scrollLeft(),this.el.addClass("fancybox-lock"),r.scrollTop(n).scrollLeft(o)),this.open(t)},onUpdate:function(){this.fixed||this.update()},afterClose:function(t){this.overlay&&!a.coming&&this.overlay.fadeOut(t.speedOut,i.proxy(this.close,this))}},a.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(t){var e,n,o=a.current,r=o.title,s=t.type
        if(i.isFunction(r)&&(r=r.call(o.element,o)),d(r)&&""!==i.trim(r)){switch(e=i('<div class="fancybox-title fancybox-title-'+s+'-wrap">'+r+"</div>"),s){case"inside":n=a.skin
            break
            case"outside":n=a.wrap
                break
            case"over":n=a.inner
                break
            default:n=a.skin,e.appendTo("body"),l&&e.width(e.width()),e.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(m(e.css("margin-bottom")))}e["top"===t.position?"prependTo":"appendTo"](n)}}},i.fn.fancybox=function(t){var e,n=i(this),o=this.selector||"",r=function(r){var s,l,c=i(this).blur(),h=e
        r.ctrlKey||r.altKey||r.shiftKey||r.metaKey||c.is(".fancybox-wrap")||(s=t.groupAttr||"data-fancybox-group",l=c.attr(s),l||(s="rel",l=c.get(0)[s]),l&&""!==l&&"nofollow"!==l&&(c=o.length?i(o):n,c=c.filter("["+s+'="'+l+'"]'),h=c.index(this)),t.index=h,a.open(c,t)!==!1&&r.preventDefault())}
        return t=t||{},e=t.index||0,o&&t.live!==!1?s.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",r):n.unbind("click.fb-start").bind("click.fb-start",r),this.filter("[data-fancybox-start=1]").trigger("click"),this},s.ready(function(){var e,r
        i.scrollbarWidth===n&&(i.scrollbarWidth=function(){var t=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),e=t.children(),n=e.innerWidth()-e.height(99).innerWidth()
            return t.remove(),n}),i.support.fixedPosition===n&&(i.support.fixedPosition=function(){var t=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),e=20===t[0].offsetTop||15===t[0].offsetTop
            return t.remove(),e}()),i.extend(a.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")}),e=i(t).width(),o.addClass("fancybox-lock-test"),r=i(t).width(),o.removeClass("fancybox-lock-test"),i("<style type='text/css'>.fancybox-margin{margin-right:"+(r-e)+"px;}</style>").appendTo("head")})}(window,document,jQuery),function(t){Marcocom={resetpassword:null,isUserLoggedIn:!1,contentManagementSysURL:"",_something:!0,_uid:0,isIE8:navigator.userAgent.indexOf("MSIE 8")>-1,isFF:navigator.userAgent.indexOf("Firefox")>0,isHandheldPortrait:t("body").width()<450&&t("body").height()>t("body").width(),msGesture:window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,isTouch:"ontouchstart"in window||this.msGesture||window.DocumentTouch&&document instanceof DocumentTouch,googleAccount:"UA-1007198-3",_popups:{},windowWidth:0,windowHeight:0,columnSizes:{cell_total_container_width:720,cell_total_med_width:960,cell_total_sm_width:1682,cell_total_extra_tall:482,cell_total_short_width:482},_currentPopup:null,_mosaic:null,_model:null,_mosaic_container:null,_landingPage:null,AncillaryLetters:["d","i"],DataLetters:["a","b","c","f","h","j"],init:function(){t.support.touch&&t("body").addClass("ipad-iphone"),this.setupEventManager(),$log("Marcocom:INIT isHandheld:"+this.isHandheldPortrait+"  --UA:"+navigator.userAgent+" isIE8:"+this.isIE8),this.windowWidth=t(window).width(),this.windowHeight=t(window).height(),t(window).resize(t.proxy(this.onResize,this)),t("#slider-container").hide()},onResize:function(){this.windowWidth=t(window).width(),this.windowHeight=t(window).height(),Marcocom.EventManager.fireEvent(Marcocom.Event.RESIZE,this)},animationHelper:function(e,i,n,o){t(e).css({position:"absolute",left:i}).animate({left:n},o)},bindToDocument:function(e,i){document[e+"_callbacks"]||(document[e+"_callbacks"]=[]),document[e+"_callbacks"].push(i),document[e+"_registered"]||(t(document).bind(e,this.handleDocumentEvent.bind(this,e)),document[e+"_registered"]=!0)},handleDocumentEvent:function(e,i){var n=document[i+"_callbacks"]
    t(n).each(function(t){n[t]()})},setupEventManager:function(){this.eventManager=new Marcocom.Event},fireHashEvents:function(){var t=(""+document.location.hash).replace("#","")
    t.length>0&&Marcocom.eventManager.fireEvent(Marcocom.Event.DEEPLINK,t)},popup:function(t,e){var i=this._getPopup(e)
    null!=i&&(i.show(e),this._currentPopup=e)},_getPopup:function(t){var e=this._popups[t]
    if(null==e){switch(t){case"register":e=new Marcocom.Registration
        break
        case"sign-in":e=new Marcocom.Login}this._popups[t]=e}return e},loadTemplate:function(e){var i=t("#"+e)
    return _.template(i.html(),{})},nano:function(t,e){return t.replace(/\{([\w\.]*)\}/g,function(t,i){for(var n=i.split("."),o=e[n.shift()],r=0,s=n.length;s>r;r++)o=o[n[r]]
    return void 0!==o&&null!==o?o:""})},loadTemplateFile:function(e){var i=t("#tpl-"+e)
    if(0===i.length){var n="/templates",o=n+"/"+e+".tmpl",r=""
        t.ajax({url:o,method:"GET",async:!1,contentType:"text",success:function(i){r=i,t("head").append('<script id="tpl-'+e+'" type="text/template">'+r+"</script>")}})}},sub_template:function(e,i){return _.template(e.replace(/<%\s*include\s*(.*?)\s*%>/g,function(e,i){var n=t("#"+i)
    return n?n.html():""}),i)},isEmpty:function(t){if(null==t)return!0
    if(t.length>0)return!1
    if(0===t.length)return!0
    for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1
    return!0}}
    Marcocom.Popup=Class.extend({_construct:function(t){Marcocom.eventManager.addEventHandler(Marcocom.Event.SHOWPOPUP,this.show.bind(this)),this._el=t,this._type=t.attr("id"),this._form=new Marcocom.Form(this._submit,this._el.find("div.form form"),null,this.formClick.bind(this)),t.find("a.close").click(this.hide.bind(this))},overlayClose:function(){document.location.hash=""},hide:function(){this.hide()},show:function(t){t==this._type&&(this.isOpened()?(this.hide(),setTimeout(this.__show.bind(this,t),300)):this.__show())},__show:function(){this.show()},formClick:function(e){e.preventDefault()
        var i=this._form.valid()
        if(i){var n=this._form.serialize()
            t.post(this._postUrl,n,this._submitResult.bind(this),"json")}},_submitResult:function(t){t&&1==t.success?(this.hide(),registeredEmail="Undefined"!=typeof t.email?t.email:"Undefined",this.submitSuccess(t.redirect)):$log("submit failed")},submitSuccess:function(){document.location.reload()}}),Marcocom.Validate={NAME_REGEX:RegExp("^[a-z'][-a-z ']*$"),PHONE_REGEX:RegExp("/d{2}-d{9}/"),EMAIL_REGEX:RegExp("/^[a-zA-Z0-9_+][-.a-zA-Z0-9_+]*@[a-zA-Z0-9][-.a-zA-Z0-9]*.(com|nl|de|be|se|edu|info|gov|int|mil|net|org|biz|name|museum|coop|aero|pro|tv|[a-zA-Z]{2})$/"),daysOfMonths:[31,28,31,30,31,30,31,31,30,31,30,31],validateDayDOB:function(t){var e=!!(31>=+t),i=!!(+t>0)
        return e&&i},validateMonthDOB:function(t){var e=!!(12>=+t),i=!!(+t>0)
        return e&&i},validateYearDOB:function(t){return this.checkLength(t,4)},validateDayExists:function(t,e,i){if(2==e&&isLeapYear(i))return 29>=t
        var n=this.daysOfMonths[e-1]
        return n>=t},isLeapYear:function(t){return t%4==0},trim:function(t){return null==t?"":t.replace(/^\s+|\s+$/g,"")},checkIsEmpty:function(t){var e=this.trim(t)
        return!(0!=e.length)},checkLength:function(t,e){return!!(this.trim(t).length>=e)}},Marcocom.Event=Class.extend({_construct:function(){this.__event={}},addEventHandler:function(e,i){return this.__event[e]||(this.__event[e]=[]),t.inArray(i,this.__event[e])<0&&this.__event[e].push(i),this},removeEventHandler:function(e,i){var n=t.inArray(i,this.__event[e])
        return n>=0&&this.__event[e].splice(n,1),this},removeEventHandlers:function(t){return this.__event[t].length=0,this},fireEvent:function(t){if(this.__event[t])if(1<arguments.length){var e=Array.prototype.slice.call(arguments,1)
        for(e.push(t),i=0;i<this.__event[t].length;i++)this.__event[t][i].apply(this,e)}else for(i=0;i<this.__event[t].length;i++)this.__event[t][i](t)}}),Marcocom.Brand={brand_blue:"#0172b4",brand_purple:"#5d2278",brand_orange:"#f5a81f",brand_red:"#da061e",brand_green:"#009339"},Marcocom.templates={cells:{cell_a:null,cell_b:null,cell_c:null,cell_d:null,cell_e:null,cell_f:null,cell_g:null,cell_h:null,cell_i:null}},Marcocom.ancillary_models={quote_data:[{Body:"learn the rules like a pro, so you can break them like an artist.",Credit:"Pablo Picasso",id:""},{Body:"creativity is contagious, pass it on.",Credit:"Albert Einstein",id:""},{Body:"you can't wait for inspiration, you have to go after it with a club.",Credit:"Jack London",id:""},{Body:"creativity requires the courage to let go of certainties.",Credit:"Erich Fromm",id:""},{Body:"when the going gets weird, the weird turn pro.",Credit:"Hunter S. Thompson",id:""},{Body:"we don't make mistakes, just happy little accidents.",Credit:"Bob Ross",id:""},{Body:"design is not just what it looks like and feels like. Design is how it works.",Credit:"Steve Jobs",id:""},{Body:"there is nothing worse than a sharp image of a fuzzy concept.",Credit:"Ansel Adams",id:""},{Body:"while they are deciding, make even more art.",Credit:"Andy Warhol",id:""},{Body:"Let the blood and the bruises define your legacy.",Credit:"Lady Gaga",id:""}],action_data:[{Action:"",Sentences:["real people","real passion","real action"],id:""},{Action:"jobs",Sentences:["get to know us","click here if you are up to the challenge"],id:""},{Action:"about",Sentences:["who we are","click here to find out"],id:""},{Action:"about",Sentences:["a team photo has many portraits","but only one story"],id:""},{Action:"contact",Sentences:["a place to grow","click here to find our locations"],id:""},{Action:"",Sentences:["real people","real passion","real action"],id:""},{Action:"jobs",Sentences:["get to know us","click here if you are up to the challenge"],id:""},{Action:"about",Sentences:["who we are","click here to find out"],id:""},{Action:"about",Sentences:["a team photo has many portraits","but only one story"],id:""},{Action:"contact",Sentences:["a place to grow","click here to find our locations"],id:""}],long_images:[{Image:"img/cells/longs/cell_g_1.jpg",id:""},{Image:"img/cells/longs/cell_g_2.jpg",id:""},{Image:"img/cells/longs/cell_g_3.jpg",id:""}]},Marcocom.Brand.ALL_COLORS=[Marcocom.Brand.brand_blue,Marcocom.Brand.brand_purple,Marcocom.Brand.brand_orange,Marcocom.Brand.brand_green],Marcocom.EventManager=new Marcocom.Event,Marcocom.Event.SHOWPOPUP="SHOWPOPUP",Marcocom.Event.DEEPLINK="DEEPLINK",Marcocom.Event.RESIZE="RESIZE",Marcocom.Event.RESIZE_SM_RESPONSE="RESIZE_SM",Marcocom.Event.RESIZE_MED_RESPONSE="RESIZE_MED",Marcocom.Event.RESIZE_LRG_RESPONSE="RESIZE_LRG",Marcocom.Event.RESIZE_SHORT_RESPONSE="RESIZE_SHORT",Marcocom.Event.RESIZE_TALL_RESPONSE="RESIZE_TALL",Marcocom.Event.PAGECHANGE="PAGECHANGE",Marcocom.Event.DISCLAIMER="DISCLAIMER",Marcocom.Event.CURRENTPAGE="CURRENTPAGE",Marcocom.Event.OPEN_CELL="OPEN_CELL",Marcocom.Event.CLOSE_CELL="CLOSE_CELL",Marcocom.Event.MOSAIC_SCROLL_START="MOSAIC_SCROLL_START",Marcocom.Event.MOSAIC_SCROLL_X="MOSAIC_SCROLL_X",Marcocom.Event.MOSAIC_SCROLL_END="MOSAIC_SCROLL_END",Marcocom.Event.MOSAIC_FLICK="MOSAIC_FLICK",Marcocom.Event.MOSAIC_VIDEO="MOSAIC_VIDEO",Marcocom.Event.MODEL_COLUMN_LOADING="MODEL_COLUMN_LOADING",Marcocom.Event.MODEL_COLUMN_LOADED="MODEL_COLUMN_LOADED",Marcocom.Event.MODEL_COLUMNS_COMPLETE="MODEL_COLUMNS_COMPLETE",Marcocom.Event.MODEL_COLUMNS_NODATA="MODEL_COLUMNS_NODATA",Marcocom.Event.MODEL_TEMPLATES_COMPLETE="MODEL_TEMPLATES_COMPLETE",Marcocom.Event.JSON_NOT_FOUND="JSON_NOT_FOUND",Marcocom.Event.ROUTER_CALL="ROUTER_CALL",Marcocom.Event.ROUTER_CLIENT="ROUTER_CLIENT",Marcocom.Event.ROUTER_POST="ROUTER_POST",Marcocom.Event.ROUTER_AUTHOR="ROUTER_AUTHOR",Marcocom.Event.ROUTER_SEARCH="ROUTER_SEARCH",Marcocom.Event.ROUTER_TAG="ROUTER_TAG",Marcocom.Event.ROUTER_PAGE="ROUTER_PAGE"}(jQuery),Marcocom.init(),function(t,e){e.Page=Class.extend({_construct:function(e){this._el=t(e)}}),t.extend(e.Page,{_selectors:{},_extend:e.Page.extend,extend:function(t,i){var n=e.Page._extend(t)
    return"string"==typeof i&&(e.Page._selectors[i]=n),n},Init:function(){t.each(e.Page._selectors,function(e,i){t(e).each(function(){var n=new i(this)
    t(this).data(e,n)})})}}),e.Page.Home=e.Page.extend({cellRouter:null,_logo:null,toplinks:null,currentContent:null,contentSwap:null,closeButton:null,subcontentOpened:!1,refineNav:null,introColumn:null,_current:null,_currentscroller:null,backgrounds:null,tiles:null,_construct:function(e){this._el=t(e),this._super(this._el),this.toplinks=t(this._el.find(".header .toplink")),this._logo=t("#logo").parent("a"),this.initPage()},initPage:function(){this.closeButton=t(".sub-close-cta a").click(t.proxy(this.pageCollapse,this)),this.toplinks.click(t.proxy(this.clickAnimate,this)),this._logo.click(function(t){t.preventDefault(),t.stopImmediatePropagation(),e.cellRouter.navigate("/",{trigger:!0})}),this.initRouter(),this.initBackground()},initBackground:function(){this.backgrounds=t(".backgrounds"),this.tiles=this.backgrounds.find(".tile")
    var e=_.random(1,7),i="img/backgrounds/bg"+e+".jpg"
    $log("BG:"+i),this.tiles.append('<img src="'+i+'">')},initRouter:function(){var t=this,i=Backbone.Router.extend({routes:{"posts/:id":"getPost","client/:id":"getClient","author/:id":"getAuthor","portal/:id":"getPortal","tag/:id":"getTag","search/:query":"search","*action":"defaultRoute"}})
    e.cellRouter=new i,e.cellRouter.on("route:getPost",function(t){e.EventManager.fireEvent(Marcocom.Event.ROUTER_POST,this,t)}),e.cellRouter.on("route:getClient",function(t){e.EventManager.fireEvent(Marcocom.Event.ROUTER_CLIENT,this,t)}),e.cellRouter.on("route:getPortal",function(t){e.EventManager.fireEvent(Marcocom.Event.ROUTER_PORTAL,this,t)}),e.cellRouter.on("route:getAuthor",function(t){e.EventManager.fireEvent(Marcocom.Event.ROUTER_AUTHOR,this,t)}),e.cellRouter.on("route:getTag",function(t){e.EventManager.fireEvent(Marcocom.Event.ROUTER_TAG,this,t)}),e.cellRouter.on("route:search",function(t){e.EventManager.fireEvent(Marcocom.Event.ROUTER_SEARCH,this,t)}),e.cellRouter.on("route:defaultRoute",function(i){"jobs"==i||"about"==i||"contact"==i?(t.remoteAnimate(i),e.EventManager.fireEvent(Marcocom.Event.ROUTER_MAIN_MOSAIC,t,i||null)):"people"==i?e.EventManager.fireEvent(Marcocom.Event.REFINE_PEOPLE,t):"clients"==i?e.EventManager.fireEvent(Marcocom.Event.REFINE_CLIENTS,t):null==i&&(1==t.subcontentOpened&&t.pageCollapse(null),e.EventManager.fireEvent(Marcocom.Event.ROUTER_MAIN_MOSAIC,t,i||null))}),Backbone.history.start({pushState:!0,root:"/"})},catchPageChange:function(t,e){this.remoteAnimate(e)},remoteAnimate:function(e){if(!(void 0!=e&&e.length<2)){this._current=e
    var i="."+(e?e:clicksource.id)+"-content",n=t(i)
    0==this.subcontentOpened?this.pageAnimateFromClosed(n):this.pageAnimateFromOpened(n,null)}},clickAnimate:function(i){i.preventDefault()
    var n=t(i.currentTarget)[0]
    this._current=n.id
    {var o="."+n.id+"-content"
        t(o)}e.cellRouter.navigate(n.id,{trigger:!0})},pageAnimateFromClosed:function(i){var n=this
    i.show()
    var o=i.find(".content")[0],r=t(o).height()+(t("body").hasClass("ipad-iphone")?10:40),s=e.windowHeight-30
    r>s&&(r=s),this.setScrollable(!1),this.currentContent=i
    var a=this.currentContent.hasClass("sliding")
    a&&(this._currentscroller=new e.Page.SubPage(this.currentContent)),this._el.animate({top:r},500,function(){n.onOpenTransitionEnd()})},pageAnimateFromOpened:function(t,e){var i=this
    this.contentSwap=this.currentContent.selector!=t.selector?e:null,this._el.animate({top:"0"},500,function(){i.onCloseTransitionEnd()})},onOpenTransitionEnd:function(){this.subcontentOpened=!0
    var e=this.currentContent.find(".content")
    t(e).bind("click",t.proxy(this.pageCollapse,this)),this._el.bind("tap click swipe focus",t.proxy(this.pageCollapse,this))},onCloseTransitionEnd:function(){$dir(this.contentSwap),1==this.subcontentOpened&&(this.subcontentOpened=!1,this.currentContent.hide(),this.currentContent=null,this.setScrollable(!0),this._currentscroller&&(this._currentscroller._slider.destroy(),this._currentscroller.removeEventHandlers(),this._currentscroller=null),null!=this.contentSwap?(t(this.contentSwap).trigger("click"),this.contentSwap=null):e.cellRouter.navigate("/",{trigger:!1}))},pageCollapse:function(){var t=this
    e.cellRouter.navigate("/",{trigger:!1}),this.subcontentOpened&&(this._el.animate({top:"0"},500,function(){t.onCloseTransitionEnd()}),this._el.mouseover(null),this._el.unbind("tap click swipe focus"))},setScrollable:function(e){var i=t("html, body")
    i.css(e?{overflow:"auto",height:"100%"}:{overflow:"hidden",height:"100%"})}}),e.Page.SubPage=e.Page.extend({_mosaic:null,_columns:null,loading_items:!1,building:!1,currentColumnWidth:null,currentScrollX:0,_slider:null,_scroller:null,_content:null,columnWidths:{xs:480,md:720,sh:540,tl:700},_construct:function(t){this._el=t,this._super(this._el),this.initContainer()},initContainer:function(){this._content=this._el.find(".content")[0]
    var i=t(this._content).find(".items")
    this._mosaic=t(i[0]),this._scroller=t(this._content).find(".scroller"),this._slider=new IScroll(this._content,{scrollX:!0,scrollY:!1,mouseWheel:!0,click:!0,startX:0,useTransform:!e.isIE8,snap:"li"}),this.loading_items=!0
    var n=this._mosaic.find("li")
    this._columns=t(n),this.addEventHandlers(),this.onResize(null)},addEventHandlers:function(){e.EventManager.addEventHandler(e.Event.RESIZE,t.proxy(this.onResize,this))},removeEventHandlers:function(){e.EventManager.removeEventHandler(e.Event.RESIZE,t.proxy(this.onResize,this))},onResize:function(){var i=t(this._columns[0]).width(),n=(this._columns.length+1)*i,o=this
    t(this._scroller).width(n),i==this.currentColumnWidth||e.isIE8||(this.currentColumnWidth=i,setTimeout(function(){o._slider.refresh()},0))},scaleColumns:function(e){this._columns.each(function(){t(this).width(e)})},onFlick:function(){e.EventManager.fireEvent(e.Event.MOSAIC_FLICK,this)}}),e.Page.Init(),t(".home-content").length>0&&(Marcocom._landingPage=new e.Page.Home(".home-content"))}(jQuery,Marcocom),function(t,e){function i(){e.Mosaic.Init(),t("#slider-container").length>0&&(Marcocom._mosaic=new e.Mosaic.Container("#slider-container"))}e.Mosaic=Class.extend({_construct:function(e){this._el=t(e),this.slider=null}}),t.extend(e.Mosaic,{_selectors:{},_extend:e.Mosaic.extend,extend:function(t,i){var n=e.Mosaic._extend(t)
    return"string"==typeof i&&(e.Mosaic._selectors[i]=n),n},Init:function(){t.each(e.Mosaic._selectors,function(e,i){t(e).each(function(){var n=new i(this)
    t(this).data(e,n)})})}}),e.Mosaic.Container=e.Mosaic.extend({_mosaic:null,_columns:null,loading_items:!1,building:!1,currentColumnWidth:null,currentScrollX:0,_slider:null,_loader:null,_cta:null,_home:null,columnWidths:{xs:480,md:412,sh:608,tl:700},_construct:function(e){this._el=t(e),this._super(this._el)
    var i=this._el.find(".homepage")
    this._home=t(i),this.initContainer()},initContainer:function(){this._slider=new IScroll("#slider-container",{scrollX:!0,scrollY:!1,mouseWheel:!0,click:!0,startX:0,probeType:1}),this._slider.on("scrollStart",t.proxy(this.onScrollStart,this)),this._slider.on("scrollEnd",t.proxy(this.onScrollEnd,this)),this._slider.on("scroll",t.proxy(this.onScrollX,this)),this.loading_items=!0,$log("MOSAIC INITCONTAINER () -- DETECTIONS =======  isMSGesture:"+e.msGesture+" isTouch:"+e.isTouch)
    var i=this._el.find(".mosaic-container")
    this._mosaic=t(i)
    var n=this._mosaic.find(".column")
    this._columns=t(n),this._columns.each(function(){new e.Mosaic.ParentColumn(this)}),this.addEventHandlers(),e.EventManager.fireEvent(e.Event.RESIZE,this),this.initCTA(),this.initLoader(),this.hideLoader(),this.onResize(null)},addEventHandlers:function(){e.EventManager.addEventHandler(e.Event.RESIZE,t.proxy(this.onResize,this)),e.EventManager.addEventHandler(e.Event.MOSAIC_VIDEO,this.playbackVideo.bind(this)),e.EventManager.addEventHandler(e.Event.MODEL_COLUMNS_NODATA,this.onEndOfData.bind(this)),e.EventManager.addEventHandler(e.Event.MODEL_COLUMN_LOADING,this.onLoadingData.bind(this)),e.EventManager.addEventHandler(e.Event.MODEL_COLUMN_LOADED,t.proxy(this.appendMosaic,this))},removeEventHandlers:function(){e.EventManager.removeEventHandler(e.Event.RESIZE,t.proxy(this.onResize,this)),e.EventManager.removeEventHandler(e.Event.MOSAIC_VIDEO,this.playbackVideo.bind(this)),e.EventManager.removeEventHandler(e.Event.MODEL_COLUMNS_NODATA,this.onEndOfData.bind(this)),e.EventManager.removeEventHandler(e.Event.MODEL_COLUMN_LOADING,this.onLoadingData.bind(this)),e.EventManager.removeEventHandler(e.Event.MODEL_COLUMN_LOADED,t.proxy(this.appendMosaic,this))},initCTA:function(){var i=this,n=this._el.find(".cta-msg")
    this._cta=t(n[0]),this._cta.css({left:"180px"}),e.isIE8&&this._cta.css({width:"230px"}),setTimeout(function(){i.animateCTA()},2e3)},animateCTA:function(){var t=e.windowWidth+Math.abs(this._slider.x)-(this._cta.width()+10),i=+this._cta.css("left").split("px")[0]
    $log("CTA x:"+i+" go:"+t),t>i&&this._cta.animate({left:t+"px"},600,"easeOutBounce")},onLoadingData:function(){this.loading_items=!0,this.showLoader()},onEndOfData:function(){this.loading_items=!1
    var i=e.windowWidth-50
    this._home.width(i)
    var n=t(this._columns[0]).width(),o=this._columns.length*n+i
    t("#slider-container .scroller").width(o),this._slider.refresh(),this.hideLoader(),this._loader.remove(),this._cta.fadeOut()},onBeforeScrollStart:function(t){for(var e=t.target;1!=e.nodeType;)e=e.parentNode
    "SELECT"!=e.tagName&&"INPUT"!=e.tagName&&"TEXTAREA"!=e.tagName&&t.preventDefault()},onResize:function(){var i=e.windowWidth-50
    350>=i&&(i=350),this._home.width(i)
    var n=t(this._columns[0]).width(),o=this._columns.length*n+(this.loading_items?50:0)+i,r=(this._slider,this)
    t("#slider-container .scroller").width(o),n==this.currentColumnWidth||e.isIE8||(this.currentColumnWidth=n,setTimeout(function(){r._slider.refresh()},0))},appendMosaic:function(){$log("REFRESH MOSAIC!!!!!!")
    var i=this._mosaic.find(".column"),n=i[i.length-1]
    this._columns.push(n)
    var o=this._columns.length*this.currentColumnWidth
    t("#slider-container .scroller").width(o)
    new e.Mosaic.ParentColumn(n)
    this.hideLoader(),this._slider.refresh()},positionMosaic:function(){this._slider.forcePositionX(this.currentScrollX)},scaleColumns:function(e){$log("SET WIDTH:"+e),this._columns.each(function(){t(this).width(e)})},onScrollStart:function(){e.EventManager.fireEvent(e.Event.MOSAIC_SCROLL_START,this)},onScrollCancel:function(){},onScrollEnd:function(){this.currentScrollX=this._slider.x,this.animateCTA(),e.EventManager.fireEvent(e.Event.MOSAIC_SCROLL_END,this,this._slider.x,this._slider.maxScrollX,this._slider.directionX,this._slider.directionY)},onScrollX:function(){this.currentScrollX=this._slider.x,this.animateCTA(),e.EventManager.fireEvent(e.Event.MOSAIC_SCROLL_X,this,this._slider.x,this._slider.maxScrollX,this._slider.directionX,this._slider.directionY)},initLoader:function(){this._loader=t('<img src="img/loading.gif">').appendTo(".home-content").css({position:"absolute",display:"block",top:"123px",right:"10px","z-index":"50",width:"32",height:"auto"})},showLoader:function(){this._loader.show()},hideLoader:function(){this._loader.hide()},onFlick:function(){$log("FLICK----------------"),e.EventManager.fireEvent(e.Event.MOSAIC_FLICK,this)},playbackVideo:function(e,i){t.fancybox({padding:0,autoScale:!1,transitionIn:"none",transitionOut:"none",title:"",autoPlay:!0,hideOnOverlayClick:!0,width:1280,height:720,href:i,type:"iframe",swf:{wmode:"transparent",allowfullscreen:"false"},overlay:{opacity:.1,css:{"background-color":"#000000"}}})}}),e.Mosaic.ParentColumn=e.Mosaic.extend({_grid:null,_cells:[],currentCellOpened:null,loading_items:!1,building:!1,strict:!1,overlay:!1,scroll:!1,filter:!1,grid_full:!1,_construct:function(e){this._el=t(e),this._super(this._el),this.initContainer()},initContainer:function(){var i=this
    this._grid=this._el.masonry({itemSelector:".cell-box",columnWidth:206,isAnimated:!0}).masonry("bindResize")
    var n=this._grid.masonry("getItemElements")
    t(n).each(function(){var t=new e.Mosaic.Cell(this,i._grid)
        i._cells.push(t)}),e.EventManager.fireEvent(Marcocom.Event.RESIZE,this)}}),e.Mosaic.Cell=e.Mosaic.extend({_parent:null,_carousel:null,loading_items:!1,building:!1,opened:!1,half_width:235,full_width:474,half_height:134,full_height:272,deadzone:5,startMouseX:null,offContent:null,onContent:null,sizeLetter:null,_construct:function(e,i){return this._el=t(e),this._super(this._el),this._parent=i,this.initContainer(),this.closeInfo},initContainer:function(){this.sizeLetter=this.getItemSize(this._el)
    var i=this._el.find(".on-state"),n=this._el.find(".off-state")
    this.offContent=t(n),this.onContent=i.length>0?t(i):null,"a"==this.sizeLetter||"b"==this.sizeLetter||"j"==this.sizeLetter||"f"==this.sizeLetter?e.msGesture?(this._el.on("MSPointerDown",t.proxy(this.onMsPress,this)),this._el.on("MSGestureEnd",t.proxy(this.onMsRelease,this))):(this._el.hammer().on("touch",t.proxy(this.onPress,this)),this._el.hammer().on("release",t.proxy(this.onRelease,this))):"e"==this.sizeLetter&&(this.colorizeCell(),this.processPageAction(this._el.data("action"))),"f"==this.sizeLetter&&(this._carousel=this._el.find(".flexslider").flexslider({namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:4e3,animationSpeed:500,initDelay:5e3*Math.random,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!1,video:!1,controlNav:!0,directionNav:!1,prevText:"Previous",nextText:"Next",keyboard:!1,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:474,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}})),e.EventManager.addEventHandler(e.Event.OPEN_CELL,this.onCellClick.bind(this)),e.EventManager.addEventHandler(e.Event.CLOSE_CELL,this.onCellClose.bind(this)),e.EventManager.addEventHandler(e.Event.MOSAIC_SCROLL_START,this.closeInfo.bind(this)),t("#slider-container").show()},processVideoAction:function(t){var i=this._el.data("ref"),n="http://"
    "vim"==t&&(n+="player.vimeo.com/video/"),"yt"==t&&(n+="youtube.com/?"),i?n+=i:n="http://vimeo.com/Marcocomamsterdam",e.EventManager.fireEvent(e.Event.MOSAIC_VIDEO,this,n)},processPageAction:function(t){"none"!=t&&(this._el.click(function(i){i.preventDefault(),e._landingPage.cellRouter.navigate(t,{trigger:!0})}),this._el.css({cursor:"pointer"}))},colorizeCell:function(){var t=Math.floor(Math.random()*e.Brand.ALL_COLORS.length),i=e.Brand.ALL_COLORS[t]
    this._el.find(".off-state").css({"background-color":i})},onCellClick:function(t){var e=t==this
    !e&&this.opened&&this.closeInfo()},onCellClose:function(t){},onClick:function(){this.opened?("j"==this.sizeLetter&&this.processVideoAction(this._el.data("portal")),this.closeInfo()):this.openInfo()},openInfo:function(){if(!this.opened){e.EventManager.fireEvent(e.Event.OPEN_CELL,this)
    {Math.round(this._el.height()-20)}this.offContent.addClass("desaturate"),this.onContent&&this.onContent.topZIndex(),this.opened=!0,"f"==this.sizeLetter?(this._carousel.flexslider("pause"),this.onContent&&this.onContent.css({top:"35%"})):this.onContent.css({top:"a"==this.sizeLetter?"30%":"0"})}},closeInfo:function(){e.EventManager.fireEvent(e.Event.CLOSE_CELL,this),this.opened&&(this.offContent.removeClass("desaturate"),this.onContent&&this.onContent.css({top:"100%"}),this.opened=!1,"f"==this.sizeLetter&&this._carousel.flexslider("play"))},onPress:function(t){t.preventDefault(),t.stopPropagation(),this.startMouseX=t.gesture.center.pageX},onRelease:function(t){t.preventDefault(),t.stopPropagation()
    var e=t.gesture.center.pageX-this.startMouseX
    e<this.deadzone&&e>-this.deadzone&&this.onClick(null)},onMsPress:function(t){t.preventDefault(),t.stopPropagation(),this.startMouseX=t.pageX},onMsRelease:function(t){t.preventDefault(),t.stopPropagation()
    var e=t.pageX-this.startMouseX
    e<this.deadzone&&e>-this.deadzone&&this.onClick(null)},getItemSize:function(t){return t.hasClass("cell-a")?"a":t.hasClass("cell-b")?"b":t.hasClass("cell-c")?"c":t.hasClass("cell-d")?"d":t.hasClass("cell-e")?"e":t.hasClass("cell-f")?"f":t.hasClass("cell-g")?"g":t.hasClass("cell-h")?"h":t.hasClass("cell-i")?"i":t.hasClass("cell-j")?"j":""}}),e.EventManager.addEventHandler(e.Event.MODEL_COLUMNS_COMPLETE,i.bind(this))}(jQuery,Marcocom),function(t,e){e.Model=Class.extend({_construct:function(){}}),t.extend(e.Model,{_selectors:{},_extend:e.Model.extend,extend:function(t,i){var n=e.Model._extend(t)
    return"string"==typeof i&&(e.Model._selectors[i]=n),n},Init:function(){t.each(e.Model._selectors,function(e,i){t(e).each(function(){var n=new i(this)
    t(this).data(e,n)})})}}),e.Model.Mosaic=e.Model.extend({_totalDataFiles:0,_totalPreload:1,_currentColumn:0,_columns:[],_firstLoad:!1,_dataFinished:!1,_directory:null,_mosaic:null,_construct:function(e,i){this._el=t(e),this._directory=i,this._super(this._el)
    var n=this._el.find(".mosaic-container")
    this._mosaic=t(n),t.ajax({url:i+"count.php",cache:!1,async:!0,dataType:"html",success:t.proxy(this.getCount,this)})},getCount:function(t){this._totalDataFiles=+t-1,this.compileTemplates(),this.initModel(),e.EventManager.addEventHandler(e.Event.MOSAIC_SCROLL_END,this.mosaicScrollHandler.bind(this))},modifyPreload:function(){e.windowWidth<=450?this._totalPreload-=1:e.windowHeight>=970&&(this._totalPreload+=1)},mosaicScrollHandler:function(t,e,i){i>=e&&!this._dataFinished&&this.nextModel()},compileTemplates:function(){Marcocom.templates.cells.cell_a=_.template(t("#tpl-cell-a").html()),Marcocom.templates.cells.cell_b=_.template(t("#tpl-cell-b").html()),Marcocom.templates.cells.cell_c=_.template(t("#tpl-cell-c").html()),Marcocom.templates.cells.cell_d=_.template(t("#tpl-cell-d").html()),Marcocom.templates.cells.cell_e=_.template(t("#tpl-cell-e").html()),Marcocom.templates.cells.cell_f=_.template(t("#tpl-cell-f").html()),Marcocom.templates.cells.cell_g=_.template(t("#tpl-cell-g").html()),Marcocom.templates.cells.cell_h=_.template(t("#tpl-cell-h").html()),Marcocom.templates.cells.cell_i=_.template(t("#tpl-cell-i").html()),Marcocom.templates.cells.cell_j=_.template(t("#tpl-cell-j").html()),t("#tpl-cell-a").remove(),t("#tpl-cell-b").remove(),t("#tpl-cell-c").remove(),t("#tpl-cell-d").remove(),t("#tpl-cell-e").remove(),t("#tpl-cell-f").remove(),t("#tpl-cell-g").remove(),t("#tpl-cell-h").remove(),t("#tpl-cell-i").remove(),t("#tpl-cell-j").remove()},initModel:function(){$log("-------------------------MODEL MOSAIC INIT-----------------------------"),this.loadJsonFile(this._currentColumn)},nextModel:function(){var t=this._currentColumn+1
    $log("NEXTMODEL nextup:"+t+" totalpreload:"+this._totalPreload),t<this._totalPreload?(this._currentColumn=t,this.loadJsonFile(t)):this._firstLoad?this._dataFinished||(this._currentColumn=t,this.loadJsonFile(t)):(this._firstLoad=!0,Marcocom.EventManager.fireEvent(Marcocom.Event.MODEL_COLUMNS_COMPLETE,this))},loadJsonFile:function(e){var i=this._totalDataFiles-e,n=this._directory+"column_"+i+".json"
    $log("LOAD JSON:"+i+" index:"+e+" asset:"+n),i>=0?(Marcocom.EventManager.fireEvent(Marcocom.Event.MODEL_COLUMN_LOADING,this),t.ajax({url:n,cache:!1,async:!0,dataType:"json",success:t.proxy(this.parseColumn,this),error:t.proxy(this.loadError,this)})):this.loadError(null)},parseColumn:function(t){var i=Math.abs(this._currentColumn%3),n=this.injectColumn(i)
    console.log("COLUMN DATA RETURN:"),console.dir(t)
    var o=new Marcocom.Model.Column(t,i,n,this._currentColumn)
    this._columns.push(o),this._firstLoad?e.EventManager.fireEvent(Marcocom.Event.MODEL_COLUMN_LOADED,this):this.nextModel()},loadError:function(){$log("LOAD ERROR!"),this._dataFinished=!0,Marcocom.EventManager.removeEventHandler(e.Event.MOSAIC_SCROLL_END,this.mosaicScrollHandler),Marcocom.EventManager.fireEvent(Marcocom.Event.MODEL_COLUMNS_NODATA,this)},injectColumn:function(e){var i=t('<li class="column col-style-'+e+" col-count-"+this._currentColumn+'"></li>'),n=i.appendTo(this._mosaic)
    return n}}),e.Model.cellModel=Backbone.Model.extend({defaults:{CellType:"i",Ref:"",Date:new Date,Client:"",Title:"",JobTitle:"Hero",Article:"",URL:"",Dimensions:"",Image:[]},initialize:function(){this.on("change:Viewed",function(t){var e=t.get("Viewed")
    $log("Changed Viewed: "+e)}),this.on("invalid",function(t,e){$log("invalid error:"+e)})},validate:function(){},addViewed:function(){var t=+this.get("Viewed")+1
    this.set({Viewed:t})}}),e.Model.Column=e.Model.extend({_cells:[],_style:null,_index:0,_collection:null,_construct:function(e,i,n,o){this._el=t(n),this._style=i,this._index=o,this.initModel(e)},initModel:function(i){$log("-------------------------MODEL COLUMN INIT-----------------------------:"+this._style)
    var n=Backbone.Collection.extend({model:e.Model.cellModel}),o=this.patternFormatData(i),r=t.map(o,function(t){return new e.Model.cellModel(t)})
    this._collection=new n(r),this.instantiateCells()},instantiateCells:function(){var t=this
    this._collection.each(function(e){new Marcocom.Model.CellView(e,t._el)})},patternFormatData:function(t){var e=[]
    if($log(">>>>>>>>>>>>>> "+this._index%3),0==this._index||this._index%3==0){var i=this.pullAncillaryData("d")
        i.CellType="d",i.Id&&(i.Id="0001"),e.push(i)}for(var n=0;n<t.length;n++){{t[n].CellType}e.push(t[n])}return e},pullAncillaryData:function(t){var i,n
    return"d"==t?(i=Math.floor(Math.random()*e.ancillary_models.quote_data.length),n=e.ancillary_models.quote_data[i]):"e"==t?(i=Math.floor(Math.random()*e.ancillary_models.action_data.length),n=e.ancillary_models.action_data[i]):"g"==t?(i=Math.floor(Math.random()*e.ancillary_models.long_images.length),n=e.ancillary_models.long_images[i]):"i"==t&&(n={id:"4"}),n},getObjects:function(t,e,i){var n=[]
    for(var o in t)t.hasOwnProperty(o)&&("object"==typeof t[o]?n=n.concat(this.getObjects(t[o],e,i)):o==e&&t[e]==i&&n.push(t))
    return n}}),e.Model.CellView=Backbone.View.extend({_tplname:null,_compiledTemplate:null,_style:null,_column:null,_model:{},initialize:function(t,e){this._model=t,this._column=e,this._style=this._model.get("CellType"),this._tplname="cell_"+this._style,$log("CELL m:",this._model," c:",this._column),this.render()},render:function(){var t=Marcocom.templates.cells[this._tplname](this._model.toJSON())
    this.$el.html(t),this.setElement(this.$el),this.$el.appendTo(this._column)},events:{},onClick:function(t){$log("CLICK EVENT:"+t.currentTarget)}}),e.Model.Init(),Marcocom._model=new e.Model.Mosaic("#slider-container","data/cells/")}(jQuery,Marcocom),function(){var t=["android","webos","iphone","ipad","blackberry"]
    for(i in t)-1!=navigator.userAgent.toLowerCase().indexOf(t[i])&&$(document).data("mobile",navigator.userAgent)}(),function(){for(var t,e=function(){},i=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],n=i.length,o=window.console=window.console||{};n--;)t=i[n],o[t]||(o[t]=e)}(),function(t){t.topZIndex=function(e){return Math.max(0,Math.max.apply(null,t.map("*"===(e||"*")?t.makeArray(document.getElementsByTagName("*")):t(e),function(e){return parseFloat(t(e).css("z-index"))||null})))},t.fn.topZIndex=function(e){if(0===this.length)return this
    e=t.extend({increment:1},e)
    var i=t.topZIndex(e.selector),n=e.increment
    return this.each(function(){this.style.zIndex=i+=n})}}(jQuery)
