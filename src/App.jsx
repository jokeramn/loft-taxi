import React from "react";
import { Profile } from "./components/profile/profile";
import { Map } from "./components/map/map";
import { Main } from './components/main/main'
import { Header } from './components/header/header'

const PAGES = (navigateTo)=>({
  map: <Map />,
  profile: <Profile />,
  main: <Main />,
});

class App extends React.Component {
  state = { currentPage: "main" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div className='container'>
        {this.state.currentPage !== "main" && (
          <Header navigate={this.navigateTo} />
        )}
        <main data-testid="container">
          <section>{PAGES(this.navigateTo)[this.state.currentPage]}</section>
        </main>
      </div>
    );
  }
}

export default App;
