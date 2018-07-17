import React from 'react'
import CourseList from './CourseList'
import CourseEditor from "./CourseEditor";
export default class CourseManager extends  React.Component
{
    render()
    {return (
            <div
                className= "container-fluid">
                <h1> Course-Manager</h1>
                <CourseList/>
                <CourseEditor/>
            </div>
        );
    }
}