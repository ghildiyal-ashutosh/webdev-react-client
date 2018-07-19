import React from 'react'
import ReactDOM from 'react-dom'   // used for web applications
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/react-bootstrap'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './containers/RoutingEg'
//import CourseCardDeck from './containers/CourseCardDeck';
import CourseManager from './containers/CourseManager'
import RoutingEg from "./containers/RoutingEg";

ReactDOM.render(
   <CourseManager/>,
    document.getElementById('root')
);