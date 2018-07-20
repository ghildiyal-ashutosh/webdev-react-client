import React from 'react'
import LessonTabItem from '../components/LessonTabItem'
import LessonService from '../services/LessonService'
import styles from "../style/style.css"
var self;
export default class LessonTabs extends React.Component {
    constructor(props)
    {
        super(props);
        this.state =
            {
                courseId: '',
                moduleId : '',
                lesson : {title: '',id: ''},
                lessons:[]

        };

      this.titleChanged = this.titleChanged.bind(this);
       this.createLesson = this.createLesson.bind(this);
      // this.lessonService = LessonService.instance;


    }

    titleChanged(event)
    {
        this.setState({lesson:{title: event.target.value,id: 0}});
    }
    createLesson()
    {
        console.log(this.state);
    }

    render() {
        return(
            <ul>
                <li>
           <ul className="nav nav-tabs">
            <LessonTabItem title = "Lesson 1"/>
            <LessonTabItem title = "Lesson 2"/>
            <LessonTabItem title = "Lesson 3"/>
            <LessonTabItem title = "Lesson 4"/>
        </ul>
                </li>
                <div className="row">
                    <input  ref={el => this.inputTitle = el}
                            className="form-control col-10"
                            placeholder = "Add New Lesson"
                            onChange={this.titleChanged}/>

                    <i onClick={this.createLesson} className="fa fa-plus-circle col-1"></i>
                </div>
            </ul>
    );}}
