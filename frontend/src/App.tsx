import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/auth/login';
import Register from './containers/auth/register';
import Home from './containers/home';

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
