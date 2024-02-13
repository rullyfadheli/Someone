// Audio autoplay

const backgroundaudio = new Audio("./resource/Sempurna.mp3");

backgroundaudio.loop = true;

window.addEventListener("click", () => {
    backgroundaudio.play();
});

// Opening button

const openingButton = document.getElementById("opening-button")
const subContent = document.getElementById("subContent")
const hiddenBot = document.getElementById("Circle")
const additionalText = document.getElementById("additional-text")

function hiddenFunction (){
    hiddenBot.classList.remove("hidden-bot")
    additionalText.innerHTML = "Swipe down please...🙃"
}

// footer section

const footerhidden = document.getElementById("footer")
const lastContent = document.getElementById("footerlink")

lastContent.addEventListener("click", ()=> {
    footerhidden.classList.remove("footer-hidden")
})

openingButton.addEventListener("click", () => {
    subContent.classList.remove("hidden-sub")

    // showing bottom elements
    setTimeout(hiddenFunction, 5000)

})







