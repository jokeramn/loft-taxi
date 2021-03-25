import React from "react";
import { Profile } from "./components/profile/profile";
import { Map } from "./components/map/map";
import { Login } from './components/login/login'
import { Header } from './components/header/header'
import { Registration } from './components/registration/registration'


class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <Header navigateTo={this.navigateTo} />
        <main data-testid="container">
          <section>
            {this.state.currentPage === 'login' && <Login navigateTo={this.navigateTo}/>}
            {this.state.currentPage === 'map' && <Map />}
            {this.state.currentPage === 'profile' && <Profile />}
            {this.state.currentPage === 'registration' && <Registration />}
          </section>
        </main>
      </>
    );
  }
}

export default App;
