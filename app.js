var textareaEl =document.querySelector("#textarea")
var countTextEl =document.querySelector(".count-text")
var remainTextEl =document.querySelector(".remaining-text")

textareaEl.addEventListener("input",function () {
 updatedtext()


})
updatedtext()
function updatedtext() {
    countTextEl.innerHTML =textareaEl.value.length
    remainTextEl.innerHTML = textareaEl.getAttribute("maxLength")-textareaEl.value.length;
}