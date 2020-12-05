// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

// function makeCard(articleObj){
//     articleObj = 
// }

function cardMaker(obj){
    const card = document.createElement('div')
    const headlineTitle = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const authorsName = document.createElement('span')
    card.classList.add('card')
    headlineTitle.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    headlineTitle.textContent = `${obj.headline}`
    image.src = `${obj.authorPhoto}`
    authorsName.textContent = `${obj.authorName}`
    card.appendChild(headlineTitle)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(image)
    author.appendChild(authorsName);
    card.addEventListener('click', (event) => {
            console.log(`${obj.headline}`)
        })
    return card;
}
// console.log(cardMaker());

headTitle = document.querySelector('.headline')
const cardContainer = document.querySelector('.cards-container');
axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then((res) => {
        console.log(res);
        const articless = res.data.articles;
        const bootStrap = res.data.articles.bootstrap;
        const javaScript = res.data.articles.javascript;
        const jQuery = res.data.articles.jquery;
        const node = res.data.articles.node;
        const tech = res.data.articles.technology;
        bootStrap.forEach((obj) => {
            const newCard = cardMaker(obj)
            cardContainer.appendChild(newCard)
            // debugger;
            // headTitle.textContent = `${obj.headline}`;
            // debugger;
            // image.src = `${this.authorPhoto}`
            // authorsName.textContent = `${this.authorName}`
            
            console.log(newCard)
        })

        //     const card = document.createElement('div')
        //     const headline = document.createElement('div')
        //     const author = document.createElement('div')
        //     const imgContainer = document.createElement('div')
        //     const image = document.createElement('img')
        //     const authorsName = document.createElement('img')
        javaScript.forEach((obj) => {
            const newCard = cardMaker(obj)
            cardContainer.appendChild(newCard)
            console.log(newCard)
        })
        jQuery.forEach((obj) => {
            const newCard = cardMaker(obj)
            cardContainer.appendChild(newCard)
            console.log(newCard)
        })
        node.forEach((obj) => {
            const newCard = cardMaker(obj)
            cardContainer.appendChild(newCard)
            console.log(newCard)
        })
        tech.forEach((obj) => {
            const newCard = cardMaker(obj)
            cardContainer.appendChild(newCard)
            console.log(newCard)
        })
        
    })
    
    .catch((err) => {

    })