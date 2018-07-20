import React from 'react'
import styles from '../style/style.css'

export default class LessonTabItem extends React.Component
{
    render()
    {
        return(

            <li className="nav-item">
            <span className = "float-right" >
                <i
                    className= "fa fa-trash"/>
                    <i
                        className= "fa fa-pencil"/>
            </span>

            <a className="nav-link">{this.props.title}</a>
            </li>
        );
    }
}