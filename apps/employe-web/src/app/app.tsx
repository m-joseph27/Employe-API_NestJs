import React from 'react';

import styles from './app.module.scss';
import Navbar from './components/navbar';
import Employe from './pages/employe';
import Attendance from './pages/attendance';
import AttendanceForm from './components/attendance.form';
import EditAttendance from './components/edit.attendance';
import EmployeForm from './components/employe.form';
import EditEmploye from './components/edit.employe';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

export function App() {


  return (
      <div className={styles.app}>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact />
            <Route path="/employe" component={Employe} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/AttendanceForm" component={AttendanceForm} />
            <Route path={'/EmployeForm'} component={EmployeForm} />
            <Route path={`/edit-employe/:id`} component={EditEmploye} />
            <Route path={'/EditAttendance/:id'} component={EditAttendance} />
        </Switch>
        </Router>
      </div>
  );
}


export default App;
