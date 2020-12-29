import React, { Component } from 'react';
import Axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import '../styles/employe.form.scss';
import Swal from 'sweetalert2';

export interface IEmploye {
  fullName: string;
  nickName: string;
  age: number;
  phoneNumber: number;
  gender: string;
  department: string;
}

export interface IFormEmploye {
  [key: string]: any;
  values: IEmploye[];
  submitSuccess: boolean;
  loading: boolean;
}

class EmployeForm extends Component<RouteComponentProps, IFormEmploye> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      fullName: '',
      nickName: '',
      age: '',
      phoneNumber: '',
      gender: '',
      department: '',
      values: [],
      loading: false,
      submitSuccess: false,
    };
  }

  private InsertEmploye = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {
      fullName: this.state.fullName,
      nickName: this.state.nickName,
      age: this.state.age,
      phoneNumber: this.state.phoneNumber,
      gender: this.state.gender,
      department: this.state.department,
    };
    this.setState({
      submitSuccess: true,
      values: [...this.state.values, formData],
      loading: false,
    });

    Swal.fire({
      icon: 'question',
      title: 'Add Employe',
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel'
    }).then((res) => {
      if (res.isConfirmed) {
        Axios.post(`http://localhost:1000/api/employe/addEmploye`, formData)
        .then((result) => {
          Swal.fire('Susses', 'Employe Succesfully Added', 'success')
        }).then(function() {
          setTimeout(() => {
            window.location.href = '/employe'
          }, 1200);
        })
      }
    })
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
          <h2>Add Employe</h2>
          <form
            id={'add-attendance'}
            onSubmit={this.InsertEmploye}
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
            <label htmlFor="fullName">Age</label>
            <br></br>
            <br />
            <input
              type="number"
              onChange={(e) => this.handleInputChanges(e)}
              name="age"
            />
            <br />
            <br />
            <label htmlFor="fullName">Phone Number</label>
            <br></br>
            <br />
            <input
              type="text"
              onChange={(e) => this.handleInputChanges(e)}
              name="phoneNumber"
            />
            <br />
            <br />
            <label htmlFor="fullName">Gender</label>
            <br></br>
            <br />
            <input
              type="text"
              onChange={(e) => this.handleInputChanges(e)}
              name="gender"
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
            <div className="btn-action-save">
              <div></div>
              <button type="submit">Save</button>
            </div>
          </form>
          <div className="btn-cancel-wrapper">
            <a href="/employe">
              <button className="btn-cancel">Cancel</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EmployeForm);
