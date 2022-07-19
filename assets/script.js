//need funtions to generate quiz, show the questions/answers, show the results

//need to set up a timer that starts when quiz starts. need to deduct time when question incorrect.

//need var set up for each set of questions and answers
var questions = [
    {
        question: "What is the purpose of CSS?",
        answers: {
            a: "To give style to application",
            b: "It creates a navigation bar",
            c: "There is no purpose",
            d: "It makes Javascript possible"
        }, 
        correctAnswer: 'a'
    },
    {
        question: "How do you style an individual element when there are multiple same elements?",
        answers: {
            a: "Just use the element tag in CSS or JS",
            b: "Must use CSS",
            c: "Give the element a class or id",
            d: "There is no way"
        },
        correctAnswer: 'c'
    },
    {
        question: "What is an example of a string in Javascript?",
        answers: {
            a: "true",
            b: "\'true\'",
            c: "4",
            d: "false",
        },
        correctAnswer: 'b'
    },
    {
        question: "What part of an HTML file contains the metadata?",
        answers: {
            a: "The body",
            b: "The header",
            c: "The head",
            d: "The footer"
        },
        correctAnswer: 'c'
    }
]