(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),o=(a(23),a(3)),i=a(4),u=a(5),s=a.n(u),m=a(16),f=a(2),d=a(17),E=a.n(d),b={entertainment:"manga"},p=c.a.createContext(),h=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(f.a)(a,2),l=r[0],u=r[1],d=Object(n.useState)(!1),h=Object(f.a)(d,2),v=h[0],g=h[1],y=Object(n.useState)([]),O=Object(f.a)(y,2),j=O[0],N=O[1],q=Object(n.useState)(0),w=Object(f.a)(q,2),x=w[0],S=w[1],C=Object(n.useState)(0),k=Object(f.a)(C,2),M=k[0],z=k[1],A=Object(n.useState)(!1),F=Object(f.a)(A,2),_=F[0],I=F[1],H=Object(n.useState)({amount:10,category:"entertainment",difficulty:"easy"}),J=Object(f.a)(H,2),L=J[0],Q=J[1],T=Object(n.useState)(!1),B=Object(f.a)(T,2),D=B[0],P=B[1],Y=function(){var e=Object(m.a)(s.a.mark((function e(t,a,n){var c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),u(!1),e.next=4,E()(t).catch((function(e){return console.log(e)}));case 4:(c=e.sent)?(r=(r=c.data.data[0][n]).slice(0,a),console.log(r),r.length>0?(N(r),g(!1),u(!1),I(!1)):(u(!0),I(!0))):u(!0);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),G=function(){S((function(e){var t=e+1;return t>j.length-1?(K(),0):t}))},K=function(){P(!0)};return c.a.createElement(p.Provider,{value:{waiting:l,loading:v,questions:j,index:x,correct:M,error:_,isModalOpen:D,nextQuestion:G,checkAnswer:function(e){e&&z((function(e){return e+1})),G()},closeModal:function(){u(!0),z(0),P(!1)},quiz:L,handleChange:function(e){var t=e.target.name,a=e.target.value;Q(Object(i.a)(Object(i.a)({},L),{},Object(o.a)({},t,a)))},handleSubmit:function(e){e.preventDefault();var t=L.amount,a=L.category,n=L.difficulty,c="".concat("https://0228-final-project.can.canonic.dev/api/").concat(b[a]);Y(c,t,n)}}},t)},v=function(){return Object(n.useContext)(p)},g=function(){var e=v(),t=e.quiz,a=e.handleChange,n=e.handleSubmit,r=e.error;return c.a.createElement("main",null,c.a.createElement("section",{className:"quiz quiz-small"},c.a.createElement("form",{className:"setup-form"},c.a.createElement("h2",null,"setup quiz"),c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"amount"},"number of questions"),c.a.createElement("input",{type:"number",name:"amount",id:"amount",value:t.amount,onChange:a,className:"form-input",min:1,max:10})),c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"category"},"category"),c.a.createElement("select",{name:"category",id:"category",className:"form-input",value:t.category,onChange:a},c.a.createElement("option",{value:"entertainment"},"entertainment"))),c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"difficulty"},"select difficulty"),c.a.createElement("select",{name:"difficulty",id:"difficulty",className:"form-input",value:t.difficulty,onChange:a},c.a.createElement("option",{value:"easy"},"easy"),c.a.createElement("option",{value:"medium"},"medium"),c.a.createElement("option",{value:"hard"},"hard"))),r&&c.a.createElement("p",{className:"error"},"can't generate questions, please try different options"),c.a.createElement("button",{type:"submit",onClick:n,className:"submit-btn"},"start"))))},y=function(){return c.a.createElement("main",null,c.a.createElement("div",{className:"loading"}))},O=function(){var e=v(),t=e.isModalOpen,a=e.closeModal,n=e.correct,r=e.questions;return c.a.createElement("div",{className:"".concat(t?"modal-container isOpen":"modal-container")},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h2",null,"congrats!"),c.a.createElement("p",null,"You answered ",(n/r.length*100).toFixed(0),"% of questions correctly"),c.a.createElement("button",{className:"close-btn",onClick:a},"play again")))};var j=function(){var e=v(),t=e.waiting,a=e.loading,n=e.questions,r=e.index,l=e.correct,o=e.nextQuestion,i=e.checkAnswer;if(t)return c.a.createElement(g,null);if(a)return c.a.createElement(y,null);var u=n[r],s=u.question,m=u.incorrectAnswers,f=u.correctAnswer,d=m.split(","),E=Math.floor(4*Math.random());return 3===E?d.push(f):(d.push(d[E]),d[E]=f),c.a.createElement("main",null,c.a.createElement(O,null),c.a.createElement("section",{className:"quiz"},c.a.createElement("p",{className:"correct-answers"},"correct answers : ",l,"/",r),c.a.createElement("article",{className:"container"},c.a.createElement("h2",{dangerouslySetInnerHTML:{__html:s}}),c.a.createElement("div",{className:"btn-container"},d.map((function(e,t){return c.a.createElement("button",{key:t,className:"answer-btn",onClick:function(){return i(f===e)},dangerouslySetInnerHTML:{__html:e}})})))),c.a.createElement("button",{className:"next-question",onClick:o},"next question")))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null,c.a.createElement(j,null))),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2700d597.chunk.js.map