import React from "react";
import Image from "next/image"; 

const ProjectCard = ({ 
  title = "Untitled Project", 
  description = "No description available.", 
  imgUrl = "/default-image.jpg", // Set a default image path
  gitUrl, 
  previewUrl = "#" // Default to a non-breaking link
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <a href={previewUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src={imgUrl} // Ensure this is a valid path relative to the 'public' folder
          alt={title} // Use descriptive alt text for accessibility
          width={300} // Adjust width as needed
          height={200} // Adjust height as needed
          className="rounded-md"
          priority // Optional: use priority for images that are critical to page layout
        />
        <h3 className="text-xl font-bold text-white mt-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </a>
      {/* Optional: Add GitHub link if available */}
      {gitUrl && (
        <div className="mt-2">
          <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
