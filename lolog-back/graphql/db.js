import fetch from 'node-fetch';

import { API_KEY } from '../apikey.json';

const RIOT_URL = "https://kr.api.riotgames.com/";

export const getSummonerDTO = (summonerName)=>{
  let REQUEST_URL = RIOT_URL + `/lol/summoner/v4/summoners/by-name/${summonerName}`;
  REQUEST_URL += `?api_key=${API_KEY}`;
  console.log('getSummonerDTO->',summonerName,'->',REQUEST_URL);
  return fetch(REQUEST_URL)
    .then(res=>res.json())
}

export const getLeagueEntryDTO = (encryptedSummonerId)=>{
  let REQUEST_URL = RIOT_URL + `/lol/league/v4/entries/by-summoner/${encryptedSummonerId}`;
  REQUEST_URL += `?api_key=${API_KEY}`;
  console.log('getLeagueEntryDTO->',encryptedSummonerId,'->',REQUEST_URL);
  return fetch(REQUEST_URL)
    .then(res=>res.json())
}

export const getMatchlistDTO = (encryptedAccountId,from=0,to=20)=>{
  let REQUEST_URL = RIOT_URL + `/lol/match/v4/matchlists/by-account/${encryptedAccountId}`;
  REQUEST_URL +=`?endIndex=${to}&beginIndex=${from}&api_key=${API_KEY}`
  console.log("TCL: getMatchlistDTO -> REQUEST_URL", REQUEST_URL)
  return fetch(REQUEST_URL)
    .then(res=>res.json())
}

export const getChampiomDTO = (championId)=>{
  let REQUEST_URL = "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json";
  console.log("TCL: getChampiom -> REQUEST_URL", REQUEST_URL)
  return fetch(REQUEST_URL)
    .then(res=>res.json())
    .then(json=>
      Object.keys(json.data).reduce((acc,cur)=>{
        acc[json.data[cur].key] = json.data[cur]
        return acc
      },{}))
    .then(championDict=>championDict[championId])
}