import React , { Component } from 'react';

import Header from './components/header';
import SectionInfo from './components/sectionInfo';
import Recipes from './components/recipes';
import FavoriteRecipes from './components/favoriteRecipes';
import SignUpForm from './components/signUpForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render () {
    return (
      <div id="root">
      <h1>Test 123</h1>
        <Header />
        <main role="main">
          <SectionInfo />
          <Recipes data={ this.state.data } />
          <FavoriteRecipes />
          <SignUpForm />
        </main>
      </div>
    )
  }
}

export default App;
