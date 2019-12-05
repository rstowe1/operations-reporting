import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const Form = ({ load, setLoad }) => {
  const formik = useFormik({
    initialValues: {
      client: "",
      approved: "",
      rejected: "",
      hours_worked: "",
      original_approvals: "",
      date: "",
      queryDate: Date(),
      name: ""
    },
    onSubmit: values => {
      formik.resetForm();
      setLoad(load !== true ? true : false);
      axios
        .post("/api/approvals", values)
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
      <label htmlFor="approved">Approved</label>
      <input
        id="approved"
        name="approved"
        type="approved"
        onChange={formik.handleChange}
        value={formik.values.approved}
      />
      <label htmlFor="rejected">Rejected</label>
      <input
        id="rejected"
        name="rejected"
        type="rejected"
        onChange={formik.handleChange}
        value={formik.values.rejected}
      />
      <label htmlFor="hours_worked">Hours Worked</label>
      <input
        id="hours_worked"
        name="hours_worked"
        type="hours_worked"
        onChange={formik.handleChange}
        value={formik.values.hours_Worked}
      />
      <label htmlFor="original_approvals">Original Approvals</label>
      <select
        id="original_approvals"
        name="original_approvals"
        type="original_approvals"
        onChange={formik.handleChange}
        value={formik.values.original_Approval}
      >
        <option value=""> Select One...</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <label htmlFor="client">Client</label>
      <input
        id="client"
        name="client"
        type="client"
        onChange={formik.handleChange}
        value={formik.values.client}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
