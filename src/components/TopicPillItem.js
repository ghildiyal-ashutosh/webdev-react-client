import React from 'react'
import {Link} from 'react-router-dom'
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
                <i onClick={() => {this.props.delete(this.props.courseId,this.props.moduleId,this.props.lessonId, this.props.topic.id)}}
                   className="fa fa-trash"/>
                    <i onClick =  {() => {this.props.load(this.props.courseId,this.props.moduleId,this.props.lessonId, this.props.topic)}}
                       className="fa fa-pencil"/>
            </span>
                <div id = "head" >
                    <Link to =
                              {`/courses/${this.props.courseId}/module/${this.props.moduleId}
                              /lesson/${this.props.lessonId}/topic/${this.props.topic.id}`}
                          className="nav-link">{this.props.topic.title}</Link>
                </div>
            </li>
        );
    }
}
