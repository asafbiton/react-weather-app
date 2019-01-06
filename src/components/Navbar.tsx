import React, { Component, Props } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import changeUnit from "../actions/Actions";
import { withRouter } from "react-router-dom";

interface NavbarState {
  isBurgerActive: boolean;
}

class Navbar extends Component<Props<any>, NavbarState> {
  constructor(props: Props<any>) {
    super(props);

    this.state = {
      isBurgerActive: false
    };

    this.handleNavBurgerClick = this.handleNavBurgerClick.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
  }

  handleUnitChange(event: React.MouseEvent<HTMLElement>) {
    const selectedUnit = event.currentTarget.id;

    // @ts-ignore
    this.props.changeUnit(selectedUnit);
  }

  handleNavBurgerClick(event: React.MouseEvent<HTMLElement>) {
    this.setState((state, props) => {
      return { isBurgerActive: !state.isBurgerActive };
    });
  }

  render() {
    return (
      <nav
        className="navbar is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${
              this.state.isBurgerActive ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="mainNavbar"
            onClick={this.handleNavBurgerClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          id="mainNavbar"
          className={`navbar-menu ${
            this.state.isBurgerActive ? "is-overlay is-active" : ""
          }`}
        >
          <div className="navbar-start">
            <NavLink
              exact
              to="/"
              activeClassName="is-active"
              className="navbar-item"
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/about"
              activeClassName="is-active"
              className="navbar-item"
            >
              About
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons has-addons">
                <span
                  id="metric"
                  className={`button ${
                    //@ts-ignore
                    this.props.unit == "metric" ? "is-primary is-selected" : ""
                  }`}
                  onClick={this.handleUnitChange}
                >
                  Celsius
                </span>
                <span
                  id="imperial"
                  className={`button ${
                    //@ts-ignore
                    this.props.unit == "imperial"
                      ? "is-primary is-selected"
                      : ""
                  }`}
                  onClick={this.handleUnitChange}
                >
                  Fahrenheit
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state: any) => {
  const unit = state.unit;
  return { unit };
};

const mapDispatchToProps = { changeUnit };

export default withRouter(
  // @ts-ignore
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
);
