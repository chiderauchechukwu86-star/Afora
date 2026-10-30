import {Link} from "react-router-dom";import {CONFIG} from "../../lib/config.js";import {useApp} from "../../context/AppContext.jsx";
export default function Footer(){
 const {setEnq}=useApp();const a="hover:underline";
 return <footer className="mt-20 bg-green-dark text-white"><div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
 <div><div className="font-serif text-3xl font-bold">Afora</div><p className="mt-2 text-white/70">{CONFIG.tagline}. Learn · Grow · Earn</p></div>
 <div><h3 className="font-semibold mb-3">Explore</h3><ul className="space-y-2 text-white/80"><li><Link className={a} to="/">Home</Link></li><li><Link className={a} to="/how-it-works">How It Works</Link></li><li><Link className={a} to="/products">Blueprints</Link></li><li><Link className={a} to="/community">Community</Link></li><li><Link className={a} to="/about">About</Link></li></ul></div>
 <div><h3 className="font-semibold mb-3">Support</h3><ul className="space-y-2 text-white/80"><li><button className={a} onClick={()=>setEnq({type:"contact"})}>Contact</button></li><li><Link className={a} to="/settings">Settings</Link></li></ul></div>
 <div><h3 className="font-semibold mb-3">Legal</h3><ul className="space-y-2 text-white/80"><li><Link className={a} to="/terms">Terms of Service</Link></li><li><Link className={a} to="/privacy">Privacy Policy</Link></li></ul></div></div>
 <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">© {new Date().getFullYear()} Afora. Stage 1 frontend prototype.</div></footer>}
