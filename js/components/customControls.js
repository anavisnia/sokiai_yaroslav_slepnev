const moviecontainer = document.getElementById("customcontrols"),
    movie = moviecontainer.querySelector("video"),
    controls = moviecontainer.querySelector("figcaption"),
    playpause = controls.querySelector("a");
movie.removeAttribute("controls");
controls.style.display = "block";

function customControls() {
    playpause.addEventListener("click", function (e) {
        e.preventDefault()
        if (movie.paused) {
            movie.play();
            playpause.innerHTML = "◼";
        } else {
            movie.pause();
            playpause.innerHTML = "►";
        }
    })
}

export { customControls }