import React from 'react';

const SummonerInfoCard =({summonerDTO:{
  getSummonerDTO:{
    id,name,summonerLevel,revisionDate
  }
}}
)=>{
  console.log(id)
  const renewalTime = (Date.now()-revisionDate)/1000;
  const conversionTimeTic = (timeTic)=>{
    
    let [days,extra1] = [Math.floor(timeTic/(3600*24)),(timeTic % (3600*24))]
    let [times,extra2] = [Math.floor(extra1/3600),(extra1%3600)]
    let [mins,extra3] = [Math.floor(extra2/60),(extra2%60)]
    let result = "";
    (days>0)&&(result+=`${days}일 `);
    (times>0)&&(result+=`${times}시간 `);
    (mins>0)&&(result+=`${mins}분`);
    (result==="")&&(result+=`${extra3}초`)
    return result + '전'
  }
  return(
    <div className="SummonerInfoCard" id={id}>
      <div><span id="Summoner-Name">{name}</span> {summonerLevel}Lv </div>
      <div id="Last-PlayTime">마지막 플레이 : {conversionTimeTic(renewalTime)} </div>
    </div>
  );
}

export default SummonerInfoCard;