import React, { Component } from 'react';
import Axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import '../styles/attendance.form.scss';

export interface IAttendance {
  fullName: string;
  nickName: string;
  department: string;
  sickLeave: number;
  permissionLeave: number;
  alpha: number;
  totalAttendance: number;
}

export interface IFormState {
  [key: string]: any;
  values: IAttendance[];
  submitSuccess: boolean;
  loading: boolean;
}

class AttendanceForm extends Component<RouteComponentProps, IFormState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      fullName: '',
      nickName: '',
      department: '',
      sickLeave: '',
      permissionLeave: '',
      alpha: '',
      totalAttendance: '',
      values: [],
      loading: false,
      submitSuccess: false,
    };
  }

  private addAttendance = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {
      fullName: this.state.fullName,
      nickName: this.state.nickName,
      department: this.state.department,
      sickLeave: this.state.sickLeave,
      permissionLeave: this.state.permissionLeave,
      alpha: this.state.alpha,
      totalAttendance: this.state.totalAttendance,
    };
    this.setState({
      submitSuccess: true,
      values: [...this.state.values, formData],
      loading: false,
    });
    Axios.post(
      `http://localhost:2000/api/attendance/insertAttendance`,
      formData
    )
      .then((res) => [
        setTimeout(() => {
          this.props.history.push('/attendance');
        }),
      ])
      .catch((err) => {
        // console.log(err);
      });
  };

  private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div className="att-form-wrapper">
        <div className="form-wrapper">
          <h2>Add Attendance</h2>
          <form
            id={'add-attendance'}
            onSubmit={this.addAttendance}
            noValidate={true}
          >
            <label htmlFor="fullName">Fullname</label>
            <br></br>
            <br></br>
            <input
              type="text"
              id="fullname"
              onChange={(e) => this.handleInputChanges(e)}
              name="fullName"
            />
            <br></br>
            <br />
            <label htmlFor="fullName">Nickname</label>
            <br></br>
            <br />
            <input
              type="text"
              onChange={(e) => this.handleInputChanges(e)}
              name="nickName"
            />
            <br />
            <br />
            <label htmlFor="fullName">Department</label>
            <br></br>
            <br />
            <input
              type="text"
              onChange={(e) => this.handleInputChanges(e)}
              name="department"
            />
            <br />
            <br />
            <label htmlFor="fullName">Sick Leave</label>
            <br></br>
            <br />
            <input
              type="number"
              onChange={(e) => this.handleInputChanges(e)}
              name="sickLeave"
            />
            <br />
            <br />
            <label htmlFor="fullName">Permission Leave</label>
            <br></br>
            <br />
            <input
              type="number"
              onChange={(e) => this.handleInputChanges(e)}
              name="permissionLeave"
            />
            <br />
            <br />
            <label htmlFor="fullName">Alpha</label>
            <br></br>
            <br />
            <input
              type="number"
              onChange={(e) => this.handleInputChanges(e)}
              name="alpha"
            />
            <br />
            <br />
            <label htmlFor="fullName">total Attendance</label>
            <br></br>
            <br />
            <input
              type="number"
              placeholder="30"
              onChange={(e) => this.handleInputChanges(e)}
              name="totalAttendance "
            />
            <br />
            <br />
            <div className="btn-action">
              <div></div>
              <a href="/attendance">
              <button type="submit">Save</button>
              </a>
            </div>
          </form>
          <div className="btn-cancel-wrapper">
            <a href="/attendance">
              <button className="btn-cancel">Cancel</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AttendanceForm);
