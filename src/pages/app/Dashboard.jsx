import {AFFILIATE} from "../../data/products.js";import {fmt} from "../../lib/whatsapp.js";import {useApp} from "../../context/AppContext.jsx";import {getAccount} from "../../data/account.js";import {money} from "../../lib/whatsapp.js";
import {Card,Empty,Head} from "../../components/app/ui.jsx";import Icon from "../../components/ui/Icon.jsx";import Button from "../../components/ui/Button.jsx";
export default function Dashboard(){
 const {user,setEnq,setToast}=useApp();const a=getAccount(user);
 const copy=async()=>{try{await navigator.clipboard.writeText(a.commissionLink);setToast("Link copied")}catch{setToast("Copy not available")}};
 return <><Head title={`Hi, ${user.name.split(" ")[0]}`} sub="Here is an overview of your Afora activity."/>
 <div className="grid gap-4 sm:grid-cols-2">
 <Card><p className="text-sm text-mute">Total earnings</p><p className="mt-2 font-serif text-4xl font-extrabold text-accent">{money(a.totalEarned)}</p></Card>
 <Card><p className="text-sm text-mute">Rewards earned from tasks</p><p className="mt-2 font-serif text-4xl font-extrabold">{money(a.rewards.filter(r=>r.status==="done").reduce((s,r)=>s+r.reward,0))}</p></Card></div>
 <Card title="Your commission link" className="mt-4">
 {a.commissionLink?<div className="flex flex-col sm:flex-row gap-2"><input readOnly value={a.commissionLink} aria-label="Commission link" className="flex-1 h-11 rounded-xl border border-line bg-bg px-3.5 text-sm"/><Button onClick={copy}><Icon name="copy" className="w-4 h-4"/>Copy link</Button></div>
 :<><Empty>{`You don't have a commission link yet. Become an affiliate for a one-time ${fmt(AFFILIATE.price)} to promote all blueprints and earn 60% commission. Your link appears here once the owner sets it up.`}</Empty><Button className="mt-4" onClick={()=>setEnq({type:"becomeAffiliate",product:AFFILIATE})}><Icon name="wa"/>Become an affiliate</Button></>}</Card>
 <Card title="Rewards for performing tasks" className="mt-4">
 {a.rewards.length?<ul className="divide-y divide-line">{a.rewards.map(r=><li key={r.id} className="flex justify-between gap-3 py-3 text-sm"><span>{r.title}</span><span className="font-semibold">{money(r.reward)} · {r.status}</span></li>)}</ul>:<Empty>No tasks yet. Tasks and their rewards will show here when they are available.</Empty>}</Card>
 <Card title="Earning details" className="mt-4">
 {a.earnings.length?<div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="text-left text-mute"><th className="py-2 pr-4 font-medium">Date</th><th className="py-2 pr-4 font-medium">Description</th><th className="py-2 text-right font-medium">Amount</th></tr></thead>
 <tbody>{a.earnings.map(e=><tr key={e.id} className="border-t border-line"><td className="py-3 pr-4 whitespace-nowrap">{new Date(e.date).toLocaleDateString()}</td><td className="py-3 pr-4">{e.description}</td><td className="py-3 text-right font-semibold">{money(e.amount)}</td></tr>)}</tbody></table></div>:<Empty>No earnings yet. Each earning will be listed here with the date it was made.</Empty>}</Card></>}
