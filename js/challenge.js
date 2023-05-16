
let count = 0
let number  = {}


let counterDisplay = document.getElementById('counter')
let plusButton = document.getElementById('plus')
let minusButton = document.getElementById('minus')
let likes = document.getElementById('heart')
let likesList = document.querySelector('.likes')
let pauseBtn = document.getElementById('pause')
let inputForm = document.getElementById('comment-form')
let submitBtn = document.getElementById('submit')



function inputHandler(event){
    event.preventDefault()

    let target = document.getElementById('list')
    let commentInput = document.getElementById('comment-input')
    let p = document.createElement('p')

    p.textContent = commentInput.value
    target.appendChild(p)

    inputForm.reset()
}




let timer = setInterval(increment, 1000)

function increment(){
    counterDisplay.textContent = count++
}

function numberHandler (event){
    counterDisplay.textContent = count++
    if(event.target.id === 'plus'){
        counterDisplay.textContent = count++
    }
    else if (event.target.id === 'minus'){
        counterDisplay.textContent = count--
    }
}

function likeHandler(event){
   if (number[counterDisplay.textContent]){
    number[counterDisplay.textContent]++
   } else {
    number[counterDisplay.textContent] = 1
   }
   updateLikesDisplay()
}

function updateLikesDisplay() {
    likesList.innerHTML = '';
    for (const num in number) {
      if (number.hasOwnProperty(num)) {
        const listItem = document.createElement('li');
        listItem.textContent = `This ${num} was liked ${number[num]} time${number[num] === 1 ? '' : 's'}.`;
        likesList.appendChild(listItem);
      }
    }
  }


  function pauseHandler(event) {
    let toggle = event.target; 
    if (toggle.textContent === ` pause `) {
        toggle.textContent = ` resume `;
        clearInterval(timer);
        plusButton.disabled = true
        minusButton.disabled = true
        likes.disabled = true
      } else if (toggle.textContent === ` resume `) {
        toggle.textContent = ` pause `;
        timer = setInterval(increment, 1000);
        plusButton.disabled = false
        minusButton.disabled = false
        likes.disabled = false
      }
   
  }


plusButton.addEventListener('click', numberHandler)
minusButton.addEventListener('click', numberHandler)
likes.addEventListener('click', likeHandler )
pauseBtn.addEventListener('click', pauseHandler)
inputForm.addEventListener('submit', inputHandler)










