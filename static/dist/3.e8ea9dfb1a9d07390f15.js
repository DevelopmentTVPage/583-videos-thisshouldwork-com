tvpageJsonp([3],{315:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),o=l(n),s=a(523),r=l(s),i=a(524),d=l(i),u=a(525),c=l(u),f=a(273),m=l(f),p=function(e){var t=window.location.protocol+"//"+window.location.host+e,a="https://www.facebook.com/sharer/sharer.php?u="+t;window.open(a,"_new")},v=function(e){var t="https://twitter.com/share?url="+window.location.protocol+"//"+window.location.host+e;window.open(t,"_new")},h=function(e){var t=document.createElement("textarea");if(t.value=window.location.protocol+"//"+window.location.host+e,t.style.position="fixed",t.style.top=0,t.style.left=0,t.style.width="2em",t.style.height="2em",t.style.padding=0,t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy")){var a=document.getElementById("tooltip-text");a.classList.remove("tvp-hide"),setTimeout(function(){a.classList.add("tvp-hide")},3e3)}document.body.removeChild(t)},w=function(e){"span"===e.target.localName&&e.target.classList.add("tvp-hover")},g=function(e){"span"===e.target.localName&&e.target.classList.remove("tvp-hover")},E=function(e){var t=TVSite.baseUrl+"images/logo.png";return e&&"//sitecdn.tvpage.com/player/logos/default_profile.jpg"!==e&&(t="https://api.tvpage.com"+e),t},_=function(e){var t=e.url,a=!!e.video.hasOwnProperty("id")&&e.video,l=e.ambassador.hasOwnProperty("user_id"),n=e.ambassador,s=l?n.id||n.user_id:void 0,i=l?TVSite.baseUrl+"a/"+(n.user_slug||n.titleTextEncoded)+"/"+s+"/":void 0,u=l?E(n.profile_picture):TVSite.baseUrl+"images/logo.png";return o.default.createElement("div",{className:"video-info"},o.default.createElement("div",{className:"details-wrapper"},o.default.createElement("span",{className:"tvp-published"},"Published on ",a&&o.default.createElement("span",null,m.default.getDateFromUnix(a.date_created))),o.default.createElement("span",{className:"tvp-duration"},"Duration ",a&&o.default.createElement("span",null,a.asset&&a.asset.prettyDuration)),o.default.createElement("span",{className:"tvp-social"}," Share",o.default.createElement("span",{onClick:function(){return p(t)},onMouseEnter:w,onMouseLeave:g,className:"tvp-social-facebook"},o.default.createElement(d.default,null)),o.default.createElement("span",{onClick:function(){return v(t)},onMouseEnter:w,onMouseLeave:g,className:"tvp-social-twitter"},o.default.createElement(r.default,null)),o.default.createElement("span",{onClick:function(){return h(t)},onMouseEnter:w,onMouseLeave:g,className:"tvp-social-twitter share-link"},o.default.createElement(c.default,null),o.default.createElement("span",{id:"tooltip-text",className:"tooltip-text tvp-hide"},"Copied to clipboard.")))),l&&o.default.createElement("div",{className:"ambassador-profile"},o.default.createElement("a",{href:i,alt:n.first_name},o.default.createElement("div",{className:"tvp-author"},o.default.createElement("div",{className:"tvp-author-thumbnail",style:{backgroundImage:"url("+u+")"}},o.default.createElement("img",{src:u,alt:n.first_name})),o.default.createElement("div",{className:"ambassador-details"},o.default.createElement("span",{className:"ambassador-name"},n.first_name+" "+n.last_name),n.videos_count&&o.default.createElement("span",{className:"ambassador-videos"},n.videos_count||0," Videos"))))))};t.default=_},523:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),n=function(e){return e&&e.__esModule?e:{default:e}}(l),o=function(){return n.default.createElement("svg",{width:"20",height:"20",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("path",{fill:"#333333",d:"M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"}))};t.default=o},524:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),n=function(e){return e&&e.__esModule?e:{default:e}}(l),o=function(){return n.default.createElement("svg",{width:"20",height:"20",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("path",{fill:"#333333",d:"M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"}))};t.default=o},525:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),n=function(e){return e&&e.__esModule?e:{default:e}}(l),o=function(){return n.default.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24"},n.default.createElement("path",{fill:"#333333",d:"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"}))};t.default=o}});