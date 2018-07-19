let _singleton = Symbol();
const COURSE_API_URL = 'http://localhost:8080/api/course/courseId/module';

export default class ModuleService
{
    constructor(_singleton)
    {
        if (_singleton != _singletonToken)
        {
            throw new Error('cannot instantiate directly')
        }
    }
    static get instance()
    {
        if (!this[_singleton])
            this[_singleton] = new ModuleService(_singleton)
        return this[_singleton]
    }

}
