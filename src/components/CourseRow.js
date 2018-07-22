import React from 'react';
import {Link} from 'react-router-dom'
import styles from '../style/style.css'
var self;


export default class CourseRow extends React.Component
{
    constructor(props)
    {
        super(props);
    }


    render()
    {

        return (
            <tr>

                <td>

                    <Link to = {`/courses/${this.props.course.id}`}>
                    <i className="fa fa-file"></i>
                        {this.props.course.title}
                    </Link>
                </td>

                <td onChange={() => {this.props.update(this.props.course.id, this.props.course.ownedBy)}}>
                    <select defaultValue = {this.props.course.ownedBy}>
                        <option value = "Prof"> Prof</option>
                        <option value = "Me"> Me</option>
                    </select>

                </td>
                <td>
                    {this.props.course.created}
                </td>
                    <td>
                        {this.props.course.modified}
                    </td>

                        <td onClick={() => {this.props.delete(this.props.course.id)}}>
                            <i className="fa fa-times"/>
                        </td>
                </tr>



        );
    }
}