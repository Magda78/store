import React, {Component} from 'react';
import './App.css';
import HomePage from './page/homepage/homepage';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './page/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth} from './/firebase/firebase';



class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
    
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}

export default App;
