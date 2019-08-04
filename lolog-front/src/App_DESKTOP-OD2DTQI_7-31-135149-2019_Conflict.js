import React from 'react';
import { HashRouter , Route} from "react-router-dom"; 
import { ApolloProvider } from 'react-apollo';
import { Container } from 'react-bootstrap'

import client from "./apolloClient"        
import Home from "./Components/Home"
import Result from './Components/Result'
function App() {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Container>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/result/:searchName"} component={Result} />
        </Container>
      </HashRouter>
    </ApolloProvider>
  );
}

export default App;
