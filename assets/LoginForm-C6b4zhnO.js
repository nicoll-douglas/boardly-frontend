import{q as l,t as g,r as p,j as r,G as n,B as f}from"./index-CfX38i0E.js";import{u as b}from"./index.esm-7bvCp7Uk.js";import{u as y}from"./useSubmitHandlers-Cwbi2rXh.js";async function h(e){return fetch("https://demo.boardly.nicolldouglas.dev/api/auth/login",{method:"POST",body:JSON.stringify(e.getValues()),credentials:"include",headers:{"Content-Type":"application/json"}})}function w(e){const s=async()=>h(e),a=l(),{toast:o,...t}=g(),i=p.useMemo(()=>({400:async u=>{const{feedback:m}=await u.json();m.forEach(({subject:d,message:c})=>e.setError(d,{message:c}))},404:()=>{e.setError("username",{message:"Username or password is incorrect"}),e.setError("password",{message:"Username or password is incorrect"})},401:()=>{o({status:"warning",title:"Verification Needed",description:"Please check your email to verify your account."})},429:()=>t.tooMany15(),500:()=>t.serverError(),200:()=>{o({status:"success",title:"Successfully logged in"}),a("/home")}}),[]);return y(s,i)}function j(){const e=b({shouldUnregister:!0}),s=w(e);return r.jsxs("form",{onSubmit:e.handleSubmit(s),"aria-label":"Login Form",children:[r.jsx(n,{label:"Username",formRef:e,registerKey:"username",inputTestId:"LoginForm-username",errorTestId:"LoginForm-username-error",placeholder:"Enter username",...e.register("username",{required:"Username is required"})}),r.jsx(n,{label:"Password",formRef:e,registerKey:"password",inputTestId:"LoginForm-password",errorTestId:"LoginForm-password-error",placeholder:"Enter password",password:{forgot:!0},...e.register("password",{required:"Password is required"})}),r.jsx(f,{type:"submit",w:"full","data-cy":"LoginForm-submit",isLoading:e.formState.isSubmitting,children:"Submit"})]})}export{j as L};
