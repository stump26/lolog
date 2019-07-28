import React from 'react';
//import './SummonerLeagueInfoCard.scss';

const SummonerLeagueInfoCard=(summonerLeagueData) => {
	console.log("TCL: SummonerLeagueInfoCard -> summonerLeagueData", summonerLeagueData)
	const getLeagueEntryDTO=summonerLeagueData.LeagueEntryDTO.getLeagueEntryDTO
	console.log(getLeagueEntryDTO);
	const LeagueEntrys= getLeagueEntryDTO.map(item=>{
		return <div class="rank-card">
			<h3>{item.queueType}</h3>
			<div id="rank-img"><img src={`/img/RANK_EMBLEM/Emblem_${item.tier}.png`} alt={item.tier} width={100}/></div>
			<div id="rank-info">
				<div>{item.tier} {item.rank}</div>
				<div>{item.leaguePoints}LP / {item.wins}승 {item.losses}패</div>
			</div>
		</div>
	})
	return (
		<div>
			{LeagueEntrys}
		</div>
	)
}

export default SummonerLeagueInfoCard
