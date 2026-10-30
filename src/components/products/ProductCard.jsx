import {Link} from "react-router-dom";import Cover from "../ui/Cover.jsx";import Button from "../ui/Button.jsx";
import useImage from "../../lib/useImage.js";import {useApp} from "../../context/AppContext.jsx";import {fmt} from "../../lib/whatsapp.js";
export default function ProductCard({p}){
 const {add,setEnq,inCart}=useApp();const ok=useImage(p.image);const to=`/products/${p.slug}`;const isAff=p.type==="affiliate";
 return <article className="group bg-card border border-line rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
 {ok?<Cover to={to} label={`View ${p.name}`} src={p.image} alt={p.name} className="aspect-[16/10] w-full group-hover:scale-105 transition duration-500"/>
 :<Link to={to} aria-label={`View ${p.name}`} className="block aspect-[16/10] bg-gradient-to-br from-green to-green-dark"/>}
 <div className="p-5 flex-1 flex flex-col"><h3 className="font-serif text-lg font-bold">{p.name}</h3><p className="text-sm text-mute mt-1 flex-1">{p.summary}</p>
 <p className="mt-4 text-lg font-bold text-accent">{fmt(p.price)}</p>
 <Link to={to} className="mt-3 inline-flex h-11 items-center justify-center rounded-xl bg-green text-white text-sm font-semibold shadow-sm hover:bg-green-dark">View Details</Link>
 {isAff?<Button variant="outline" className="mt-2" onClick={()=>setEnq({type:"becomeAffiliate",product:p})}>Become an Affiliate</Button>
 :<><Button variant="outline" className="mt-2" onClick={()=>setEnq({type:"buy",product:p})}>Lock Your Spot</Button>
 <button onClick={()=>add(p)} className="mt-3 text-xs text-mute hover:text-ink underline self-center">{inCart(p.slug)?"✓ In checkout":"Add to checkout"}</button></>}</div></article>}
