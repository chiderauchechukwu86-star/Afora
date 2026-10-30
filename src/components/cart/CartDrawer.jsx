import {useEffect} from "react";import {Link} from "react-router-dom";
import Cover from "../ui/Cover.jsx";import Icon from "../ui/Icon.jsx";import Button from "../ui/Button.jsx";
import {useApp} from "../../context/AppContext.jsx";import {fmt} from "../../lib/whatsapp.js";import {CONFIG} from "../../lib/config.js";
export default function CartDrawer(){
 const {items,subtotal,unpriced,remove,setEnq,setDrawer}=useApp();const close=()=>setDrawer(false);
 useEffect(()=>{const h=e=>e.key==="Escape"&&setDrawer(false);addEventListener("keydown",h);return()=>removeEventListener("keydown",h)},[setDrawer]);
 return <div className="fixed inset-0 z-[55]"><div className="absolute inset-0 bg-black/50 fade" onClick={close}/>
 <aside role="dialog" aria-modal="true" aria-label="Your checkout" className="slide absolute right-0 top-0 h-full w-full max-w-sm bg-card shadow-2xl flex flex-col">
 <div className="flex items-center justify-between p-5 border-b border-line"><h2 className="font-semibold">Your Checkout ({items.length})</h2><button aria-label="Close checkout" onClick={close}><Icon name="x"/></button></div>
 <div className="flex-1 overflow-auto p-5">{!items.length?
  <div className="text-center py-16 text-mute"><Icon name="cart" className="w-10 h-10 mx-auto mb-3"/><p className="text-sm">Your checkout is empty.</p><Link to="/products" onClick={close} className="mt-4 inline-block text-sm font-medium text-accent underline">Browse blueprints</Link></div>
  :<ul className="space-y-4">{items.map(p=><li key={p.slug} className="flex gap-3 items-center"><Cover src={p.image} alt={p.name} className="w-16 h-12 rounded-md shrink-0"/>
   <div className="flex-1 min-w-0"><p className="text-sm font-medium truncate">{p.name}</p><p className="text-xs text-mute">{fmt(p.price)}</p></div>
   <button aria-label={`Remove ${p.name}`} onClick={()=>remove(p.slug)} className="p-2 text-mute hover:text-red-600"><Icon name="trash" className="w-4 h-4"/></button></li>)}</ul>}</div>
 {!!items.length&&<div className="p-5 border-t border-line">
  <div className="flex justify-between font-semibold"><span>Subtotal</span><span>{unpriced===items.length?"To be confirmed":CONFIG.currency+subtotal.toLocaleString()}</span></div>
  {unpriced>0&&unpriced<items.length&&<p className="text-xs text-mute mt-1">{unpriced} item(s) without a confirmed price are not included.</p>}
  <Button className="w-full mt-4" onClick={()=>{close();setEnq({type:"cart"})}}><Icon name="wa"/>Continue to WhatsApp</Button>
  <p className="text-xs text-mute text-center mt-2">This starts your spot reservation on WhatsApp. No payment is made on this site.</p></div>}
 </aside></div>}
