import React from 'react'
import styles from '../style/style.css'

export default class LessonTabItem extends React.Component
{
    constructor(props)
    {
        super(props);
    }
        render()
        {
            return (

                <li className="nav-item">
            <span className="float-right">
                <i onClick={() => {this.props.delete(this.props.courseId,this.props.moduleId,this.props.lesson.id)}}
                    className="fa fa-trash"/>
                    <i onClick =  {() => {this.props.update(this.props.courseId,this.props.moduleId,this.props.lesson.id)}}
                        className="fa fa-pencil"/>
            </span>
                    <a
                        className="nav-link">{this.props.lesson.title}</a>
                </li>
            );
        }
    }
