import React from "react";
import "./Emp.css";

export default function EmployeeDetail({det}){
  return(
  <div className="tab" >
      <table border="3" cellpadding="8" cellspacing="4" >
          <tr>
            <td>Name</td>
            <td>{det.name}</td>
          </tr>
          <tr>
            <td>Roll No</td>
            <td>{det.id}</td>
          </tr>
          <tr>
            <td>Department</td>
            <td>{det.dept}</td>
          </tr>
          <tr>
            <td>Degree</td>
            <td>{det.degree}</td>
          </tr>
          <tr>
            <td>CGPA</td>
            <td>{det.cgpa}</td>
          </tr>
        </table>
      </div>
)
}