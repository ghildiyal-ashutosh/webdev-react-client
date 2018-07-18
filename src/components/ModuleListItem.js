import React from 'react'
import styles from '../style/style.css'

export default class ModuleListItem extends React.Component
{
    constructor(props)
    {
        super(props);
    }
        render()
        {
            return (
                <div>
                    <li className="list-group-item"> {this.props.title}
                        <span className="float-right">
                     <i className="fa fa-trash"/>
                     <i className="fa fa-pencil"/>
           </span>
                    </li>
                </div>
            );
        }

}