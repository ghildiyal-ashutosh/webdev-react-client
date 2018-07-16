import React from 'react'
import ReactDOM from 'react-dom'   // used for web applications
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
//import CourseCardDeck from './containers/CourseCardDeck';
import CourseList from './containers/CourseList'
import ModuleList from './containers/ModuleList'
class WhiteBoard extends  React.Component
{
    render()
    {
        return (
            <div className= "container-fluid">
        <h1> WhiteBoard</h1>
                <h2> Course</h2>
                <CourseList/>
                <h3> Module-List </h3>
                <ModuleList/>

            </div>
        );
    }
}

ReactDOM.render(
    <WhiteBoard/>,
    document.getElementById('root')
);