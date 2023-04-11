console.log("We are on js file");

const init = () => {
const userForm = document.getElementById("github-form");

userForm.addEventListener("submit" , (event) => {
    event.preventDefault();

    const userInput = document.getElementById('github-form').value;

    fetch(`https://api.github.com/search/users?q=${userInput}`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            const repos = document.getElementById("repos-list");
        }





        )
        .catch(error => console.error(error))



console.log("The form:", event);

})

console.log("The form:" ,userForm);
}

document.addEventListener("DOMContentLoaded", init);

