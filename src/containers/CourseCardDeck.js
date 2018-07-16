import React from 'react';
import CourseCardItem from "../components/CourseCardItem";

export default class CourseCardDeck extends React.Component
{
    render()
    {
        return(
            <div className= "card-deck">
                <CourseCardItem title = "Lesson-1"/>
                <CourseCardItem title = "Lesson-2"/>
                <CourseCardItem title = "Lesson-3"/>
                <CourseCardItem title = "Lesson-4"/>
                <CourseCardItem title = "Lesson-5"/>
            </div>
        );
    }
}
