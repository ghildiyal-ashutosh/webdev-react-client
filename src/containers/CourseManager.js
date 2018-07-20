import React from 'react'
import CourseList from './CourseList'
import CourseEditor from "./CourseEditor";
import styles from "../style/style.css"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


export default class CourseManager extends  React.Component
{
    render()
    {
        return (
            <Router>
            <div className = "container-fluid">
                <h1> Course-Manager</h1>
                <Link to = "/courses">
                    <button className="btn-sm"> Courses</button>
                </Link>
                <Route path = "/courses" component = {CourseList}/>
                <Route path = "/courses/:courseId" component = {CourseEditor}/>
            </div>
        </Router>

        );
    }
}