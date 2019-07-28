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