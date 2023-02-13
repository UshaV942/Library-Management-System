import { useState, useEffect } from "react";
import '../styles/bookList.css'
import { useNavigate ,useLocation} from "react-router-dom";

const BookList = () => {
  let [books, setBooks] = useState([])
  let navigate = useNavigate()
  let location=useLocation()
  //to fetch the route value


  useEffect(() => {
    let fetchdata = async () => {
      let response = await fetch("http://localhost:30001/books")
      let data = await response.json()
      setBooks(data)
    }
    fetchdata()
  }, [books])
  let handleDelete = (id, title) => {
    fetch(`http://localhost:30001/books/${id}`, {
      method: "DELETE"
    })
    alert(`${title}  will be deleted permanently`)
  }

  let read = (id) => {
    if (location.pathname=='/admin/book-list') {
      navigate(`/admin/book-list/${id}`)
      
    } else {
      navigate(`/user/book-list/${(id)}`)

    }
  }
  return (
    
    <div className="booklist">
      <h1 className="hedding" >Book List {books.length}</h1>
      <div className="book-section">

        {

          books.map((data) => (
            <div className="book">
              <div className="img_part">
                <img width="130px" height="180px" src={data.thumbnailUrl} alt="" />
              </div>
              <div className="book_part">
                <h1 style={{ fontSize: "28px" }}>Title : {data.title}</h1>
                {/* <h2>author:{[data.authors]}</h2> */}
                <h2 style={{ fontSize: "22px" }}>Aurhor:{data.authors.toString()}</h2>
                <h2 style={{ fontSize: "12px" }}>PageCount:{data.pageCount}</h2>
                <h2 style={{ fontSize: "12px" }}>Category:{data.categories.toString()}</h2>
                <button  onClick={() => read(data.id)}>Read more</button>
                {location.pathname=='/admin/book-list' && <button onClick={() => handleDelete(data.id, data.title)}>Delete</button>}

              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default BookList;