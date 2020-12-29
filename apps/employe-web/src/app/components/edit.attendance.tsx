import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Axios from 'axios';

import '../styles/edit.attendance.scss';

export interface IValues {
  [key: string]: any;
}
export interface IFormState {
  id: number;
  attendance: any;
  values: any;
  submitSuccess: boolean;
  loading: boolean;
}

export default class EditAttendance extends React.Component<
  RouteComponentProps<any>,
  IFormState
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      attendance: {},
      values: [],
      loading: false,
      submitSuccess: false,
    };
  }

  public componentDidMount() {
    Axios.get(`http://localhost:2000/api/attendance/${this.state.id}`)
      .then((data) => {
        this.setState({ values: data.data });
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private processFormSubmission = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    this.setState({ loading: true });
    Axios.put(
      `http://localhost:2000/api/attendance/edit/${this.state.id}`,
      this.state.values
    )
      .then((data) => {
        this.setState({ submitSuccess: true, loading: false });
        setTimeout(() => {
          this.props.history.push('/attendance');
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.processFormSubmission(e);
  };
  private setValues = (values: IValues) => {
    this.setState({ values: { ...this.state.values, ...values } });
  };
  private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setValues({ [e.currentTarget.id]: e.currentTarget.value });
  };

  render() {
    return (
      <div className="edit-wrapper">
        <div className="form-edit-wrapper">
          <h2>Edit Attendance</h2>
          <form onSubmit={this.processFormSubmission} noValidate={true}>
            <label htmlFor="fullName">Fullname</label>
            <br></br>
            <br></br>
            <input
              type="text"
              defaultValue={this.state.values.fullName}
              onChange={(e) => this.handleInputChanges(e)}
              name="fullName"
            />
            <br></br>
            <br />
            <label htmlFor="nickName">Nickname</label>
            <br></br>
            <br />
            <input
              type="text"
              defaultValue={this.state.values.nickName}
              name="nickName"
              onChange={(e) => this.handleInputChanges(e)}
            />
            <br />
            <br />
            <label htmlFor="department">Department</label>
            <br></br>
            <br />
            <input
              type="text"
              name="department"
              defaultValue={this.state.values.department}
              onChange={(e) => this.handleInputChanges(e)}
            />
            <br />
            <br />
            <label htmlFor="sickLeave">Sick Leave</label>
            <br></br>
            <br />
            <input
              type="number"
              name="sickLeave"
              defaultValue={this.state.values.sickLeave}
              onChange={(e) => this.handleInputChanges(e)}
            />
            <br />
            <br />
            <label htmlFor="permissionLeave">Permission Leave</label>
            <br></br>
            <br />
            <input
              type="number"
              name="permissionLeave"
              defaultValue={this.state.values.permissionLeave}
              onChange={(e) => this.handleInputChanges(e)}
            />
            <br />
            <br />
            <label htmlFor="alpha">Alpha</label>
            <br></br>
            <br />
            <input
              type="number"
              name="alpha"
              defaultValue={this.state.values.alpha}
              onChange={(e) => this.handleInputChanges(e)}
            />
            <br />
            <br />
            <label htmlFor="totalAttendance">total Attendance</label>
            <br></br>
            <br />
            <input
              type="number"
              name="totalAttendance"
              defaultValue={this.state.values.totalAttendance}
              onChange={(e) => this.handleInputChanges(e)}
            />
            <br />
            <br />
            <button type="submit">Save</button>
          </form>
        </div>
        <div className="btn-edit-wrapper">
          <div></div>
          <div className="btn-edit">
            <button className="cancel-btn">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
