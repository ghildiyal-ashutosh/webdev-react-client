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
                    {this.props.title}
                </td>
                <td>
                me
                </td>
                    <td>
                        {this.props.timestamp}
                        </td>

                        <td>
                            <i className="fa fa-times"/>
                        </td>

            </tr>


        );
    }
}