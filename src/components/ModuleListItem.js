import React from 'react'
import styles from '../style/ModuleListItem.style.client.css'

export default class ModuleListItem extends React.Component
{
    render()
    {
        return (
            <div>
            <li className= "list-group-item"> {this.props.title}
                <span className="float-right">
                     <i className="fa fa-trash"/>
                     <i className="fa fa-pencil"/>
           </span>
            </li>
            </div>
        );
    }
}