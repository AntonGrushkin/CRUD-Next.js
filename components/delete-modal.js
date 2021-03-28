import React from 'react';
import { connect } from "react-redux";
import { removeEmployees } from '../store/actions/employeesActions';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props),

    this.isNotSelected = this.isNotSelected.bind(this);
    this.deleteSelectedEmployees = this.deleteSelectedEmployees.bind(this);
  }

  isNotSelected(employeeItem) {
    if (!this.props.selectedEmployeesId.includes(employeeItem.id)) {
      return employeeItem;
    }
  }

  deleteSelectedEmployees = event => {
    event.preventDefault();
    const filteredEmployeesList = this.props.employeesList.filter(this.isNotSelected);
    removeEmployees(filteredEmployeesList);
    this.resetCheckboxes();
  }

  resetCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
  }

  render() {
    return (
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={this.deleteSelectedEmployees}>
              <div className="modal-header">
                <h4 className="modal-title">Delete Employee</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p className="text-warning"><small>This action cannot be undone.</small></p>
              </div>
              <div className="modal-footer">
                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                <input type="submit" className="btn btn-danger" value="Delete" />
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
    employeesList: state.employeesReducer.employees,
    selectedEmployeesId: state.employeesReducer.selectedEmployeesId
  }
}

export default connect(mapStateToProps)(DeleteModal);
