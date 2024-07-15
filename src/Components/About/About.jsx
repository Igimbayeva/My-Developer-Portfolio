import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <>
      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img src="/me.jpg" alt="image" loading="lazy" width="" height=""/>
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Passionate Web Developer</h2>
              <p class="mt-6 text-gray-600">
              My name is Dinara, and I am a passionate web developer dedicated to creating seamless and engaging user experiences.</p>
              <p class="mt-4 text-gray-600"> With a strong foundation in modern web technologies, I thrive on bringing creative ideas to life through clean, efficient, and well-documented code. Software engineering has been my dream career, and my journey in web development has been fueled by a deep curiosity and a commitment to continuous learning, allowing me to stay at the forefront of industry trends and best practices. I possess strong skills in Node, Express, JavaScript, SQL, NoSQL, ORM, MVC, React, MERN and STATE management. Whether I'm developing dynamic single-page applications or responsive websites, I take pride in crafting solutions that not only meet client needs but also delight users.</p>
              <p class="mt-4 text-gray-600"> My enthusiasm for coding and problem-solving drives me to constantly push the boundaries of what's possible, making me a valuable asset to any development team.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};