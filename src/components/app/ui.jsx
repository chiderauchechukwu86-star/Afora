export const Head=({title,sub})=><div className="mb-8"><h1 className="font-serif text-3xl font-extrabold tracking-tight">{title}</h1>{sub&&<p className="mt-1 text-sm text-mute">{sub}</p>}</div>;
export const Card=({title,children,className=""})=><section className={`bg-card border border-line rounded-md p-6  ${className}`}>{title&&<h2 className="font-serif text-lg font-bold mb-4">{title}</h2>}{children}</section>;
export const Empty=({children})=><p className="rounded-xl bg-soft p-5 text-center text-sm text-mute">{children}</p>;
