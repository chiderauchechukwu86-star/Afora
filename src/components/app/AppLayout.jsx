import {useEffect,useState} from "react";import {Link,Navigate,NavLink,Outlet,useLocation} from "react-router-dom";
import Logo from "../ui/Logo.jsx";import Icon from "../ui/Icon.jsx";import {useApp} from "../../context/AppContext.jsx";
const NAV=[["Dashboard","/app/dashboard","dash"],["Wallet","/app/wallet","wallet"],["Profile","/app/profile","user"],["Settings","/app/settings","cog"],["Marketplace","/app/marketplace","store"]];
function Side({onNav}){
 const {user,logout}=useApp();const first=user.name.split(" ")[0];
 return <div className="flex flex-col h-full p-5"><Logo/>
 <div className="mt-8 flex items-center gap-3 rounded-xl bg-soft p-3"><div className="w-10 h-10 shrink-0 rounded-full bg-green text-white flex items-center justify-center font-bold">{first[0].toUpperCase()}</div>
 <div className="min-w-0"><p className="text-xs text-mute">Welcome</p><p className="font-serif font-bold truncate">Hi, {first}</p></div></div>
 <nav className="mt-6 space-y-1 flex-1" aria-label="Dashboard menu">{NAV.map(([t,h,i])=><NavLink key={h} to={h} onClick={onNav} className={({isActive})=>`flex items-center gap-3 rounded-xl px-3 h-11 text-sm font-semibold transition ${isActive?"bg-green text-white shadow-sm":"text-mute hover:bg-soft hover:text-ink"}`}><Icon name={i} className="w-[18px] h-[18px]"/>{t}</NavLink>)}</nav>
 <Link to="/" className="px-4 py-2 text-xs text-mute hover:text-ink">← Back to website</Link>
 <button onClick={logout} className="flex items-center gap-3 rounded-xl px-3 h-11 text-sm font-semibold text-red-600 hover:bg-soft"><Icon name="logout" className="w-[18px] h-[18px]"/>Log out</button></div>}
export default function AppLayout(){
 const {user}=useApp();const [open,setOpen]=useState(false);const {pathname}=useLocation();
 useEffect(()=>setOpen(false),[pathname]);
 if(!user)return <Navigate to="/login" replace/>;
 return <div className="min-h-screen">
 <aside className="hidden lg:block fixed inset-y-0 left-0 w-64 bg-card border-r border-line"><Side/></aside>
 <header className="lg:hidden sticky top-0 z-40 h-14 bg-bg/95 backdrop-blur border-b border-line flex items-center justify-between px-4"><Logo/>
 <button className="p-2 -mr-2" aria-label="Open menu" onClick={()=>setOpen(true)}><Icon name="menu" className="w-6 h-6"/></button></header>
 {open&&<div className="lg:hidden fixed inset-0 z-50"><div className="absolute inset-0 bg-black/50 fade" onClick={()=>setOpen(false)}/>
 <div role="dialog" aria-modal="true" aria-label="Menu" className="fade absolute left-0 top-0 h-full w-72 max-w-[85%] bg-card shadow-2xl"><button className="absolute right-3 top-5 p-1" aria-label="Close menu" onClick={()=>setOpen(false)}><Icon name="x"/></button><Side onNav={()=>setOpen(false)}/></div></div>}
 <main className="lg:pl-64"><div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 pb-24"><Outlet/></div></main></div>}
