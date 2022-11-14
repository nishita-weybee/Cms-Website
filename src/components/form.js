import React, { useEffect } from "react";
// import Logo from "./logo";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import SaveModal from "./SaveModal";
function Form() {
  const [templateFields, setTemplateFields] = useState([]);
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Templates/1/Fields")
      .then((res) => {
        setTemplateFields(res.data);
        setDetail(
          res.data.map((i) => {
            return {
              template_id: i.template_id,
              field_id: i.id,
              field_value: "",
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const labelName = (e, x) => {
    console.log(x);
    setDetail(
      detail.map((i) =>
        i.field_id === x.id
          ? {
              ...i,
              field_value: e.target.value,
            }
          : i
      )
    );
    console.log(detail);
  };

  const submitHandler = async (e) => {
    // e.preventDefault();
    // setIsLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/Templates/1/Save",
        detail
      );

      console.log(JSON.stringify(data, null, 4));
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {/* <form> */}
      {/* <Logo /> */}
      {templateFields.map((x) => {
        return (
          <>
            <label className="title">{x.field_name}</label>
            <input
              className="details"
              type="text"
              onChange={(e) => labelName(e, x)}
            />
          </>
        );
      })}
      <div className="save-btn">
        <button
          className="comman-btn"
          type="button"
          onClick={() => setModalShow(true)}
        >
          Save
        </button>
        <SaveModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </form>
  );
}

export default Form;
