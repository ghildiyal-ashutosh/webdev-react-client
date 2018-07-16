import React from 'react'


export default class CourseRow extends React.Component
{
    render()
    {
        return (

            <tr>
                <td>
                    {this.props.title}
                </td>
                    <td></td>
                    <td></td>
                <td>
                     <i className="fa fa-trash"/>
                </td>
            </tr>


        );
    }
}