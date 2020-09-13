
window.addEventListener('scroll', function (e) {
    document.querySelectorAll(".box-msg").forEach(function (event, i) {
        let top = window.pageYOffset + window.innerHeight;
        if (top > document.querySelectorAll(".box-msg")[i].offsetTop) {
            document.querySelectorAll(".box-msg")[i].classList.add("animate");
        }
    });
    if (window.scrollY > 50) {
        document.querySelector(".sec").style.background = "#fff";
        document.querySelector(".sec").style.boxShadow = "0 0 5px rgba(0,0,0,0.3)";
    } else {
        document.querySelector(".sec").style.background = "transparent";
        document.querySelector(".sec").style.boxShadow = "unset";
    }
});
document.querySelector(".bar").addEventListener("click",function(){
    document.querySelector(".bar").classList.toggle("toggle");
    document.querySelector("ul").classList.toggle("toggle");
});
