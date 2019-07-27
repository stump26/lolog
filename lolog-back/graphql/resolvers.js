import { getSummonerDTO } from './db';

const resolvers = {
  Query: {
    getSummonerDTO: (_,{summonerName}) => getSummonerDTO(summonerName),
  }
}

export default resolvers;