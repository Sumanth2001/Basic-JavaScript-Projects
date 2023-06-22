
var dec = document.querySelector("#decrease");
var inc = document.querySelector("#increase");
var res = document.querySelector("#reset");
var curr = 0;
var current = document.querySelector(".current");
dec.addEventListener('click', function () {
    curr--;
    current.innerHTML = curr;
});

inc.addEventListener('click', function () {
    curr++;
    current.innerHTML = curr;
});

res.addEventListener('click', function () {
    curr = 0;
    current.innerHTML = curr;
});
