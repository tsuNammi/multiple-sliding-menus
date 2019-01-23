import React, { Component } from "react";
import MenuButton from "./MenuButton";
import MenuButton2 from "./MenuButton2";
import Menu from "./Menu";
import Menu2 from "./Menu2";

class MenuContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
      visible2: false
    };
    
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseDown2 = this.handleMouseDown2.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMenu2 = this.toggleMenu2.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  handleMouseDown2(e) {
    this.toggleMenu2();

    console.log("clicked2");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
      visible2: false
    });
  }

  toggleMenu2() {
    this.setState({
      visible2: !this.state.visible2,
      visible: false
    });
  }


  render() {
    console.log("Rendering: MenuContainer");
    return(
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <MenuButton2 handleMouseDown2={this.handleMouseDown2}/>
        <Menu handleMouseDown={this.handleMouseDown} 
              menuVisibility={this.state.visible}/>
        <Menu2 handleMouseDown2={this.handleMouseDown2} 
              menuVisibility2={this.state.visible2}/>
        <div>
          <p>Can you spot the item that doesn't belong?</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuContainer;