import Icon from "../ui/Icon.jsx";import {useApp} from "../../context/AppContext.jsx";
export default function FloatingCart(){
 const {items,setDrawer}=useApp();
 return <button onClick={()=>setDrawer(true)} aria-label={`Open checkout, ${items.length} item${items.length===1?"":"s"}`} className="fixed z-50 right-4 bottom-4 flex items-center gap-2 rounded-full bg-green text-white pl-4 pr-5 py-3 shadow-xl hover:bg-green-dark">
 <span className="relative"><Icon name="cart"/>{items.length>0&&<span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-gold text-[#23262B] text-[11px] font-semibold flex items-center justify-center">{items.length}</span>}</span><span className="text-sm font-medium">Checkout</span></button>}
