import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProject } from "../store/reducers/ProjectListReducer";
import { useSelector } from "react-redux";

function ProjectUpdate2() {
  const dispatch = useDispatch();

  const { image, title, description, price } = useSelector((state) => {
    return {
      //   image: state.projectform.image,
      title: state.projectlist.title,
      description: state.projectform.description,
      price: state.projectform.price,
    };
  });

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProject({ image, title, description, price }));
  };
// debugger;
  return (
    <div className="p-update p-ıtem">
      <h3>Lütfen Projeyi Güncelleyiniz</h3>
      <form className="p-form" onSubmit={handleUpdateSubmit}>
        {/* <input className="p-input" type="file" value={updatedImage} onChange={e=>setImage(e.target.value)}></input> */}
        <label className="p-label">Proje Adı</label>
        <input
          className="p-input"
            // value={updatedTitle}
          value={title}
        ></input>
        <label className="p-label">Açıklaması</label>
        <textarea
          className="p-input"
          rows={5}
          //   value={updatedDescription}
        />
        <label className="p-label">Fiyatı</label>
        <input
          className="p-input"
          //   value={updatedPrice}
        />
        <Link to="/projectlist">
          <button className="p-button p-update-button">
            Değişiklikleri Kaydet
          </button>
        </Link>
      </form>
    </div>
  );
}

export default ProjectUpdate2;
