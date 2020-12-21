import React from 'react';
import Categories from '../components/Categories';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Play from '../components/pages/Playlists';

const Main = ()=>{
    return(
        <div className="main">
            <div className="uppernav">
                dummy text 
            </div>
            <Switch>
                <Route path="/" exact component={Categories}></Route>
                <Route path="/search">Search</Route>
                <Route path="/your-library">Your Library</Route>
                <Route path="/playlist/:id" component={Play}></Route>
                </Switch>
        </div>
    )
}
export default Main