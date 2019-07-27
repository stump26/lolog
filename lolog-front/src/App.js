import React from 'react';
import { HashRouter , Route} from "react-router-dom"; 
import { ApolloProvider } from 'react-apollo';

import client from "./apolloClient"
import Home from "./Components/Home"
import Result from './Components/Result'
function App() {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Route exact={true} path={"/"} component={Home} />
        <Route path={"/result/:searchName"} component={Result} />
      </HashRouter>
    </ApolloProvider>
  );
}

export default App;
