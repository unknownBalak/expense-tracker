import { Component } from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
class App extends Component {
  componentDidMount() {
    // let arrr = this.renderClassComponent();
    // console.log("I was triggered during componentDidMount");
    // console.log(arrr);
  }
  renderHomeComponent() {
    return <Home />;
  }
  renderNavComponent() {
    return <Navbar />;
  }
  render() {
    return (
      <section className="root">
        {this.renderNavComponent()}
        {this.renderHomeComponent()}
      </section>
    );
  }
}

export default App;
