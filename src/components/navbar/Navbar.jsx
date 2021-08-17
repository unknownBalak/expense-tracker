import { Component } from "react";
import "./nav.scss";
class Navbar extends Component {
  navTitle() {
    let str = "expense-tracker";
    return str.split("").map((c, i) => <span key={i}>{c}</span>);
  }
  resizeTitle() {
    console.log("mouse hovered");
  }
  originalTitle() {
    console.log("mouse hovered out!!");
  }
  render() {
    return (
      <section className="nav">
        <div className="left">
          <span className="line"></span>
          <div className="navbar-title">
            <div onMouseEnter={this.resizeTitle()}>{this.navTitle()}</div>
          </div>
          <div className="navbar-content">
            <span>Daily</span>
            <span>monthly</span>
            <span>Yearly</span>
          </div>
        </div>
        <div className="right"></div>
      </section>
    );
  }
}
export default Navbar;
