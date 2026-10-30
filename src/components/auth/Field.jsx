import {useState} from "react";
const base="mt-1.5 w-full h-11 rounded-xl border bg-bg px-3.5 text-sm outline-none focus:border-accent";
export function Field({id,label,error,hint,...p}){
 return <div><label htmlFor={id} className="block text-sm font-medium">{label}</label>
 <input id={id} aria-invalid={!!error} aria-describedby={error?id+"-e":undefined} {...p} className={`${base} ${error?"border-red-500":"border-line"}`}/>
 {error?<p id={id+"-e"} className="mt-1 text-xs text-red-600">{error}</p>:hint&&<p className="mt-1 text-xs text-mute">{hint}</p>}</div>}
export function PasswordField({id,label,error,hint,...p}){
 const [show,setShow]=useState(false);
 return <div><label htmlFor={id} className="block text-sm font-medium">{label}</label>
 <div className="relative"><input id={id} type={show?"text":"password"} aria-invalid={!!error} aria-describedby={error?id+"-e":undefined} {...p} className={`${base} pr-16 ${error?"border-red-500":"border-line"}`}/>
 <button type="button" onClick={()=>setShow(!show)} aria-label={show?"Hide password":"Show password"} className="absolute right-3 top-[1.1rem] text-xs font-semibold text-mute hover:text-ink">{show?"Hide":"Show"}</button></div>
 {error?<p id={id+"-e"} className="mt-1 text-xs text-red-600">{error}</p>:hint&&<p className="mt-1 text-xs text-mute">{hint}</p>}</div>}
