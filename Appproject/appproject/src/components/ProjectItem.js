import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeProject } from "../store/reducers/ProjectListReducer";

function ProjectList2({project}) {
  const dispatch = useDispatch();

  return (
    <div className="p-ıtem">
      {/* <img src={project.image} alt="" /> */}
      <img src={`projectPhotos/${project.image}`} alt="1" />
      <h2 className="p-title">{project.title}</h2>
      <h4 className="p-title">Proje Açıklaması</h4>
      <p>{project.description}</p>
      <h4 className="p-title">Proje Fiyatı</h4>
      <p>{project.price}</p>
      <div>
        <button
          className="p-delete"
          onClick={() => {
            dispatch(removeProject(project.id));
          }}
        >
          Sil
        </button>
        <Link to={`/projectupdate3/${project.id}`}>
          <button className="p-edit">Güncelle</button>
        </Link>
        <Link target="_blank" to={`/project/${project.id}`}>
          <button className="p-more">More Info</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectList2;

// import { useState } from "react";
// import ProjectCreate from "./ProjectCreate";
// import { useContext } from "react";
// import ProjectsContext from "../context/project";
// import { Link } from "react-router-dom";

// function ProjectItem({ project }) {
//   const { deleteProjectById, editProjectById } = useContext(ProjectsContext);

//   const [ınputEdit, setInputEdit] = useState(false);

//   const handleDeleteClick = () => {
//     deleteProjectById(project.id);
//   };

//   const handleEditClick = () => {
//     setInputEdit(!ınputEdit);
//   };

//   const handleSubmit = (
//     id,
//     updatedImage,
//     updatedtitle,
//     updatedDesc,
//     updatedPrice
//   ) => {
//     setInputEdit(false);
//     editProjectById(id, updatedImage, updatedtitle, updatedDesc, updatedPrice);
//   };

//   return (
//     <div className="p-ıtem">
//       {ınputEdit ? (
//         <ProjectCreate
//           project={project}
//           projectFormUpdate={true}
//           onUpdate={handleSubmit}
//         />
//       ) : (
//         <div>
//           {/* <img src={project.image} alt="" /> */}
//           <img src={`projectPhotos/${project.image}`} alt="1" />
//           <h2 className="p-title">{project.title}</h2>
//           <h4 className="p-title">Proje Açıklaması</h4>
//           <p>{project.projectDesc}</p>
//           <h4 className="p-title">Proje Fiyatı</h4>
//           <p>{project.projectPrice}</p>
//           <div>
//             <button className="p-delete" onClick={handleDeleteClick}>
//               Sil
//             </button>
//             <button className="p-edit" onClick={handleEditClick}>
//               Güncelle
//             </button>
//             <Link target="_blank" to={`/project/${project.id}`}>
//               <button className="p-more">More Info</button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProjectItem;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {
//   removeProject,
// } from "../store/reducers/ProjectListReducer";

// function ProjectList2({ project }) {
//   const dispatch = useDispatch();

//   return (
//     <div className="p-ıtem">
//       {/* <img src={project.image} alt="" /> */}
//       <img src={`projectPhotos/${project.image}`} alt="1" />
//       <h2 className="p-title">{project.title}</h2>
//       <h4 className="p-title">Proje Açıklaması</h4>
//       <p>{project.description}</p>
//       <h4 className="p-title">Proje Fiyatı</h4>
//       <p>{project.price}</p>
//       <div>
//         <button
//           className="p-delete"
//           onClick={() => {
//             dispatch(removeProject(project.id));
//           }}
//         >
//           Sil
//         </button>
//         <Link target="_blank" to={`/projectupdate3/${project.id}`}>
//           <button className="p-edit">Güncelle</button>
//         </Link>

//         <Link target="_blank" to={`/project/${project.id}`}>
//           <button className="p-more">More Info</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default ProjectList2;
