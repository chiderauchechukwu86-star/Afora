import {useEffect,useState} from "react";import {Link,useNavigate} from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout.jsx";import {Field,PasswordField} from "../components/auth/Field.jsx";import Button from "../components/ui/Button.jsx";
import {useApp} from "../context/AppContext.jsx";import {checkEmail,checkName,checkPassword,checkPhone} from "../lib/auth.js";
export default function Signup(){
 const {user,signup}=useApp();const nav=useNavigate();
 const [f,setF]=useState({name:"",whatsapp:"",email:"",password:"",confirm:"",terms:false});const [err,setErr]=useState({});const [busy,setBusy]=useState(false);
 useEffect(()=>{if(user)nav("/app/dashboard",{replace:true})},[user]);
 const set=k=>e=>setF({...f,[k]:e.target.value});
 const submit=async e=>{e.preventDefault();
  const v={name:checkName(f.name),whatsapp:checkPhone(f.whatsapp),email:checkEmail(f.email),password:checkPassword(f.password),
   confirm:f.confirm!==f.password?"Passwords do not match.":"",terms:f.terms?"":"Please accept the Terms and Privacy Policy."};
  setErr(v);if(Object.values(v).some(Boolean))return;
  setBusy(true);const r=await signup(f);setBusy(false);
  if(r.error)setErr({form:r.error});else nav("/app/dashboard")};
 return <AuthLayout title="Create your Afora account" subtitle="Start your digital journey with Afora.">
 <form onSubmit={submit} noValidate className="space-y-4">
 {err.form&&<p role="alert" className="rounded-xl border border-red-300 bg-red-50 dark:bg-red-950/30 p-3 text-sm text-red-700 dark:text-red-300">{err.form}</p>}
 <Field id="name" label="Full name" autoComplete="name" value={f.name} onChange={set("name")} error={err.name} placeholder="Your full name"/>
 <Field id="whatsapp" label="WhatsApp number" type="tel" autoComplete="tel" value={f.whatsapp} onChange={set("whatsapp")} error={err.whatsapp} hint="Include your country code, e.g. +234 801 234 5678" placeholder="+234 801 234 5678"/>
 <Field id="email" label="Email address" type="email" autoComplete="email" value={f.email} onChange={set("email")} error={err.email} placeholder="you@example.com"/>
 <PasswordField id="password" label="Password" autoComplete="new-password" value={f.password} onChange={set("password")} error={err.password} hint="At least 8 characters, including a letter."/>
 <PasswordField id="confirm" label="Confirm password" autoComplete="new-password" value={f.confirm} onChange={set("confirm")} error={err.confirm}/>
 <div><label className="flex items-start gap-2 text-sm text-mute"><input type="checkbox" checked={f.terms} onChange={e=>setF({...f,terms:e.target.checked})} className="mt-1 accent-[#0F4D3A]"/><span>I agree to the <Link to="/terms" className="underline text-ink">Terms of Service</Link> and <Link to="/privacy" className="underline text-ink">Privacy Policy</Link>.</span></label>
 {err.terms&&<p className="mt-1 text-xs text-red-600">{err.terms}</p>}</div>
 <Button type="submit" className="w-full" disabled={busy}>{busy?"Creating account...":"Create account"}</Button></form>
 <p className="mt-6 text-sm text-mute">Already have an account? <Link to="/login" className="font-semibold text-accent underline">Log in</Link></p></AuthLayout>}
