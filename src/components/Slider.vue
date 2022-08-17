<template>
    <div class="bxslider">
        <ul class="slider">
            <li class="slide">

                <div class="slide_content">
                    <div class="overlay"></div>
                    <img src="../assets/carousel-1.jpg" alt="">
                    <div class="slide_title">
                        <h3>Gym & Fitness Center</h3>
                        <h2>Best Gym In Town</h2>
                        <a class="btn btn-lg btn-outline-light mt-md-5" href="">Join Us Now</a>
                    </div>
                </div>
            </li>

            <li class="slide">

                <div class="slide_content">
                    <div class="overlay"></div>
                    <img src="../assets/carousel-2.jpg" alt="">
                    <div class="slide_title">
                        <h3>Gym & Fitness Center</h3>
                        <h2>Get Body In Shape</h2>
                        <a class="btn btn-lg btn-outline-light mt-md-5" href="">Join Us Now</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import "../plugins/jquery-1.11.2.min.js"
import "../plugins/jquery.bxslider.min.js"
export default {
    name: "slidebar",
}
//trigger bx slider
$(document).ready(function () {
    $('.slider').bxSlider({
        pager: false,
        auto: true,
        speed: 800,
    });
});
//bx slider postion (mid)
$('.slider').each(function () {
    $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
});

$(window).resize(function () {
    $('.slider').css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
});
</script>

<style lang="scss">
@import "../plugins/jquery.bxslider.min.css";
@import "../scss/reset.scss";

.bxslider {
    margin-bottom: 10vw;

    .slide {
        position: relative;

        .slide_content {
            position: relative;

            .overlay {
                width: 100%;
                height: 100%;
                background-color: black;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0.3;
                z-index: 1;
            }

            img {
                width: 100%;
                height: 100%;
            }

            .slide_title {
                width: 100%;
                font-family: fantasy;
                position: absolute;
                top: 28%;
                text-align: center;
                z-index: 2;

                h3 {
                    color: $base_color;
                    font-size: 3vw;
                }

                h2 {
                    color: #fff;
                    font-size: 6vw;
                }

                a {
                    border-width: 2px;
                    border-radius: 0 !important;
                    padding: 1vw 2vw;
                }
            }
        }
    }
}
</style>