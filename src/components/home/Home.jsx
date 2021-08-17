import { Component } from "react";
import "./home.scss";
import Calender from "../calender/Calender";
import AddItem from "../addItem/AddItem";
import HomeNav from "../homeNavBar/HomeNav";
class Home extends Component {
  homeNavbar() {
    return <HomeNav />;
  }
  importCalender() {
    return <Calender />;
  }
  importAddItem() {
    return <AddItem />;
  }
  addInterActiveAre() {
    return <div className="resizable-bar"></div>;
  }
  homeFooter() {
    return "THis is home footer.jsx";
  }
  render() {
    return (
      <section className="home">
        <div className="header">{this.homeNavbar()}</div>
        <div className="body">
          {this.importCalender()}
          {this.addInterActiveAre()}
          {this.importAddItem()}
        </div>
        <div className="footer">{this.homeFooter()}</div>
      </section>
    );
  }
}
export default Home;
