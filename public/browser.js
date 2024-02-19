document.addEventListener("click", function(e) {
    if (e.target.classList.contains('edit-me')) {
        let userInput = prompt('Enter your desired text')
        axios.post('/update-item', {userInput}).then(function(){
            // do something interesting here in the next lesson
        }).catch(function(){
            console.log('Please try again later.')
        })
    }
})