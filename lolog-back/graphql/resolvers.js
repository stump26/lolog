import { getSummonerDTO, getLeagueEntryDTO, getMatchlistDTO, getChampiomDTO } from './db';

const resolvers = {
  Query: {
    getSummonerDTO:   (_,{summonerName}) => getSummonerDTO(summonerName),
    getLeagueEntryDTO:(_,{encryptedSummonerId}) => getLeagueEntryDTO(encryptedSummonerId),
    getMatchlistDTO:  (_,{encryptedAccountId,from,to}) => getMatchlistDTO(encryptedAccountId,from,to),
    getCampionDTO:    (_,{championId}) =>getChampiomDTO(championId),
  }
}

export default resolvers;