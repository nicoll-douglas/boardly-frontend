import{s as u,r as f,u as h,c as x,d as m,e as y,j as e,F as g,b as k,T as b,S as j,f as F,C as p,H as T,L as v}from"./index-4ulQWezs.js";async function E(t){return u(async()=>fetch("https://lorem-backend-6ggh.onrender.com/api/auth/verify",{method:"POST",credentials:"include",headers:{Authorization:`Bearer ${t}`}}))()}function S(t){const[r,a]=f.useState(null),i=h(),{toast:o,...s}=x(),{error:n,data:c,isLoading:d}=m({queryKey:["POST /api/auth/verify"],queryFn:async()=>E(t),staleTime:0,retry:!1});return y(n,c,()=>{switch(n.status){case 401:a({heading:"Failed to Verify",text:"We could not verify your email address. The link is either invalid or expired."});break;case 500:s.serverError();break;case 429:s.tooMany15();break;case 0:s.networkError()}},()=>{a({heading:"Email Verified",text:"You will be redirected shortly, welcome to Lorem!"});const l=setTimeout(()=>{i("/home"),o({status:"success",title:"Successfully logged in"})},3e3);return()=>clearTimeout(l)}),{isLoading:d,UIFeedback:r}}function V({token:t}){const{isLoading:r,UIFeedback:a}=S(t);return e.jsxs(g,{flex:1,flexDir:"column",alignItems:"center",py:16,textAlign:"center",children:[a&&e.jsxs(e.Fragment,{children:[e.jsx(k,{"data-cy":"emailVerification-feedback-heading",as:"h1",size:"3xl",mb:6,children:a.heading}),e.jsx(b,{"data-cy":"emailVerification-feedback-text",fontSize:"xl",children:a.text})]}),r&&e.jsx(j,{size:"xl"})]})}function H(){const[t]=F();return e.jsxs(p,{children:[e.jsx(T,{children:e.jsx(v,{to:"/"})}),e.jsx(V,{token:t.get("token")})]})}export{H as default};
