const main = document.getElementById("main");
var s=" ";
const but = document.getElementById("but");

const data=()=>{
const URL = "https://jsonplaceholder.typicode.com/comments";

fetch(URL)
.then(response => response.json())
.then(data => {console.log(data);
  data.forEach(d => {
    // console.log(d.name);
    s+=`   <h4>Name : ${d.name} ----------> Email:${d.email}</h4>`    
    }); 
    main.innerHTML = s;
  })
  .catch(error => {
    console.log(error);
});
}

but.addEventListener('dblclick',data);


  