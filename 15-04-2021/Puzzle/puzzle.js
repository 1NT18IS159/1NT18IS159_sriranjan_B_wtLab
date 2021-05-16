var arr = [];
var len = 0;
let UserData = {
  name: "",
  logarr: [],
  logprint: function () {
    document.getElementById("outputlog").innerHTML = this.logarr;
  },

  logpush: function (ip) {
    this.logarr.push(ip);
  },
};
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const nameip = document.getElementById("name").value;
  UserData.name = nameip;
  document.getElementById(
    "output"
  ).innerHTML = `The Player is ${UserData.name}`;
  console.log(nameip);
});

function delayreload() {
  location.reload();
}

for (let i = 0; i < 10; i++) {
  var div = document.createElement("div");
  div.id = i + 1;
  div.className = "grid-item";
  var textnode = document.createTextNode(i + 1);
  div.appendChild(textnode);
  document.getElementById("gc").appendChild(div);
}

let divs = document.querySelectorAll("div");
console.log(divs);
divs.forEach((div) => {
  div.addEventListener("click", (e) => {
    arr.push(div.id);
    UserData.logpush(div.id);
    console.log(UserData.log);
    UserData.logprint();
    div.style.visibility = "hidden";
    len = arr.length;
    if (arr[len - 1] <= arr[len - 2]) {
      document.getElementById("output").innerHTML = "You have failed";
      //   window.setTimeout(delay, 1000);
      window.setTimeout(() => location.reload(), 1000);
    } else {
      console.log(arr[len - 1]);
    }
    if (arr[len - 1] == 10 && len == 10) {
      document.getElementById("output").innerHTML = "You have reached the end";
    }
    e.stopPropagation();
    // if (arr[len - 1] <= arr[len - 2]) {
    //   console.log("You have failed the game");
    // }
  });
});
