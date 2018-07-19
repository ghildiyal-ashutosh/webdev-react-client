import React from 'react';


import {BrowserRouter as Router, Link,Route} from 'react-router-dom';


const Page1 = () => {


    return (<div><h1> Page-1</h1> </div>)
};

const Page2 = () => {
    return ( <div><h1> Page-2</h1> </div>)
};

const PageParam = ({match}) => {   //match is a keyword here, dont change it
    return ( <h1> PageParam  {match.params.id}</h1> )
};

class PageUpdate extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =  {
            id : ' '
        };

        this.updatePage = this.updatePage.bind(this);

    }

    componentDidMount()
    {
        this.updatePage
        (this.props.match.params.id);
    }

    componentWillReceiveProps(newProps){
        this.updatePage
        (newProps.match.params.id);
    }


    render()
    {
        return (
            <h1> PageUpdate {this.state.id}</h1>
        );
    }



    updatePage(id)
    {
        this.setState({id : id});
    }


}
const App = () => {
    return (
        <Router>
            <div>

                <Link to="/Page1"> Page-1</Link>
                <Link to="/Page2"> Page-2</Link>
                <Link to="/PageParam/345"> Page3</Link>
                <Link to="/PageParam/646"> Page4</Link>
                <Link to="/PageUpdate/546"> Page5 </Link>
                <Link to="/PageUpdate/748"> Page6 </Link>
                <Link to="/PageUpdate/874"> Page7</Link>


                <Route path='/Page1' component={Page1}/>
                <Route path='/Page2' component={Page2}/>

                <Route path = '/PageUpdate/:id' component = {PageUpdate}/>

                <Route path='/PageParam/:id' component={PageParam}/>


            </div>
        </Router>
    );};



export default App;