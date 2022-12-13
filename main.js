let arrayOfUsers;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  getUser();
};

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getUser = () => {
  fetch("https://randomuser.me/api/?results=25")
    .then((res) => res.json())
    .then((users) => {
      arrayOfUsers = users;
      // console.log('ArrayOfusers;' arrayOfUsers)
    });
};
// This function logs the results in your browser's console
const consoleUsers = () => {
  console.log(arrayOfUsers);
};

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayUser = () => {
  const allUsers = document.getElementById("all-users");
  arrayOfUsers.results.map((user) => {
    const li = document.createElement("li");
    li.id = "button";
    const source = user.picture.thumbnail;
    const img = document.createElement("img");
    img.src = source;

    const text = document.createTextNode(
      `First Name: ${user.name.first}, Last Name: ${user.name.last}`
    );

    const btn = document.createElement("button");
    const btnDisplay = document.createTextNode(`More Information`);
    btn.onclick = displayInfo;
    btn.appendChild(btnDisplay);
    allUsers.append(btn);
    li.appendChild(text);
    allUsers.append(li);
    allUsers.append(img);
  });
};
const displayInfo = () => {
  arrayOfUsers.results.map((user) => {
    const dispState = user.city.state;
    const dispEmail = user.email;
    let list = document.getElementById("button");
    const userInfo = document.createTextNode(
      `City: ${dispState}, Email: ${dispEmail}`
    );
    list.appendChild(userInfo);
    allUsers.append(li);
  });
};
