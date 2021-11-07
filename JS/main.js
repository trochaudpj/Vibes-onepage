

accordion.init({
    selector: "#accordion"
})

const darkModeBtn = document.querySelector("#darkModeBtn")

darkModeBtn.addEventListener("click", (event) => {
    event.preventDefault()
    document.body.classList.toggle("darkMode")
})

const filters = document.querySelectorAll("#gallery-filters a")
const figures = document.querySelectorAll("#gallery-images figure")

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        let typefig = filter.dataset.type//.music-fig, .video-fig ou .image-fig

        document.querySelector(".active").classList.remove("active")
        filter.classList.add("active")

        figures.forEach(fig => {
            fig.classList.add("hidden")
            if (typeof typefig === "undefined" || fig.classList.contains(typefig)) {
                fig.classList.remove("hidden")
            }
        })
    })
})

const burgerBtn = document.querySelector("#burger")

function slideMenu(toggle = true) {
    const menuMobile = document.querySelector("#menu-links")
    if (toggle) {
        menuMobile.classList.toggle("slideDown")
        burgerBtn.querySelector("i").classList.toggle("fa-times")
    }
    else {
        menuMobile.classList.remove("slideDown")
        burgerBtn.querySelector("i").classList.remove("fa-times")
    }
}

burgerBtn.addEventListener("click", function (event) {
    event.stopPropagation()//ignore les évènements qui se propagent sur toi (de la part de tes parents)
    event.preventDefault()
    slideMenu()
})

window.addEventListener("resize", () => slideMenu(false))
document.body.addEvesntListener("click", () => slideMenu(false))



