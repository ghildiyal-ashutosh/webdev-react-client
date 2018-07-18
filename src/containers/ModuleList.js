import React from 'react'
import ModuleListItem from "../components/ModuleListItem"
export default class ModuleList extends React.Component
{
    constructor() {
    super();
    this.state = {
        module : {title:''},
        modules: [
            {title: 'Module 1 - jQuery',id:123 },
            {title: 'Module 2 - React' ,id:234},
            {title: 'Module 3 - Redux', id :345 },
            {title: 'Module 4 - Angular',id:456 }
            ]
    };
    this.titleChanged = this.titleChanged.bind(this);
}

titleChanged(event)
{
    console.log(event.target.value);
    this.setState({module{title:event.target.value}});
}


    renderListOfModules()
    {
       let modules = this.state.modules.map(function (module)
       {
         return <ModuleListItem title = {module.title} key ={module.id} />
       });

       return modules
    }
        render()
        {
        return(
            <div>
                <ul className= "list-group">
                    <li className= "list-group-item">
                        <div className= "row">
                           <div className= "col-10">
                        <input  className="form-control"
                                id = "inputFld"
                                placeholder = "Add New Module"
                                onChange={this.titleChanged}/>
                           </div>
                           <div className="col-lg-2">
                        <i className="fa fa-plus-circle fa-2x"></i>
                           </div>
                       </div>
                    </li>
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}