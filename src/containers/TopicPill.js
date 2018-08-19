import React from 'react'
import TopicPillItem from '../components/TopicPillItem'
;
import TopicService from "../services/TopicService";

var self;
var lmoduleId = 0;
var lcourseId = 0;
var llessonId = 0;
var ltopic  = {title: '', id:0 }

export default class TopicPill extends React.Component {

    constructor(props)
    {
        super(props);
        this.state =
            {
                courseId: '',
                moduleId : '',
                lessonId: '',
                topic: {title: '', id : ''},
                topics: []

            };

        this.titleChanged = this.titleChanged.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
        this.updateTopic = this.updateTopic.bind(this);
        this.setIds = this.setIds.bind(this);
        this.setTopics = this.setTopics.bind(this);
        this.findAllTopicsForLesson = this.findAllTopicsForLesson.bind(this);
        this.findAllTopics = this.findAllTopics.bind(this);
        this.renderTopics = this.renderTopics.bind(this);
        this.loadTopic = this.loadTopic.bind(this);
        this.topicService = TopicService.instance;
        self = this;


    }



    componentDidMount()
    {
        this.setIds(this.props.courseId,this.props.moduleId, this.props.lessonId);
        //   this.findAllLessonsForModule(this.props.courseId,this.props.moduleId);

    }

    componentWillReceiveProps(newProps)
    {
        // console.log(newProps.courseId,newProps.moduleId);
        this.setIds(newProps.courseId,newProps.moduleId, newProps.lessonId);
        this.findAllTopicsForLesson(newProps.courseId,newProps.moduleId, newProps.lessonId);

    }

    findAllTopicsForLesson(courseId,moduleId,lessonId)
    {
        this.topicService
            .findAllTopicsForLesson(courseId,moduleId,lessonId)
            .then((topics) => {this.setTopics(topics)});

    }

    findAllTopics()
    {
        this.topicService
            .findAllTopics()
            .then((topics) => {this.setTopics(topics)});
    }



    setIds(courseId,moduleId,lessonId)
    {
        this.setState({courseId: courseId, moduleId:moduleId, lessonId: lessonId});
    }

    setTopics(topics)
    {
        this.setState({topics:topics});
    }


    titleChanged(event)
    {
        this.setState({topic:{title: event.target.value,id: 0}});
    }

    createTopic()
    {

        //console.log(this.state.courseId,this.state.moduleId);
        if (this.state.topic.title !== '') {
            this.topicService
                .createTopic(this.state.courseId, this.state.moduleId, this.state.lessonId, this.state.topic)
                .then(() => {
                    this.findAllTopicsForLesson(this.state.courseId, this.state.moduleId, this.state.lessonId);
                });

            this.inputTitle.value = "";
            this.setState({topic: {title: "", id: 0}});
        }
    }

    deleteTopic(courseId,moduleId,lessonId,topicId)
    {
        this.topicService
            .deleteTopic(courseId,moduleId,lessonId,topicId)
            .then(()=> {this.findAllTopicsForLesson(courseId,moduleId,lessonId)});
    }

    updateTopic()
    {
        if (this.state.topic.title === ltopic.title || this.state.topic.title === '')
            console.log("No changes made");

        this.topicService
            .findTopicById(lcourseId,lmoduleId,llessonId, ltopic.id)
            .then((topic) => {

                if (topic.id === 0)
                    alert("No Such Topic Exist...Add new Topic Instead");
                else
                {
                    this.topicService
                        .updateTopic(lcourseId,lmoduleId,llessonId, ltopic.id,this.state.topic)
                        .then(() => {this.findAllTopicsForLesson(lcourseId,lmoduleId,llessonId)});

                }

                this.inputTitle.value = "";
            });


    }



    loadTopic(courseId,moduleId,lessonId, topic)
    {
        if (courseId !== 0 && moduleId !== 0 && lessonId !== 0)
        {

            lmoduleId = moduleId;
            ltopic = topic;
            lcourseId = courseId;
            llessonId = lessonId;

            this.setState({topic:{title:topic.title,id:topic.id}});

            this.inputTitle.value = topic.title;
            alert("Topic Loaded");
        }

    }

    renderTopics()
    {
        var courseId = this.state.courseId;
        var moduleId = this.state.moduleId;
        var lessonId = this.state.lessonId;

        let topics = this.state.topics.map((topic) =>
        {
            return <TopicPillItem courseId = {courseId}
                                  moduleId = {moduleId}
                                  lessonId = {lessonId}
                                  topic = {topic}
                                  delete = {self.deleteTopic}
                                  load = {self.loadTopic}
                                  key = {topic.id}/>
        });
        return topics;

    }


    render() {
        return(
            <ul>
                <li>
                    <ul className="nav nav-tabs">
                        {this.renderTopics()}
                    </ul>
                </li>
                <li>
                    <button className= "btn-sm"
                            onClick={this.findAllTopics}> Get All Topics</button>
                </li>

                <div className="row">
                    <input  ref={el => this.inputTitle = el}
                            className="form-control col-10"
                            placeholder = "Add New Topic"
                            onChange={this.titleChanged}/>

                    <i onClick={this.createTopic} className="fa fa-plus-circle col-1"></i>
                    <i onClick={this.updateTopic} className="fa fa-check-circle col-1"></i>
                </div>

            </ul>
        );}






}
