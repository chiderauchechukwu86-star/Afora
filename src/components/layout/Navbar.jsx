import {useEffect,useState} from "react";import {Link,NavLink,useLocation} from "react-router-dom";
import Logo from "../ui/Logo.jsx";import Button from "../ui/Button.jsx";import Icon from "../ui/Icon.jsx";import {useApp} from "../../context/AppContext.jsx";
const LINKS=[["Home","/"],["How It Works","/how-it-works"],["Blueprints","/products"],["Community","/community"],["About","/about"],["Settings","/settings"]];
const pr="inline-flex items-center justify-center rounded-xl px-5 h-11 text-sm font-semibold bg-green text-white shadow-sm hover:bg-green-dark";
export default function Navbar(){
 const {user,logout}=useApp();const [open,setOpen]=useState(false);const {pathname}=useLocation();
 useEffect(()=>setOpen(false),[pathname]);
 const cls=({isActive})=>`transition hover:text-accent ${isActive?"text-accent font-semibold":""}`;
 return <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur border-b border-line">
 <div className="max-w-6xl mx-auto px-4 h-[72px] flex items-center justify-between"><Logo/>
 <nav className="hidden lg:flex gap-7 text-sm" aria-label="Main">{LINKS.map(([t,h])=><NavLink key={t} to={h} end className={cls}>{t}</NavLink>)}</nav>
 <div className="hidden lg:flex items-center gap-2">{user?<><Link to="/app/dashboard" className={pr}>Dashboard</Link><Button variant="ghost" onClick={logout}>Log out</Button></>
 :<><Link to="/login" className="inline-flex items-center rounded-xl px-5 h-11 text-sm font-semibold hover:bg-soft">Login</Link><Link to="/signup" className={pr}>Create Account</Link></>}</div>
 <button className="lg:hidden p-2 -mr-2" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}><Icon name={open?"x":"menu"} className="w-6 h-6"/></button></div>
 {open&&<div className="lg:hidden border-t border-line bg-bg px-4 py-3 flex flex-col">
 {LINKS.map(([t,h])=><Link key={t} to={h} className="py-3 text-sm border-b border-line">{t}</Link>)}
 <div className="flex gap-2 pt-3">{user?<><Link to="/app/dashboard" className={`flex-1 ${pr}`}>Dashboard</Link><Button variant="outline" className="flex-1" onClick={()=>{setOpen(false);logout()}}>Log out</Button></>
 :<><Link to="/login" className="flex-1 inline-flex items-center justify-center rounded-xl border border-line px-5 h-11 text-sm font-semibold">Login</Link><Link to="/signup" className={`flex-1 ${pr}`}>Create Account</Link></>}</div></div>}
 </header>}
