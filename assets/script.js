let form = document.getElementById("searchingForm");
let login = document.getElementById("loginSearch");
let photo =document.getElementById("photoData");
let defaultLogin = "Vlady199632";

fetchingUserData(defaultLogin);


form.addEventListener("submit", (event) =>{
    event.preventDefault()
    const formData = new FormData(event.target);
    const userLogin= formData.get("userLogin");
    console.log(userLogin);
    login ="";
    fetchingUserData(userLogin);
})

function fetchingUserData (userLogin) {
    const gitApi = `https://api.github.com/users/${userLogin}`;
    let userData;
    axios.get(gitApi)
        .then(function (response) {
            userData = response.data;
            console.log(userData);
            displayInfo(userData);
        })
        .catch(function (error) {

            console.log(error);
            document.getElementById("myApp").style.display="none";
            document.getElementById("error").style.display="block";
        });
}

function displayInfo (data) {
    let accountUrl = `<a href="${data.html_url}" target="_blank">${data.html_url}</a>`;
    let blogUrl = `<a href="${data.blog}" target="_blank">${data.blog}</a>`;

    photo.src = data.avatar_url;
    document.getElementById("nameData").innerText = data.name? data.name : "No name";
    document.getElementById("loginData").innerText = data.login;
    document.getElementById("gitUrlData").innerHTML = accountUrl;
    document.getElementById("blogUrlData").innerHTML = blogUrl;
    document.getElementById("cityData").innerText = data.location ? data.location : "No city";
    document.getElementById("emailData").innerText = data.email ? data.email : "No email";
    document.getElementById("followersData").innerText = data.followers;
    document.getElementById("followingData").innerText = data.following;
}
