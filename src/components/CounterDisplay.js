import React from "react";
import { connect } from "react-redux";

const CounterDisplay = (props) => {
  return <div>Counter Value: {props.count}</div>;
};

function mapStateToProps(state) {
  return {
    count: state.counter.value,
  };
}

export default connect(mapStateToProps)(CounterDisplay);
