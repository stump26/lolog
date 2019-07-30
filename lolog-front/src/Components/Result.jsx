import React from 'react';
import { Query } from 'react-apollo';
import ReactLoading from 'react-loading'

import { SUMMONNER_SEARCH, SUMMONNER_LEAGUE, MATCH_LIST } from '../graphql/queries';
import SummonerInfoCard from './SummonerInfoCard';
import SummonerLeagueInfoCard from './SummonerLeagueInfoCard';
import MatchListCard from './MatchListCard';
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
          )
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
            console.log(data);
            return(
              <div id="Result-Body">
                <SummonerInfoCard summonerDTO={data} />
                <div id="Result-body-bottom">
                  <div id="Result-left">
                    <Query query={SUMMONNER_LEAGUE} variables={{encryptedSummonerId:data.getSummonerDTO.id}}>
                      {
                        ({loading, error, data})=>{
                          if(loading) return (
                            <div id="loading-block">
                              <ReactLoading type={"spinningBubbles"} color="#fff"/>
                              <div>On Loading ...</div>
                            </div>
                          )
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
                            return <SummonerLeagueInfoCard LeagueEntryDTO={data}/>  
                          }
                        }
                      }
                    </Query>
                  </div>
                  <div id="Result-match-list">
                    <Query query={MATCH_LIST} variables={{encryptedAccountId:data.getSummonerDTO.accountId,from:0,to:20}}>
                      {({loading, error, data})=>{
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
                            console.log("TCL: MATCH_LIST->data", data);
                            return <MatchListCard MatchlistDTO={data.getMatchlistDTO}/>  
                          }
                        }
                      }
                    </Query>
                  </div>  
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