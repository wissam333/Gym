<template>
    <div class="appnavbar">
        <!--brand-->
        <a class="brand" href="#">
            GYMNAST
        </a>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <!--toggler button-->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!--navbar elements-->
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="width: 100%;justify-content: flex-end;">

                        <li class="nav-item active">
                            <a class="nav-link link" href="#home" @click="active = 'Home'"
                                :class="active == 'Home' ? 'active' : ''">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link link" href="#nav3" @click="active = 'About Us'"
                                :class="active == 'About Us' ? 'active' : ''">About Us</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link link" href="#nav3" @click="active = 'Our Features'"
                                :class="active == 'Our Features' ? 'active' : ''">Our Features</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link link" href="#nav3" @click="active = 'Classes'"
                                :class="active == 'Classes' ? 'active' : ''">Classes</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false" @click="active = 'Pages'"
                                :class="active == 'Pages' ? 'active' : ''">
                                Pages
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#Grid">Blog Grid</a></li>
                                <li><a class="dropdown-item" href="#Detail">Blog Detail</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link link" href="#nav3" @click="active = 'Contact'"
                                :class="active == 'Contact' ? 'active' : ''">Contact</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "AppNavbar",
    data: function () {
        return {
            active: "Home",
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../scss/reset.scss";

.appnavbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 991px) {
        background-color: #111;
    }

    .brand {
        color: #fff;
        font-size: 5vw;
        font-weight: bold;
        font-family: monospace;
        text-decoration: none;
        margin: 20px;
    }

    .navbar {
        background-color: #111;
        font-size: 16px;
        font-weight: bold;
        font-family: sans-serif;
        padding: 30px 0px;
        margin: 20px;

        @media (max-width: 991px) {
            padding: 0;
            margin: 0;
        }

        ul {
            li {
                .link {
                    padding: 0px 20px;
                    color: #fdfdfd;

                    &:hover {
                        color: $base_color;
                    }

                    &.active {
                        color: $base_color;
                    }

                    &:focus {
                        outline: 0 !important;
                    }
                }

                .dropdown-menu {
                    li {
                        a {
                            &:hover {
                                color: $base_color;
                            }

                            &:focus {
                                outline: 0 !important;
                            }
                        }
                    }
                }
            }
        }

    }
}
</style>