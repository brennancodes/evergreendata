import React, { Component } from "react";
import './style.css';
import StudentSearch from "../StudentSearch/StudentSearch";
// import StudentList from "../../data/students.json"
import DateTab from "./DateTab";
import API from "../../utils/API"

class StudentTabs extends Component {
  state = {
    result: [],
    search: "",
    studentList: [],
    currentStudents: [],
    activeStudent: ""
  };

  componentWillMount() {
    API.getStudents().then(res => {
      this.setState({ 'studentList' : res.data})
      this.searchStudent();
    });
  }

  searchStudent = () => {
    const searchQuery = this.state.search.trim();
    const searchResultsFirstName = this.state.studentList.filter((student) => student.name.firstName === searchQuery);
    this.setState({ 'result': searchResultsFirstName });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchStudent();
  };

  handleStudentSelect = event => {
    event.preventDefault();
    this.setState({
      activeStudent: event.currentTarget.dataset.value
    });
      // console.log("This state: " + this.state.activeStudent)
      console.log("Dataset: " + event.currentTarget.dataset.value)
      console.log(this.state.activeStudent)
    }

  render (props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item nav-student">
        <a href="#" onClick={() => props.handlePageChange("")} className="nav-link">
          Student 1
        </a>
      </li>
      <li className="nav-item nav-student">
        <a href="#" onClick={() => props.handlePageChange("")} className="nav-link">
        Student 2
        </a>
      </li>
      <li className="nav-item nav-student">
        <a href="#" onClick={() => props.handlePageChange("")} className="nav-link">
        Student 3
        </a>
      </li>
      <li className="nav-item nav-student">
        <a href="#" onClick={() => props.handlePageChange("")} className="nav-link">
        Student 4
        </a>
      </li>
      <StudentSearch 
          search={this.state.search}
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          StudentList={this.state.studentList}
          activeStudentChange={this.handleStudentSelect}
      />
      <DateTab className="date-tab"/>
    </ul>
  );
}
}

export default StudentTabs;