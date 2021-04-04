let formEl = $(".form")
let selectEl = $(".select")
let ulEl = $(".list")
let items = document.querySelectorAll("li")

function $(e) {
    return document.querySelector(e)
}

let formElement = $(".addForm")
let inputUrl = $(".addInputScr")
let inputName = $(".addInputTitle")
let inputJanr = $(".addInputJanr")
let lnk = $(".lnk")
let cancel = $(".cancel")
let add = $(".add")

lnk.addEventListener("click", function(){
    formElement.style.display = "block"
});

cancel.addEventListener("click", function(){
    formElement.style.display= "none"
});

formElement.onsubmit = function (evt) {
    evt.preventDefault()
    if (inputUrl.value != "" && inputName.value != "" && inputJanr.value != "") {
        let li = document.createElement('li')
        li.classList.add("item")
        let ifr = document.createElement('div')
        ifr.classList.add("iframe")
        let wrap = document.createElement('span')
        wrap.classList.add("wrap")
        let spn = document.createElement('span')
        spn.classList.add("span")
        let tex = document.createElement('p')
        tex.classList.add("janr")
        let titl = document.createElement('h2')
        titl.classList.add("title")
        
        ifr.innerHTML = inputUrl.value
        tex.textContent = inputJanr.value
        spn.textContent = "Janr:"
        titl.textContent = inputName.value
        
        wrap.appendChild(spn)
        wrap.appendChild(tex)
        li.appendChild(ifr)
        li.appendChild(titl)
        li.appendChild(wrap)
        
        ulEl.appendChild(li)
        
        inputUrl.value = ""
        inputName.value = ""
        inputJanr.value = ""
    }
    
    
    
}