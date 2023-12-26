import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  // changeImage,
  changeTitle,
  changeDescription,
  changePrice,
} from "../store/reducers/ProjectFormReducer";
import { addProject } from "../store/reducers/ProjectListReducer";

function ProjectEkleme() {
  const dispatch = useDispatch();
  const { image, title, description, price } = useSelector((state) => {
    return {
      //   image: state.projectform.image,
      title: state.projectform.title,
      description: state.projectform.description,
      price: state.projectform.price,
    };
  });
  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProject({ image, title, description, price }));
  };
// debugger;
  return (
    <div className="p-create">
      <h3>Lütfen Proje Ekleyiniz</h3>
      <form className="p-form" onSubmit={handleSubmit}>
        {/* <input
          className="p-input"
          onChange={(event) => {
            dispatch(changeImage(event.target.value));
          }}
          type="file"
          value={image2}
        ></input> */}
        <label className="p-label">Proje Adı</label>
        <input
          className="p-input"
          onChange={(event) => {
            dispatch(changeTitle(event.target.value));
          }}
          value={title}
        ></input>
        <label className="p-label">Açıklaması</label>
        <textarea
          className="p-input"
          rows={5}
          onChange={(event) => {
            dispatch(changeDescription(event.target.value));
          }}
          value={description}
        />
        <label className="p-label">Fiyatı</label>
        <input
          className="p-input"
          onChange={(event) => {
            dispatch(changePrice(event.target.value));
          }}
          value={price}
        />
        <button className="p-button">Ekle</button>
      </form>
    </div>
  );
}

export default ProjectEkleme;

// <div className="p-create">
//   <h3>Lütfen Proje Ekleyiniz</h3>
//   <form className="p-form" onSubmit={handleSubmit}>
//     <input
//       className="p-input"
//       onChange={(event) => {
//         dispatch(changeImage(event.target.value));
//       }}
//       type="file"
//       value={image}
//     ></input>
//     <label className="p-label">Proje Adı</label>
//     <input
//       className="p-input"
//       onChange={(event) => {
//         dispatch(changeTitle(event.target.value));
//       }}
//       value={title}
//     ></input>
//     <label className="p-label">Açıklaması</label>
//     <textarea
//       className="p-input"
//       rows={5}
//       onChange={(event) => {
//         dispatch(changeDescription(event.target.value));
//       }}
//       value={description}
//     />
//     <label className="p-label">Fiyatı</label>
//     <input
//       className="p-input"
//       onChange={(event) => {
//         dispatch(changePrice(event.target.value));
//       }}
//       value={price}
//     />
//     <button className="p-button">Ekle</button>
//   </form>
// </div>;

// <div className="p-create">
//   <h4>Lütfen Proje Ekleyiniz</h4>
//   <form className="p-form" onSubmit={handleSubmit}>
//     <div>
//       <div>
//         <label className="p-label">Resim Seç</label>
//         {/* <input
//           className="p-input"
//           onChange={(event) => {
//             dispatch(changeImage(event.target.value));
//           }}
//           type="file"
//           value={image}
//         /> */}
//       </div>
//       <div>
//         <label className="p-label">Proje Adı</label>
//         <input
//           className="p-input"
//           onChange={(event) => {
//             dispatch(changeTitle(event.target.value));
//           }}
//           value={title}
//         />
//       </div>
//       <div>
//         <label className="p-label">Açıklaması</label>
//         <textarea
//           className="p-input"
//           rows={5}
//           onChange={(event) => {
//             dispatch(changeDescription(event.target.value));
//           }}
//           value={description}
//         />
//       </div>
//       <div>
//         <label className="p-label"> Fiyatı</label>
//         <input
//           className="p-input"
//           onChange={(event) => {
//             dispatch(changePrice(event.target.value));
//           }}
//           value={price}
//         />
//       </div>
//     </div>
//     <div>
//       <button className="p-button">Ekle</button>
//     </div>
//   </form>
// </div>
