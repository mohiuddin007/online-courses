import React from 'react';
import './Courses.css'

const Courses = (props) => {
    const {img, title, instructor, rating, price} = props.course;
    
    return (
        <div className="col-md-4">
            <div className="single-item text-center my-4">
                <div className="card p-2"  id="card">
                  <img className="img-fluid img-thumbnail" id="image" src={img} alt=""/>
                    <div className="card-body">
                        <h4>{title}</h4>
                        <p><small>Instructor: {instructor}</small></p>
                        <p>Rating: {rating}</p>
                        <h5>Price: ${price}</h5>
                        <button className="btn btn-sm btn-primary"
                        onClick={() => props.handleClick(props.course)}>Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};   
export default Courses;