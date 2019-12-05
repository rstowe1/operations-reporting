import React from "react";
import { useFormik } from "formik";
import axios from "axios";
const Form = ({ name, load, setLoad }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      queryDate: Date(),
      comment: ""
    },
    onSubmit: values => {
      formik.resetForm();
      setLoad(load !== true ? true : false);
      axios
        .post("/api/status", values)
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <select
        id="name"
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      >
        <option value=""> Select One...</option>
        <option value="Ryan">Ryan</option>
        <option value="Patrick">Patrick</option>
        <option value="Jennifer">Jennifer</option>
        <option value="Dan">Dan</option>
        <option value="David">David</option>
        <option value="Devin">Devin</option>
        <option value="Will">Will</option>
        <option value="Carl">Carl</option>
      </select>
      <label htmlFor="date">Date</label>
      <input
        id="date"
        name="date"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <label htmlFor="comment">Comment</label>
      <input
        id="comment"
        name="comment"
        type="comment"
        onChange={formik.handleChange}
        value={formik.values.comment}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
