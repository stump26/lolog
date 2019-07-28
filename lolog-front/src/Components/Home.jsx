import React,{ useState } from 'react'
import {Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';

const SearchIDComponent = ({summmonerSearchOnClick})=>{
  const [searchName, setSearchName] = useState();
  
  const searchNameOnChange = (e)=>{
    setSearchName(e.target.value);
  }
  
  return (
    <>
      <div id="body">
        <Form className="md-center" id="search-form" >
          <InputGroup>
            <FormControl
              placeholder="소환사 명"
              aria-label="소환사 명"
              aria-describedby="basic-addon2"
              onChange={searchNameOnChange}
            />
            <InputGroup.Append>
              <Button id="search-btn"
                onClick={(e)=>{summmonerSearchOnClick(e,searchName)}} 
                variant="outline-secondary"
              >
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </div>
      <div id="footer">

      </div>
    </>
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
