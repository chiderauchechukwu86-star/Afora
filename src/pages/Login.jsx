import {useEffect,useState} from "react";import {Link,useNavigate} from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout.jsx";import {Field,PasswordField} from "../components/auth/Field.jsx";import Button from "../components/ui/Button.jsx";
import {useApp} from "../context/AppContext.jsx";import {checkEmail} from "../lib/auth.js";
export default function Login(){
 const {user,login}=useApp();const nav=useNavigate();
 const [f,setF]=useState({email:"",password:"",remember:false});const [err,setErr]=useState({});const [busy,setBusy]=useState(false);
 useEffect(()=>{if(user)nav("/app/dashboard",{replace:true})},[user]);
 const set=k=>e=>setF({...f,[k]:e.target.value});
 const submit=async e=>{e.preventDefault();
  const v={email:checkEmail(f.email),password:f.password?"":"Enter your password."};
  setErr(v);if(v.email||v.password)return;
  setBusy(true);const r=await login(f.email,f.password,f.remember);setBusy(false);
  if(r.error)setErr({form:r.error});else nav("/app/dashboard")};
 return <AuthLayout title="Welcome back" subtitle="Log in to continue your journey.">
 <form onSubmit={submit} noValidate className="space-y-4">
 {err.form&&<p role="alert" className="rounded-xl border border-red-300 bg-red-50 dark:bg-red-950/30 p-3 text-sm text-red-700 dark:text-red-300">{err.form}</p>}
 <Field id="email" label="Email" type="email" autoComplete="email" value={f.email} onChange={set("email")} error={err.email} placeholder="you@example.com"/>
 <PasswordField id="password" label="Password" autoComplete="current-password" value={f.password} onChange={set("password")} error={err.password}/>
 <label className="flex items-center gap-2 text-sm text-mute"><input type="checkbox" checked={f.remember} onChange={e=>setF({...f,remember:e.target.checked})} className="accent-[#0F4D3A]"/>Remember me</label>
 <Button type="submit" className="w-full" disabled={busy}>{busy?"Logging in...":"Log in"}</Button></form>
 <p className="mt-6 text-sm text-mute">Don't have an account? <Link to="/signup" className="font-semibold text-accent underline">Create an account</Link></p></AuthLayout>}
