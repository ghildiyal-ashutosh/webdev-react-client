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
      this.deleteLesson = this.deleteLesson.bind(this);
      this.updateLesson = this.updateLesson.bind(this);
      this.setIds = this.setIds.bind(this);
      this.setLessons = this.setLessons.bind(this);
      this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
      this.findAllLessons = this.findAllLessons.bind(this);
      this.renderLessons = this.renderLessons.bind(this);
        this.lessonService = LessonService.instance;
      self = this;

    }

    componentDidMount()
    {


        this.setIds(this.props.courseId,this.props.moduleId);
     //   this.findAllLessonsForModule(this.props.courseId,this.props.moduleId);

    }

    componentWillReceiveProps(newProps)
    {
       // console.log(newProps.courseId,newProps.moduleId);
        this.setIds(newProps.courseId,newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId,newProps.moduleId);

    }

    findAllLessonsForModule(courseId,moduleId)
    {
          this.lessonService
              .findAllLessonsForModule(courseId,moduleId)
              .then((lessons) => {this.setLessons(lessons)});

    }

    findAllLessons()
    {
        this.lessonService
            .findAllLessons()
            .then((lessons) => {this.setLessons(lessons)});
    }



    setIds(courseId,moduleId)
    {
        this.setState({courseId: courseId, moduleId:moduleId});
    }

    setLessons(lessons)
    {
        this.setState({lessons:lessons});
    }



    titleChanged(event)
    {
        this.setState({lesson:{title: event.target.value,id: 0}});
    }

    createLesson()
    {

      //console.log(this.state.courseId,this.state.moduleId);
        this.lessonService
            .createLesson(this.state.courseId,this.state.moduleId,this.state.lesson)
            .then(() => {this.findAllLessonsForModule(this.state.courseId,this.state.moduleId)});

        this.inputTitle.value = "";
        this.setState({lesson:{title : "",id:0}});
    }

    deleteLesson(courseId,moduleId,lessonId)
    {
        this.lessonService
            .deleteLesson(courseId,moduleId,lessonId)
            .then(()=> {this.findAllLessonsForModule(courseId,moduleId)});
    }

    updateLesson(courseId,moduleId,lessonId)
    {
        console.log(courseId,moduleId,lessonId);
    }

    renderLessons()
    {
        var courseId = this.state.courseId;
        var moduleId = this.state.moduleId;

        let lessons = this.state.lessons.map((lesson) =>
        {
            return <LessonTabItem courseId = {courseId}
                                  moduleId = {moduleId}
                                  lesson = {lesson}
                                  delete = {self.deleteLesson}
                                  update = {self.updateLesson}
                                  key = {lesson.id}/>
        });
        return lessons;

    }

    render() {
        return(
            <ul>
                <li>
           <ul className="nav nav-tabs">
               {this.renderLessons()}
        </ul>
                </li>
                <li>
                    <button className= "btn-sm"
                        onClick={this.findAllLessons}> Get All Lessons</button>
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
