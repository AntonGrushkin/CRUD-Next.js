import Head from 'next/head'
import AddModal from '../../components/add-modal.js';
import EditModal from '../../components/edit-modal.js';
import DeleteModal from '../../components/delete-modal.js';
import Table from '../../components/table.js';
import PaginationBar from '../../components/pagination-bar.js';
import React from "react";

class CRUD extends React.Component {
  render() {
    return (
      <div className="crud-container">
        <Head>
          <title>CRUD</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        </Head>

        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Manage <b>Employees</b></h2>
                  </div>
                  <div className="col-sm-6">
                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                      <i className="material-icons">&#xE147;</i>
                      <span>Add New Employee</span>
                    </a>
                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal">
                      <i className="material-icons">&#xE15C;</i>
                      <span>Delete</span>
                    </a>
                  </div>
                </div>
              </div>
              <Table />
              <PaginationBar />
            </div>
          </div>
        </div>
        <AddModal />
        <EditModal />
        <DeleteModal />
        <style jsx>{`
          .crud-container {
            width: 100%;
            height: 100vh;
            color: #566787;
            background: #f5f5f5;
            font-family: 'Varela Round', sans-serif;
            font-size: 13px;
          }

          .table-responsive {
            position: relative;
            top: 50px;
          }

          .table-wrapper {
            background: #fff;
            padding: 20px 25px;
            border-radius: 3px;
            min-width: 1000px;
            box-shadow: 0 1px 1px rgba(0,0,0,.05);
          }
          .table-title {
            padding-bottom: 15px;
            background: #435d7d;
            color: #fff;
            padding: 16px 30px;
            min-width: 100%;
            margin: -20px -25px 10px;
            border-radius: 3px 3px 0 0;
          }
          .table-title h2 {
            margin: 5px 0 0;
            font-size: 24px;
          }
          .table-title .btn-group {
            float: right;
          }
          .table-title .btn {
            color: #fff;
            float: right;
            font-size: 13px;
            border: none;
            min-width: 50px;
            border-radius: 2px;
            border: none;
            outline: none !important;
            margin-left: 10px;
          }
          .table-title .btn i {
            float: left;
            font-size: 21px;
            margin-right: 5px;
          }
          .table-title .btn span {
            float: left;
            margin-top: 2px;
          }
        `}</style>
      </div>
    )
  }
}

export default CRUD;
