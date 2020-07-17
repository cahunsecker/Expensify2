// const skillList = [
//     {
//         java:{
//             checked: false,
//             skillLevel: 1,
//             skillGoal: 2,
//             note: ''
//         },
//         JavaScript:{
//             checked: false,
//             skillLevel: 1,
//             skillGoal: 2,
//             note: ''
//         },
//         CSharp:{
//             checked: false,
//             skillLevel: 1,
//             skillGoal: 2,
//             note: ''
//         }
//     }
// ]

const skillList = {
    skills:{
        name: 'Java',
        checked: false,
        skillLevel: 1,
        skillGoal: 5,
        note: ''
    }
}

const skillsReducer = (state=[], action) => {
    switch (action.type){
        case 'ADD_SKILL':
            return[
                ...state,
                ...action
            ];
        default:
            return state;
    }
}

export default skillsReducer;