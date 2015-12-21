!function(define){"use strict";define(["jquery"],function($){function both(val){return $.isFunction(val)||$.isPlainObject(val)?val:{top:val,left:val}}var $scrollTo=$.scrollTo=function(target,duration,settings){return $(window).scrollTo(target,duration,settings)};return $scrollTo.defaults={axis:"xy",duration:0,limit:!0},$scrollTo.window=function(){return $(window)._scrollable()},$.fn._scrollable=function(){return this.map(function(){var elem=this,isWin=!elem.nodeName||-1!==$.inArray(elem.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!isWin)return elem;var doc=(elem.contentWindow||elem).document||elem.ownerDocument||elem;return/webkit/i.test(navigator.userAgent)||"BackCompat"===doc.compatMode?doc.body:doc.documentElement})},$.fn.scrollTo=function(target,duration,settings){return"object"==typeof duration&&(settings=duration,duration=0),"function"==typeof settings&&(settings={onAfter:settings}),"max"===target&&(target=9e9),settings=$.extend({},$scrollTo.defaults,settings),duration=duration||settings.duration,settings.queue=settings.queue&&settings.axis.length>1,settings.queue&&(duration/=2),settings.offset=both(settings.offset),settings.over=both(settings.over),this._scrollable().each(function(){function animate(callback){$elem.animate(attr,duration,settings.easing,callback&&function(){callback.call(this,targ,settings)})}if(null!==target){var toff,elem=this,$elem=$(elem),targ=target,attr={},win=$elem.is("html,body");switch(typeof targ){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}if(targ=win?$(targ):$(targ,this),!targ.length)return;case"object":(targ.is||targ.style)&&(toff=(targ=$(targ)).offset())}var offset=$.isFunction(settings.offset)&&settings.offset(elem,targ)||settings.offset;$.each(settings.axis.split(""),function(i,axis){var Pos="x"===axis?"Left":"Top",pos=Pos.toLowerCase(),key="scroll"+Pos,old=elem[key],max=$scrollTo.max(elem,axis);if(toff)attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]),settings.margin&&(attr[key]-=parseInt(targ.css("margin"+Pos),10)||0,attr[key]-=parseInt(targ.css("border"+Pos+"Width"),10)||0),attr[key]+=offset[pos]||0,settings.over[pos]&&(attr[key]+=targ["x"===axis?"width":"height"]()*settings.over[pos]);else{var val=targ[pos];attr[key]=val.slice&&"%"===val.slice(-1)?parseFloat(val)/100*max:val}settings.limit&&/^\d+$/.test(attr[key])&&(attr[key]=attr[key]<=0?0:Math.min(attr[key],max)),!i&&settings.queue&&(old!==attr[key]&&animate(settings.onAfterFirst),delete attr[key])}),animate(settings.onAfter)}}).end()},$scrollTo.max=function(elem,axis){var Dim="x"===axis?"Width":"Height",scroll="scroll"+Dim;if(!$(elem).is("html,body"))return elem[scroll]-$(elem)[Dim.toLowerCase()]();var size="client"+Dim,html=elem.ownerDocument.documentElement,body=elem.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[size],body[size])},$scrollTo})}("function"==typeof define&&define.amd?define:function(deps,factory){"use strict";"undefined"!=typeof module&&module.exports?module.exports=factory(require("jquery")):factory(jQuery)});
//# sourceMappingURL=jquery.scrollTo.map