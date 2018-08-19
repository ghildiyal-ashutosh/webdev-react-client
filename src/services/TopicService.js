let _singleton = Symbol();
 const LESSON_API_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic';
// const LESSON_API_URL = 'https://webdev-2.herokuapp.com/api/course/CID/module/MID/lesson/LID/topic'
export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken) {
            throw new Error('Singleton !!!');
        }
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton)
        return (this[_singleton]);
    }


    findAllTopicsForLesson(courseId, moduleId,lessonId) {
        var url = LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId)
            .replace('LID',lessonId).replace('topic','topics');
        return fetch(url )
            .then(function (response) {
                return response.json();
            });
    }


    createTopic(courseId, moduleId, lessonId,topic) {
        var url = LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID',lessonId);
        return fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(topic),
                headers:
                    {'Content-Type': 'application/json'}
            }).then(function (response) {

            return response.json();
        });
    }

    deleteTopic(courseId, moduleId, lessonId,topicId) {
        var url = LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID',lessonId);
        return fetch(url + '/' + topicId,
            {
                method: 'delete'
            });


    }


    findAllTopics() {
        var url = "http://localhost:8080/api/course/module/lesson/topic/findAllTopics"
        return fetch(url)
            .then(function (resposne) {
                return resposne.json();
            });


    }

    findTopicById(courseId, moduleId, lessonId,topicId) {
        var url = LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID',lessonId);
        return fetch(url + '/' + topicId)
            .then(function (response) {
                return response.json();

            });
    }

    updateTopic(courseId, moduleId, lessonId, topicId, topic)
    {
        var url = LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID', lessonId);
        return fetch(url + '/' + topicId,
            {
                method: 'PUT',
                body: JSON.stringify(topic),
                headers:
                    {'Content-Type': 'application/json'}
            });

    }



}