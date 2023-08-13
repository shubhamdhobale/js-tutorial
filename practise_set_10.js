// Digital clock
setInterval(() => {
    let d = new Date()
    time.innerHTML = d
}, 1000)


// Saving your note to local Storage
let n = prompt("Enter your note")
localStorage.setItem("note", n)

alert("Your note is " + n)

//Fetching API
let url = "https://kontests.net/api/v1/all"

let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    for (item in contests) {
        console.log(contests[item])

        ihtml += `

     <div class="card" style="width: 18rem;">
      <img
        src="https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA="
        class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${contests[item].name}</h5>
        <p class="card-text"><a href = "${contests[item].url}">Visit here.</a></p>
        <p>Starts At: ${contests[item].start_time}</p>
         <p>Starts At: ${contests[item].end_time}</p>
        <a href="${contests[item].url}" class="btn btn-primary">Visit contest</a>
      </div>
    </div>
    `
    }
    cardContainer.innerHtml = "ihtml"
})