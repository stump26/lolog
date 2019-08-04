import gql from 'graphql-tag'

export const SUMMONNER_SEARCH=gql`
  query getSummonerDTO($summonerName:String!){
    getSummonerDTO(summonerName:$summonerName){
      id
      name
      summonerLevel
      accountId
      revisionDate
    }
  }
`;
export const SUMMONNER_LEAGUE=gql`
  query getLeagueEntryDTO($encryptedSummonerId:String!){
    getLeagueEntryDTO(encryptedSummonerId:$encryptedSummonerId){
    leagueId
    queueType
    tier
    rank
    summonerId
    summonerName
    leaguePoints
    wins
    losses
  }
}
`;

export const MATCH_LIST=gql`
query getMatchlistDTO($encryptedAccountId:String!){
  getMatchlistDTO(encryptedAccountId:$encryptedAccountId){
      matches{
        platformId
        gameId
        champion
        queue
        season
        timestamp
        lane
        role
      }
      totalGames
      startIndex
      endIndex
    }
  }
`;