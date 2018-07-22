import React from 'react';
import CourseRow from "../components/CourseRow"
import {button} from 'react-bootstrap'
import CourseService from '../services/CourseService'
//import styles from '../style/style.css'
var self
var self2
export default class CourseList extends React.Component
{
    constructor ()
    {
        super();
        this.courseService = CourseService.instance;

        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.state = {courses : []};
        self = this;
        self2 = this;


    }

    componentDidMount()
    {
        this.findAllCourses();
    }

    titleChanged(event)
    {

        this.setState({course:{title : event.target.value}});

    }

    createCourse()
    {
        this.courseService
            .createCourse(this.state.course)
            .then(() => {this.findAllCourses();});

        this.inputTitle.value = "";



    }
    findAllCourses()
    {

        this.courseService
            .findAllCourses()
            .then( (courses) => {this.setState({courses : courses});});
    }

    deleteCourse(courseId)
    {
        this.courseService
            .deleteCourse(courseId)
            .then(() => {this.findAllCourses();});
    }

    updateCourse(courseId, ownedBy)
    {

        var status
        if (ownedBy == "Prof")
            status = "Me"
        else
            status = "Prof"

        this.courseService
            .updateCourse(courseId,status)
            .then(() => {this.findAllCourses();});

    }



    renderCourses()
    {
        let courses = this.state.courses.map(function(course)
        {
       return <CourseRow key = {course.id}
                   course = {course}
                   delete = {self.deleteCourse}
                         update = {self.updateCourse}
                   />
            });

        return courses;
    }

    resetInputField()
    {

    }


    render()
    {
        return(

            <div>
                <h2> CourseList </h2>
                <table className= "table">
                    <thead>
                    <tr>
                        <td onChange={this.titleChanged}>
                        <input  className="form-control" ref={el => this.inputTitle = el}  placeholder = "Add New Course"/>
                        </td>
                        <td onClick={this.createCourse}>
                            <i className="fa fa-plus-circle fa-2x"></i>
                        </td>
                    </tr>
                    </thead>

                    <tbody>
                  <tr>
                      <th> Title</th>
                          <th>
                              Owned By
                          </th>
                      <th>
                         Time of Creation
                      </th>
                          <th> Time of Last Modification </th>
                      <th> Action</th>
                  </tr>

                  {this.renderCourses()}

                    </tbody>
              </table>

          </div>
        );
    }
}