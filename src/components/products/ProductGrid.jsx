import {PRODUCTS,BUY_PRODUCTS,AFFILIATE} from "../../data/products.js";import ProductCard from "./ProductCard.jsx";
export default function ProductGrid({mode}){const list=mode==="buy"?BUY_PRODUCTS:mode==="affiliate"?[AFFILIATE]:PRODUCTS;
 return <div className={`grid gap-6 sm:grid-cols-2 ${mode?"lg:grid-cols-3":"lg:grid-cols-4"}`}>{list.map(p=><ProductCard key={p.slug} p={p}/>)}</div>}
