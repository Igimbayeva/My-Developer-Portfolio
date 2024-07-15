import React from "react";


export const ProjectCard = ({project}) => {
    return (
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-full h-100 w-100" src={project.img_url} alt="photo" />
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">{project.name}</p>
             <a href={project.github_url}><p class="text-base text-gray-400 font-normal">GitHub URL</p></a> 
             {
                project.deployed_url ? 
                (<a href={project.deployed_url}><p class="text-base text-gray-400 font-normal">Deployed URL</p></a> )
                : null
             }

            {
                project.video_url ? 
                ( <a href={project.video_url}><p class="text-base text-gray-400 font-normal">Video Walkthrough URL</p></a>  )
                : null
             }
            
            </div>
        </div>
    )
}