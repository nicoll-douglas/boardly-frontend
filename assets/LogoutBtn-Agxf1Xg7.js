import{t as u,q as d,r as c,j as o,I as m,B as r}from"./index-CfX38i0E.js";import{b as i}from"./index-BOgs50uT.js";import{u as x}from"./useSubmitHandlers-Cwbi2rXh.js";import{u as g}from"./chunk-7JBTTEVG-DxtWywDM.js";import{A as f,a as h,M as j,H as p}from"./chunk-RAWN7VJ3-DVbMMFoJ.js";import{M as C,c as M,d as S}from"./chunk-4FCEGNGT-B-jdCA2V.js";async function b(){return fetch("https://demo.boardly.nicolldouglas.dev/api/auth/logout",{method:"POST",credentials:"include"})}function L(){const{toast:n,...s}=u(),t=d(),e=c.useMemo(()=>({500:()=>s.serverError(),429:()=>s.tooMany(),200:()=>{n({status:"success",title:"Successfully logged out"}),setTimeout(t,500,"/")}}),[]);return x(b,e)}function A({variant:n}){const{isOpen:s,onClose:t,onOpen:e}=g(),a=c.useRef(),l=L();return o.jsxs(o.Fragment,{children:[n!=="text"?o.jsx(m,{icon:o.jsx(i,{}),variant:"ghost",onClick:e,"aria-label":"Logout"}):o.jsx(r,{rightIcon:o.jsx(i,{}),onClick:e,children:"Logout"}),o.jsxs(f,{isOpen:s,onClose:t,size:"xs",children:[o.jsx(C,{}),o.jsxs(h,{mx:4,children:[o.jsx(M,{children:"Logout?"}),o.jsx(S,{}),o.jsx(j,{children:o.jsxs(p,{gap:3,children:[o.jsx(r,{ref:a,colorScheme:"red",onClick:t,children:"Cancel"}),o.jsx(r,{onClick:l,children:"Confirm"})]})})]})]})]})}export{A as L};
