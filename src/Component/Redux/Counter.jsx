import React from 'react';
import { connect } from 'react-redux';
import './Counter.css';
class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  asynincrement = () => {
    setTimeout(() => {
      this.props.dispatch({ type: 'INCREMENT' });
    }, 1000);
  };

  asyndecrement = () => {
    setTimeout(() => {
      this.props.dispatch({ type: 'DECREMENT' });
    }, 1000);
  };

  render() {
    return (
      <div className='grid-container'>
        <div className='title'>Redux Counter</div>
        <div className='right-text'>
          <div>
            <ul className='ul-right-text'>
              <li>
                Here is what i have done and understood while creating a app
                using Redux.
              </li>
              <li>
                I created a store. The store in this excersie is TotalCount. It
                stores the value of state. the value stored can only be modified
                only by using dispatch function.
              </li>
              <li>
                I created a Reducer named reducer. Reducer takes in two
                arguments state and actions. Here state is the value stored and
                actions helps reducer to find out what is to be done state value
                that is passed.
              </li>
              <li>
                In order to use the store, I passed to store down tothe
                component tree using Provider.
              </li>
              <li>
                I created two actions types INCREMENT and DECREMENT to increase
                and decrease the value of the TotalCount.
              </li>
              <li>
                I connected the store by using connect function and use
                mapStateToProps to search through the state in the store.
              </li>
            </ul>
          </div>
        </div>
        <div className='counter'>
          <div className='counter-main'>
            <div className='counter-title'>
              <h1>Count Total - {this.props.count}</h1>
              <h2>Asyn Counter</h2>
            </div>

            <div className='btn-sync'>
              <button className='btn-dec' onClick={this.decrement}>
                Sync -
              </button>
              <button className='btn-inc' onClick={this.increment}>
                Sync +
              </button>
            </div>
            <div className='btn-sync'>
              <button className='btn-dec' onClick={this.asyndecrement}>
                Async -
              </button>
              <button className='btn-inc' onClick={this.asynincrement}>
                Async +
              </button>
            </div>
          </div>
          <div>
            <div className='redux'>
              Redux is state management library tool. It stores all the
              variables in one place so that its easier for other components to
              access it easily. It is usually used in large app when the app
              state is difficult to manage. It can be used with any javascript
              framework or library.
              <br />
              It is not suitable for this exercise, since this is a small app
              and not a lot of data maagement is needed. Context has also
              similar contcept. It provides us with a way to get the data
              without having to pass down props through all the levels.
              <br />
              Context Api re-render on each update of the state and re-renders
              all components regardless, while Redux only re-renders the updated
              components.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
