import React from 'react'
import ModuleService from "../services/ModuleService"
import  LessonTab from "../containers/LessonTab"
import styles from "../style/style.css"

export default class ModuleEditor extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={courseId:'',
                     moduleId : '',
                     moduleTitle : ''
        };
        this.setIds = this.setIds.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.moduleService = ModuleService.instance;
    }

    componentDidMount()
    {
        this.setIds(this.props.match.params.moduleId,this.props.match.params.courseId);
        this.setModuleTitle(this.props.match.params.moduleId,this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps)
    {
        this.setIds(newProps.match.params.moduleId,newProps.match.params.courseId);
        this.setModuleTitle(newProps.match.params.moduleId,newProps.match.params.courseId);
    }

    setIds(moduleId,courseId)
    {

        this.setState({courseId: courseId, moduleId: moduleId});
    }
    setModuleTitle(moduleId,courseId)
    {
       // console.log(moduleId,courseId);
        this.moduleService
            .findModuleById(moduleId,courseId)
            .then((module) => {this.setState({moduleTitle:module.title });});


    }

    render()
    {
        return(
            <div>
            <h1 id = "head"> Editing Module: {this.state.moduleTitle} </h1>
                <LessonTab courseId = {this.state.courseId} moduleId = {this.state.moduleId}/>
            </div>
        )
    }
}