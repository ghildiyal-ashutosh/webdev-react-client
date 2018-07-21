import React from 'react'
import ModuleListItem from "../components/ModuleListItem"
import ModuleService from "../services/ModuleService";

var self, lmodule,lcourseId;
lmodule = {title:'',id: 0};
lcourseId = 0;

export default class ModuleList extends React.Component
{
    constructor(props) {
    super(props);
    this.state = {
        courseId: '',
        title: '',
        module: {title: '',id : ''},
        modules: []
    };

    this.titleChanged = this.titleChanged.bind(this);
    this.createModule = this.createModule.bind(this);
    this.setModules = this.setModules.bind(this);
    this.setCourse = this.setCourse.bind(this);
    this.deleteModule = this.deleteModule.bind(this);
    this.findAllModulesForCourse = this.findAllModulesForCourse.bind(this);
   this.findAllModules = this.findAllModules.bind(this);
   this.updateModule = this.updateModule.bind(this);
   this.loadModule = this.loadModule.bind(this);
   this.renderListOfModules = this.renderListOfModules.bind(this);
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

    this.setState({module :{title:event.target.value , id: 0}});

}

createModule()
{
   console.log(this.props.courseId,this.state.module);
    this.moduleService
         .createModule(this.props.courseId, this.state.module)
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

loadModule(courseId,module)
{

    if (module.id !== '' && courseId !== '')
    {
        this.inputTitle.value = module.title;
        lmodule = module;
        lcourseId = courseId;

        alert("Module Loaded");
        this.setState({module:module});

    }


}
updateModule()
    {
        console.log(this.state.module.title);
      //  console.log(lmodule.moduleId,lcourseId);
        this.moduleService
            .findModuleById(lmodule.id,lcourseId)
            .then((module) =>
            {
             if (module.id === 0 )
                 alert("No such module exist...Go for Add")
                else
                    {
                 if (lmodule.title === this.state.module.title)
                 {
                     alert("No Changes Made..Pls change the name");
                 }
                 else
                 {
                     lmodule = {title:this.state.module.title, id: lmodule.id}


                     this.moduleService
                         .updateModule(lcourseId,lmodule)
                         .then(()=> {this.findAllModulesForCourse(lcourseId)});
                 }
             }
    });
        this.inputTitle.value = "";
    }



findAllModules()
{
    this.moduleService
        .findAllModules()
        .then((modules) => {this.setModules(modules)});
}




renderListOfModules()
    {
        var courseId = this.state.courseId;

       let modules = this.state.modules.map(function (module)
       {
         return <ModuleListItem module = {module} key ={module.id}
                                 delete = {self.deleteModule}
                                  load = {self.loadModule}
                                    courseId = {courseId}/>
       });

       return modules;
    }
        render()
        {
        return(
            <div>
                <ul className= "list-group">
                    <li>
                        <button className= "btn-sm"
                            onClick = {this.findAllModules}> Get All Modules</button>
                    </li>
                    <li className= "list-group-item ">
                        <div className= "row">
                        <input  ref={el => this.inputTitle = el}
                                className="form-control col-9"
                                placeholder = "Add New Module"
                                onChange={this.titleChanged}/>
                               <i onClick={this.createModule} className="fa fa-plus-circle col-1"></i>
                               <i onClick={this.updateModule} className="fa fa-check-circle col-1"></i>
                        </div>
                    </li>
                    {this.renderListOfModules()}

                </ul>
            </div>
        );
    }


}
