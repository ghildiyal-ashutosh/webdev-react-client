import React from 'react'
import CourseRow from "../components/CourseRow";
import {button} from 'react-bootstrap'
import styles from '../style/style.css'
export default class CourseList extends React.Component
{
    render()
    {
        return(

            <div>
                <h2> CourseList </h2>
                <table className= "table">
                    <thead>
                    <tr>
                        <td>
                        <input  className="form-control" id = "inputFld" placeholder = "Add New Course"/></td>
                        <td>
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