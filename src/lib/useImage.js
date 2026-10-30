import {useEffect,useState} from "react";
// true only when the image file really exists and loads; used so missing images simply don't render.
const cache={};
export default function useImage(src){
 const [ok,setOk]=useState(cache[src]??false);
 useEffect(()=>{if(!src)return;if(cache[src]!==undefined){setOk(cache[src]);return}
  let live=true;const i=new Image();
  i.onload=()=>{cache[src]=true;live&&setOk(true)};i.onerror=()=>{cache[src]=false;live&&setOk(false)};i.src=src;
  return()=>{live=false}},[src]);
 return ok}
