import React from 'react';
import { Link } from 'react-router-dom';
import Counter from './CounterApp';
import './Home.css';

const Home = (props) => {
  return (
    <div className='main-container'>
      <div className='title-container'>Counter Application</div>
      <div className='count-conatiner'>
        <Counter />
      </div>

      <div className='sync-container'>
        <p className='title'> Synchrounous</p>
        <li>Stops execution of further code until this is done.</li>
        <li>Needs to wait for a task to finish to move to the next one</li>
      </div>
      <div className='async-container'>
        <p className='title'> Asynchrous</p>
        <li>Can move to another task before the previous one finishes</li>
        <li>Able to deal with multiple requests simultaneously</li>
      </div>
      <div className='last-container'>
        Small attempt to do the excersice in Redux :
        <Link to='/ReduxMain'>
          <button className='redux-counter'>Redux Counter</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
