import Axios from 'axios';
import React, { Component, useEffect, useState, useRef } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../styles/attendance.scss';
import AttendanceForm from '../components/attendance.form';



class Attendance extends Component {
  state = {
    attendance: [],
  };

  constructor(props) {
    super(props);
    this.state = { attendance: [] }
  }

  public componentDidMount(): void {
    Axios.get('http://localhost:2000/api/attendance/findAll').then( data => {
      this.setState({ attendance: data.data.result})
    })
  }

  public deleteAttendance(id: number) {
    Axios.delete(`http://localhost:2000/api/attendance/${id}`)
    .then(data => {
      const index = this.state.attendance.findIndex(customer => customer.id === id);
      this.state.attendance.splice(index, 1);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="employe-wrapper">
        <div className="table-wrapper">
          <table>
            <tr className="table-head">
              <th>Fullname</th>
              <th>Nickname</th>
              <th>Department</th>
              <th>Permission Leave</th>
              <th>Sick Leave</th>
              <th>Alpha</th>
              <th>Total Attendance</th>
              <th>Edit</th>
            </tr>
            {this.state.attendance.map((attendances) => (
              <tr key={attendances._id}>
                <td>{attendances.fullName}</td>
                <td>{attendances.nickName}</td>
                <td>{attendances.department}</td>
                <td>{attendances.permissonLeave}</td>
                <td>{attendances.sickLeave}</td>
                <td>{attendances.alpha}</td>
                <td>{attendances.totalAttendance}</td>
                <td className="btn-employe">
                  <a href={`/EditAttendance/${attendances._id}`}>
                  <button className="btn-edit-employe">Edit</button>
                  </a>
                  <a href="/attendance">
                  <button onClick={() => this.deleteAttendance(attendances._id)} className="btn-delete-employe">Delete</button>
                  </a>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="btn-create-wrapper">
          <Router>
            <div className="btn-form-employe">
              <div></div>
              <a href="/AttendanceForm">
                <button>Create Attendance</button>
              </a>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default Attendance;
