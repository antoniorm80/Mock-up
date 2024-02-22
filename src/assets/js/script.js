particlesJS(
  {
    "particles": {
      "number": {
        "value": 120,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#deeb17"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);

// particlesJS(
//   {
//     "fpsLimit": 60,
//     "particles": {
//       "number": {
//         "value": 50
//       },
//       "color": {
//         "value": [
//           "#5bc0eb",
//           "#fde74c",
//           "#9bc53d",
//           "#e55934",
//           "#fa7921"
//         ]
//       },
//       "shape": {
//         "type": "circle"
//       },
//       "opacity": {
//         "value": 0.5
//       },
//       "size": {
//         "value": 400,
//         "random": {
//           "enable": true,
//           "minimumValue": 200
//         }
//       },
//       "move": {
//         "enable": true,
//         "speed": 10,
//         "direction": "top",
//         "outMode": "destroy"
//       }
//     },
//     "interactivity": {
//       "detectsOn": "canvas",
//       "events": {
//         "resize": true
//       }
//     },
//     "detectRetina": true,
//     "background": {
//       "color": "#fff",
//       "image": "",
//       "position": "50% 50%",
//       "repeat": "no-repeat",
//       "size": "cover"
//     },
//     "emitters": {
//       "direction": "top",
//       "position": {
//         "x": 50,
//         "y": 120
//       },
//       "rate": {
//         "delay": 0.2,
//         "quantity": 2
//       },
//       "size": {
//         "width": 100,
//         "height": 0
//       }
//     }
//   }
// );