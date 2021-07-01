window.addEventListener('DOMContentLoaded', showTitles)

// store the link plus the API key in a variable
const key = 'EE0DtD6KEd2jIFHmgPDhRKGb7G3kIbXk'

const API = `https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=${key}`

console.log(API)

function showTitles(event) {
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results.books))
}

/*
function showData(stories) {
  console.log(stories[0].title);

  var looped = '';
  for (let story of stories) {
    console.log(story);
    looped += `
    <div class="item">
        <h3>${story.title}</h3>
        <p>${story.abstract}</p>
    </div>
    `;
  }
  document.querySelector('.stories').innerHTML = looped;
}

*/

function showData(stories) {
  var looped = stories
    .map(
      (result) => `
      <div class="item">
   <div><a href="${result.book_image}"  target="https://www.nytimes.com/"><img class="bookimage" src="${result.book_image}"></a> </div>
 <div class="bookinfo">
   <p class="abstract"><em>${result.publisher}</em></p>
               <h3 class="author">${result.author}</h3>
               <h5 class="booktitle">${result.title}</h5>
               <p class="bookdescription">${result.description}</p>
      </div>
      
        </div>
    `
    )
    .join('')

  document.querySelector('.stories').innerHTML = looped
}

//local gallery data

const gallery = [
  {
    img: 'images/hzfuturistic.jpeg',
  },
  {
    img: 'images/calgaryfuturistic.jpeg',
  },
  {
    img: 'images/binhaifuturistic.jpeg',
  },
  { img: 'images/futuristic1.jpeg' },
]

//select items
const img = document.getElementById('gallery-img')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

// set starting item
let currentItem = 0

// load initial item
window.addEventListener('DomContentLoaded', function () {
  const item = reviews[currentItem]
  img.src = item.img
})

//show picture based on item
function showPicture(picture) {
  const item = gallery[picture]
  img.src = item.img
}

// show next picture
nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > gallery.length - 1) {
    currentItem = 0
  }
  showPicture(currentItem)
})

//show prev picture
prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = gallery.length - 1
  }
  showPicture(currentItem)
})

//modal
var libaryCardButton = document.querySelector('.librarycardbtn')
var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var closer = document.querySelector('.closer')

function openModal() {
  backdrop.style.display = 'block'
  modal.style.display = 'block'
}

function closeModal() {
  backdrop.style.display = 'none'
  modal.style.display = 'none'
}

libaryCardButton.addEventListener('click', openModal)
backdrop.addEventListener('click', closeModal)
closer.addEventListener('click', closeModal)

//greeting
var i = 0
var txt =
  '___hello___guten Tag___欢迎___bienvenido___ciao___приветствовать___أهلاً و سهلا'
var speed = 100

document.addEventListener('DOMContentLoaded', typeWriter)

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('greet').innerHTML += txt.charAt(i)
    i++
    setTimeout(typeWriter, speed)
  }
}

//toggle nav

document.addEventListener('click', clickHandlers)

function clickHandlers(event) {
  console.log(event.target)
  if (event.target.matches('#pull')) {
    document.querySelector('body').classList.toggle('show-nav')
    event.preventDefault()
  }
}
