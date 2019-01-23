import React, { PureComponent } from "react";
import "./Menu2.css";

class Menu2 extends PureComponent {
  render() {
    console.log("Rendering: Menu2");
    var visibility2 = "hide";

    if (this.props.menuVisibility2) {
      visibility2 = "show";
    }

    return (
      <div id="flyoutMenu2"
           onMouseDown={this.props.handleMouseDown2}
           className={visibility2}>
        <h2><a href="#">Home</a></h2>
        <h2><a href="#">About</a></h2>
        <h2><a href="#">Contact</a></h2>
        <h2><a href="#">Search</a></h2>
      </div>
    );
  }
}

export default Menu2;