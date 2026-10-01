const wireBtn = document.getElementById("wireBtn");
const body = document.body;

wireBtn.addEventListener("click", () => {
    wireBtn.classList.add('pulled');
    setTimeout(() =>{
        wireBtn.classList.remove('pulled');
    },200);
    body.classList.toggle('light-on');
});
