export default function PaginationBar() {
  return (
    <>
      <div className="clearfix">
        <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
        <ul className="pagination">
          <li className="page-item disabled"><a href="#">Previous</a></li>
          <li className="page-item"><a href="#" className="page-link">1</a></li>
          <li className="page-item"><a href="#" className="page-link">2</a></li>
          <li className="page-item active"><a href="#" className="page-link">3</a></li>
          <li className="page-item"><a href="#" className="page-link">4</a></li>
          <li className="page-item"><a href="#" className="page-link">5</a></li>
          <li className="page-item"><a href="#" className="page-link">Next</a></li>
        </ul>
      </div>
      <style>{`
        .pagination {
          float: right;
          margin: 0 0 5px;
        }
        .pagination li a {
          border: none;
          font-size: 13px;
          min-width: 30px;
          min-height: 30px;
          color: #999;
          margin: 0 2px;
          line-height: 30px;
          border-radius: 2px !important;
          text-align: center;
          padding: 0 6px;
        }
        .pagination li a:hover {
          color: #666;
        }  
        .pagination li.active a, .pagination li.active a.page-link {
          background: #03A9F4;
        }
        .pagination li.active a:hover {        
          background: #0397d6;
        }
        .pagination li.disabled i {
          color: #ccc;
        }
        .pagination li i {
          font-size: 16px;
          padding-top: 6px
        }
        .hint-text {
          float: left;
          margin-top: 10px;
          font-size: 13px;
        }
      `}</style>
    </>
  )
}