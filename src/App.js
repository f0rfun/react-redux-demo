import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "./actions";
import CounterDisplay from "./components/CounterDisplay";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }

  fizzBuzz = () => {
    const { isDisabled } = this.state;

    return (
      <div className="App">
        <CounterDisplay />
        <button
          onClick={() => {
            this.setState({
              isDisabled: false,
            });
            //increment action here
            this.props.actions.incrementCount();
          }}
        >
          +1
        </button>
        <button
          disabled={isDisabled}
          onClick={() => {
            if (this.props.count === 1) {
              this.setState({
                isDisabled: true,
              });
            }
            //decrement action here
            this.props.actions.decrementCount();
          }}
        >
          -1
        </button>
      </div>
    );
  };

  render() {
    return (
      <BrowserRouter>
        <header>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/singapore">Singapore</NavLink>
          <NavLink to="/world">World</NavLink>
        </header>
        <Switch>
          <Route exact path="/home" component={this.fizzBuzz} />
          <Route
            exact
            path="/singapore"
            render={() => <div>Sg news page</div>}
          />
          <Route
            exact
            path="/world"
            render={() => <div>World news page</div>}
          />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.counter.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
