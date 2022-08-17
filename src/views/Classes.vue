<template>
    <div class="classes">
        <div class="container">
            <div class="row">
                <div class=" Building Body_Building col-lg-6 p-0">
                    <div style="text-align: right;" class="contain">
                        <h2>Body Building</h2>
                        <p>Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                            sit
                            eos
                            sea
                            sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..</p>
                        <a class="btn btn-md btn-outline-light mt-md-5 py-md-2 px-md-4" href="">Join Now</a>
                    </div>
                </div>
                <div class="Building Muscle_Building col-lg-6 p-0">
                    <div class="contain">
                        <h2>Muscle Building</h2>
                        <p>Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                            sit
                            eos
                            sea
                            sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..</p>
                        <a class="btn btn-md btn-outline-light mt-md-5 py-md-2 px-md-4" href="">Join Now</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="Timetable">
                    <p class="small_title text-center">Class Timetable</p>
                    <h2 class="big_title text-center">Working Hours and Class Time</h2>
                    <ul class="nav nav-pills justify-content-center mb-4">
                        <li class="nav-item mx-2">
                            <a href="#All_Classes" class="nav-link" @click="classes = 'All Classes'"
                                :class="classes == 'All Classes' ? 'active' : ''">All Classes</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a href="#Cardio" class="nav-link" @click="classes = 'Cardio'"
                                :class="classes == 'Cardio' ? 'active' : ''">Cardio</a>

                        </li>
                        <li class="nav-item mx-2">
                            <a href="#Crossfit" class="nav-link" @click="classes = 'Crossfit'"
                                :class="classes == 'Crossfit' ? 'active' : ''">Crossfit</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a href="#Powerlifting" class="nav-link" @click="classes = 'Powerlifting'"
                                :class="classes == 'Powerlifting' ? 'active' : ''">Powerlifting </a>
                        </li>
                    </ul>
                    <div class="training_table">
                        <table class="table table-bordered table-lg m-0">
                            <thead class="bg-dark text-white text-center">
                                <tr>
                                    <th>Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr>
                                    <th class="bg-dark text-white align-middle">6.00am - 8.00am</th>
                                    <td :class="classes == 'Cardio' ? 'bg-base_color text-white' : ''">
                                        <h5>Cardio</h5>John Deo
                                    </td>
                                    <td></td>
                                    <td :class="classes == 'Crossfit' ? 'bg-base_color text-white' : ''">
                                        <h5>Crossfit</h5>Adam Phillips
                                    </td>
                                    <td></td>
                                    <td :class="classes == 'Powerlifting' ? 'bg-base_color text-white' : ''">
                                        <h5>Power Lifting</h5>James Alien
                                    </td>
                                    <td></td>
                                    <td :class="classes == 'Cardio' ? 'bg-base_color text-white' : ''">
                                        <h5>Cardio</h5>John Deo
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-dark text-white align-middle">10.00am - 12.00am</th>
                                    <td></td>
                                    <td :class="classes == 'Powerlifting' ? 'bg-base_color text-white' : ''">
                                        <h5>Power Lifting</h5>James Alien
                                    </td>
                                    <td></td>
                                    <td :class="classes == 'Cardio' ? 'bg-base_color text-white' : ''">
                                        <h5>Cardio</h5>John Deo
                                    </td>
                                    <td></td>
                                    <td :class="classes == 'Crossfit' ? 'bg-base_color text-white' : ''">
                                        <h5>Crossfit</h5>Adam Phillips
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th class="bg-dark text-white align-middle">5.00pm - 7.00pm</th>
                                    <td :class="classes == 'Crossfit' ? 'bg-base_color text-white' : ''">
                                        <h5>Crossfit</h5>Adam Phillips
                                    </td>
                                    <td></td>
                                    <td :class="classes == 'Powerlifting' ? 'bg-base_color text-white' : ''">
                                        <h5>Power Lifting</h5>James Alien
                                    </td>
                                    <td></td>
                                    <td :class="classes == 'Cardio' ? 'bg-base_color text-white' : ''">
                                        <h5>Cardio</h5>John Deo
                                    </td>
                                    <td></td>
                                    <td :class="classes == 'Crossfit' ? 'bg-base_color text-white' : ''">
                                        <h5>Crossfit</h5>Adam Phillips
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-dark text-white align-middle">7.00pm - 9.00pm</th>
                                    <td></td>
                                    <td :class="classes == 'Cardio' ? 'bg-base_color text-white' : ''">
                                        <h5>Cardio</h5>John Deo
                                    </td>
                                    <td></td>
                                    <td :class="classes == 'Crossfit' ? 'bg-base_color text-white' : ''">
                                        <h5>Crossfit</h5>Adam Phillips
                                    </td>
                                    <td></td>
                                    <td :class="classes == 'Powerlifting' ? 'bg-base_color text-white' : ''">
                                        <h5>Power Lifting</h5>James Alien
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="BMI">
            <div class="container">
                <div class="row px-3 align-items-center">
                    <div class="bmi_left col-md-6" style="padding: 0; margin:0;">
                        <div class="small_title">Body Mass Index</div>
                        <div class="big_title" style="margin: 0; color: #fff;">Whate is BMI?</div>
                        <p>Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed.
                            Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam</p>
                    </div>
                    <div class="bmi_right col-md-6" style="padding: 0; margin:0;">
                        <h2>Calculate your BMI</h2>

                        <form class="row" action="">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" name="weight" id="" placeholder="Weight (KG)">
                                </div>
                                <div class="form-group">
                                    <input type="text" name="height" id="" placeholder="Height (CM)">
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" name="age" id="" placeholder="Age">
                                </div>
                                <div class="form-group">
                                    <select name="gender" id="">
                                        <option value="gender">Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-sm-12">
                                <div>
                                    <input type="submit" value="Calculate Now">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Classes",
    data: function () {
        return {
            classes: "All Classes",
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../scss/reset.scss";

.classes {
    @media (max-width: 991px) {
        transform: translateY(0);
    }

    transform: translateY(-20%);

    .Building {

        .contain {
            color: #fff;
            padding: 4vw 3vw;

            h2 {
                font-family: fantasy;
                font-size: 3.5em;
                margin-bottom: 10px;

                @media (max-width: 768px) {
                    font-size: 2em;
                }

            }

            p {
                font-size: 18px;

                @media (max-width: 768px) {
                    font-size: 1em;
                }
            }

            a {
                border-width: 2px;
                border-radius: 0 !important;
            }
        }

        &.Body_Building {
            background-color: $base_color;
        }

        &.Muscle_Building {
            background-color: #111;
        }
    }

    .Timetable {
        margin-bottom: 10vw;

        ul {
            li {
                a {
                    color: $base_color;
                    border-radius: 0;
                    text-decoration: none;

                    &.active {
                        background-color: $base_color !important;
                        color: #fff;
                    }

                    &:hover {
                        background-color: $base_color;
                        color: #fff;
                    }

                    &:focus {
                        outline: 0 !important;
                    }
                }
            }
        }

        .training_table {
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;

            table {
                thead {
                    border-width: 2px;
                }

                th,
                td {
                    padding: 1.2vw 0.7vw;
                }
            }
        }
    }

    .BMI {
        position: relative;

        &::after {
            position: absolute;
            content: "";
            width: 50%;
            height: 100%;
            top: 0;
            left: 0;
            background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../assets/carousel-1.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            z-index: -1;

            @media (max-width: 768px) {
                display: none;
            }
        }

        .bmi_left {
            @media (max-width: 768px) {
                display: none;
            }

            p {
                color: #fff;
            }
        }

        .bmi_right {
            background-color: #111;
            color: #fff;

            h2 {
                margin-top: 6vw;
                margin-left: 35px; //margin-left + padding-left(col-sm-6)
                margin-bottom: 1vw;
            }

            form {
                margin: 25px;

                input,
                select {
                    width: 100%;
                    height: 100%;
                    padding: 18px 18px;
                    border: 1px solid #fff;
                    color: #6c757d;
                    background-color: #343a40 !important;
                    margin-bottom: 20px;

                    &:focus {
                        outline: 0;
                    }
                }

                input[type=submit] {
                    color: #fff !important;
                    width: 100%;
                }
            }
        }
    }
}
</style>