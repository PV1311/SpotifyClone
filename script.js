


cards = document.querySelectorAll(".card")
for (let card of cards) {
    card.addEventListener("click", () => {
        document.querySelector(".album-picture>img").src = card.querySelector("img").src;

    })
}

