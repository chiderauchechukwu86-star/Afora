import {Link} from "react-router-dom";import useImage from "../lib/useImage.js";
const OFFER=[["Learn Something Valuable","Explore digital products designed to help you develop skills, gain knowledge, and pursue your interests."],
["Share Products You Believe In","Interested in affiliate marketing? You can enquire about promoting Afora products and learn how our affiliate opportunities work."],
["Grow Through Knowledge and Opportunity","Our goal is to make discovering useful digital products and exploring affiliate marketing straightforward, accessible, and convenient."]];
export default function About(){
 const ok=useImage("/images/afora/about-image.jpg");
 return <>
 <section className={`max-w-6xl mx-auto px-4 pt-14 pb-16 grid gap-12 items-center ${ok?"md:grid-cols-2":"max-w-3xl"}`}>
 <div><span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-mute"><span className="w-1.5 h-1.5 rounded-full bg-gold"/>About</span>
 <h1 className="mt-6 font-serif text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">About <span className="text-accent">Afora</span></h1>
 <p className="mt-4 font-serif text-xl font-bold text-ink">Marketing Value. Creating Opportunities.</p>
 <p className="mt-6 text-lg text-mute leading-relaxed">Afora is a digital marketplace built to connect people with valuable digital products, practical knowledge, and opportunities to earn through affiliate marketing.</p>
 <p className="mt-4 text-mute leading-relaxed">We believe that knowledge has value and that sharing the right products with the right people can create new opportunities. That's why Afora brings digital learning and affiliate marketing together in one place.</p>
 <p className="mt-4 text-mute leading-relaxed">Whether you're looking to develop your coding skills, explore trading education, improve your graphic design abilities, or discover products worth sharing, Afora gives you a place to start.</p></div>
 {ok&&<img src="/images/afora/about-image.jpg" alt="About Afora" width="1200" height="900" className="w-full aspect-[4/3] rounded-[2rem] object-cover bg-soft shadow-2xl shadow-green-dark/20 ring-1 ring-line"/>}</section>
 <section className="max-w-6xl mx-auto px-4 pb-16"><h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">What We Offer</h2>
 <div className="mt-8 grid gap-4 md:grid-cols-3">{OFFER.map(([t,d],i)=><div key={t} className="bg-card border border-line rounded-md p-7"><div className="w-9 h-9 rounded-full bg-green text-white flex items-center justify-center font-semibold">{i+1}</div><h3 className="mt-4 font-serif text-lg font-bold">{t}</h3><p className="mt-2 text-sm text-mute leading-relaxed">{d}</p></div>)}</div></section>
 <section className="max-w-6xl mx-auto px-4 pb-4"><div className="rounded-md bg-soft p-8 sm:p-12">
 <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">Our Vision</h2>
 <p className="mt-5 text-mute leading-relaxed max-w-3xl">Afora begins with our own digital products, but our ambition is to grow into a platform where valuable products and the people who create, discover, and promote them can come together.</p>
 <p className="mt-4 text-mute leading-relaxed max-w-3xl">We're building one step at a time, with a focus on value, simplicity, and opportunity.</p>
 <p className="mt-8 font-serif text-xl font-bold text-accent">Afora — Discover Value. Share Opportunity.</p>
 <div className="mt-6 flex flex-wrap gap-3"><Link to="/products" className="inline-flex items-center rounded-full bg-green px-6 h-12 text-sm font-semibold text-white shadow-sm hover:bg-green-dark">Explore Blueprints</Link><Link to="/community" className="inline-flex items-center rounded-full border border-line bg-card px-6 h-12 text-sm font-semibold hover:bg-bg">Join the Community</Link></div></div></section></>}
