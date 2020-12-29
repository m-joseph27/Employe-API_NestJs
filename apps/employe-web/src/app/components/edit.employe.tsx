import Axios from 'axios';
import React, { Component } from 'react';

import '../styles/edit.employe.scss';

// export interface IEmplye {
//   [key: string]: any;
// }

// export interface IEditFormEmploye {
//   id: string;
//   employe: any;
//   values: any;
//   loading: false;
//   submitSuccess: false;
// }

// use react hooks

const EditData = ({ match }: any) => {
  const [data, setData] = React.useState({} as any);
  const [fullName, setFullName] = React.useState('');
  const [nickName, setNickName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const id = match.params.id;

  React.useEffect(() => {
    Axios.get(`http://localhost:1000/api/employe/${id}`)
      .then((res) => {
        setData(res.data);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const UpdateEmploye = (e: React.FormEvent) => {
    e.preventDefault();
    Axios.put(`http://localhost:1000/api/employe/edit/${id}`, {
      fullname:
        typeof fullName == 'undefined' || fullName === null || fullName === ''
          ? data.fullName
          : fullName,
      nickname:
        typeof nickName == 'undefined' || nickName === null || nickName === ''
          ? data.nickName
          : nickName,
      age:
        typeof age == 'undefined' || age === null || age === ''
          ? data.age
          : age,
      gender:
        typeof gender == 'undefined' || gender === null || gender === ''
          ? data.gender
          : gender,
      phonenumber:
        typeof phoneNumber == 'undefined' ||
        phoneNumber === null ||
        phoneNumber === ''
          ? data.phoneNumber
          : phoneNumber,
      department:
        typeof department == 'undefined' ||
        department === null ||
        department === ''
          ? data.department
          : department,
    }).then((res) => {
      console.log(res)
      setTimeout(() => {
        window.location.href = '/employe';
      }, 1000 );
    });
  };

  return (
    <div className="edit-wrapper">
      <div className="form-edit-wrapper">
        <h2>Edit Attendance</h2>
        <form noValidate={true} onSubmit={UpdateEmploye}>
          <label htmlFor="fullName">Fullname</label>
          <br></br>
          <br></br>
          <input
            type="text"
            name="fullName"
            defaultValue={data.fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <br></br>
          <br />
          <label htmlFor="nickName">Nickname</label>
          <br></br>
          <br />
          <input
            type="text"
            name="nickName"
            defaultValue={data.nickName}
            onChange={(e) => setNickName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="department">Department</label>
          <br></br>
          <br />
          <input
            type="text"
            name="department"
            defaultValue={data.department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="sickLeave">Age</label>
          <br></br>
          <br />
          <input
            type="number"
            name="age"
            defaultValue={data.age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="permissionLeave">Gender</label>
          <br></br>
          <br />
          <input
            type="text"
            name="gender"
            defaultValue={data.gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="permissionLeave">Phone Number</label>
          <br></br>
          <br />
          <input
            type="text"
            name="phoneNumber"
            defaultValue={data.phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
};

export default EditData;

// export default class EditEmploye extends React.Component<
//   RouteComponentProps<any>,
//   IEditFormEmploye
// > {
//   constructor(props: RouteComponentProps) {
//     super(props);
//     this.state = {
//       id: this.props.match.params.id,
//       employe: {},
//       values: [],
//       loading: false,
//       submitSuccess: false,
//     };
//   }

//   public componentDidMount() {
//     Axios.get(`http://localhost:1000/api/employe/${this.state.id}`).then(
//       (res) => {
//         this.setState({ values: res.data });
//         console.log(res.data)
//       }
//       );
//   }

//   private processFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     Axios.put(`http://localhost:1000/api/employe/${this.state.id}`, this.state.values).then(data => {
//       data
//         setTimeout(() => {
//             this.props.history.push('/employe');
//         }, 1500)
//     })
// }

//   private setValues = (values: IEmplye) => {
//     this.setState({ values: { ...this.state.values, ...values } });
//   }
//   private handleUdpate = (e: React.FormEvent<HTMLInputElement>) => {
//       e.preventDefault();
//       this.setValues({ [e.currentTarget.id]: e.currentTarget.value })
//   }

//   render() {
//     return (
//       <div className="edit-wrapper-employe">
//         <div className="form-edit-wrapper">
//           <h2>Edit Employe</h2>
//           <form
//             id={'create-post-form'}
//             noValidate={true}
//             onSubmit={this.processFormSubmission}
//           >
//             <label htmlFor="fullName">Fullname</label>
//             <br></br>
//             <br></br>
//             <input type="text" defaultValue={this.state.values.fullName} onChange={(update) => this.handleUdpate(update)} name="fullName" id="fullName" />
//             <br></br>
//             <br />
//             <label htmlFor="nickName">Nickname</label>
//             <br></br>
//             <br />
//             <input type="text" defaultValue={this.state.values.nickName} onChange={(update) => this.handleUdpate(update)} />
//             <br />
//             <br />
//             <label htmlFor="age">Age</label>
//             <br></br>
//             <br />
//             <input type="number" defaultValue={this.state.values.age} onChange={(update) => this.handleUdpate(update)}/>
//             <br />
//             <br />
//             gender<br></br>
//             <br />
//             <input type="text" defaultValue={this.state.values.gender} onChange={(update) => this.handleUdpate(update)} />
//             <br />
//             <br />
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <br></br>
//             <br />
//             <input type="text" defaultValue={this.state.values.phoneNumber} onChange={(update) => this.handleUdpate(update)} />
//             <br />
//             <br />
//             <label htmlFor="department">Department</label>
//             <br></br>
//             <br />
//             <input type="text" defaultValue={this.state.values.department} onChange={(update) => this.handleUdpate(update)} />
//             <br />
//             <br />
//             <button type="submit">Save</button>
//           </form>
//         </div>
//         <div className="btn-edit-wrapper">
//           <div></div>
//           <div className="btn-edit">
//             <button className="cancel-btn">Cancel</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
