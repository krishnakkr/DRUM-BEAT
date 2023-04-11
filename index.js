const drumKit = {
    "w": "tom-1",
    "a": "tom-2",
    "s": "tom-3",
    "d": "tom-4",
    "j": "snare",
    "k": "crash",
    "l": "kick-bass"
};

// add click event listeners to all .drum elements
document.querySelectorAll(".drum").forEach(drum => {
    drum.addEventListener("click", () => {
        const key = drum.innerHTML.toLowerCase();
        makeSound(key);
        buttonAnim(key);
    });
});

// add keydown event listener to the whole document
document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (key in drumKit) {
        makeSound(key);
        buttonAnim(key);
    }
});

function makeSound(key) {
    const audio = new Audio(`sounds/${drumKit[key]}.mp3`);
    audio.play();
}

function buttonAnim(key) {
    const button = document.querySelector(`.${key}`);
    button.classList.add("pressed");
    setTimeout(() => button.classList.remove("pressed"), 100);
}
