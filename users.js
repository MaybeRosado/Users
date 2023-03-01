import { users } from "./data.js";
class Users{
    constructor(){
        this.data = [users];
    }

    addUser(newUser){
        this.data.push(newUser);

    }

    list(){
        return this.data;
        


    }

    search(username){
        return this.datos.find((dato) => dato.username === username);
        

    }
 
   
}

let app = new Users();

    let name = document.getElementById("name").value;
    let website = document.getElementById("website").value;
    let age = document.getElementById("age").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;


const add = document.getElementById("addBtn")
add.addEventListener("click", function(e){
    e.preventDefault()
    const userObject = {
        name,
        website,
        age,
        username,
        email
    }

    //console.log(userObject)
    app.addUser(userObject);
    //console.log(app.list())
    document.getElementById("announce").innerHTML = "<p>A new user has been signed up</p>";

})

const list = document.getElementById("addBtn")
list.addEventListener("click",function(e){
    e.preventDefault()
    let table = `
        <td>${name}</td>
        <td>${username}</td>
        <td>${age}</td>
        <td>${website}</td>
        <td>${email}</td>
        `
        app.list(table);

        
        
        



});

const search = document.getElementById("searchBtn")
search.addEventListener("click", (e) =>{
    e.preventDefault()
    const username = document.getElementById("username").value;
    for(let i = 0;  i < users.length; i++){
        if([i] == username){
            return i;
        }else{
            return null;
        }

    }
    

})





