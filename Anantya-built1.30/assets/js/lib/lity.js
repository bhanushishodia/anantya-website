/*! Lity - v2.4.1 - 2020-04-26
* http://sorgalla.com/lity/
* Copyright (c) 2015-2020 Jan Sorgalla; Licensed MIT */ !function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(n){return t(e,n)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=t(e,require("jquery")):e.lity=t(e,e.jQuery||e.Zepto)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=e.document,i=t(e),o=t.Deferred,r=t("html"),a=[],l="aria-hidden",s="lity-"+l,d={esc:!0,handler:null,handlers:{image:w,inline:function e(n,i){var o,r,a;try{o=t(n)}catch(l){return!1}return!!o.length&&(r=t('<i style="display:none !important"></i>'),a=o.hasClass("lity-hide"),i.element().one("lity:remove",function(){r.before(o).remove(),a&&!o.closest(".lity-content").length&&o.addClass("lity-hide")}),o.removeClass("lity-hide").after(r))},youtube:function e(n){var i=u.exec(n);return!!i&&$(x(n,b("https://www.youtube"+(i[2]||"")+".com/embed/"+i[4],t.extend({autoplay:1},g(i[5]||"")))))},vimeo:function e(n){var i=f.exec(n);return!!i&&$(x(n,b("https://player.vimeo.com/video/"+i[3],t.extend({autoplay:1},g(i[4]||"")))))},googlemaps:function e(t){var n=y.exec(t);return!!n&&$(x(t,b("https://www.google."+n[3]+"/maps?"+n[6],{output:n[6].indexOf("layer=c")>0?"svembed":"embed"})))},facebookvideo:function e(n){var i=p.exec(n);return!!i&&(0!==n.indexOf("http")&&(n="https:"+n),$(x(n,b("https://www.facebook.com/plugins/video.php?href="+n,t.extend({autoplay:1},g(i[4]||""))))))},iframe:$},template:'<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'},c=/(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,u=/(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,f=/(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,y=/((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,p=/(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,v=function(){var e=n.createElement("div"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(void 0!==e.style[i])return t[i];return!1}();function h(e){var t=o();return v&&e.length?(e.one(v,t.resolve),setTimeout(t.resolve,500)):t.resolve(),t.promise()}function m(e,n,i){if(1===arguments.length)return t.extend({},e);if("string"==typeof n){if(void 0===i)return void 0===e[n]?null:e[n];e[n]=i}else t.extend(e,n);return this}function g(e){for(var t,n=decodeURI(e.split("#")[0]).split("&"),i={},o=0,r=n.length;o<r;o++)n[o]&&(i[(t=n[o].split("="))[0]]=t[1]);return i}function b(e,n){return e+(e.indexOf("?")>-1?"&":"?")+t.param(n)}function x(e,t){var n=e.indexOf("#");return -1===n?t:(n>0&&(e=e.substr(n)),t+e)}function w(e,n){var i=t('<img src="'+e+'" alt="'+(n.opener()&&n.opener().data("lity-desc")||"Image with no description")+'"/>'),r=o(),a=function(){r.reject(t('<span class="lity-error"></span>').append("Failed loading image"))};return i.on("load",function(){if(0===this.naturalWidth)return a();r.resolve(i)}).on("error",a),r.promise()}function $(e){return'<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen allow="autoplay; fullscreen" src="'+e+'"/></div>'}function _(){return n.documentElement.clientHeight?n.documentElement.clientHeight:Math.round(i.height())}function C(e){var t,i,o,r,a=E();if(a){27===e.keyCode&&a.options("esc")&&a.close(),9===e.keyCode&&(t=e,i=a,o=i.element().find('a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])'),r=o.index(n.activeElement),t.shiftKey&&r<=0?(o.get(o.length-1).focus(),t.preventDefault()):t.shiftKey||r!==o.length-1||(o.get(0).focus(),t.preventDefault()))}}function k(){t.each(a,function(e,t){t.resize()})}function E(){return 0===a.length?null:a[0]}function j(e,c,u,f){var y,p,v,g,b,x,w,$,E,j,D,z=this,T=!1,O=!1;c=t.extend({},d,c),p=t(c.template),z.element=function(){return p},z.opener=function(){return u},z.options=t.proxy(m,z,c),z.handlers=t.proxy(m,z,c.handlers),z.resize=function(){T&&!O&&v.css("max-height",_()+"px").trigger("lity:resize",[z])},z.close=function(){if(T&&!O){O=!0,(e=z).element().attr(l,"true"),1===a.length&&(r.removeClass("lity-active"),i.off({resize:k,keydown:C})),(d=(a=t.grep(a,function(t){return e!==t})).length?a[0].element():t(".lity-hidden")).removeClass("lity-hidden").each(function(){var e=t(this),n=e.data(s);n?e.attr(l,n):e.removeAttr(l),e.removeData(s)});var e,d,c=o();if(f&&(n.activeElement===p[0]||t.contains(p[0],n.activeElement)))try{f.focus()}catch(u){}return v.trigger("lity:close",[z]),p.removeClass("lity-opened").addClass("lity-closed"),h(v.add(p)).always(function(){v.trigger("lity:remove",[z]),p.remove(),p=void 0,c.resolve()}),c.promise()}},y=(g=e,b=z,x=c.handlers,w=c.handler,E="inline",j=t.extend({},x),w&&j[w]?($=j[w](g,b),E=w):(t.each(["inline","iframe"],function(e,t){delete j[t],j[t]=x[t]}),t.each(j,function(e,t){return!(t&&(!t.test||t.test(g,b)))||(!1!==($=t(g,b))?(E=e,!1):void 0)})),{handler:E,content:$||""}),p.attr(l,"false").addClass("lity-loading lity-opened lity-"+y.handler).appendTo("body").focus().on("click","[data-lity-close]",function(e){t(e.target).is("[data-lity-close]")&&z.close()}).trigger("lity:open",[z]),D=z,1===a.unshift(D)&&(r.addClass("lity-active"),i.on({resize:k,keydown:C})),t("body > *").not(D.element()).addClass("lity-hidden").each(function(){var e=t(this);void 0===e.data(s)&&e.data(s,e.attr(l)||null)}).attr(l,"true"),t.when(y.content).always(function e(n){v=t(n).css("max-height",_()+"px"),p.find(".lity-loader").each(function(){var e=t(this);h(e).always(function(){e.remove()})}),p.removeClass("lity-loading").find(".lity-content").empty().append(v),T=!0,v.trigger("lity:ready",[z])})}function D(e,i,o){e.preventDefault?(e.preventDefault(),e=(o=t(this)).data("lity-target")||o.attr("href")||o.attr("src")):o=t(o);var r=new j(e,t.extend({},o.data("lity-options")||o.data("lity"),i),o,n.activeElement);if(!e.preventDefault)return r}return w.test=function(e){return c.test(e)},D.version="2.4.1",D.options=t.proxy(m,D,d),D.handlers=t.proxy(m,D,d.handlers),D.current=E,t(n).on("click.lity","[data-lity]",D),D});