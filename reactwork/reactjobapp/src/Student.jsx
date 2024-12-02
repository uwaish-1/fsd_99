import React from "react";
import "./Student.css";
function Student(props) {
  return (
    <div className="icard">
      <table>
        <tbody>
          <tr style={{ backgroundColor: "black", color: "white" }}>
            <td colspan={2}>{props.college}</td>
          </tr>
          <tr>
            <td>Name: </td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Roll_Number: </td>
            <td>{props.roll}</td>
          </tr>
          <tr>
            <td>Branch: </td>
            <td>{props.branch}</td>
          </tr>
          <tr>
            <td>Section: </td>
            <td>{props.section}</td>
          </tr>
          <tr>
            <td>Admission_no.: </td>
            <td>{props.admission}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Student;
