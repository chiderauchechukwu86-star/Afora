import {useEffect} from "react";import {Link,useLocation} from "react-router-dom";
import Icon from "../components/ui/Icon.jsx";import ProductGrid from "../components/products/ProductGrid.jsx";
import {useApp} from "../context/AppContext.jsx";import useImage from "../lib/useImage.js";import {CONFIG} from "../lib/config.js";import {AFFILIATE} from "../data/products.js";import {fmt} from "../lib/whatsapp.js";
const STEPS=[["Explore the Blueprints","Review the digital blueprints and choose the one that fits your goals."],["Choose Your Path","Lock your spot in a blueprint, or become an affiliate to promote them all."],["Continue on WhatsApp","Send the prepared message and the owner replies personally."]];
const TRUST=[["shield","Quality Blueprints","Handled personally"],["bolt","Easy Process","Enquire on WhatsApp"],["link","Affiliate Program",`${CONFIG.commissionRate}% commission`]];
export default function Home(){
 const {pathname}=useLocation();const {user}=useApp();const heroOk=useImage("/images/afora/home-hero.jpg"),commOk=useImage("/images/afora/community-flyer.jpg");
 useEffect(()=>{const id=pathname.slice(1);if(id==="how-it-works"||id==="community")setTimeout(()=>document.getElementById(id)?.scrollIntoView(),30)},[pathname]);
 return <>
 <section className={`max-w-6xl mx-auto px-4 pt-14 pb-10 grid gap-12 items-center ${heroOk?"lg:grid-cols-2":""}`}>
  <div><span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-mute"><span className="w-1.5 h-1.5 rounded-full bg-gold"/>Learn · Grow · Earn</span>
  <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">Marketing<br/>with <span className="text-accent">Aura</span></h1>
  <p className="mt-6 text-lg text-mute max-w-md leading-relaxed">Afora connects you with valuable digital products to learn from and opportunities to earn by promoting products you believe in.</p>
  <div className="mt-8 flex flex-wrap gap-3">{user?<Link to="/app/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-green px-6 h-12 text-sm font-semibold text-white hover:bg-green-dark">Go to Dashboard<Icon name="arrow" className="w-4 h-4"/></Link>
  :<><Link to="/login" className="inline-flex items-center rounded-xl bg-green px-8 h-12 text-sm font-semibold text-white hover:bg-green-dark">Login</Link><Link to="/signup" className="inline-flex items-center rounded-xl border border-line px-8 h-12 text-sm font-semibold hover:bg-soft">Create Account</Link></>}</div>
  <div className="mt-10 grid grid-cols-3 gap-3 text-xs max-w-md">{TRUST.map(([i,t,s])=><div key={t}><Icon name={i} className="w-5 h-5 text-accent"/><p className="mt-2 font-semibold">{t}</p><p className="text-mute">{s}</p></div>)}</div></div>
  {heroOk&&<img src="/images/afora/home-hero.jpg" alt="Afora" width="1200" height="900" className="w-full aspect-[4/3] rounded-[2rem] object-cover bg-soft shadow-2xl shadow-green-dark/20 ring-1 ring-line"/>}</section>

 <section id="how-it-works" className="scroll-mt-20 max-w-6xl mx-auto px-4 py-16"><h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-center">How It Works</h2><p className="text-center text-mute mt-2">Get started in 3 simple steps.</p>
  <div className="mt-8 grid gap-4 md:grid-cols-3">{STEPS.map(([t,d],i)=><div key={t} className="bg-card border border-line rounded-3xl p-7 text-center"><div className="mx-auto w-9 h-9 rounded-full bg-green text-white flex items-center justify-center font-semibold">{i+1}</div><h3 className="mt-4 font-serif text-lg font-bold">{t}</h3><p className="text-sm text-mute mt-1">{d}</p></div>)}</div>
  <p className="text-center text-sm text-mute mt-5">Afora currently handles every enquiry and affiliate request personally, so nothing is automatic yet.</p>
  <div className="mt-8 grid gap-4 md:grid-cols-2">
   <div className="rounded-3xl bg-soft p-8"><h3 className="font-serif text-xl font-bold">Ready to Lock Your Spot?</h3><p className="text-sm text-mute mt-1">Review the blueprint details, then message the owner on WhatsApp to reserve your place and learn the next steps.</p><Link to="/products" className="mt-4 inline-flex items-center rounded-xl bg-green px-6 h-11 text-sm font-semibold text-white hover:bg-green-dark">View Blueprints</Link></div>
   <div className="rounded-3xl bg-soft p-8"><h3 className="font-serif text-xl font-bold">Want to Affiliate?</h3><p className="text-sm text-mute mt-1">Pay a one-time {fmt(AFFILIATE.price)} to unlock affiliate access to promote all Afora blueprints and earn a {CONFIG.commissionRate}% commission on every sale you bring in.</p><Link to="/products/become-an-affiliate" className="mt-4 inline-flex items-center rounded-xl border border-accent px-6 h-11 text-sm font-semibold text-accent hover:bg-green hover:text-white hover:border-green">Become an Affiliate</Link></div></div></section>

 

 <section id="products" className="scroll-mt-20 max-w-6xl mx-auto px-4 py-16"><div className="flex items-end justify-between mb-6"><h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">Our Blueprints</h2><Link to="/products" className="text-sm font-medium text-accent underline">View all</Link></div><ProductGrid/></section>

 <section id="community" className={`scroll-mt-20 max-w-6xl mx-auto px-4 py-16 grid gap-12 items-center ${commOk?"md:grid-cols-2":""}`}>
  {commOk&&<img src="/images/afora/community-flyer.jpg" alt="Afora community flyer" width="1000" height="1250" loading="lazy" className="w-full max-w-sm mx-auto aspect-[4/5] rounded-[2rem] object-cover bg-soft shadow-2xl shadow-green-dark/20 ring-1 ring-line"/>}
  <div><span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-mute"><span className="w-1.5 h-1.5 rounded-full bg-gold"/>Community</span>
  <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">Join a Community</h2>
  <p className="mt-5 text-mute leading-relaxed">The Afora community is a private WhatsApp group for people who share a common goal: to learn, to grow and to build income through knowledge. Members connect with fellow learners and aspiring affiliates, share their progress, and ask questions in a supportive environment.</p>
  <p className="mt-4 text-mute leading-relaxed">It is also where updates are announced first, including new blueprints and affiliate opportunities. Whether you are just getting started or already developing your skills, you are welcome to join the conversation and grow alongside the community.</p>
  {CONFIG.communityLink?<a href={CONFIG.communityLink} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-green px-6 h-12 text-sm font-semibold text-white shadow-sm hover:bg-green-dark"><Icon name="wa"/>Join on WhatsApp</a>
  :<><button disabled className="mt-7 inline-flex items-center gap-2 rounded-xl bg-green px-6 h-12 text-sm font-semibold text-white opacity-50 cursor-not-allowed"><Icon name="wa"/>Join on WhatsApp</button><p className="mt-3 text-xs text-mute">The group invite link will be added soon.</p></>}</div></section>

 </>}
