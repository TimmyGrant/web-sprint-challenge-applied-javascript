// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerContainer = document.querySelector('.header-container');
function Header() {
    // debugger;
    const head = document.createElement('div');
    const date = document.createElement('span');
    const mainTitle = document.createElement('h1');
    const temp = document.createElement('span');
    head.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    head.appendChild(date);
    
    head.appendChild(mainTitle);
    head.appendChild(temp);
    // debugger;
    
    date.textContent = 'MARCH 28, 2020';
    mainTitle.textContent = 'Lambda Times';
    temp.textContent = '98deg',
    head.addEventListener('click', () => {
        head.classList.toggle('selected')
    })
    return head
    
    

};
// console.log(Header());
Header();
headerContainer.appendChild(Header());