import { posts } from "./data.js";
class Posts{
    constructor(){
        this.data = posts;
    }
    
    search(usernameId){
        return this.data.filter((post) => post.userId == usernameId);

        

    }

}

let publicaciones = new Posts()

const searchPost = document.getElementById("searchPost");
const searchBtn = document.getElementById("postBtn");
const listPost = document.getElementById("listPost")
searchBtn.addEventListener("click", function(e){
    e.preventDefault()
    let input = Number(searchPost.value)

    console.log(input)
    let value = publicaciones.search(input);
    console.log(value)
    if(value){
        value.forEach(valu => {
            listPost.innerHTML += `<h3 class="h3Post">${valu.title}</h3>
                                   <p class="postsBody">${valu.body}</p>`
        });
        


    }

})



