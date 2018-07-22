let _singleton = Symbol();
//const MODULE_API_URL = 'http://localhost:8080/api/course/CID/module';
const MODULE_API_URL = 'https://webdev-2.herokuapp.com/api/course/CID/module'

export default class ModuleService
{
    constructor(singletonToken)
    {
        if (_singleton !== singletonToken)
        {
            throw new Error('Singleton !!!');
        }
    }
    static get instance()
    {
        if (!this[_singleton])
            this[_singleton] = new ModuleService(_singleton)
        return (this[_singleton]);
    }

    createModule(courseId,module)
    {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {


                body: JSON.stringify(module),
                headers:
                    {'Content-Type':'application/json'},
                method:'POST'
            }).then(function(response)
        {
            return response.json();
        });
    }

    findAllModulesForCourse(courseId)
    {
        const newUrl = MODULE_API_URL.replace('CID', courseId)
        return fetch(newUrl.replace('module','modules'))
            .then(function(response)
            {
                return response.json();
            });

    }

    deleteModule(moduleId,courseId)
    {
        const newUrl = MODULE_API_URL.replace('CID', courseId);
        return fetch(newUrl + '/' + moduleId+'/deleteModule',
            {
                method: 'DELETE'
            });
    }

    findModuleById(moduleId,courseId)
    {
        const newUrl = MODULE_API_URL.replace('CID', courseId);
        return fetch(newUrl + '/'+ moduleId)
            .then(function(response)
            {
                return response.json();
            });
    }

    findAllModules()
    {
        return fetch('https://webdev-2.herokuapp.com/api/course/findAllModules')
               .then(function(response)
               {
                   return response.json();
               });
    }

    updateModule(courseId,module)
    {
        const newUrl = MODULE_API_URL.replace('CID', courseId)
        return fetch(newUrl,
        {
            method: 'PUT',
                body: JSON.stringify(module),
            headers:
            {'Content-Type' : 'application/json'}
        });
    }

}
