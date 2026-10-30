import {Link} from "react-router-dom";
export default function Logo(){return <Link to="/" className="flex items-center gap-2.5" aria-label="Afora home">
<img src="/images/afora/logo-mark.png" alt="" width="478" height="376" className="h-9 w-auto"/>
<span className="font-serif text-2xl font-bold text-accent leading-none">Afora</span></Link>}
