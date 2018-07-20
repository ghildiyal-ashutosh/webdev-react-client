import React from 'react'
import ModuleListItem from "../components/ModuleListItem"
import ModuleService from "../services/ModuleService";
var self;
export default class ModuleList extends React.Component
{
    constructor(props) {
    super(props);
    this.state = {
        courseId: '',
        title: '',
        module: {title: ''},
        modules: []
    };

    this.titleChanged = this.titleChanged.bind(this);
    this.createModule = this.createModule.bind(this);
    this.setModules = this.setModules.bind(this);
    this.setCourse = this.setCourse.bind(this);
    this.deleteModule = this.deleteModule.bind(this);
    this.findAllModulesForCourse = this.findAllModulesForCourse.bind(this);
    this.moduleService = ModuleService.instance;

    self = this;
}

componentDidMount()
{
        this.setCourse
        (this.props.courseId, this.props.title);
}
componentWillReceiveProps(newProps, modules)
{
        this.setCourse
        (newProps.courseId,newProps.title);
         this.findAllModulesForCourse(newProps.courseId);
}

titleChanged(event)
{

    this.setState({module :{title:event.target.value}});
}

createModule()
{
   // console.log(this.props.courseId,this.state.module.title);
    this.moduleService
        .createModule(this.props.courseId, {title: this.state.module.title, id : 0})
        .then(() => {this.findAllModulesForCourse(this.props.courseId)});

    this.inputTitle.value = "";



}

findAllModulesForCourse(courseId)
{
    this.moduleService
        .findAllModulesForCourse(courseId)
        .then((modules) => {this.setModules(modules)});


}

setModules(modules)
{
    this.setState({modules: modules});
}
setCourse(courseId,title)
{
    this.setState({courseId: courseId, title:title});
}

deleteModule(moduleId, courseId )
{
    console.log(moduleId,courseId);
    this.moduleService
        .deleteModule(moduleId, courseId)
        .then(() => {this.findAllModulesForCourse(courseId)});
}

updateModule(moduleId,courseId)
{
    alert("updating Module")
}


    renderListOfModules()
    {
        var courseId = this.state.courseId;

       let modules = this.state.modules.map(function (module)
       {
         return <ModuleListItem module = {module} key ={module.id}
                                 delete = {self.deleteModule}
                                  update = {self.updateModule}
                                    courseId = {courseId}/>
       });

       return modules
    }
        render()
        {
        return(
            <div>
                <ul className= "list-group">
                    <li className= "list-group-item ">
                        <div className= "row">
                        <input  ref={el => this.inputTitle = el}
                                className="form-control col-10"
                                placeholder = "Add New Module"
                                onChange={this.titleChanged}/>
                               <i onClick={this.createModule} className="fa fa-plus-circle col-2"></i>
                        </div>
                    </li>
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}