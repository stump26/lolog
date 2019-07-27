import React,{ useState } from 'react'

const SearchIDComponent = ({summmonerSearchOnClick})=>{
  const [searchName, setSearchName] = useState();
  
  const searchNameOnChange = (e)=>{
    setSearchName(e.target.value);
  }
  
  return (
    <form id="search-form" >
      <input type="text" placeholder="소환사 명" onChange={searchNameOnChange} />
      <button onClick={(e)=>{summmonerSearchOnClick(e,searchName)}}>검색</button>
    </form>
  )
}

const Home = ({history})=>{
  const summmonerSearchOnClick=(e,searchName)=>{
    history.push(`/result/${searchName}`)
  }
  return (
    <div>
      <SearchIDComponent summmonerSearchOnClick={summmonerSearchOnClick}/>
    </div>
  )
}

export default Home
