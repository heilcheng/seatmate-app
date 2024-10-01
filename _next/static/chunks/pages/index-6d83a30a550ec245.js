(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(406)}])},406:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var s=a(5893),n=a(9008),r=a.n(n),i=a(7294);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((e,t,a)=>!!e&&a.indexOf(e)===t).join(" ")};var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let d=(0,i.forwardRef)((e,t)=>{let{color:a="currentColor",size:s=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:d,iconNode:m,...h}=e;return(0,i.createElement)("svg",{ref:t,...c,width:s,height:s,stroke:a,strokeWidth:r?24*Number(n)/Number(s):n,className:o("lucide",l),...h},[...m.map(e=>{let[t,a]=e;return(0,i.createElement)(t,a)}),...Array.isArray(d)?d:[d]])}),m=(e,t)=>{let a=(0,i.forwardRef)((a,s)=>{let{className:n,...r}=a;return(0,i.createElement)(d,{ref:s,iconNode:t,className:o("lucide-".concat(l(e)),n),...r})});return a.displayName="".concat(e),a},h=m("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]),x=m("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),u=m("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),g=m("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),f=m("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),p=m("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),b=e=>{let{icon:t,title:a,description:n}=e;return(0,s.jsxs)("div",{className:"bg-gray-800 rounded-xl p-4 flex items-start",children:[(0,s.jsx)("div",{className:"mr-4",children:t}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-white font-semibold mb-1",children:a}),(0,s.jsx)("p",{className:"text-gray-400 text-sm",children:n})]})]})};var y=()=>{let[e,t]=(0,i.useState)("home"),[a,n]=(0,i.useState)({}),[r,l]=(0,i.useState)([]),[o,c]=(0,i.useState)(!1),[d,m]=(0,i.useState)(null),[y,j]=(0,i.useState)([]),[N,w]=(0,i.useState)(""),[v,k]=(0,i.useState)(null),[S,C]=(0,i.useState)(!1),[M,A]=(0,i.useState)(""),[I,Y]=(0,i.useState)(0),z=e=>{n(t=>({...t,[e]:!t[e]}))},_=(0,i.useCallback)(async()=>{C(!0);let e=Object.entries(a).filter(e=>{let[t,a]=e;return a}).map(e=>{let[t,a]=e;return"I like to ".concat(t)}).join(". "),s="".concat(e,". ").concat(N).trim(),n=(e,t)=>{let a=e.toLowerCase().split(" "),s=t.toLowerCase().split(" ");return a.filter(e=>s.includes(e)).length/Math.max(a.length,s.length)},r=Object.entries({"1B":"Aisle seat. You can have extra legroom. Your seatmate like to enjoy a quiet environment and would like to eat during the flight.","2C":"Aisle seat. The passenger behind allow you to lay down. Your seatmate like to socialize.","3D":"Window seat. You can have a extra legroom. Your seatmate like to sleep during the flight."}).map(e=>{let[t,a]=e;return{seatNumber:t,compatibility:n(s,a),available:!0,description:a,price:Math.floor(50*Math.random())+50}});r.sort((e,t)=>t.compatibility-e.compatibility),k(r),t("seatSelection"),C(!1)},[a,N]),E=(e,t)=>{let a=[...t].sort((e,t)=>t-e);return e===a[0]?"bg-green-500":e===a[1]?"bg-yellow-500":"bg-red-500"},F=["Nice to meet you! I'm looking forward to our flight together.","Have you flown with this airline before? I find their service quite good.","Do you have any exciting plans at our destination?","I hope we have a smooth flight today. The weather looks good from what I've checked.","Feel free to let me know if you need to get up during the flight. I'm happy to accommodate.","Do you prefer to chat during flights or keep to yourself? I'm fine either way!","I always enjoy meeting new people on flights. It makes the journey more interesting!"],L=()=>{M.trim()&&(j([...y,{sender:"You",text:M}]),A(""),setTimeout(()=>{I<F.length?(j(e=>[...e,{sender:"Seatmate",text:F[I]}]),Y(I+1)):j(e=>[...e,{sender:"Seatmate",text:"It's been great chatting with you! Let's relax and enjoy the rest of our flight."}])},1e3))};return(0,s.jsx)("div",{className:"flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-4",children:(0,s.jsxs)("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl shadow-2xl overflow-hidden",children:["home"===e&&(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-8",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold text-green-400",children:"SeatMate.ai"}),(0,s.jsx)("button",{className:"bg-green-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold",children:"Sign In"})]}),(0,s.jsxs)("div",{className:"text-center mb-10",children:[(0,s.jsx)(h,{className:"text-green-400 w-20 h-20 mx-auto mb-4"}),(0,s.jsx)("h2",{className:"text-2xl font-bold text-white mb-2",children:"Find Your Perfect Seatmate"}),(0,s.jsx)("p",{className:"text-gray-400",children:"Enhance your flight experience with a compatible travel companion"})]}),(0,s.jsxs)("div",{className:"space-y-4 mb-8",children:[(0,s.jsx)(b,{icon:(0,s.jsx)(x,{className:"text-green-400"}),title:"Smart Matching",description:"Get paired with like-minded travelers based on your preferences"}),(0,s.jsx)(b,{icon:(0,s.jsx)(u,{className:"text-green-400"}),title:"Personalized Seating",description:"Choose your ideal seat with our interactive seat map"})]}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("button",{onClick:()=>t("matching"),className:"w-full bg-green-400 text-gray-900 py-3 rounded-full font-bold hover:bg-green-500 transition duration-300 flex items-center justify-center",children:["Start Your Journey",(0,s.jsx)(g,{className:"ml-2",size:20})]}),(0,s.jsx)("button",{className:"w-full bg-gray-800 text-green-400 py-3 rounded-full font-bold hover:bg-gray-700 transition duration-300",children:"Learn More"})]}),(0,s.jsx)("p",{className:"text-center text-gray-500 text-sm mt-8",children:"\xa9 2024 SeatMate.ai. All rights reserved."})]}),"matching"===e&&(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsx)("button",{onClick:()=>t("home"),className:"text-green-400 mb-4",children:(0,s.jsx)(f,{size:24})}),(0,s.jsx)("h2",{className:"text-xl text-green-400 mb-6",children:"Alex, set your preferences"}),(0,s.jsx)("div",{className:"mb-6 space-y-3",children:["enjoy a quiet environment.","socialize.","sleep during the flight.","eat during the flight.","lay down comfortably.","have extra legroom.","sit by the window for the view."].map(e=>(0,s.jsxs)("button",{className:"w-full py-3 px-4 rounded-full font-semibold text-sm flex items-center justify-between transition duration-300 ".concat(a[e]?"bg-green-400 text-gray-900":"bg-gray-700 text-gray-300 hover:bg-gray-600"),onClick:()=>z(e),children:["I like to ",e,a[e]&&(0,s.jsx)(p,{size:18})]},e))}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h3",{className:"text-white font-semibold mb-2",children:"Additional Preferences"}),(0,s.jsx)("textarea",{value:N,onChange:e=>w(e.target.value),placeholder:"Any other preferences or requests? (e.g., dietary restrictions, languages spoken)",className:"w-full bg-gray-700 text-white rounded-lg p-3 h-24 resize-none"})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h3",{className:"text-white font-semibold mb-2",children:"Previous Flight Destinations"}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=e.target.destination.value;t&&(l([...r,t]),e.target.destination.value="")},className:"flex mb-2",children:[(0,s.jsx)("input",{type:"text",name:"destination",placeholder:"Add a destination",className:"flex-grow bg-gray-700 text-white rounded-l-lg p-2"}),(0,s.jsx)("button",{type:"submit",className:"bg-green-400 text-gray-900 rounded-r-lg px-4 py-2",children:"Add"})]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:r.map((e,t)=>(0,s.jsx)("span",{className:"bg-gray-700 text-white px-3 py-1 rounded-full text-sm",children:e},t))})]}),(0,s.jsxs)("div",{className:"mb-6 flex items-center",children:[(0,s.jsx)("input",{type:"checkbox",id:"shareDestinations",checked:o,onChange:()=>c(!o),className:"mr-2"}),(0,s.jsx)("label",{htmlFor:"shareDestinations",className:"text-white",children:"Share my previous destinations for better matching"})]}),(0,s.jsx)("button",{onClick:_,disabled:S,className:"w-full bg-green-400 text-gray-900 py-3 rounded-full font-bold hover:bg-green-500 transition duration-300",children:S?"Finding...":"Find My Ideal Seat"})]}),"seatSelection"===e&&(()=>{if(!v)return null;let e=v.map(e=>e.compatibility),a=v.reduce((e,t)=>e.compatibility>t.compatibility?e:t);return(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsx)("button",{onClick:()=>t("matching"),className:"text-green-400 mb-4",children:(0,s.jsx)(f,{size:24})}),(0,s.jsx)("h2",{className:"text-xl font-bold text-green-400 mb-6",children:"Select Your Seat"}),(0,s.jsxs)("div",{className:"bg-gray-800 rounded-xl p-4 mb-6",children:[(0,s.jsx)("h3",{className:"text-white font-semibold mb-2",children:"Recommended Seat"}),(0,s.jsxs)("p",{className:"text-green-400 text-2xl font-bold mb-2",children:["The best match for you is... ",a.seatNumber,"!"]}),(0,s.jsx)("p",{className:"text-gray-400 mb-2",children:a.description}),(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsxs)("p",{className:"text-gray-400",children:["Original price: $",a.price]}),(0,s.jsxs)("p",{className:"text-green-400 font-bold",children:["Your price: $",(.9*a.price).toFixed(2)]})]}),(0,s.jsx)("p",{className:"text-sm text-gray-500 mt-1",children:"10% discount applied for using SeatMate.ai!"})]}),(0,s.jsxs)("div",{className:"bg-gray-800 rounded-xl p-4 mb-6",children:[(0,s.jsxs)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:[["A","B","C","D"].map(e=>(0,s.jsx)("div",{className:"text-center text-gray-400",children:e},e)),[1,2,3].map(t=>(0,s.jsx)(i.Fragment,{children:["A","B","C","D"].map(a=>{let n="".concat(t).concat(a),r=v.find(e=>e.seatNumber===n),i=void 0!==r;return(0,s.jsx)("button",{className:"w-full h-10 rounded-lg flex items-center justify-center text-white text-sm font-semibold transition duration-300 ".concat(i?"".concat(E(r.compatibility,e)," hover:opacity-80 ").concat(d===n?"ring-2 ring-white":""):"bg-gray-600 cursor-not-allowed"),disabled:!i,onClick:()=>i&&m(n),children:n},n)})},t))]}),d&&(0,s.jsxs)("div",{className:"mt-4 space-y-2",children:[(0,s.jsx)("p",{className:"text-white font-semibold",children:"Selected Seat Information:"}),(0,s.jsx)("p",{className:"text-gray-400",children:v.find(e=>e.seatNumber===d).description}),(0,s.jsx)("button",{onClick:()=>t("chat"),className:"w-full bg-green-400 text-gray-900 py-2 rounded-full font-bold hover:bg-green-500 transition duration-300 mt-4",children:"Confirm Seat Selection"})]})]})]})})(),"chat"===e&&(0,s.jsxs)("div",{className:"p-6 h-full flex flex-col",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,s.jsx)("button",{onClick:()=>t("seatSelection"),className:"text-green-400",children:(0,s.jsx)(f,{size:24})}),(0,s.jsxs)("h2",{className:"text-xl font-bold text-green-400",children:["Chat with Your Seatmate! ",d]}),(0,s.jsx)("div",{className:"w-6"})]}),(0,s.jsx)("div",{className:"flex-grow overflow-y-auto mb-4 space-y-4 bg-gray-800 rounded-xl p-4",children:y.map((e,t)=>(0,s.jsx)("div",{className:"flex ".concat("You"===e.sender?"justify-end":"justify-start"),children:(0,s.jsxs)("div",{className:"max-w-3/4 p-3 rounded-lg ".concat("You"===e.sender?"bg-green-400 text-gray-900":"bg-gray-700 text-white"),children:[(0,s.jsx)("p",{className:"font-semibold",children:e.sender}),(0,s.jsx)("p",{children:e.text})]})},t))}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("input",{type:"text",value:M,onChange:e=>A(e.target.value),placeholder:"Type a message...",className:"flex-grow bg-gray-700 text-white rounded-l-lg p-2",onKeyPress:e=>"Enter"===e.key&&L()}),(0,s.jsx)("button",{onClick:L,className:"bg-green-400 text-gray-900 rounded-r-lg px-4 py-2 font-bold",children:"Send"})]})]})]})})};function j(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:"SeatMate.ai"}),(0,s.jsx)("meta",{name:"description",content:"Find your perfect seatmate for your next flight"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)("main",{children:(0,s.jsx)(y,{})})]})}},9008:function(e,t,a){e.exports=a(7828)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);