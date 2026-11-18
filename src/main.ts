import {desk} from "@shared/desk";
import {wrap,rect,label,type Frame} from "@shared/surface";
const pip=[[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];
type S={n:number;threshold:number;rolls:number[];attempts:number};
desk<S>({name:"Dice Ledger",accent:"#ED8B86",motion:{"motif":"cells","color":"#ED8B86","shine":"#FFF0DB"},initial:()=>({n:5,threshold:5,rolls:[],attempts:0}),render:s=>{
 const success=s.rolls.filter(x=>x>=s.threshold).length,art:Frame=[];
 for(let i=0;i<s.n;i++){const x=1+i*9,v=s.rolls[i];art.push(rect("die"+i,x,4,8,9,v&&v>=s.threshold?"#71C7A7FF":"#827E87FF"));
 if(v)for(const [j,n] of pip[v-1].entries())art.push(rect("pip"+i+"-"+j,x+1+(n%3)*2,6+Math.floor(n/3)*2,1,1,"#171D24FF"));}
 art.push(label("n",String(s.n),1,0,"#F6D6ADFF","front","tiny"));
 return {art,title:"",value:"",lines:["Success "+success+" / "+s.n,"Threshold "+s.threshold+"+","Rolls "+s.attempts,"Click: roll / reroll misses","Wheel: pool / Start: threshold","Hold Start: clear dice"]};},
 action:(s,k)=>{if(k==="hold-start"){s.rolls=[];s.attempts=0;}if(k==="start"&&!s.rolls.length)s.threshold=2+wrap(s.threshold-2+1,5);
 if((k==="up"||k==="down")&&!s.rolls.length)s.n=1+wrap(s.n-1+(k==="up"?1:-1),8);
 if(k==="ok"){s.rolls=Array.from({length:s.n},(_,i)=>s.rolls[i]>=s.threshold?s.rolls[i]:1+Math.floor(Math.random()*6));s.attempts++;}}});
