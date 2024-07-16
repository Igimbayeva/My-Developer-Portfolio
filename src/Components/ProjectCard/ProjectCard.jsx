import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
      <div className="mb-8">
        {/* Added border class and adjusted image dimensions */}
        <img
          className="object-center object-cover rounded-full h-60 w-100 border-5 border-red-600"
          src={project.img_url}
          alt="project thumbnail"
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-gray-750 font-bold mb-2">{project.name}</p>
        <a href={project.github_url} target="_blank">
          <p className="text-base text-red-600 font-normal">GitHub URL</p>
        </a>
        {project.deployed_url ? (
          <a href={project.deployed_url} target="_blank">
            <p className="text-base text-red-600 font-normal">Deployed URL</p>
          </a>
        ) : null}
        {project.video_url ? (
          <a href={project.video_url} target="_blank">
            <p className="text-base text-red-600 font-normal">
              Video Walkthrough URL
            </p>
          </a>
        ) : null}
      </div>
    </div>
  );
};
