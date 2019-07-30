import React from 'react';
import ReactLoading from 'react-loading'
import { Query } from 'react-apollo';

import { CHAMPION_INFO } from '../graphql/queries';

const EachGameCard = ({ key, champion, timestamp, queue })=>{
  let champion_Icon_URL=`http://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/`;
  return (
    <Query query={CHAMPION_INFO} variables={{championId:champion}}>
      {
        ({loading, error, data})=>{
					if(loading) return (
            <div id="loading-block">
              <ReactLoading type={"spinningBubbles"} color="#fff"/>
              <div>On Loading ...</div>
            </div>
          );
					if(error){ 
						console.log(error);
						return (
              <div id="errorMSG-block">
                <div>Sorry We don't find it.</div>
                <div>Plz, Re-search correct summonerName.</div>
              </div>
            );
          }
          if(data){
            console.log(champion_Icon_URL+data.getCampionDTO.image.full);
            return(
              <img src={champion_Icon_URL+data.getCampionDTO.image.full} width={80}/>
            )
          }
        }
      }
    </Query>
  );
}

const MatchListCard = ({
  MatchlistDTO:{ matches, startIndex, endIndex, totalGames }})=>{
  return (
    <ul>
      {
        matches.map(({gameId,champion,platformId,season,queue,timestamp})=>{
          return (
            <li key = {gameId}>
              <EachGameCard key = {gameId} champion={champion} timestamp={timestamp} queue={queue} />
            </li>
          );
        })
      }
    </ul>
  );
}

export default MatchListCard;