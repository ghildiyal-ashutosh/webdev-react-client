import React from 'react';
import CourseCardItem from "../components/CourseCardItem";

export default class CourseCardDeck extends React.Component
{
    render()
    {
        return(
            <div className= "card-deck">
                <CourseCardItem/>
                <CourseCardItem/>
                <CourseCardItem/>
                <CourseCardItem/>
                <CourseCardItem/>
            </div>
        );
    }
}
