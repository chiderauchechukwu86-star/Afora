import {useEffect} from "react";import {Navigate,Route,Routes,useLocation} from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";import Footer from "./components/layout/Footer.jsx";
import FloatingCart from "./components/cart/FloatingCart.jsx";import CartDrawer from "./components/cart/CartDrawer.jsx";
import AffiliateJoinModal from "./components/products/AffiliateJoinModal.jsx";import EnquiryModal from "./components/products/EnquiryModal.jsx";import Modal from "./components/ui/Modal.jsx";import Button from "./components/ui/Button.jsx";
import Home from "./pages/Home.jsx";import Products from "./pages/Products.jsx";import ProductDetail from "./pages/ProductDetail.jsx";
import AppLayout from "./components/app/AppLayout.jsx";import Dashboard from "./pages/app/Dashboard.jsx";import Wallet from "./pages/app/Wallet.jsx";import Profile from "./pages/app/Profile.jsx";import AppSettings from "./pages/app/AppSettings.jsx";import Marketplace from "./pages/app/Marketplace.jsx";import Login from "./pages/Login.jsx";import Signup from "./pages/Signup.jsx";import About from "./pages/About.jsx";import Settings from "./pages/Settings.jsx";import Legal from "./pages/Legal.jsx";import NotFound from "./pages/NotFound.jsx";
import {useApp} from "./context/AppContext.jsx";
export default function App(){
 const {drawer,setDrawer,enq,notice,setNotice,toast}=useApp();const {pathname}=useLocation();
 useEffect(()=>{const els=[...document.querySelectorAll(".reveal:not(.in)")];if(!("IntersectionObserver" in window)){els.forEach(e=>e.classList.add("in"));return}const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});els.forEach(e=>io.observe(e));return()=>io.disconnect()},[pathname]);
 useEffect(()=>{if(!["/how-it-works","/community"].includes(pathname))window.scrollTo(0,0);setDrawer(false)},[pathname]);
 return <>
 {!pathname.startsWith("/app")&&<Navbar/>}
 <main><Routes><Route path="/" element={<Home/>}/><Route path="/how-it-works" element={<Home/>}/><Route path="/community" element={<Home/>}/><Route path="/products" element={<Products/>}/>
 <Route path="/products/:slug" element={<ProductDetail/>}/><Route path="/app" element={<AppLayout/>}><Route index element={<Navigate to="dashboard" replace/>}/><Route path="dashboard" element={<Dashboard/>}/><Route path="wallet" element={<Wallet/>}/><Route path="profile" element={<Profile/>}/><Route path="settings" element={<AppSettings/>}/><Route path="marketplace" element={<Marketplace/>}/></Route><Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/><Route path="/about" element={<About/>}/><Route path="/settings" element={<Settings/>}/>
 <Route path="/terms" element={<Legal kind="terms"/>}/><Route path="/privacy" element={<Legal kind="privacy"/>}/><Route path="*" element={<NotFound/>}/></Routes></main>
 {!pathname.startsWith("/app")&&<Footer/>}<FloatingCart/>
 {drawer&&<CartDrawer/>}{enq&&(enq.type==="becomeAffiliate"?<AffiliateJoinModal key="aff"/>:<EnquiryModal key={enq.type+(enq.product?.slug||"")}/>)}
 {notice&&<Modal title="Prototype only" onClose={()=>setNotice(false)}><p className="text-sm text-mute">Login and account creation are not available in Stage 1. Browse products freely, no account needed. Accounts arrive in a later stage with the backend.</p><Button className="mt-5 w-full" onClick={()=>setNotice(false)}>Got it</Button></Modal>}
 <div aria-live="polite" className="fixed left-1/2 -translate-x-1/2 bottom-24 z-[70]">{toast&&<div className="fade rounded-full bg-ink text-bg px-4 py-2 text-sm shadow-lg">{toast}</div>}</div></>}
