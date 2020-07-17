const SkillItem = (props) => {
    return (
        <div>
            <h4>{props.skill}</h4>
            <ol>
                <li>Skill Level: {props.skill.skillLevel}</li>
                <li>Skill Goal: {props.skill.skillGoal}</li>
                <li>Note: {props.skill.note}</li>
            </ol>
        </div>
    )
}