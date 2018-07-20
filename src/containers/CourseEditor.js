import React from 'react';
import CourseService from "../services/CourseService"
import {Route} from "react-router-dom"
import ModuleEditor from "./ModuleEditor"
import ModuleList from './ModuleList';


export default class CourseEditor extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = { title : '',
                       courseId : ''
                      };
        this.selectCourse = this.selectCourse.bind(this);

        this.CourseService = CourseService.instance;
    }

    componentDidMount()
    {

        this.selectCourse(this.props.match.params.courseId)
    }

    componentWillReceiveProps(newProps)
    {

        this.selectCourse(newProps.match.params.courseId)
    }

    selectCourse(courseId)
    {
        this.CourseService
            .findCourseById(courseId)
            .then((course) => { this.setState(
                                              {title: course.title, courseId: course.id })});


    }





    render()
    {
        return (
            <div>
                <h2> Editing Course : {this.state.title}</h2>

                <div className="row">
                    <div className="col-4">
                        <ModuleList courseId = {this.state.courseId} title = {this.state.title}/>
                    </div>

                    <div className="col-8">
                    <Route path = "/courses/:courseId/module/:moduleId"
                            component={ModuleEditor}/>
                    </div>
                </div>
            </div>
                );

    }
}