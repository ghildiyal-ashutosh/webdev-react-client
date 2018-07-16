import React from  'react';
export default class CourseCardItem extends React.Component
{
    render()
    {
    return (
    <div className="card"
         styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/200/100?random"/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Card text.</p>
            <button href="#" className="btn btn-primary">More...</button>
        </div>
    </div>
    );
    }
}