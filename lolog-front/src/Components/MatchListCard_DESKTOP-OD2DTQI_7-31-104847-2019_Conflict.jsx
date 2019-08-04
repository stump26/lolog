import React from 'react';

const MatchListCard = ({
  MatchlistDTO:{ matches, startIndex, endIndex, totalGames }})=>{
  return (
    <ul>
      {
        matches.map(({gameId,champion,platformId,season,queue,timestamp})=>{
          console.log(`${gameId},${champion},${platformId},${season},${queue},${timestamp}`)
          return (
            <li>
              {`${gameId},${champion},${platformId},${season},${queue},${timestamp}`}
            </li>
          );
        })
      }
    </ul>
  );
}

export default MatchListCard;