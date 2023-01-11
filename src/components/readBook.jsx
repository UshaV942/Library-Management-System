
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/readBook.css'
const ReadBook = () => {
  let params = useParams()
  let [book, setBook] = useState([])
  useEffect(() => {
    let fetchdata = async () => {
      let response = await fetch(`http://localhost:30001/books/${params.id}`)
      let data = await response.json()
      setBook(data)
    }
    fetchdata()
  })

  return (
    <div className="readbook">
      <div className="sec1">
        <h1>{book.title}</h1>
        <p>{book.longDescription}</p>
        <p>{book.shortDescription}</p>
      </div>

    </div>
  );
}

export default ReadBook;