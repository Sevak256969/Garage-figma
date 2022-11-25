// const form = document.form 
// function sendRequest(method,url) {
//     fetch('https://api-generator.retool.com/78mo0Y/registor')
//     .then(response => response.json())
//     .then(user => user.filter(user =>user.email === form[0].value))
//     .then(response => localStorage.setItem('user',JSON.stringify(response)))
//     // if(localStorage.hasOwnProperty('user')) {
//     //     window.location.pathname = 
//     // }  
// }
// form.addEventListener('submit',event => event.preventDefault())
// form[2].addEventListener('click',sendRequest)

const form = document.form 
function sendRequest() {
    fetch('https://api-generator.retool.com/78mo0Y/registor')
    .then(response => response.json())
    .then(user => user.filter(user =>user.email === form[0].value))
    .then(response => {
        console.log(response);
        localStorage.setItem('user',JSON.stringify(response[0]))
        if(localStorage.hasOwnProperty('user')) {
            window.location.pathname='my_info.html'
        }
    })  
}
form.addEventListener('submit',event => event.preventDefault())
form[2].addEventListener('click',sendRequest)