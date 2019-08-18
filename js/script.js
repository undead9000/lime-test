var deg = 0;
var weel = document.getElementById("weel");
var popup = document.querySelectorAll('#popup')[0];
var output = document.querySelectorAll('#popup__result')[0];
var on_weel = false;

function wheel(){
    if(!on_weel) {
        on_weel = true;
        popup.classList.remove("active");
        var random = getRandom();
        var result = Math.ceil((random % 360) / 60);
        var id = setInterval(rotate, 5);

        function rotate() {
            weel.style.WebkitTransform = "rotate(" + deg + "deg)";
            deg = (deg === random) ? 0 : deg + 1;
            if (deg === 0) {
                clearInterval(id);
                output.innerHTML = result;
                popup.classList.add("active");
                on_weel = false;
            }
        }

        function getRandom() {
            return Math.floor(3.5 * Math.random() * 360);
        }
    }
}