import React from 'react';
import { Query } from 'react-apollo';
import ReactLoading from 'react-loading'

import { SUMMONNER_SEARCH, SUMMONNER_LEAGUE } from '../graphql/queries';
import SummonerInfoCard from './SummonerInfoCard';
import SummonerLeagueInfoCard from './SummonerLeagueInfoCard'
import './Result.scss';

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
                <div>Plz, Research correct summonerName.</div>
              </div>
            );
					}
					if(data){
            console.log(data);
            return(
              <div id="Result-Body">
                <SummonerInfoCard summonerDTO={data} />
                <div id="Result-Bottom">
                  <Query query={SUMMONNER_LEAGUE} variables={{encryptedSummonerId:data.getSummonerDTO.id}}>
                    {
                      ({loading, error, data})=>{
                        if(loading) return(
                          <div id="loading-block">
                            <ReactLoading type={"spinningBubbles"} color="#fff"/>
                            <div>On Loading ...</div>
                          </div>
                        );
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
                </div>
              </div>
            );
          }
        }
      }
    </Query>
  );
}

export default Result;