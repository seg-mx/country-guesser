(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{4830:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/play",function(){return n(8358)}])},6269:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var s=n(1527),a=n(8922),r=n.n(a),o=n(959),i=n(9970),c=n.n(i);function u(e){let{onConfirm:t,onCancel:n,title:a,children:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:c().background}),(0,s.jsxs)("div",{className:c().popup,children:[(0,s.jsx)("p",{className:c().title,children:a}),(0,s.jsx)("p",{className:c().text,children:r}),(0,s.jsxs)("div",{className:c()["button-list"],children:[(0,s.jsx)("button",{className:"".concat(c().confirm," ").concat(c().button),onClick:t,children:"Confirm"}),(0,s.jsx)("button",{className:"".concat(c().cancel," ").concat(c().button),onClick:n,children:"Cancel"})]})]})]})}var l=n(2462);function p(e){let{home:t,text:n}=e,a=(0,s.jsx)("img",{src:"/country-guesser/icons/home.svg",alt:"Home",className:r().image}),[i,c]=(0,o.useState)(!1),p=(0,l.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[i&&(0,s.jsx)(u,{onConfirm:()=>{p.push("/")},onCancel:()=>{c(!1)},title:"Are you sure you want to quit?",children:"Your progress will not be saved."}),(0,s.jsxs)("nav",{className:r().navigation,children:[void 0!=n&&(0,s.jsx)("p",{className:r().text,children:n}),(0,s.jsx)("a",{href:"https://github.com/seg-mx/country-guesser",children:(0,s.jsx)("img",{src:"/country-guesser/icons/github.svg",alt:"GitHub",className:r().image})}),t?(0,s.jsx)("a",{children:a}):(0,s.jsx)("a",{onClick:()=>c(!0),children:a})]})]})}function d(e){let{children:t,home:n,text:a}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{home:n,text:a}),t]})}},8358:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d},default:function(){return _}});var s=n(1527),a=n(6269),r=n(959),o=n(4417),i=n.n(o);function c(e){let t={á:"a",é:"e",í:"i",ó:"o",ú:"u",ã:"a",ô:"o",ș:"s",ă:"a",",":"",".":"","'":"","-":" "};for(let n of(e=e.toLowerCase().trim().replace(/\s+/g," "),Object.keys(t)))e=e.replaceAll(n,t[n]);return e}let u=r.forwardRef((e,t)=>{let{placeholder:n,answers:a,showResult:o,score:u,addScore:l,addMistake:p}=e,[d,_]=(0,r.useState)(""),[f,m]=(0,r.useState)("");return(0,r.useEffect)(()=>{if(m(""),!o){_("");return}let e=-1!=a.map(c).indexOf(c(d));e?(m(i().correct),l(u)):(m(i().wrong),p())},[o]),(0,s.jsx)("input",{type:"text",placeholder:n,disabled:o,value:d,onChange:e=>_(e.target.value),className:i().input+" "+(o?f:""),ref:t})});var l=n(1402),p=n.n(l),d=!0;function _(e){let{countriesJSON:t}=e,[n,o]=(0,r.useState)(t),[i,c]=(0,r.useState)(!1),[l,d]=(0,r.useState)(-1),[_,f]=(0,r.useState)(0),[m,h]=(0,r.useState)(0),x=(0,r.useRef)(null),g=(0,r.useRef)(null),j=e=>{f(t=>t+e)},b=()=>{h(e=>e+1)},v=()=>{d(Math.floor(Math.random()*(n.length-1)))};(0,r.useEffect)(()=>{v()},[]);let N=e=>{var t;if(e.preventDefault(),i){c(!1),o(n.filter((e,t)=>t!=l)),v(),setTimeout(()=>{var e;null===(e=x.current)||void 0===e||e.focus()},100);return}c(!0),null===(t=g.current)||void 0===t||t.focus()},y=n[l];return(0,s.jsxs)(a.Z,{text:"Score: ".concat(_.toLocaleString()," | ")+"Mistakes: ".concat(m," | ")+"Remaining: ".concat(n.length),children:[!y&&-1!=l&&(0,s.jsx)("p",{className:p()["finish-text"],children:"Game finished!"}),y&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:p().display,children:i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:y.name.official}),(0,s.jsx)("p",{children:y.capitals.join(", ")})]}):(0,s.jsx)("img",{src:"/country-guesser/flags/".concat(y.svg)})}),(0,s.jsxs)("form",{onSubmit:N,className:p().form,children:[(0,s.jsx)(u,{placeholder:"Country name",answers:[y.name.common,y.name.official],showResult:i,score:200,addScore:j,addMistake:b,ref:x}),(0,s.jsx)(u,{placeholder:"Country capital",answers:[...y.capitals,y.capitals.join(", ")],showResult:i,score:400,addScore:j,addMistake:b}),(0,s.jsx)("button",{className:p()["send-button"],ref:g,children:i?"Continue":"Send"})]})]})]})}},8922:function(e){e.exports={navigation:"header_navigation__UE1ly",image:"header_image__CijPH",text:"header_text__mFYQG"}},1402:function(e){e.exports={"finish-text":"play_finish-text__d0ySB",display:"play_display__5mYwd",form:"play_form__aDnAz","send-button":"play_send-button__uPzdu"}},9970:function(e){e.exports={background:"popup_background__bN0Pw",popup:"popup_popup__WXEjK",title:"popup_title__07fsA",text:"popup_text__Za_zR","button-list":"popup_button-list__CygkL",button:"popup_button__mp8SR",confirm:"popup_confirm__dbAlj",cancel:"popup_cancel__DLzLi"}},4417:function(e){e.exports={input:"question-input_input__UNIir",correct:"question-input_correct__R3jYG",wrong:"question-input_wrong__kkUik"}},2462:function(e,t,n){e.exports=n(8973)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4830)}),_N_E=e.O()}]);