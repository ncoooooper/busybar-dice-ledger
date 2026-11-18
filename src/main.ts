import {desk} from "@shared/desk";
import {wrap,label,type Frame} from "@shared/surface";
const pip=[[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];
type S={n:number;threshold:number;rolls:number[];attempts:number};
desk<S>({name:"Dice Ledger",accent:"#ED8B86",motion:{"motif":"cells","color":"#ED8B86","shine":"#FFF0DB"},initial:()=>({n:5,threshold:5,rolls:[],attempts:0}),render:s=>{
 const success=s.rolls.filter(x=>x>=s.threshold).length;
 const rows=Array.from({length:7},()=>Array<string>(72).fill("."));
 for(let i=0;i<s.n;i++){
   const x=1+i*9, face=s.rolls[i], fill=face&&face>=s.threshold?"+":"-";
   for(const row of rows)for(let dx=0;dx<8;dx++)row[x+dx]=fill;
   if(face)for(const p of pip[face-1])rows[1+Math.floor(p/3)*2][x+1+(p%3)*2]="*";
 }
 const bitmap=["! XPM2","72 7 4 1",". c none","+ c #71C7A7","- c #827E87","* c #171D24",...rows.map(row=>row.join(""))].join("\n");
 const art:Frame=[{id:"dice",type:"xpmbitmap",x:0,y:0,data:bitmap,display:"front",align:"top_left"},
   label("pool",String(s.n),1,7,"#F6D6ADFF","front","small")];
 return {art,title:"",value:"",lines:["Success "+success+" / "+s.n,"Threshold "+s.threshold+"+","Rolls "+s.attempts,"Click: roll / reroll misses","Wheel: pool / Start: threshold","Hold Start: clear dice"]};},
 action:(s,k)=>{if(k==="hold-start"){s.rolls=[];s.attempts=0;}if(k==="start"&&!s.rolls.length)s.threshold=2+wrap(s.threshold-2+1,5);
 if((k==="up"||k==="down")&&!s.rolls.length)s.n=1+wrap(s.n-1+(k==="up"?1:-1),8);
 if(k==="ok"){s.rolls=Array.from({length:s.n},(_,i)=>s.rolls[i]>=s.threshold?s.rolls[i]:1+Math.floor(Math.random()*6));s.attempts++;}}});
