import Axios from 'axios';
import React, { Component, useEffect, useState, useRef } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../styles/attendance.scss';
import AttendanceForm from '../components/attendance.form';
import Swal from 'sweetalert2';

class Attendance extends Component {
  state = {
    attendance: [],
  };

  constructor(props) {
    super(props);
    this.state = { attendance: [] };
  }

  public componentDidMount(): void {
    Axios.get('http://localhost:2000/api/attendance/findAll').then((data) => {
      this.setState({ attendance: data.data.result });
    });
  }

  public deleteAttendance(id: number) {
    Swal.fire({
      title: 'Are You Sure Want To Delete?',
      text: 'Data will permanently deleted',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Yes I'm Sure",
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then((res) => {
      if (res.isConfirmed) {
        Axios.delete(`http://localhost:2000/api/attendance/${id}`)
          .then((result) => {
            Swal.fire('Deleted!', 'Employe Succesesfully Deleted', 'success');
          })
          .then(function () {
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          });
      } else if (res.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your data is safe :)', 'error');
      }
    });
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
                  <button
                    onClick={() => this.deleteAttendance(attendances._id)}
                    className="btn-delete-employe"
                  >
                    Delete
                  </button>
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
