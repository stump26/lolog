import { getSummonerDTO, getLeagueEntryDTO } from './db';

const resolvers = {
  Query: {
    getSummonerDTO: (_,{summonerName}) => getSummonerDTO(summonerName),
    getLeagueEntryDTO:(_,{encryptedSummonerId}) => getLeagueEntryDTO(encryptedSummonerId),
  }
}

export default resolvers;