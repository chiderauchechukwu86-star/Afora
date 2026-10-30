import {useState} from "react";import {useApp} from "../../context/AppContext.jsx";import {getAccount} from "../../data/account.js";import {money} from "../../lib/whatsapp.js";
import {Card,Head} from "../../components/app/ui.jsx";import Button from "../../components/ui/Button.jsx";import Icon from "../../components/ui/Icon.jsx";import {Field} from "../../components/auth/Field.jsx";
export default function Wallet(){
 const {user,setEnq}=useApp();const a=getAccount(user);const [amt,setAmt]=useState("");const [err,setErr]=useState("");
 const submit=e=>{e.preventDefault();const n=Number(amt);
  if(!amt||!(n>0))return setErr("Enter an amount greater than zero.");
  if(n>a.balance)return setErr(`You can withdraw up to ${money(a.balance)}.`);
  setErr("");setEnq({type:"withdraw",amount:n})};
 return <><Head title="Wallet" sub="Your available balance and how to withdraw it."/>
 <Card className="relative overflow-hidden !bg-green !border-green text-white !p-8"><div aria-hidden="true" className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full bg-gold/15"/><p className="text-sm text-white/70">Available balance</p><p className="mt-2 font-serif text-5xl font-extrabold">{money(a.balance)}</p></Card>
 <Card title="Withdraw money" className="mt-4">
 <form onSubmit={submit} noValidate className="max-w-sm space-y-4">
 <Field id="amt" label={`Amount (${money(0).slice(0,1)})`} type="number" inputMode="decimal" min="0" value={amt} onChange={e=>setAmt(e.target.value)} error={err} disabled={a.balance<=0} placeholder="0"/>
 <Button type="submit" disabled={a.balance<=0}><Icon name="wa"/>Request withdrawal</Button></form>
 {a.balance<=0&&<p className="mt-3 text-sm text-mute">You have no funds to withdraw yet.</p>}
 <p className="mt-4 text-xs text-mute">Withdrawals are handled manually for now. A request opens WhatsApp with your message ready, and the owner replies with next steps. Nothing is paid out automatically.</p></Card></>}
