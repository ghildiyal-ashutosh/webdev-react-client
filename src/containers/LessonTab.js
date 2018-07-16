import React from 'react'
import LessonTabItem from '../components/LessonTabItem'

export default class LessonTabs extends React.Component {
    render() {
        return(
        <ul class="nav nav-tabs">
            <LessonTabItem title = "Lesson 1"/>
            <LessonTabItem title = "Lesson 2"/>
            <LessonTabItem title = "Lesson 3"/>
            <LessonTabItem title = "Lesson 4"/>


        </ul>
    );}}
