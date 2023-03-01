import { users } from "./data.js";
class Users{
    constructor(){
        this.data = users;
    }

    addUser(newUser){
        this.data.push(newUser);

    }

    list(){
        return this.data;
        


    }

    search(username){
        return this.data.find((dato) => dato.username === username);
        

    }
 
   
}

let app = new Users();

    let nameInput = document.getElementById("name");
    let websiteInput = document.getElementById("website");
    let ageInput = document.getElementById("age");
    let usernameInput = document.getElementById("username");
    let emailInput = document.getElementById("email");


const add = document.getElementById("addBtn")
add.addEventListener("click", function(e){
    e.preventDefault()
    let name = nameInput.value;
    let website = websiteInput.value;
    let age = ageInput.value;
    let username = usernameInput.value;
    let email = emailInput.value;
    
    const userObject = {
        name,
        website,
        age,
        username,
        email
    }

    console.log(userObject)
    app.addUser(userObject);
    console.log(app.list())
    document.getElementById("announce").innerHTML = "<p>A new user has been signed up</p>";

})


add.addEventListener("click",function(e){
    e.preventDefault()
    const table = document.getElementById("tbl");
    let usuarios = app.list()

    table.innerHTML = "";
        usuarios.forEach(usuario =>{
            table.innerHTML += `
        <td>${usuario.name}</td>
        <td>${usuario.username}</td>
        <td>${usuario.age}</td>
        <td>${usuario.website}</td>
        <td>${usuario.email}</td>
        `
        })

        
        
        



});

const search = document.getElementById("searchBtn")
search.addEventListener("click", (e) =>{
    e.preventDefault()
    const username = document.getElementById("username").value;
    const encontrado = document.getElementById("searchList")
    
    encontrado.innerHTML = "";

    let usuario = app.search(username);
    if(usuario){ 
        nameInput.value = usuario.name
        usernameInput.value =  usuario.username
        ageInput.value = usuario.age
        websiteInput.value = usuario.website
        emailInput.value = usuario.email

        nameInput.disabled = true;
        usernameInput.disabled = true;
        ageInput.disabled = true;
        websiteInput.disabled = true;
        emailInput.disabled = true;
        

    }else{
        encontrado.innerHTML += "Didnt found;("

    }



    
    

})







