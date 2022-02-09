const home = document.getElementById("home")
const projects = document.getElementById("projects")
const about = document.getElementById("about")

// Projects hover

projects.addEventListener("mouseover", ()=>{
    home.style.backgroundImage = "url(images/home-2.png)"
})
projects.addEventListener("mouseout", ()=>{
    home.style.backgroundImage = "url(images/home-1.png)"
})

// About hover

about.addEventListener("mouseover", ()=>{
    home.style.backgroundImage = "url(images/home-3.png)"
})
about.addEventListener("mouseout", ()=>{
    home.style.backgroundImage = "url(images/home-1.png)"
})