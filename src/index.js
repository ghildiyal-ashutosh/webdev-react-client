import React from 'react'
import ReactDOM from 'react-dom'   // used for web applications
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/react-bootstrap'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import CourseManager from "./containers/CourseManager"
import styles from "./style/style.css"
//import CourseCardDeck from './containers/CourseCardDeck';

ReactDOM.render(
   <CourseManager/>,
    document.getElementById('root')
);