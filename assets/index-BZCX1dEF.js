import{j as e,B as i,r as x,C as d,H as g,L as u,a as m,V as h,b as j,T as l,F as f,I as b}from"./index-4ulQWezs.js";import{F as k}from"./FormModal-CSWPt1cU.js";import{L as F}from"./LoginForm-CvYmYfBb.js";import{R as L}from"./RegisterForm-D2eC91Ui.js";import{T as y}from"./index-D5g2DK6g.js";import{u as w}from"./chunk-7JBTTEVG-bqMuTkud.js";import{S as B}from"./chunk-BL2ZZSHG-BD5m8KD1.js";import{L as C}from"./chunk-K7XRJ7NL-DmonQNJP.js";import"./chunk-4FCEGNGT-BmvcryFd.js";import"./chunk-7254PCTD-CCpdpq8O.js";import"./useSubmitHandlers-DjEugLkN.js";import"./chunk-OFOVX77R-CxszOX9N.js";import"./chunk-W7WUSNWJ-BBRS0i-z.js";import"./index.esm-p7AaXQnn.js";import"./helperText-BjkVZXYi.js";function S(o){return e.jsx(i,{variant:"link",...o,children:"Login"})}function c({children:o="Sign up",...s}){return e.jsx(i,{...s,children:o})}function T({isOpen:o,onClose:s,isLoginForm:r,onToggle:n}){return e.jsxs(k,{heading:r?"Login":"Sign Up",isOpen:o,onClose:s,children:[r?e.jsx(F,{}):e.jsx(L,{onClose:s}),e.jsx(i,{variant:"link",mx:"auto",size:"sm",display:"block",mt:2,onClick:n,children:r?"Not a member?":"Already a member?"})]})}const R="/assets/chatting-dryIb692.svg";function q(){const{isOpen:o,onOpen:s,onClose:r}=w(),[n,t]=x.useState(null);function p(){t(!0),s()}function a(){t(!1),s()}return e.jsxs(d,{children:[e.jsxs(g,{children:[e.jsx(u,{to:"/"}),e.jsx(B,{}),e.jsx(y,{}),e.jsx(S,{ml:4,"data-cy":"LoginForm-open",onClick:p}),e.jsx(c,{ml:6,"data-cy":"RegisterForm-open",onClick:a}),e.jsx(T,{isOpen:o,isLoginForm:n,onClose:r,onToggle:()=>t(!n)})]}),e.jsx(m,{flex:1,mt:12,px:4,children:e.jsxs(h,{gap:4,maxW:"2xl",as:"main",children:[e.jsx(j,{as:"h1",size:{base:"2xl",sm:"3xl"},wordBreak:"break-word",children:"Expression, freedom, connection."}),e.jsx(l,{fontSize:{sm:"lg"},children:"Browse threads, share your thoughts, participate in open dialogue or just come and hang out with like-minded people. Join the messaging board today."}),e.jsxs(f,{w:"full",flexDir:{base:"column",sm:"row"},children:[e.jsx(c,{maxW:"fit-content",mt:{base:0,md:4},size:{base:"md",sm:"lg"},onClick:a,children:"Join for free"}),e.jsx(b,{src:R,w:{base:"300px",md:"380px"},h:{base:"300px",md:"380px"},ml:"auto",mt:-4,mr:{sm:"auto",md:0},alt:"graphic displaying dialogue"})]})]})}),e.jsx(m,{mb:16,children:e.jsxs(l,{display:"flex",gap:1,as:"footer",children:["A project by",e.jsx(i,{as:C,href:"https://github.com/nicoll-douglas",target:"_blank",variant:"link",children:"Nicoll Douglas"})]})})]})}export{q as default};
