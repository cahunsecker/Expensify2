import {createStore} from 'redux';
import skillsReducer from '../reducers/skillsReducer';


export default () => {
    const store = createStore(skillsReducer);
    return store
}

const store = createStore(skillsReducer);


 

