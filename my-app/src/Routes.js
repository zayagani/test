import React ,{Component} from 'react';
import RouteComA from './Component/RouteComA';
import RouteComB from './Component/RouteComB';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    browserHistory 
  } from "react-router-dom";


class Routes extends Component{


render(){

return(  <Router history={browserHistory }>
      
        <ul>
          <li>
            <Link to="/">RouteComA</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <RouteComA />
          </Route>

          <Route path='/routecomb' component={RouteComB}></Route>
        </Switch>
      
    </Router>)


}

}
export default Routes;