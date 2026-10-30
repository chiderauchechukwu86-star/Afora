// Product images live in public/images/afora/ (product-coding.jpg, product-trading.jpg, product-design.jpg).
// Edit prices/copy here. price is a number in naira (null shows "Price to be confirmed").
export const PRODUCTS=[
{slug:"coding-lessons",name:"Coding Lessons",image:"/images/afora/product-coding.jpg",price:150000,
 summary:"Master building real-world websites and apps that solve real problems.",
 description:"Master the skill of building real-life, problem-solving websites and applications. This blueprint takes you from the fundamentals to complete, working projects that solve real problems for real people. You will learn how to plan an idea, design the interface, write clean code, connect everything together and launch something you can proudly show to clients, employers or customers. Whether you want to start a tech career, freelance, or build your own product, you will gain practical skills you can use from day one.",
 included:["Write confident HTML, CSS and JavaScript","Build modern, responsive websites","Create complete web applications","Turn real-life problems into working software","Plan and structure a project the professional way","Launch your work online","Build a portfolio of real projects"],
 audience:["Beginners who want to start a career in tech","Aspiring freelancers and entrepreneurs","Self-taught developers who want a clear path"]},
{slug:"trading-education",name:"Trading Education",image:"/images/afora/product-trading.jpg",price:100000,
 summary:"Learn to trade the markets with discipline, strategy and confidence.",
 description:"Learn how to become a profitable trader. This blueprint gives you a clear, disciplined framework: how the financial markets work, how to read charts and spot opportunities, how to manage risk so one bad trade never wipes you out, and how to build the mindset and routine that separate consistent traders from gamblers. Practical, step by step and beginner friendly, so you can trade with confidence instead of guesswork. Trading involves risk, and results are not guaranteed.",
 included:["Understand how the financial markets work","Read charts and price action","Plan trade entries and exits","Manage risk and size your positions","Build the discipline of a consistent trader","Create your own trading plan and journal"],
 audience:["Beginners curious about the financial markets","Traders who want a clearer, more disciplined process","Anyone who wants to build a skill with long-term potential"]},
{slug:"design-photo-editing",name:"Design & Photo Editing",image:"/images/afora/product-design.jpg",price:50000,
 summary:"Design flyers, posters, billboards and logos that command attention.",
 description:"Learn how to create flyers, posters, billboards and logos that stop people in their tracks. You will go from a blank canvas to professional, eye-catching work by mastering the principles behind great design: layout, colour, typography and composition. Then you will apply them to the kind of projects that brands and businesses pay for, along with photo editing that makes images look polished. Perfect for starting a design side income, freelancing, or promoting your own business.",
 included:["Apply layout, colour and typography with confidence","Design flyers and posters","Design billboards and large-format adverts","Create logos and brand identity","Edit and retouch photos","Build a portfolio you can show clients"],
 audience:["Aspiring designers and photo editors","Creators and small business owners who want their own visuals","Anyone who wants to freelance with a creative skill"]},
{slug:"become-an-affiliate",name:"Become an Affiliate",type:"affiliate",image:"/images/afora/product-affiliate.jpg",price:5000,
 summary:"One-time access to promote every Afora blueprint and earn 60% commission.",
 description:"Turn your network into income. Pay once and unlock the right to promote every blueprint on Afora, and earn a 60% commission on the sales you bring in. You do not need to lock your spot in each blueprint to promote it: one affiliate access covers all of them. After you sign up, the owner contacts you on WhatsApp to confirm your access and set up how you will promote and track your sales.",
 included:["Permission to promote all Afora blueprints","60% commission on every sale you make","Your commission link, set up with the owner","Guidance on how to promote on WhatsApp and social media","Access to the Afora community"],
 audience:["Anyone with an audience on WhatsApp or social media","Students and creators who want to earn by sharing","People who believe in learning and want to get paid for sharing it"]}];
export const AFFILIATE=PRODUCTS.find(p=>p.type==="affiliate");
export const BUY_PRODUCTS=PRODUCTS.filter(p=>p.type!=="affiliate");
