function carter() {
    let today = new Date(Date.now());
    let hospice = new Date("February 18, 2023");
    let count = ((today - hospice) / 1000 / 60 / 60 / 24).toFixed(0);
    let target = document.querySelector("#count");
    target.innerHTML = count;
}

carter();