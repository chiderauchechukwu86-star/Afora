import {useState} from "react";import {useApp} from "../../context/AppContext.jsx";import {Card,Head} from "../../components/app/ui.jsx";
import {Field,PasswordField} from "../../components/auth/Field.jsx";import Button from "../../components/ui/Button.jsx";import {checkEmail,checkPassword,checkPhone} from "../../lib/auth.js";
const Toggle=({id,label,checked,onChange})=><div className="flex items-center justify-between py-3"><span id={id} className="text-sm">{label}</span>
 <button role="switch" aria-checked={checked} aria-labelledby={id} onClick={()=>onChange(!checked)} className={`w-11 h-6 rounded-full p-0.5 transition ${checked?"bg-green":"bg-line"}`}><span className={`block w-5 h-5 rounded-full bg-white transition ${checked?"translate-x-5":""}`}/></button></div>;
export default function AppSettings(){
 const {user,updateProfile,changePw,theme,setTheme,setToast,logout}=useApp();
 const [email,setEmail]=useState(user.email);const [phone,setPhone]=useState(user.whatsapp);const [e,setE]=useState({});
 const [pw,setPw]=useState({cur:"",next:"",conf:""});const [pe,setPe]=useState({});
 const [notif,setNotif]=useState(()=>{try{return localStorage.getItem("afora-notif")!=="off"}catch{return true}});
 const saveEmail=async ev=>{ev.preventDefault();const m=checkEmail(email);setE({...e,email:m});if(m)return;const r=await updateProfile({email});setE({...e,email:r.error||""});if(!r.error)setToast("Email updated")};
 const savePhone=async ev=>{ev.preventDefault();const m=checkPhone(phone);setE({...e,phone:m});if(m)return;const r=await updateProfile({whatsapp:phone});setE({...e,phone:r.error||""});if(!r.error)setToast("Phone number updated")};
 const savePw=async ev=>{ev.preventDefault();const v={cur:pw.cur?"":"Enter your current password.",next:checkPassword(pw.next),conf:pw.conf!==pw.next?"Passwords do not match.":""};setPe(v);if(Object.values(v).some(Boolean))return;
  const r=await changePw(pw.cur,pw.next);if(r.error)setPe({cur:r.error});else{setPw({cur:"",next:"",conf:""});setToast("Password changed")}};
 const setN=v=>{setNotif(v);try{localStorage.setItem("afora-notif",v?"on":"off")}catch{}};
 return <><Head title="Settings" sub="Manage your account and preferences."/>
 <div className="grid gap-4 lg:grid-cols-2">
 <Card title="Email"><form onSubmit={saveEmail} noValidate className="space-y-4"><Field id="se" label="Email address" type="email" value={email} onChange={x=>setEmail(x.target.value)} error={e.email}/><Button type="submit">Update email</Button></form></Card>
 <Card title="Phone number"><form onSubmit={savePhone} noValidate className="space-y-4"><Field id="sp" label="WhatsApp number" type="tel" value={phone} onChange={x=>setPhone(x.target.value)} error={e.phone} hint="Include your country code."/><Button type="submit">Update number</Button></form></Card>
 <Card title="Change password" className="lg:col-span-2"><form onSubmit={savePw} noValidate className="grid sm:grid-cols-3 gap-4 items-start">
 <PasswordField id="cp" label="Current password" autoComplete="current-password" value={pw.cur} onChange={x=>setPw({...pw,cur:x.target.value})} error={pe.cur}/>
 <PasswordField id="np" label="New password" autoComplete="new-password" value={pw.next} onChange={x=>setPw({...pw,next:x.target.value})} error={pe.next} hint="At least 8 characters, including a letter."/>
 <PasswordField id="cf" label="Confirm new password" autoComplete="new-password" value={pw.conf} onChange={x=>setPw({...pw,conf:x.target.value})} error={pe.conf}/>
 <Button type="submit" className="sm:col-span-3 sm:w-fit">Change password</Button></form></Card>
 <Card title="Preferences" className="lg:col-span-2 divide-y divide-line"><Toggle id="dm" label="Dark mode" checked={theme==="dark"} onChange={v=>setTheme(v?"dark":"light")}/><Toggle id="nt" label="Notifications" checked={notif} onChange={setN}/>
 <p className="pt-3 text-xs text-mute">Preferences are saved on this device only.</p></Card>
 <Card title="Account" className="lg:col-span-2"><p className="text-sm text-mute mb-4">Accounts are a prototype stored only in this browser. There is no server yet.</p><Button variant="outline" onClick={logout}>Log out</Button></Card></div></>}
