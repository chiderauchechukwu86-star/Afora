// PROTOTYPE auth: accounts live only in this browser's localStorage (no server).
const KU="afora-users",KS="afora-session";
const read=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v??d}catch{return d}};
const write=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch{return false}};
async function hash(pw,salt){const s=salt+pw;
 if(globalThis.crypto?.subtle){const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}
 let h=5381;for(const c of s)h=((h*33)^c.charCodeAt(0))>>>0;return"f"+h.toString(16)}
const pub=u=>({id:u.id,name:u.name,whatsapp:u.whatsapp,email:u.email});
export const normPhone=v=>v.replace(/[\s\-()]/g,"").replace(/^\+/,"");
export const checkName=v=>v.trim().length<2?"Enter your full name.":"";
export const checkEmail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())?"":"Enter a valid email address.";
export const checkPhone=v=>/^\d{10,15}$/.test(normPhone(v))?"":"Enter a valid WhatsApp number with country code, e.g. +234 801 234 5678.";
export const checkPassword=v=>v.length<8?"Password must be at least 8 characters.":!/[A-Za-z]/.test(v)?"Password must include at least one letter.":"";
const saveSession=(id,remember)=>{try{localStorage.removeItem(KS);sessionStorage.removeItem(KS);(remember?localStorage:sessionStorage).setItem(KS,JSON.stringify(id));return true}catch{return false}};
const readSession=()=>{try{return JSON.parse(sessionStorage.getItem(KS)??localStorage.getItem(KS))}catch{return null}};
export const getSession=()=>{const id=readSession();const u=read(KU,[]).find(x=>x.id===id);return u?pub(u):null};
export async function updateUser(id,p){
 const users=read(KU,[]);const i=users.findIndex(u=>u.id===id);if(i<0)return{error:"Account not found."};
 if(p.email!=null&&users.some(u=>u.id!==id&&u.email===p.email.trim().toLowerCase()))return{error:"That email is already used by another account."};
 const u={...users[i]};if(p.name!=null)u.name=p.name.trim();if(p.email!=null)u.email=p.email.trim().toLowerCase();if(p.whatsapp!=null)u.whatsapp="+"+normPhone(p.whatsapp);
 users[i]=u;if(!write(KU,users))return{error:"Could not save in this browser."};return{user:pub(u)}}
export async function changePassword(id,current,next){
 const users=read(KU,[]);const u=users.find(x=>x.id===id);if(!u)return{error:"Account not found."};
 if(u.hash!==await hash(current,u.salt))return{error:"Current password is incorrect."};
 u.salt=Array.from({length:16},()=>Math.floor(Math.random()*16).toString(16)).join("");u.hash=await hash(next,u.salt);
 return write(KU,users)?{ok:true}:{error:"Could not save in this browser."}}
export const logOut=()=>{try{localStorage.removeItem(KS);sessionStorage.removeItem(KS)}catch{}};
export async function signUp({name,whatsapp,email,password}){
 const users=read(KU,[]);const em=email.trim().toLowerCase();
 if(users.some(u=>u.email===em))return{error:"An account with this email already exists. Try logging in."};
 const salt=Array.from({length:16},()=>Math.floor(Math.random()*16).toString(16)).join("");
 const u={id:Date.now().toString(36)+salt.slice(0,4),name:name.trim(),whatsapp:"+"+normPhone(whatsapp),email:em,salt,hash:await hash(password,salt)};
 if(!write(KU,[...users,u])||!saveSession(u.id,true))return{error:"Could not save in this browser. Check that storage is not blocked."};
 return{user:pub(u)}}
export async function logIn(email,password,remember=false){
 const u=read(KU,[]).find(x=>x.email===email.trim().toLowerCase());
 if(!u||u.hash!==await hash(password,u.salt))return{error:"Incorrect email or password."};
 if(!saveSession(u.id,remember))return{error:"Could not start a session in this browser."};
 return{user:pub(u)}}
