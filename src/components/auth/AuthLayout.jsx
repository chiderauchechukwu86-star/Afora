import useImage from "../../lib/useImage.js";
export default function AuthLayout({title,subtitle,children}){
 const ok=useImage("/images/afora/auth-side.jpg");
 return <section className={`mx-auto px-4 py-12 ${ok?"max-w-5xl":"max-w-xl"}`}><div className={`grid ${ok?"md:grid-cols-2":""} bg-card border border-line rounded-md overflow-hidden shadow-xl shadow-black/5`}>
 <div className="p-7 sm:p-10"><h1 className="font-serif text-3xl font-extrabold tracking-tight">{title}</h1><p className="mt-2 text-sm text-mute">{subtitle}</p><div className="mt-7">{children}</div></div>
 {ok&&<img src="/images/afora/auth-side.jpg" alt="" className="hidden md:block w-full h-full min-h-[480px] object-cover bg-soft"/>}</div>
 <p className="mt-4 text-center text-xs text-mute">Prototype: accounts are stored only in this browser. There is no server yet.</p></section>}
