let previews = [
{
    id : 1,
    img : "image/5885805-beau-noir-homme-portant-costume-en-milieu-urbain-photo.jpg",
    name : "Peter Jones",
    link : "INTERN",
    paragraph: "Lorem elit Accusantium consequuntur eaque voluptas temporibus vitae non quisquam temporibus vitae non quisquam repellat, harum delectus."
},
{
    id : 2,
    img : "image/portrait-du-pere-dans-son-jardin_23-2149489567.avif",
    name : "Soufiane naji",
    link : "Web developer",
    paragraph: "Lorem ipsum dolor, sit amet consectetur  repellat, harum delectus eaque voluptas temporibus vitae non quisquam repellat."
},
{
    id : 3,
    img : "image/portrait-homme-blanc-isole_53876-40306.avif",
    name : "Ahmad el mahdi",
    link : "Full stack",
    paragraph: "Lorem elit Accusantium consequuntur unde reiciendis provident, eaque voluptas temporibus vitae non quisquam repellat, harum delectus."
}
]

let img = document.getElementById('img-content');
let tile_content = document.getElementById('title-content');
let job_content = document.getElementById('job-content');
let title = document.getElementById('title');

let cart = document.querySelector('.cart');
let Pbtn = document.querySelector('.prev-btn');
let Nbtn = document.querySelector('.next-btn');

Pbtn.addEventListener('click',function(){
    let number = getNumber();
    img.src = previews[number].img
    tile_content.textContent = previews[number].name
    job_content.textContent = previews[number].link
    title.textContent = previews[number].paragraph
})

Nbtn.addEventListener('click',function(){
    let number = getNumber();
    img.src = previews[number].img
    tile_content.textContent = previews[number].name
    job_content.textContent = previews[number].link
    title.textContent = previews[number].paragraph
})

let surprise = document.getElementById('surprise');
surprise.addEventListener('click',function(){
    let number = getNumber();
    img.src = previews[number].img
    tile_content.textContent = previews[number].name
    job_content.textContent = previews[number].link
    title.textContent = previews[number].paragraph
})
function getNumber(){
    return Math.floor(Math.random() * previews.length)
}