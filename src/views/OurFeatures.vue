<template>
    <div class="our_features">
        <div class="container">
            <p class="small_title text-center">Why Choose Us?</p>
            <h2 class="big_title text-center">Benifits of Joining Our GYM</h2>
            <div class="row">
                <div class="Benifits col-lg-6 mb-5">
                    <div class="benifits_image">
                        <img src="../assets/feature-1.jpg" alt="">
                        <span>
                            <i class="fas fa-star"></i>
                        </span>
                    </div>
                    <div class="text_Benifits">
                        <h5>Videos Instruction</h5>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                            invidunt, dolore tempor diam ipsum takima erat tempor</p>
                    </div>
                </div>
                <div class="Benifits col-lg-6 mb-5">
                    <div class="benifits_image">
                        <img src="../assets/feature-2.jpg" alt="">
                        <span>
                            <i class="fas fa-star"></i>
                        </span>
                    </div>
                    <div class="text_Benifits">
                        <h5>Free Apps & WiFi</h5>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                            invidunt, dolore tempor diam ipsum takima erat tempor</p>
                    </div>
                </div>
                <div class="Benifits col-lg-6 mb-5">
                    <div class="benifits_image">
                        <img src="../assets/feature-3.jpg" alt="">
                        <span>
                            <i class="fas fa-star"></i>
                        </span>
                    </div>
                    <div class="text_Benifits">
                        <h5>Training Calendar</h5>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                            invidunt, dolore tempor diam ipsum takima erat tempor</p>
                    </div>
                </div>
                <div class="Benifits col-lg-6 mb-5">
                    <div class="benifits_image">
                        <img src="../assets/feature-4.jpg" alt="">
                        <span>
                            <i class="fas fa-star"></i>
                        </span>
                    </div>
                    <div class="text_Benifits">
                        <h5>Community Support</h5>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                            invidunt, dolore tempor diam ipsum takima erat tempor</p>
                    </div>
                </div>
            </div>

            <div class="row Testimonial">
                <div class="Testimonial-left col-md-6"></div>
                <div class="Testimonial-right col-md-6"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "OurFeatures",
}
</script>
<style lang="scss" scoped>
@import "../scss/reset.scss";

.our_features {
    .Benifits {
        display: flex;

        @media (max-width: 551px) {
            display: block;
        }

        .benifits_image {
            width: 100%;
            position: relative;

            img {
                width: 100%;
            }

            span {
                color: #fff;
                background-color: $base_color;
                position: absolute;
                right: -15px;
                top: -15px;
                width: 4em;
                height: 4em;

                svg {
                    display: block;
                    width: 60%;
                    height: 100%;
                    margin: auto;

                }
            }
        }

        .text_Benifits {
            margin-left: 2em;

            @media (max-width: 551px) {
                margin-left: 0;
                margin-top: 1em;
            }

            h5 {
                color: #343a40;
                font-size: 1.5em;
                font-family: fantasy;
            }

            p {
                color: #666;
            }
        }
    }
}
</style>