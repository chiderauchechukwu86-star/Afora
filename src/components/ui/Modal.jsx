import {useEffect} from "react";import Icon from "./Icon.jsx";
export default function Modal({title,onClose,children}){
 useEffect(()=>{const h=e=>e.key==="Escape"&&onClose();addEventListener("keydown",h);return()=>removeEventListener("keydown",h)},[onClose]);
 return <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-4">
 <div className="absolute inset-0 bg-black/50 fade" onClick={onClose}/>
 <div role="dialog" aria-modal="true" aria-label={title} className="fade relative w-full sm:max-w-md bg-card rounded-t-2xl sm:rounded-md p-6 shadow-2xl max-h-[90vh] overflow-auto">
 <div className="flex items-start justify-between mb-4"><h2 className="font-serif text-xl font-extrabold">{title}</h2><button aria-label="Close" onClick={onClose} className="p-1 -m-1 text-mute hover:text-ink"><Icon name="x"/></button></div>{children}</div></div>}
