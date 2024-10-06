"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js

const projectsData = [
  {
    id: 1,
    title: "Weather App",
    description: "The Weather App is a user-friendly web application that provides real-time weather information for locations worldwide. Built using React, this app allows users to effortlessly check current weather",
    image: "/images/w.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/muhammadali0313/React-weather-app",
    previewUrl: "https://react-weather-app-mu-umber.vercel.app/", // Update to actual URL
  },
  {
    id: 2,
    title: "Bloging App",
    description: " The Blog Website is a dynamic platform that allows users to read, write, and share articles on various topics. Built with React, this application provides an intuitive and engaging user experience, making it easy for both authors ",
    image: "/images/bb.png" ,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/muhammadali0313/React-bolging-App-Final",
    previewUrl: "https://react-bolging-app-final-iarh.vercel.app/", // Update to actual URL
  },
  {
    id: 3,
    title: "Quiz App",
    description: "Overview: The Quiz App is an interactive web application designed to test users' knowledge across a variety of subjects through engaging quizzes. Built using React, this app offers a seamless user experience,",
    image: "/images/quiz.png" ,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/muhammadali0313/React-Quiz-App",
    previewUrl: "https://react-quiz-ap.vercel.app/", // Update to actual URL
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <Link href={project.previewUrl} passHref>
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
