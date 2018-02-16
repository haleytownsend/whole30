import React , { Component } from 'react';

import Header from './header';
import SectionInfo from './sectionInfo';
import Recipes from './recipes';
import FavoriteRecipes from './favoriteRecipes';
import SignUpForm from './signUpForm';

class LandingPage extends Component {
  constructor(props) {
  super(props);
  this.state = { data: [] };
}

  render () {
    return (
      <div id="root">
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

export default LandingPage
