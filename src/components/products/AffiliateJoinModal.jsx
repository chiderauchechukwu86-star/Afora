import {useState} from "react";import Modal from "../ui/Modal.jsx";import Button from "../ui/Button.jsx";import Icon from "../ui/Icon.jsx";import {Field} from "../auth/Field.jsx";
import {useApp} from "../../context/AppContext.jsx";import {buildMessage,fmt,waUrl} from "../../lib/whatsapp.js";import {checkName,checkPhone} from "../../lib/auth.js";
export default function AffiliateJoinModal(){
 const {enq,setEnq,user,setToast}=useApp();const p=enq.product;
 const [f,setF]=useState({full:user?.name||"",pref:user?.name?.split(" ")[0]||"",phone:user?.whatsapp||""});const [touched,setTouched]=useState(false);
 const set=k=>e=>setF({...f,[k]:e.target.value});
 const err={full:checkName(f.full),pref:f.pref.trim()?"":"Tell us what to call you.",phone:checkPhone(f.phone)};const valid=!Object.values(err).some(Boolean);
 const msg=buildMessage("becomeAffiliate",{product:p,fullName:f.full.trim(),preferred:f.pref.trim(),phone:f.phone.trim()});const url=waUrl(msg);
 const close=()=>setEnq(null);const show=k=>touched?err[k]:"";
 const copy=async()=>{if(!valid)return setTouched(true);try{await navigator.clipboard.writeText(msg);setToast("Message copied")}catch{setToast("Copy not available")}};
 return <Modal title="Become an Affiliate" onClose={close}>
 <p className="text-sm text-mute">One-time fee of <b className="text-ink">{fmt(p.price)}</b>. It gives you room to promote <b className="text-ink">all</b> Afora blueprints. Fill in your details and we continue on WhatsApp.</p>
 <div className="mt-5 space-y-4">
 <Field id="aff-full" label="Full name" autoComplete="name" value={f.full} onChange={set("full")} error={show("full")} placeholder="Your full name"/>
 <Field id="aff-pref" label="What should we address you as?" value={f.pref} onChange={set("pref")} error={show("pref")} placeholder="e.g. Ada"/>
 <Field id="aff-phone" label="WhatsApp number" type="tel" autoComplete="tel" value={f.phone} onChange={set("phone")} error={show("phone")} hint="Include your country code, e.g. +234 801 234 5678"/></div>
 {valid&&<><p className="mt-5 text-xs font-medium text-mute">Message preview</p><p className="mt-1 bg-soft p-3 text-sm break-words">{msg}</p></>}
 <p className="mt-3 text-xs text-mute">WhatsApp opens with this message ready. You review and send it yourself. No payment is taken on this site; the owner replies with how to pay and get started.</p>
 <div className="mt-5 flex flex-col sm:flex-row gap-2">
 {valid&&url?<a href={url} target="_blank" rel="noopener noreferrer" onClick={()=>setTimeout(close,100)} className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-green px-5 h-11 text-sm font-semibold text-white hover:bg-green-dark"><Icon name="wa"/>Continue to WhatsApp</a>
 :<Button className="flex-1" onClick={()=>setTouched(true)}><Icon name="wa"/>Continue to WhatsApp</Button>}
 <Button variant="outline" className="flex-1" onClick={copy}>Copy message</Button></div></Modal>}
