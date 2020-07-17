export const addSkill = ({checked,skill, skillLevel, skillGoal, note}={}) => (
    {
        type: 'ADD_SKILL',
        skill:{
        checked: checked,
        skillLevel: skillLevel,
        skillGoal: skillGoal,
        note: note
        }
    }
);

