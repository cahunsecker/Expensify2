import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Homepage from '../components/Homepage';
import Header from '../components/Header';
import SkillsPage from '../components/SkillsPage';
const AppRoutes = () => (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={Homepage} exact={true}/>
                    <Route path="/skills" component={SkillsPage}/>
                </Switch>
            </div>
        </BrowserRouter>
)



export default AppRoutes;