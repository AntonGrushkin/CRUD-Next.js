import React from "react";
import { connect } from "react-redux";
class Table extends React.Component {

  selectAllCheckboxes(e) {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    if (e.target.checked) {
      checkboxes.forEach(checkbox => checkbox.checked = true);
    } else {
      checkboxes.forEach(checkbox => checkbox.checked = false);
    }
  }

  render() {
    return (
      <>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <span className="custom-checkbox">
                  <input type="checkbox" id="selectAll" onChange={() => this.selectAllCheckboxes(event)}/>
                  <label htmlFor="selectAll"></label>
                </span>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {this.props.employeeList.map((employeeItem, i) =>
            <tr key={i}>
              <td>
                <span className="custom-checkbox">
                  <input type="checkbox" id={`checkbox${i}`}/>
                  <label htmlFor={`checkbox${i}`}></label>
                </span>
              </td>
              <td>{employeeItem.name}</td>
              <td>{employeeItem.email}</td>
              <td>{employeeItem.address}</td>
              <td>{employeeItem.phone}</td>
              <td>
                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
              </td>
            </tr>
          )}
          </tbody>
        </table>
        <style jsx>{`
          table.table tr th, table.table tr td {
            border-color: #e9e9e9;
            padding: 12px 15px;
            vertical-align: middle;
          }
          table.table tr th:first-child {
            width: 60px;
          }
          table.table tr th:last-child {
            width: 100px;
          }
          table.table-striped tbody tr:nth-of-type(odd) {
            background-color: #fcfcfc;
          }
          table.table-striped.table-hover tbody tr:hover {
            background: #f5f5f5;
          }
          table.table th i {
            font-size: 13px;
            margin: 0 5px;
            cursor: pointer;
          }  
          table.table td:last-child i {
            opacity: 0.9;
            font-size: 22px;
            margin: 0 5px;
          }
          table.table td a {
            font-weight: bold;
            color: #566787;
            display: inline-block;
            text-decoration: none;
            outline: none !important;
          }
          table.table td a:hover {
            color: #2196F3;
          }
          table.table td a.edit {
            color: #FFC107;
          }
          table.table td a.delete {
            color: #F44336;
          }
          table.table td i {
            font-size: 19px;
          }
          table.table .avatar {
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 10px;
          }
          /* Custom checkbox */
          .custom-checkbox {
            position: relative;
          }
          .custom-checkbox input[type="checkbox"] {
            opacity: 0;
            position: absolute;
            margin: 5px 0 0 3px;
            z-index: 9;
          }
          .custom-checkbox label:before{
            width: 18px;
            height: 18px;
          }
          .custom-checkbox label:before {
            content: '';
            margin-right: 10px;
            display: inline-block;
            vertical-align: text-top;
            background: white;
            border: 1px solid #bbb;
            border-radius: 2px;
            box-sizing: border-box;
            z-index: 2;
          }
          .custom-checkbox input[type="checkbox"]:checked + label:after {
            content: '';
            position: absolute;
            left: 6px;
            top: 3px;
            width: 6px;
            height: 11px;
            border: solid #000;
            border-width: 0 3px 3px 0;
            transform: inherit;
            z-index: 3;
            transform: rotateZ(45deg);
          }
          .custom-checkbox input[type="checkbox"]:checked + label:before {
            border-color: #03A9F4;
            background: #03A9F4;
          }
          .custom-checkbox input[type="checkbox"]:checked + label:after {
            border-color: #fff;
          }
          .custom-checkbox input[type="checkbox"]:disabled + label:before {
            color: #b8b8b8;
            cursor: auto;
            box-shadow: none;
            background: #ddd;
          }
        `}</style>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    employeeList: state.employee.employee
  }
}

export default connect(mapStateToProps)(Table);
