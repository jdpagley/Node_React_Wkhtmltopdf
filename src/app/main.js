// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'

// Import styles like this:
import 'styles/main.scss';

class App extends React.Component {

  render() {

    return (
      <div>
        {this.props.children}
      </div>
    );

  }

}

import Default from 'containers/default';
import PartyContainer from 'containers/party';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/party" component={PartyContainer} />
      <Route path="*" component={Default} />
    </Route>
  </Router>
  , 
  document.getElementById('appContainer')
);
