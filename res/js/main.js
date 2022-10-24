const boxes = document.getElementsByClassName("box");
console.log(boxes);
[...boxes].forEach((box) => {
    box.onclick = () => {
        document.body.style.backgroundColor = box.dataset.color;
    box.innerText++;
    };  
});