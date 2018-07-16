import React from 'react'
import ReactDOM from 'react-dom'   // used for web applications
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseCardDeck from './containers/CourseCardDeck';
class WhiteBoard extends  React.Component
{
    render()
    {
        return (
            <div className= "container-fluid">
        <h1> WhiteBoard</h1>
                <h2> Courses</h2>
                <CourseCardDeck/>
            </div>
        );
    }
}

ReactDOM.render(
    <WhiteBoard/>,
    document.getElementById('root')
);