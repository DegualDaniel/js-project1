
const box = document.querySelector('.box')
const text = document.querySelector('.txt1')
const text2 = document.querySelector('.txt2')
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')


const textRun = () => {

    box.style.border = '2px solid red' 
    text.innerHTML = ' Title:'
    text2.innerHTML = 'Paragraph:'

//    console.log('clicked')
}
const txtdefault = () => {
    
    // console.log('default clicked ')
    box.style = box
    text.innerHTML = 'Title: Fly Emirates'
    text2.innerHTML = 'Paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ullam voluptatibus sequi unde? Iure cupiditate porro perspiciatis architecto enim nesciunt non error dolorem iusto odit'

}
btn.addEventListener("click", textRun)
btn2.addEventListener("click", txtdefault)