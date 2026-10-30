import {Navigate} from "react-router-dom";import {useApp} from "../context/AppContext.jsx";
export default function Settings(){
 const {theme,setTheme,user,logout}=useApp();if(user)return <Navigate to="/app/settings" replace/>;const f="mt-1 w-full rounded-md border border-line bg-soft px-3 py-2.5 text-sm text-mute cursor-not-allowed";
 return <section className="max-w-xl mx-auto px-4 pt-10"><h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">Settings</h1>
 <p className="mt-3 rounded-xl border border-gold/60 bg-gold/10 p-3 text-sm">Accounts are a prototype stored only in this browser. There is no server yet, so nothing here is synced or recoverable. Your appearance choice is stored on this device.</p>
 <h2 className="mt-8 font-semibold">Profile information</h2>
 <label htmlFor="ph" className="block mt-3 text-sm">WhatsApp number</label><input id="ph" readOnly value={user?.whatsapp||""} placeholder={user?"":"Log in to see your details"} className={f}/>
 <label htmlFor="em" className="block mt-3 text-sm">Recovery email</label><input id="em" readOnly value={user?.email||""} placeholder={user?"":"Log in to see your details"} className={f}/>
 <h2 className="mt-8 font-semibold">Preferences</h2>
 <div className="mt-3 flex items-center justify-between rounded-md border border-line bg-card p-4"><span id="dm" className="text-sm">Dark mode</span>
 <button role="switch" aria-checked={theme==="dark"} aria-labelledby="dm" onClick={()=>setTheme(theme==="dark"?"light":"dark")} className={`w-11 h-6 rounded-full p-0.5 transition ${theme==="dark"?"bg-green":"bg-line"}`}><span className={`block w-5 h-5 rounded-full bg-white transition ${theme==="dark"?"translate-x-5":""}`}/></button></div>{user&&<button onClick={logout} className="mt-6 text-sm font-semibold text-red-600 underline">Log out</button>}</section>}
