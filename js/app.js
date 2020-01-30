const gallery = document.querySelectorAll("li");
const body = document.body;

gallery.forEach(function(e) {
    e.addEventListener("click", function() {

        const div = document.createElement("div");
        div.classList.add("fullScreen");
        body.appendChild(div);

        const img = this.querySelector("img").cloneNode(true);
        div.appendChild(img);

        // BUTTON:
        // const button = document.createElement("button");
        // button.classList.add("close");
        // button.innerText = "Close";
        // div.appendChild(button);

        div.addEventListener("click", function() {
            body.removeChild(div);
        })
    })
}) 