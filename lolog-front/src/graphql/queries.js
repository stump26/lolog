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