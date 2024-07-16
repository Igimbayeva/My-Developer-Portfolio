import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";

const projectData = [
    {
        name: "Bootcamper Tech Blog (MVC)",
        github_url: "https://github.com/Igimbayeva/CU-FS-Bootcamper-Tech-Blog",
        deployed_url: "https://cu-fs-bootcamper-tech-blog.onrender.com",
        img_url: "/blog.png"
    },
    {
        name: "NodeHR-Manager",
        github_url: "https://github.com/Igimbayeva/NodeHR-Manager",
        video_url: "https://drive.google.com/file/d/1sCLNN5CTOqBW9rh7qk706vJ_oEBhi9Ba/view",
        img_url: "/HR.png"
    },
    {
        name: "SocialExpress-API (NoSQL, Express, Mongoose)",
        github_url: "https://github.com/Igimbayeva/SocialExpress-API",
        video_url: "https://drive.google.com/file/d/1njLpgNWG3Q0zP6UoBkTVh2Fjt3a_pqXD/view",
        img_url: "social api.jpeg"
    },
    {
        name: "GRAPHQL-BOOKSHELF (MERN)",
        github_url: "https://github.com/Igimbayeva/GraphQL-Bookshelf",
        deployed_url: "https://graphql-bookshelf.onrender.com",
        img_url: "/booksearch.png"
    }, 
    {
        name: "React2Give (React, Mern, Stack SPA)",
        github_url: "https://github.com/Igimbayeva/React2Give",
        deployed_url: "www.https://react2give.onrender.com",
        img_url: "/react2give.png"
    },
    {
        name: "Weather Forecast Dashboard ",
        github_url: "https://github.com/Igimbayeva/Weather-Forecast-Dashboard",
        deployed_url: "https://igimbayeva.github.io/Weather-Forecast-Dashboard",
        img_url: "/weather.png"
    }
]

export const Projects = () => {
    return (
        <>
            <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div class="text-center pb-12">
                    <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                        My Projects - Explore My Work
                    </h1>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {
                    projectData.map(project => {
                        return (
                            <ProjectCard project={project}/>
                        )
                    })
                   }
                    
                </div>
            </section>
        </>
    )
}