import Axios from 'axios';
import React, { Component } from 'react';
import '../styles/employe.scss';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import AttendanceForm from '../components/attendance.form';

class Employe extends Component {
  state = {
    employe: [],
  };

  constructor(props) {
    super(props);
    this.state = { employe: [] };
  }

  public componentDidMount(): void {
    Axios.get('http://localhost:1000/api/employe/findAll').then((res) => {
      this.setState({ employe: res.data.result });
    });
  }

  public deleteEmploye(id: number) {
    Axios.delete(`http://localhost:1000/api/employe/${id}`).then((result) => {
      const index = this.state.employe.findIndex(
        (employe) => employe.id === id
      );
      this.state.employe.splice(index, 1);
    });
  }

  render() {
    return (
      <Router>
        <div className="employe-wrapper">
          <div className="table-wrapper">
            <table>
              <tr className="table-head">
                <th>Fullname</th>
                <th>Nickname</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone Number</th>
                <th>Department</th>
                <th>Edit</th>
              </tr>
              {this.state.employe.map((e) => (
                <tr key={e._id}>
                  <td>{e.fullName}</td>
                  <td>{e.nickName}</td>
                  <td>{e.age}</td>
                  <td>{e.gender}</td>
                  <td>{e.phoneNumber}</td>
                  <td>{e.department}</td>
                  <td className="btn-employe">
                  <a href={`/edit-employe/${e._id}`}>
                  <button className="btn-edit-employe">Edit</button>
                  </a>
                    <a href="/employe">
                      <button className="btn-delete-employe" onClick={() => this.deleteEmploye(e._id)} >Delete</button>
                    </a>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="btn-wrapper">
            <div className="btn-form-employe">
              <div></div>
              <a href="/EmployeForm">
                <button>Create Employe</button>
              </a>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Employe;
