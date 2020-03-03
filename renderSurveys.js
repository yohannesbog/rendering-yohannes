
function renderSurveys(surveys) {
    return `
        <div class="text-center mt-5">
        ${surveys.map(surveysl).join('')}
        </div>
    `
}

function surveysl(test){
    var answerYes = 
    `
    <input type="radio" id="answer">

         <label for="Yes">Yes</label>
    `
    var answerNo= `
    <input type="radio" id="answer">
         <label for="NO">No</label>
    `
    return `
    <div class="survey">

    <h1>
    ${test.title}
    </h1>
     ${test.fields.map(function(nes){
         return `
         <p>
         ${nes.label}
         </p>
         <input type="${nes.type}" id="answer">

         <label for="yes"> ${nes.options ?  nes.options:''}</label>
         </br>  
         `
     }).join('')}
     <button style="background-color:rgb(22, 151, 238);">
         ${test.submitButtonText}
         </button>
     </div>

    `
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}

