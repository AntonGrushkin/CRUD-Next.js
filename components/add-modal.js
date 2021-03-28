import React from 'react';
import { addEmployee } from '../store/actions/employeesActions';
import { connect } from "react-redux";

class AddModal extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      name: '',
      email: '',
      address: '',
      phone: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(instance, event) {
    this.setState({
      [instance]: event.target.value
    })
  }

  handleSubmit = event => {
    /* 
      array.map() вернет новый массив с числами
      затем мы прибавим единицу к текущей длине массива и таким образом получим актуальный id
    */ 
    const employeeId = this.props.employeesList.map((employee, i) => i + 1).length + 1; 
    const newEmployee = {
      id: employeeId,
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone
    }

    addEmployee(newEmployee);
    event.preventDefault();
  }

  render() {
    return (
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Add Employee</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" required value={this.state.name} onChange={() => this.handleInput('name', event)}/>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" required value={this.state.email} onChange={() => this.handleInput('email', event)}/>
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea className="form-control" required value={this.state.address} onChange={() => this.handleInput('address', event)}></textarea>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" className="form-control" required value={this.state.phone} onChange={() => this.handleInput('phone', event)}/>
                </div>
              </div>
              <div className="modal-footer">
                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                <input type="submit" className="btn btn-success" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    employeesList: state.employeesReducer.employees
  }
}

export default connect(mapStateToProps)(AddModal);
