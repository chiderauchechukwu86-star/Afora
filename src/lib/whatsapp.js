import {CONFIG} from "./config.js";
export const fmt=p=>p==null?"Price to be confirmed":CONFIG.currency+Number(p).toLocaleString();
export const money=n=>CONFIG.currency+Number(n||0).toLocaleString();
export const commission=p=>p&&p.price!=null?Math.round(p.price*CONFIG.commissionRate/100):null;
export const waUrl=m=>{const n=(CONFIG.whatsappNumber||"").replace(/\D/g,"");return n?`https://wa.me/${n}?text=${encodeURIComponent(m)}`:null};
const hi=n=>n&&n.trim()?`Hello, my name is ${n.trim()}.`:"Hello,";
const price=p=>p.price==null?"not yet confirmed":fmt(p.price);
export const buildMessage=(type,{product,items,name,amount,fullName,preferred,phone})=>({
 withdraw:()=>`${hi(name)} I would like to withdraw ${money(amount)} from my Afora wallet. Please tell me how to proceed.`,
 buy:()=>`${hi(name)} I would like to lock my spot for ${product?.name}. The listed price is ${price(product||{})}. Please tell me how to proceed.`,
 becomeAffiliate:()=>`Hello, my name is ${fullName}. Please address me as ${preferred}. My WhatsApp number is ${phone}. I would like to become an Afora affiliate (${fmt(product?.price)}) so I can promote all your blueprints. Please tell me how to proceed.`,
 cart:()=>`${hi(name)} I would like to lock my spot for: ${(items||[]).map(p=>`${p.name} (${p.price==null?"price TBC":fmt(p.price)})`).join(", ")}. Please tell me how to proceed.`,
 contact:()=>`${hi(name)} I have a question about Afora.`}[type]());
