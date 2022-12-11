import React, { useState } from "react";

const AddList = ({ arts, setarts}) => {
    const [addListForm, setAddListForm] = useState({
      id: 0,
      title: "",
      imageUrl: "",
      genre: "",
      publisher: "",
      rating: 0
    });

    const handleChange = (e) => {
        setAddListForm({
          ...addListForm,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        fetch(`http://localhost:8000/arts`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addListForm),
        })
          .then((res) => res.json())
          .then((data) => {
            const newData = [...arts, data];
            setarts(newData);
            console.log(newData)
          });
        e.target.reset();
      };

      return (
        <div className="container">
          <h2 className="mt-5 text-center"><b>Contribute to the gallery</b></h2>
          <p className="mb-2 text-center">
          If you have an interesting art that you wish to add to the gallery, <br></br>
           feel free  to fill in the necessary details in the form.
          </p>
          <div className="row d-flex justify-content-center mt-4 mb-3">
              <div className="col-md-4">
                <form onSubmit={handleSubmit}>
                  <h4 className="text-center">Art details Form</h4>
                  <div className="mb-3">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Enter the art title"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Image</label>
                    <input
                      type="text"
                      className="form-control"
                      name="imageUrl"
                      placeholder="Enter image url"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Genre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="genre"
                      placeholder="Enter the art genre/type"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Owner</label>
                    <input
                      type="text"
                      className="form-control"
                      name="publisher"
                      placeholder="Enter art owner"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Rating</label>
                    <input
                      type="number"
                      className="form-control"
                      name="rating"
                      placeholder="Enter the art rating"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn btn-info"> 
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      );
    };

export default AddList;