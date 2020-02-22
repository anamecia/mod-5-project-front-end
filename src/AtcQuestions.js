const questions =[
    {
        question:'During the past 4 weeks, how often did your asthma prevent you from getting as much done at work, school or home?',
        answers: 
            [
                {
                    text:'All of the time',
                    value:1
                },
                {   
                    text:'Most of the time', 
                    value:2
                },
                {
                    text:'Some of the time',
                    value:3
                },
                {
                    text:'A little of the time',
                    value:4
                },
                {
                    text:'1-2 times a week',
                    value:5
                }
            ]
    },
    {
        question: 'During the past 4 weeks, how often have you had shortness of breath?',
        answers: 
            [
                { 
                    text:'More than once a day', 
                    value:1
                },
                {
                    text:'Once a day', 
                    value:2
                },
                {
                    text:'3-6 times a week',
                    value:3
                },
                {
                    text:'1-2 times a week',
                    value:4
                },
                {
                    text:'Not at all',
                    value:5
                } 
            ]
    },
    {
        question: 'During the past 4 weeks, how often did your asthma symptoms (wheezing, coughing, chest tightness, shortness of breath) wake you up at night or earlier than usual in the morning?',
        answers: 
            [
                {
                    text:'4 or more times a week',
                    value:1 
                },
                {
                    text:'2-3 nights a week',
                    value:2 
                },
                {
                    text:'Once a week',
                    value:3 
                },
                {
                    text:'Once or twice',
                    value:4
                 },
                 {
                     text:'Not at all',
                     value:5
                 } 
            ]
    },
    {
        question: 'During the past 4 weeks, how often have you used your reliever inhaler (usually blue)?',
        answers: 
            [
                {
                    text:'3 or more times a day',
                    value:1
                },
                {
                    text:'1-2 times a day',
                    value:2
                },
                {
                    text:'2-3 times a week',
                    value:3
                },
                {
                    text: 'Once a week or less',
                    value:4
                },
                {
                    text:'Not at all',
                    value:5
                }
            ]
    },
    {
        question: 'How would you rate your asthma control during the past 4 weeks?',
        answers: 
            [
                {
                    text:'Not controlled',
                    value:1
                },
                {
                    text:'Poorly controlled',
                    value:2
                },
                {
                    text:'Somewhat controlled',
                    value:3
                },
                {
                    text:'Well controlled',
                    value:4
                }, 
                {
                    text:'Completely controlled',
                    value:5
                }
            ]
    }
]

const results = [
    {
        result: 'WELL DONE',
        text: 'Your asthma appears to have been UNDER CONTROL over the last 4 weeks. However, if you are experiencing any problems with your asthma, you should see your doctor or nurse.'
    },
    {
        result: 'ON TARGET',
        text: 'Your asthma appears to have been REASONABLY WELL CONTROLLED during the past 4 weeks. Your doctor or nurse can recommend an asthma action plan to help improve your asthma control.'
    },
    {
        result: 'OFF TARGET',
        text: 'Your asthma may NOT HAVE BEEN CONTROLLED during the past 4 weeks. Your doctor or nurse can recommend an asthma action plan to help improve your asthma control.'
    }
]

export default { questions, results }