import React from 'react'
import styles from '../style/style.css'


export default class CourseRow extends React.Component
{
    render()
    {
        return (

            <tr>
                <td>
                    <i className="fa fa-file"></i>
                </td>
                <td>
                    {this.props.title}
                </td>
                    <td></td>
                    <td>

                        <span className= "float-right"> <i className="fa fa-times"/></span>
                    </td>

            </tr>


        );
    }
}