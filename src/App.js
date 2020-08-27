import React from 'react';
import './App.css';
import fakeData from './fakeData/index';
import Courses from './components/Courses/Courses';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import Header from './components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


function App() {
     // call fake data 
     const courseDetail = fakeData.slice(0, 18);

    //set button hadler
    const [cart, setcart] = useState([]);

    const handleClick = (courseItem) => {
      const newCart = [...cart, courseItem]
      setcart(newCart);
    }

    // get check out price
    const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);
    
  return (
    <div className="container-fluid px-2 bg-secondary text-white">
      <Header></Header>
      <h1 className="text-center">Online Educational Courses</h1>
      
      <div className="row">
          <div className="col-md-3 border-right">
            <h2 className="bg-info text-center">Cart <FontAwesomeIcon icon={faShoppingCart} /></h2>
            <h3 className="bg-dark text-center">Total Courses Added: {cart.length}</h3>
            <ul className="list-group">
              {cart.map(courseInfo=><Cart courseInfo={courseInfo}/>)}
              </ul>  
            <button className="btn btn-danger btn-block">Check out: ${totalPrice}</button>
          </div>
          <div className="col-md-9 row border-left">
            {courseDetail.map(course => <Courses course={course} key={course.id} handleClick={handleClick}/>)}
          </div>
      </div>
     </div>
  );
  // 
}

export default App;
