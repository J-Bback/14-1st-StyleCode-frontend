import React, { Component } from "react";
import Navbar from "../Navbar/NavbarStore/NavbarStore";
import Asidebar from "./Component/Asidebar/Asidebar";
import CategoryJumbotron from "./Component/CategoryJumbotron/CategoryJumbotron";
import MdChoice from "./Component/MdChoice/MdChoice";
import ShowAll from "./Component/ShowAll/ShowAll";
import CartFooter from "../Cart/Component/Footer/CartFooter";
import "./CategoryDetail.scss";

class CategoryDetail extends Component {
  constructor() {
    super();
    this.state = {
      activeSecondCategory: 0,
      hiddenDropdown: false,
    };
  }

  // showDropdown = (e) => {
  //   this.setState({
  //     activeSecondCategory: e.target.dataset.idx,
  //     hiddenDropdown: true,
  //   });
  // };
  // hideDropdown = (e) => {
  //   this.setState({
  //     activeSecondCategory: e.target.dataset.idx,
  //     hiddenDropdown: false,
  //   });
  // };

  render() {
    const { activeSecondCategory, hiddenDropdown } = this.state;
    const { showDropdown, hideDropdown } = this;
    return (
      <>
        <Navbar />
        <div className="categoryDetail">
          <div className="mainContainer">
            <div className="asidebar">
              <Asidebar
                activeSecondCategory={activeSecondCategory}
                showDropdown={showDropdown}
                hiddenDropdown={hiddenDropdown}
                hideDropdown={hideDropdown}
              />
            </div>
            <div className="contentContainer">
              <CategoryJumbotron />
              <MdChoice />
              <ShowAll />
            </div>
          </div>
        </div>
        <CartFooter />
      </>
    );
  }
}

export default CategoryDetail;
