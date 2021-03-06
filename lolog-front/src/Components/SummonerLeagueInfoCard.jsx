import React from 'react';

const SummonerLeagueInfoCard=(summonerLeagueData) => {
	console.log("TCL: SummonerLeagueInfoCard -> summonerLeagueData", summonerLeagueData)
	const getLeagueEntryDTO=summonerLeagueData.LeagueEntryDTO.getLeagueEntryDTO
	console.log(getLeagueEntryDTO);
	const LeagueEntrys= getLeagueEntryDTO.map(item=>{
		return <div className="rank-card">
			<h5>{item.queueType}</h5>
			<div id="rank-img"><img src={`/img/RANK_EMBLEM/Emblem_${item.tier}.png`} alt={item.tier} width={100}/></div>
			<div id="rank-info">
				<div>{item.tier} {item.rank}</div>
				<div>{item.leaguePoints}LP / {item.wins}승 {item.losses}패</div>
			</div>
		</div>
	})
	return (
		<>
			{LeagueEntrys}
		</>
	)
}

export default SummonerLeagueInfoCard
