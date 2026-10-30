import {Link} from "react-router-dom";import useImage from "../../lib/useImage.js";
// Renders nothing until the image file exists in public/images/afora/.
export default function Cover({src,alt="",className="",to,label}){
 const ok=useImage(src);if(!ok)return null;
 const img=<img src={src} alt={alt} loading="lazy" className={`object-cover bg-soft ${className}`}/>;
 return to?<Link to={to} aria-label={label} className="block overflow-hidden">{img}</Link>:img}
