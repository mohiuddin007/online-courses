import React from 'react';
import './App.css';
import fakeData from './fakeData/fakeData';
import Courses from './components/Courses/Courses';


function App() {
     const courseDetail = fakeData;
    //  console.log(courseDetail);
  return (
    <div className="container-fluid px-2">
      <h1 className="text-center">Online Educational Courses</h1>
      <div className="row">
          <div className="col-md-3">

          </div>
          <div className="col-md-9 row border-left">
            {courseDetail.map(course => <Courses course={course}/>)}
             
          </div>
      </div>
     </div>
  );
}

export default App;
