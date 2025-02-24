let a = document.querySelector("h4");
let addFriend = document.querySelector("button");
let flag = 0;
addFriend.addEventListener("click", function () {
    if (flag == 0) {
        a.style.color = "green"
        a.innerHTML = "Friend Request Send"
        addFriend.style.backgroundColor = "rgb(112, 112, 111)"
        addFriend.innerHTML = "Remove"
        flag = 1
    }
    else {
        a.style.color = "red"
        a.innerHTML = "Stranger"
        addFriend.style.backgroundColor = "rgb(32, 147, 255)"
        addFriend.innerHTML = "Add Friend"
        flag = 0
    }
})
