import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    ucsd,
    moviefinder,
    calendar,
    threejs,
    gametourney
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Bootcamp Graduate",
      company_name: "UCSD Extended Studies",
      icon: ucsd,
      iconBg: "#383E56",
      date: "June 2023 - November 2023",
      points: [
        "Developing and maintaining web applications using JavaScript, Node, SQL, MongoDB, and React.",
        "Create full-stack single-page web applications using RESTful API routes and AJAX methods.",
        "Implement structured and unstructured databases to convert static websites into dynamic websites that persist data.",
        "Demonstrate strong teamwork and project management skills as a collaborator and independent contributor during the development cycle of complex projects."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    }
  ];
  
  const projects = [
    {
      name: "Movie Finder",
      description:
        "Movie Finder allows users to find a movie that they want to watch based off of a keyword, the movie’s language, what streaming service they have access to, and the genre of the movie. Upon hitting the submit button, users will be presented with up to 4 different options that fit their desired criteria!",
      tags: [
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: moviefinder,
      source_code_link: "https://github.com/matthkang/Movie-Finder/",
      deployment_link: "https://matthkang.github.io/Movie-Finder/"
    },
    {
      name: "Calendar",
      description:
      "A time management planner that can perform various operations such as creating events, retrieving event details, updating event information, and managing calendars.",
      tags: [
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "handlebars",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: calendar,
      source_code_link: "https://github.com/Pixls112/Time-Management-Planner",
      deployment_link: "https://protected-taiga-58244-3710fb729053.herokuapp.com/"
    },
    {
      name: "Game Tourney Hub",
      description:
      "Create a competitive environment to connect players around the world, allowing them to host and join video game tournaments.",
      tags: [
        {
          name: "react",
          color: "orange-text-gradient",
        },
        {
          name: "graphQL",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "white-text-gradient",
        },
      ],
      image: gametourney,
      source_code_link: "https://github.com/matthkang/Gaming-Tournament-Hub",
      deployment_link: "https://game-tourney-hub-8015c3047dd6.herokuapp.com/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };