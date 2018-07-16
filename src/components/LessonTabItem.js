import React from 'react'

export default class LessonTabItem extends React.Component
{
    render()
    {
        return(
            <li className="nav-item"><a className="nav-link"
                                        href="#">{this.props.title}</a></li>
        );
    }
}