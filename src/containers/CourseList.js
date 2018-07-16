import React from 'react'
import CourseRow from "../components/CourseRow";
export default class CourseList extends React.Component
{
    render()
    {
        return(
          <div>
              <table className= "table">
                  <tbody>
                  <tr>
                      <th> Title</th>
                          <th>
                              <select>
                                  <option value = "en"> Enrolled </option>
                                  <option value = "se"> Selected </option>
                                  <option value = "new"> New</option>
                              </select>
                          </th>
                          <th> Date-Modified </th>
                          <th> Action </th>
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