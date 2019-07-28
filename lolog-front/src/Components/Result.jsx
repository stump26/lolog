import React from 'react';
import { Query } from 'react-apollo';

import { SUMMONNER_SEARCH, SUMMONNER_LEAGUE } from '../graphql/queries';
import SummonerInfoCard from './SummonerInfoCard';
import SummonerLeagueInfoCard from './SummonerLeagueInfoCard'
const Result = ({
  match:{
    params:{ searchName }
  }
})=>{
  const encodedNAME = encodeURIComponent( searchName )
  return (
    <Query query={SUMMONNER_SEARCH} variables={{summonerName:encodedNAME}} >
      {
        ({loading, error, data})=>{
					if(loading) return <span>loading</span>;
					if(error){ 
						console.log(error);
						return <span>something happend</span>;
					}
					if(data){
            console.log(data);
            return(
              <>
                <SummonerInfoCard summonerDTO={data} />
                <Query query={SUMMONNER_LEAGUE} variables={{encryptedSummonerId:data.getSummonerDTO.id}}>
                  {
                    ({loading, error, data})=>{
                      if(loading) return <span>loading</span>;
                      if(error){ 
                        console.log(error);
                        return <span>something happend</span>;
                      }
                      if(data){
                        return <SummonerLeagueInfoCard LeagueEntryDTO={data}/>  
                      }
                    }
                  }
                </Query>
              </>
            );
          }
        }
      }
    </Query>
  );
}

export default Result;