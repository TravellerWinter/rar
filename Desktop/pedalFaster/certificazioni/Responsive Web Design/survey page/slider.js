var slider = document.getElementById("number");
slider.addEventListener("mouseup", function(){
    document.getElementById("field").textContent = slider.value;
});
