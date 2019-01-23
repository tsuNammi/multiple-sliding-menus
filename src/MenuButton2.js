import React, { PureComponent } from "react";
import './MenuButton2.css';

class MenuButton2 extends PureComponent { 
  render() {
    console.log("Rendering: MenuButton2");
    return(
      <button id="roundButton2"
              onMouseDown={this.props.handleMouseDown2}></button>
    );
  }
}

export default MenuButton2;