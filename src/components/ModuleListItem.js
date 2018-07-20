import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../style/style.css'

export default class ModuleListItem extends React.Component
{
    constructor(props)
    {
        super(props);
       // console.log(this.props.courseId);
    }
        render()
        {
            return (
                <div>
                    <li className="list-group-item">
                        <Link to = {`/courses/${this.props.courseId}/module/${this.props.module.id}`}>
                            {this.props.module.title}
                        </Link>
                        <span className="float-right">
                     <i onClick={()=>{this.props.delete(this.props.module.id, this.props.courseId)}}
                        className="fa fa-trash"/>
                     <i onClick={()=>{this.props.update(this.props.module.id, this.props.courseId)}}
                               className="fa fa-pencil"/>
           </span>
                    </li>
                </div>
            );
        }

}