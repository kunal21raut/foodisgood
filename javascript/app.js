
$(document).ready(function() {
        $('.food-slider').slick({
                autoplay:true,
                slidesToShow:3,
                slidesToScroll:1,
                prevArrow:".prev-btn",
                nextArrow:".next-btn",
            
        });
});
// countdown timer

var countDate = new Date('Jan 1, 2021 00:00:00').getTime();

    function newYear(){
        var now = new Date().getTime();

        gap = countDate-now;

        var second = 1000;
        var minute = second*60;
        var hour = minute*60;
        var day = hour*24;

        var d =Math.floor(gap / (day));
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) / (minute));
        var s = Math.floor((gap % (minute)) / (second));


        document.getElementById('days').innerHTML= d;
        document.getElementById('hours').innerHTML = h;

        document.getElementById('minutes').innerHTML = m;
        document.getElementById('seconds').innerHTML = s;


    }

    setInterval(function(){
        newYear();
    },1000)
   
// var modalLoginButton = document.querySelector('.modalLoginButton');
// var modalBg = document.querySelector('.modal-bg');

// modalLoginButton.addEventListener('click',function(){
//         modalBg.classList.add('.modal-bg:active');
// })

function switchTheme(){
    document.body.classList.toggle("dark-mode");
}