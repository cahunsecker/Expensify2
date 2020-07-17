import React from 'react';
import SkillItem from './SkillItem';
import {connect} from 'react-redux';


class Skills extends React.Component{
    render(){
        <div>
            {skillList.map((skill)=> <SkillItem skill={skill}/>)}
        </div>
    }
}

connect()(Skills);

export default connect;

