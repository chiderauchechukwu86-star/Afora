import {useState} from "react";import {Head} from "../../components/app/ui.jsx";import ProductGrid from "../../components/products/ProductGrid.jsx";
export default function Marketplace(){
 const [tab,setTab]=useState("buy");
 return <><Head title="Marketplace" sub="Lock your spot in a blueprint, or become an affiliate to promote them."/>
 <div role="tablist" aria-label="Marketplace" className="mb-6 inline-flex rounded-xl bg-soft p-1">{[["buy","Lock Your Spot"],["affiliate","Affiliate"]].map(([k,t])=>
 <button key={k} role="tab" aria-selected={tab===k} onClick={()=>setTab(k)} className={`rounded-lg px-5 h-10 text-sm font-semibold transition ${tab===k?"bg-card shadow-sm text-ink":"text-mute hover:text-ink"}`}>{t}</button>)}</div>
 <p className="mb-6 text-sm text-mute">{tab==="buy"?"Send a message on WhatsApp to reserve your spot. No payment is taken on this site.":"Become an affiliate for a one-time fee and promote every Afora blueprint."}</p>
 <ProductGrid mode={tab}/></>}
