import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/app-router';
import {Provider} from 'react-redux';
import skillsStore from './store/skillsStore';
import addSkill from './actions/SkillActions';
import 'normalize-css/normalize.css';
import './Styles/styles.scss';

const store = skillsStore();

const state = store.getState();

console.log(state);

store.subscribe(()=>console.log(store.getState()));

const skill = () => (addSkill({skill: 'Java', checked: true, skillLevel: 2, skillGoal: 3, note: 'Practice every day'}))

store.dispatch(skill);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

