function handleClick(e){
let des = document.getElementById(`id-${e}`)
des.style.visibility = "hidden"

let card = document.getElementById(`c-${e}`)
card.className = "change"
let detail = document.getElementById(`detail-${e}`)
detail.style.visibility = "visible"
}