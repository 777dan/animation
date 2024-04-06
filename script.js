$(document).ready(() => {
    let left = 200;
    let state = true;
    $("#animate").click(function () {
        left *= -1;
        $("#anim-img1").animate({ left: `${left}px` });

        if (state) {
            $("body").animate({
                backgroundColor: "rgb(5, 214, 214)"
            }, 1000);
        } else {
            $("body").animate({
                backgroundColor: "rgb(224, 214, 214)"
            }, 1000);
        }
        state = !state;
    });
});