import flydream from '../../images/flydream.png';
import khxmas from '../../images/karandharvey.png';
import fk from '../../images/fastkeys.png';

export const projects = [
    {
      id: 1,
      title: "fast-keys",
      brief: "A static typing speed test site developed using HTML, CSS, and JavaScript",
      desc: "A static typing speed test site developed using HTML, CSS, and JavaScript. I am currently working on the colour scheme of the website, as well as fixing some small bugs when calculating accuracy with my current algorithm.",
      image: fk,
      alt: "fast-keys Website Image",
      redir: "fast-keys",
      git: "https://github.com/ThomasDickson/fast-keys",
      live: "https://thomasdickson.github.io/fast-keys/",
      langs: [
        {
          lang: "JavaScript",
          level: "70.1%"
        },
        {
          lang: "CSS",
          level: "19.7%"
        },
        {
          lang: "HTML",
          level: "10.2%"
        }
      ]
    },
    {
      id: 2,
      title: "Kara and Harvey's Xmas Adventure",
      brief: "A 2D Adventure game created using Godot Engine and GDScript.",
      desc: "Kara and Harvey's Xmas Adventure is 2D Adventure game created as a Christmas gift for a loved one. The game was developed using the Godot Engine and the GDScript language (syntactically similar to Python). It features 2D vector physics for user and entity movement, state machines and AI for entity behaviour, as well as state-dependent sprite animations and dynamically rendered JSON character dialogue.",
      image: khxmas,
      alt: "Kara and Harvey's Xmas Adventure Image",
      redir: "kara-and-harvey-adventure",
      langs: [
        {
          lang: "GDScript",
          level: "95%"
        },
        {
          lang: "JSON",
          level: "5%"
        }
      ]
    },
    {
      id: 3,
      title: "FlyDreamAir Website",
      brief: "An interactive, full-stack website for an airline developed using ReactJS and Google's Firebase.",
      desc: "An interactive, full-stack website for an airline developed using ReactJS and Google's Firebase. Created for a university group project, the site was developed using the Extreme Programming development methodology.",
      image: flydream,
      alt: "FlyDreamAir Website Image",
      redir: "flydreamair",
      git: "https://github.com/ThomasDickson/booking-management-system",
      langs: [
        {
          lang: "JavaScript",
          level: "91.9%"
        },
        {
          lang: "HTML",
          level: "4.5%"
        },
        {
          lang: "CSS",
          level: "3.6%"
        }
      ]
    },
  ]