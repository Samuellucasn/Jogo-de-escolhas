function finalNovo() {
    const div = document.querySelectorAll("#div")

    console.log

    document.addEventListener('click', function(e) {

        const el = e.target

        if (el.classList.contains("final")) {
            return div.classList.add("final-novo")
        }
    })
}