import React from 'react';
import './App.css';
import fakeData from './fakeData/fakeData';
import Courses from './components/Courses/Courses';
import Cart from './components/Cart/Cart';
import { useState } from 'react';


function App() {
     // call fake data 
     const courseDetail = fakeData;

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
      <h1 className="text-center">Online Educational Courses</h1>
      <div className="row">
          <div className="col-md-3">
            <h2 className="bg-info text-center">Cart</h2>
            <h3 className="bg-dark text-center">Total Courses Added: {cart.length}</h3>
            <ul className="list-group">
              {cart.map(courseInfo=><Cart courseInfo={courseInfo}/>)}
              </ul>  
            <h3 className="bg-danger text-center">Check out: ${totalPrice}</h3>
          </div>
          <div className="col-md-9 row border-left">
            {courseDetail.map(course => <Courses course={course} key={course.id} handleClick={handleClick}/>)}
            
          </div>
      </div>
     </div>
  );
}

export default App;
