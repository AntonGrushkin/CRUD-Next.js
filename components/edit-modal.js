import React from 'react';
import Emitter from '../plugins/emitter';
import { editEmployee } from '../store/actions/employeesActions';
import { connect } from "react-redux";
class EditModal extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      name: '',
      email: '',
      address: '',
      phone: '',
      employeeId: null
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Emitter.on('EDIT_EMPLOYEE_HANDLER', id => {
      this.setState({
        employeeId: id
      });
    });
  }

  componentWillUnmount() {
    Emitter.off('EDIT_EMPLOYEE_HANDLER');
  }

  handleInput(instance, event) {
    this.setState({
      [instance]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const newEmployee = {
      id: this.state.employeeId,
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone
    }

    const newEmployeesList = this.props.employeesList.map(employee => employee.id === this.state.employeeId ? newEmployee : employee);
    editEmployee(newEmployeesList);
  }

  render() {
    return (
      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Edit Employee</h4>
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
                <input type="submit" className="btn btn-info" value="Save" />
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

export default connect(mapStateToProps)(EditModal);
