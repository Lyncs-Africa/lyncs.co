import { countries } from "./countries.js";

export function particles() {
    window.particlesJS("particles-js", {
        particles: {
            number: {
                value: 30,
                density: {
                    enable: true,
                    value_area: 400,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#059dff",
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: "img/github.svg",
                    width: 50,
                    height: 50,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 80,
                color: "#ffffff",
                opacity: 0.3,
                width: 1,
            },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    });
}

export function numberWithCommas(number) {
    if (!number) return
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function flagCode(code) {
    const country = countries.find(country => country.idd.suffixes.includes(code.toString()))
    return (country?.flags?.png)
}

export function splitName(name) {
    let split = name.split(" ");
    let firstname = split[0];
    let lastname = split[1]
    return firstname.concat(" ", lastname)
}
export function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
}

