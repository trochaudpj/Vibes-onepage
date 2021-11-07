let accordion = {
    init : (params) => {
        const container = document.querySelector(params.selector)
        const titles = container.querySelectorAll(".acc-title")
        const texts = container.querySelectorAll(".acc-text")
        
        titles.forEach( title => {
            title.addEventListener("click", () => {
                document.querySelector(".open").classList.remove("open")
                title.parentNode.classList.add("open")
                
                texts.forEach(t => t.style.height = 0)

                let normalHeight = title.nextElementSibling.scrollHeight
                title.nextElementSibling.style.height = normalHeight+"px"
            })
        })
    }
}