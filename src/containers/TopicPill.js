import React from 'react'
import TopicPillItem from '../components/TopicPillItem'

export default class TopicPill extends React.Component {
    render() { return(
        <ul class="nav nav-pills">
            <TopicPillItem title = "Topic 1"/>
            <TopicPillItem title = "Topic 2"/>
            <TopicPillItem title = "Topic 3"/>
        </ul>
    );

           }}
