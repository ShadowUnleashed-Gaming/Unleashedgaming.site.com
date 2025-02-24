function saveChanges() {
    let title = document.getElementById("site-title").innerText;
    let subtitle = document.querySelector(".hero h2").innerText;
    let paragraph = document.querySelector(".hero p").innerText;

    localStorage.setItem("title", title);
    localStorage.setItem("subtitle", subtitle);
    localStorage.setItem("paragraph", paragraph);

    alert("Changes Saved!");
}

window.onload = function() {
    if (localStorage.getItem("title")) {
        document.getElementById("site-title").innerText = localStorage.getItem("title");
        document.querySelector(".hero h2").innerText = localStorage.getItem("subtitle");
        document.querySelector(".hero p").innerText = localStorage.getItem("paragraph");
    }
};