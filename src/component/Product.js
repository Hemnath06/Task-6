import React from "react"; 
import EmployeeDetail from "./EmployeeDetails.js";
import "./Emp.css";


export default function Product(props){

  const empList=[
    {
        id:1,
        name:"Kaviya",
        dept: "EIE",
        degree:"B.E",
        cgpa: 7.53
    },
    {
        id:2,
        name:"Rakesh",
        dept: "IT",
        degree:"B.E",
        cgpa: 8.02
    },
    {
        id:3,
        name:"Karthi",
        dept: "ECE",
        degree:"B.E",
        cgpa: 6.35
    }
]
  const {id,name,dept,degree,cgpa} = props
  

  const a = ["name","class","dept"];

  const b = a.map(arr =>(
       <h1>{arr}</h1>
  ))

  const c = empList.map(emp=>(
    <EmployeeDetail det={emp}  />
  ))

  return(<div className="tab">
    <table border="3" cellpadding="8" cellspacing="4" >
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Roll No</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Department</td>
            <td>{dept}</td>
          </tr>
          <tr>
            <td>Degree</td>
            <td>{degree}</td>
          </tr>
          <tr>
            <td>CGPA</td>
            <td>{cgpa}</td>
          </tr>
        </table>
    <h1>{c}</h1>
    </div>);
}