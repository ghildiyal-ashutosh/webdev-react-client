let _singleton = Symbol();
const LESSON_API_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson';

export default class ModuleService
{
    constructor(singletonToken) {
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

    findAllLessons()
    {
        var url = "http://localhost:8080/api/user/course/module/lesson/findAllLesson"
        return fetch(url)
            .then(function(response)
            {
                return response.json();
            });
    }

    findAllLessonsForModule(courseId,moduleId) {
        var url = LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId);
        return fetch(url)
            .then(function (response) {
                return response.json();
            });
    }

    createLesson(courseId,moduleId,lesson)
    {
        var url = LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId);
        return fetch(url ,
            {
                method:'POST',
                body: JSON.stringify(lesson),
                headers:
                    {'Content-Type':'application/json'}
            }).then(function (response) {

                return response.json();
        });
    }


}