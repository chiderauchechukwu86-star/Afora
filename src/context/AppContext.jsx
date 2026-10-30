import {createContext,useContext,useEffect,useState} from "react";import {PRODUCTS} from "../data/products.js";import {getSession,logIn,logOut,signUp,updateUser,changePassword} from "../lib/auth.js";
const Ctx=createContext();export const useApp=()=>useContext(Ctx);
const loadCart=()=>{try{return JSON.parse(sessionStorage.getItem("afora-cart"))||[]}catch{return[]}};
export function AppProvider({children}){
 const [cart,setCart]=useState(loadCart);const [drawer,setDrawer]=useState(false);const [user,setUser]=useState(getSession);
 const [enq,setEnq]=useState(null);const [notice,setNotice]=useState(false);const [toast,setToast]=useState("");
 const [theme,setTheme]=useState(()=>{try{return localStorage.getItem("afora-theme")||"light"}catch{return"light"}});
 useEffect(()=>{try{sessionStorage.setItem("afora-cart",JSON.stringify(cart))}catch{}},[cart]);
 useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem("afora-theme",theme)}catch{}},[theme]);
 useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(""),2200);return()=>clearTimeout(t)},[toast]);
 const items=cart.map(s=>PRODUCTS.find(p=>p.slug===s)).filter(Boolean);
 const priced=items.filter(p=>p.price!=null);
 const value={items,subtotal:priced.reduce((a,p)=>a+p.price,0),unpriced:items.length-priced.length,
  inCart:s=>cart.includes(s),
  add:p=>{if(cart.includes(p.slug)){setToast("Already in your checkout");return}setCart([...cart,p.slug]);setToast(`${p.name} added`)},
  remove:s=>setCart(cart.filter(x=>x!==s)),
  user,login:async(e,p,rm)=>{const r=await logIn(e,p,rm);if(r.user)setUser(r.user);return r},signup:async d=>{const r=await signUp(d);if(r.user)setUser(r.user);return r},logout:()=>{logOut();setUser(null)},updateProfile:async p=>{const r=await updateUser(user.id,p);if(r.user)setUser(r.user);return r},changePw:(c,n)=>changePassword(user.id,c,n),
  drawer,setDrawer,enq,setEnq,notice,setNotice,toast,setToast,theme,setTheme};
 return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
