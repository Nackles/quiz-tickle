// let questionAmountForID = 0;
// let addWrongField = $('<label for=<input type="text" class="answer">')

const question = {
    questionAmountForID = 0,
    // addWrongField = $('<label for=<input type="text" class="answer" id="q'+fieldAmt+'">'),
    // Add one Question field + 1 correct answer field + 2 wrong answer fields + click handlers to add more wrong answer fields
    addOneQ: (questionAmountForID) => {
        // [0]: type of html element, [1] {object} of properties
        questionAmountForID += 1;
        // class must be in quotes due to it being a JavaScript reserved word
        return $('<div>', {id: "q" + (questionAmountForID), "class": "question"});
    },
    // Remove the chosen Question field + all answers
    removeThisQ: () => {
        // Might need to check for position or amount of questions
        questionAmountforID -= 1;
        this.remove(); 
    },
    // Add one wrong answer field to the current question
    addOneA: () => {
        addWrongField
        this.append(addWrongfield);
    },
    // Remove one/the chosen wrong answer field (validate for if the field has a value, do not allow deletion or add confirm dialog)
    removeThisA: (answerId) => {

    },
    // on form submit, submit the question object to the questions array and save to database
    submitQuestion: (questionObject) => {

    },
    // function to append a single question object to the #quiz-tray
    listQuestion: (questionObject) => {
        // generate a question <h2> with a <ul> of shuffled answers <li>
        let title = $('<h2 />', {"class": "title", text: questionObject.title } )
        let unorderedList = $('<ul />', {"class":"answer-list"})
        // foreach doesn't seem like the iterator I want
        let shuffledAnswers = questionObject.answers.map(this.shuffle);
        // I need to add a way to track which answer is the correct one
        (function (shuffledAnswers){
            for (let i = 0; i < shuffledAnswers.length; i++){
                let singleItem = $('<li />', {"class":"answer", text: shuffledAnswers[i]})

            }
        })
        
         
            // answers not yet currently actually random
        },
    shuffle: function (value, index, theArray){

        return newArr;
    }
}

module.exports = question;