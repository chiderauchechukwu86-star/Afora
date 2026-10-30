import {useState} from "react";import {useApp} from "../../context/AppContext.jsx";import {Card,Head} from "../../components/app/ui.jsx";
import {Field} from "../../components/auth/Field.jsx";import Button from "../../components/ui/Button.jsx";import {checkName} from "../../lib/auth.js";
export default function Profile(){
 const {user,updateProfile,setToast}=useApp();const [name,setName]=useState(user.name);const [err,setErr]=useState("");
 const save=async e=>{e.preventDefault();const v=checkName(name);setErr(v);if(v)return;const r=await updateProfile({name});r.error?setErr(r.error):setToast("Profile updated")};
 const row=(l,v)=><div className="flex justify-between gap-4 py-3 border-t border-line text-sm"><span className="text-mute">{l}</span><span className="font-medium break-all text-right">{v}</span></div>;
 return <><Head title="Profile" sub="Your account details."/>
 <Card><div className="flex items-center gap-4 mb-4"><div className="w-16 h-16 rounded-full bg-green text-white flex items-center justify-center text-2xl font-bold">{user.name[0].toUpperCase()}</div><div><p className="font-serif text-xl font-bold">{user.name}</p><p className="text-sm text-mute">Afora member</p></div></div>
 {row("WhatsApp number",user.whatsapp)}{row("Email",user.email)}
 <p className="mt-4 text-xs text-mute">To change your email or phone number, go to Settings.</p></Card>
 <Card title="Edit name" className="mt-4"><form onSubmit={save} noValidate className="max-w-sm space-y-4"><Field id="pname" label="Full name" value={name} onChange={e=>setName(e.target.value)} error={err}/><Button type="submit">Save changes</Button></form></Card></>}
