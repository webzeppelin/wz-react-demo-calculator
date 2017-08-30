import React from "react";
import "../stylesheets/main.scss";
import { connect } from "react-redux";
import { app_router } from "../router";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";

// app component
export class App extends React.Component {
  componentWillMount() {
    // do app level component initiation here
  }

  // render
  render() {
    return (
      <div className="container">
        <Header />
        { app_router }
        <Footer />
      </div>
          );
  }
}

export default App = connect()(App);