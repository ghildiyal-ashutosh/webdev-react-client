import React from 'react'
import CourseRow from "../components/CourseRow";
import {button} from 'react-bootstrap'
import styles from '../style/style.css'
export default class CourseList extends React.Component
{
    constructor ()
    {
        super();
        this.state =
            {
                Course : {title : ''},
                Courses : []

        };
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);

    }

    titleChanged(event)
    {
        console.log(event.target.value);
        this.setState({Course:{title : event.target.value}});
    }

    createCourse()
    {
        console.log(this.state.Course);
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
                        <input  className="form-control" id = "inputFld" placeholder = "Add New Course"/>
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
                              <select>
                                  <option value = "Owned By"> Owned By </option>
                                  <option value = "Me"> Me </option>
                              </select>
                          </th>
                          <th> Date/Time of Last Modification </th>

                      <th> Action</th>
                  </tr>
                  <CourseRow title = "CS 5200"/>
                  <CourseRow title = "CS 5600"/>
                  <CourseRow title = "CS 5800"/>

                    </tbody>
              </table>

          </div>
        );
    }
}