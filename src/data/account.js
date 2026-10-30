// Account data seam. New accounts start at zero; nothing here is fabricated.
// In Stage 2+ replace this with real data from the backend (same shape).
export const getAccount=user=>({
 totalEarned:0,
 balance:0,
 commissionLink:null, // set to a URL string once the owner approves affiliate access
 rewards:[],          // [{id,title,reward,status}]
 earnings:[]          // [{id,date:"2026-10-21",description,amount}]
});
