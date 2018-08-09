function fadeleft() {
    document.getElementById("register").classList.add("animate")
    document.getElementById("register").classList.remove("anima1")

    document.getElementById("login").classList.add("animate1");
    document.getElementById("login").classList.remove("anima");
}

function faderight(){
    document.getElementById("login").classList.add("anima")
    document.getElementById("login").classList.remove("animate1")

    document.getElementById("register").classList.add("anima1");
    document.getElementById("register").classList.remove("animate");
}
