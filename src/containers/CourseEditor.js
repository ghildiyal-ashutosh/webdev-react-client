import React from 'react';
import LessonTab from './LessonTab';
import ModuleList from './ModuleList';
import TopicPill from './TopicPill'

export default class CourseEditor extends React.Component {

    render() {
        return (
            <div>
                <h2> Editing Course</h2>

                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>

                    <div className="col-8">
                        <div>
                            <LessonTab/>

                        </div>
                        <div>
                            <TopicPill/>
                        </div>

                    </div>

                </div>
            </div>
        );

    }
}