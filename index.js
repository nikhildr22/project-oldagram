const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    }
    ,
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    }
]

const renderTarget = document.getElementById("container")

let dataToRender = "";

for(let i=0;i<posts.length;i++){
    dataToRender += `
    <div class="card">
                    <div class="card-header">
                    </div>
                    <div class="card-body">

                        <img src="${posts[i].post}" alt="" class="card-body-img" >
                        <div class="card-body-buttons">
                        </div>
                        <div class="card-body-details">
                            <p class="card-body-likesummary">${posts[i].likes} Likes </p>
                            <p class="card-body-caption"><span id="card-body-username">${posts[i].username}</span> ${posts[i].comment} </p>
                        </div>
                    </div>
                </div>
    `
}

renderTarget.innerHTML = dataToRender