import {useState} from "react";import Modal from "../ui/Modal.jsx";import Button from "../ui/Button.jsx";import Icon from "../ui/Icon.jsx";
import {useApp} from "../../context/AppContext.jsx";import {buildMessage,waUrl} from "../../lib/whatsapp.js";
const TITLES={buy:"Lock your spot",cart:"Lock your spots",contact:"Contact Afora",withdraw:"Withdrawal request"};
export default function EnquiryModal(){
 const {enq,setEnq,items,setToast,user}=useApp();const [name,setName]=useState(user?.name||"");const close=()=>setEnq(null);
 const msg=buildMessage(enq.type,{product:enq.product,items,name,amount:enq.amount});const url=waUrl(msg);
 const copy=async()=>{try{await navigator.clipboard.writeText(msg);setToast("Message copied")}catch{setToast("Copy not available, select the text instead")}};
 return <Modal title={TITLES[enq.type]} onClose={close}>
 <label htmlFor="nm" className="text-sm font-medium">Your name <span className="text-mute font-normal">(optional)</span></label>
 <input id="nm" autoFocus value={name} onChange={e=>setName(e.target.value)} placeholder="e.g. Ada" className="mt-1 w-full rounded-xl border border-line bg-bg px-3 py-2.5 text-sm"/>
 <p className="mt-4 text-xs font-medium text-mute">Message preview</p><p className="mt-1 rounded-xl bg-soft p-3 text-sm break-words">{msg}</p>
 <p className="mt-3 text-xs text-mute">WhatsApp opens with this message ready. You review and send it yourself. No payment is taken here; the owner replies with next steps.</p>
 {!url&&<p className="mt-3 rounded-xl border border-gold/60 bg-gold/10 p-3 text-xs">The business WhatsApp number has not been configured yet, so WhatsApp can't open. You can copy the message instead.</p>}
 <div className="mt-5 flex flex-col sm:flex-row gap-2">
 {url?<a href={url} target="_blank" rel="noopener noreferrer" onClick={()=>setTimeout(close,100)} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-green px-4 py-2.5 text-sm font-medium text-white hover:bg-green-dark"><Icon name="wa"/>Open WhatsApp</a>
 :<Button className="flex-1" disabled><Icon name="wa"/>Open WhatsApp</Button>}
 <Button variant="outline" className="flex-1" onClick={copy}>Copy message</Button></div></Modal>}
