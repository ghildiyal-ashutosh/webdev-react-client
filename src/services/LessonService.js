let _singleton = Symbol();
const LESSON_API_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson';
 //const LESSON_API_URL = 'https://webdev-2.herokuapp.com/api/course/CID/module/MID/lesson'
export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken) {
            throw new Error('Singleton !!!');
        }
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton)
        return (this[_singleton]);
    }

    findAllLessons() {
        var url = "http://localhost:8080/api/user/course/module/lesson/findAllLesson"
        return fetch(url)
            .then(function (response) {
                return response.json();
            });
    }

    findAllLessonsForModule(courseId, moduleId) {
        var url = LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId);
        return fetch(url)
            .then(function (response) {
                return response.json();
            });
    }

    createLesson(courseId, moduleId, lesson) {
        var url = LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId);
        return fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(lesson),
                headers:
                    {'Content-Type': 'application/json'}
            }).then(function (response) {

            return response.json();
        });
    }

    deleteLesson(courseId, moduleId, lessonId) {
        var url = LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId);
        return fetch(url + '/' + lessonId,
            {
                method: 'delete'
            });


    }


    findAllLessons() {
        var url = "http://localhost:8080/api/course/module/lesson/findAllLessons"
        return fetch(url)
            .then(function (resposne) {
                return resposne.json();
            });


    }

    findLessonById(courseId, moduleId, lessonId) {
        var url = LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId);
        return fetch(url + '/' + lessonId)
            .then(function (response) {
                return response.json();

            });
    }

    updateLesson(courseId, moduleId, lessonId, lesson)
    {
        var url = LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId);
        return fetch(url + '/' + lessonId,
            {
                method: 'PUT',
                body: JSON.stringify(lesson),
                headers:
                    {'Content-Type': 'application/json'}
            });

    }
}