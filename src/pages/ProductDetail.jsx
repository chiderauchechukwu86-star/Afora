import {Link,useParams} from "react-router-dom";import Cover from "../components/ui/Cover.jsx";import Button from "../components/ui/Button.jsx";import Icon from "../components/ui/Icon.jsx";
import {PRODUCTS} from "../data/products.js";import {useApp} from "../context/AppContext.jsx";import {fmt} from "../lib/whatsapp.js";import useImage from "../lib/useImage.js";import NotFound from "./NotFound.jsx";
export default function ProductDetail(){
 const {slug}=useParams();const p=PRODUCTS.find(x=>x.slug===slug);const ok=useImage(p?.image);const {add,setEnq,inCart,setDrawer}=useApp();
 if(!p)return <NotFound/>;
 return <section className="max-w-6xl mx-auto px-4 pt-8"><Link to="/products" className="inline-flex items-center gap-2 text-sm text-mute hover:text-ink"><Icon name="back" className="w-4 h-4"/>Back to Blueprints</Link>
 <div className={`mt-6 grid gap-10 ${ok?"md:grid-cols-2":"max-w-3xl"}`}><Cover src={p.image} alt={p.name} className="aspect-[4/3] rounded-md w-full"/><div>
 <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">{p.name}</h1><p className="mt-2 text-mute">{p.description}</p><p className="mt-4 text-2xl font-semibold text-accent">{fmt(p.price)}</p>
 <h2 className="mt-6 font-semibold">Results</h2><ul className="mt-2 space-y-2 text-sm">{p.included.map(x=><li key={x} className="flex gap-2"><Icon name="check" className="w-4 h-4 mt-0.5 text-accent shrink-0"/>{x}</li>)}</ul>
 <h2 className="mt-6 font-semibold">Who it's for</h2><ul className="mt-2 space-y-1 text-sm text-mute list-disc pl-5">{p.audience.map(x=><li key={x}>{x}</li>)}</ul>
 <div className="mt-8 flex flex-wrap gap-3">{p.type==="affiliate"?<Button onClick={()=>setEnq({type:"becomeAffiliate",product:p})}>Become an Affiliate</Button>
 :<><Button onClick={()=>setEnq({type:"buy",product:p})}>Lock Your Spot</Button>{inCart(p.slug)?<Button variant="ghost" onClick={()=>setDrawer(true)}>✓ In checkout · View</Button>:<Button variant="ghost" onClick={()=>add(p)}>Add to checkout</Button>}</>}</div></div></div></section>}
