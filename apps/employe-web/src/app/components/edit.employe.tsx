import Axios from 'axios';
import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import '../styles/edit.employe.scss';

export interface IEmplye {
  [key: string]: any;
}

export interface IEditFormEmploye {
  id: number;
  employe: any;
  values: any;
}

export default class EditEmploye extends React.Component<
  RouteComponentProps<any>,
  IEditFormEmploye
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employe: {},
      values: [],
    };
  }

  public componentDidMount():void {
    Axios.get(`http://localhost:1000/api/employe/${this.state.id}`).then(
      (res) => {
        this.setState({ values: res.data });
      }
    );
  }

  private updateEmploye = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    Axios.put(
      `http://localhost:1000/api/employe/${this.state.id}`,
      this.state.values
    ).then((data) => {
      setTimeout(() => {
        this.props.history.push('/employe')
      }, 1000);
    });
  };

  private setValues = (values: IEmplye) => {
    this.setState({ values: { ...this.state.values, ...values } });
  }
  private handleUdpate = (e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault();
      this.setValues({ [e.currentTarget.id]: e.currentTarget.value })
  }


  render() {
    return (
      <div className="edit-wrapper-employe">
        <div className="form-edit-wrapper">
          <h2>Edit Attendance</h2>
          <form
            id={'create-post-form'}
            noValidate={true}
            onSubmit={this.updateEmploye}
          >
            <label htmlFor="fullName">Fullname</label>
            <br></br>
            <br></br>
            <input type="text" defaultValue={this.state.values.fullName} onChange={(e) => this.handleUdpate(e)} name="fullName" id="fullName" />
            <br></br>
            <br />
            <label htmlFor="nickName">Nickname</label>
            <br></br>
            <br />
            <input type="text" defaultValue={this.state.values.nickName} />
            <br />
            <br />
            <label htmlFor="age">Age</label>
            <br></br>
            <br />
            <input type="number" defaultValue={this.state.values.age} />
            <br />
            <br />
            gender<br></br>
            <br />
            <input type="text" defaultValue={this.state.values.gender} />
            <br />
            <br />
            <label htmlFor="phoneNumber">Phone Number</label>
            <br></br>
            <br />
            <input type="text" defaultValue={this.state.values.phoneNumber} />
            <br />
            <br />
            <label htmlFor="department">Department</label>
            <br></br>
            <br />
            <input type="text" defaultValue={this.state.values.department} />
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
