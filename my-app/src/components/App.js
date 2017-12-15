import React from 'react';
// import Order from './Order';
import base from '../base';
import DayPicker from './DayPicker';
import Plan from './Plan';

class App extends React.Component {
  constructor() {
    super();

    // getinitialState
    this.state = {
      days: {},
      order: {}
    };
  }

  componentWillMount() {
    // this runs right before the <App> is rendered
    this.ref = base.syncState(`${this.props.params.calId}/days`, {
      context: this,
      state: 'this.props.params.calId'
    });

    // check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.calId}`);

    if (localStorageRef) {
      // update our App component's order state
      this.setState({order: JSON.parse(localStorageRef)});
    }

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.calId}`, JSON.stringify(nextState.order));
  }

  render() {
    return (<div className="catch-of-the-day">
      <div>
        <h2>${this.props.params.calId}</h2>
        <DayPicker/>

        <p>No earlier than:</p>
        <Plan/>

        <br/>
        <br/>

        <p>No later than:</p>
        <Plan/>
      </div>
    </div>)
  }
}

App.propTypes = {
  params: React.PropTypes.object.isRequired
}

export default App;
