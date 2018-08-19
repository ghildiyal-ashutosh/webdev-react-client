let _singleton = Symbol();
// const COURSE_API_URL = 'http://localhost:8080/api/course';
 const COURSE_API_URL  = 'https://webdev-2.herokuapp.com/api/course'

export default class CourseService
{
    constructor(singletonToken)
    {
        if (_singleton !== singletonToken)
        {
            throw new Error('cannot instantiate directly')
        }
    }

    static get instance ()
    {
        if (!this [_singleton])
            this[_singleton] = new CourseService(_singleton);
        return (this[_singleton]);
    }

    findAllCourses()
    {
        return fetch (COURSE_API_URL)
            .then (function(response){
                return response.json();
            });
    }

    createCourse(course)
    {
        return fetch (COURSE_API_URL+'/createCourse', {
            method : 'POST',
            body : JSON.stringify(course),
            headers:
                {'Content-Type' : 'application/json'}
        }).then (function (response)
        {
              return response.json();
        });
    }

    deleteCourse(courseId)
    {
        return fetch (COURSE_API_URL+'/deleteCourse/'+ courseId,
            {
                method :'DELETE'
            });

    }

    updateCourse(courseId, ownedBy)
    {
        return fetch (COURSE_API_URL+'/updateCourse/'+ 'courseId/'+ courseId + '/status/' + ownedBy ,
            {
                method :'PUT'
            });
    }

    findCourseById(courseId)
    {
        return fetch (COURSE_API_URL+'/findCourse/'+courseId)
            .then(function(response)
            {
                return response.json();
            });
    }
}