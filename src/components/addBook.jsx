import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addbook.css';
const AddBook = () => {
    let [title, setTitle] = useState("")
    let [authors, setAuthors] = useState("")
    let [categories, setCategories] = useState("")
    let [pageCount, setPage] = useState("")
    let [shortDescription, setshortDesc] = useState("")
    let [longDescription, setlongDesc] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")
 
 let navigate=useNavigate()
    let handleSubmit=(x)=>
    {
      x.preventDefault()
      let data={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
      fetch(`http://localhost:30001/books`,{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(data)
    })
      
    alert('Book added successfully')
    navigate('/admin/book-list')
    }

    return (
        <div style={{textAlign:"center"}} className="addbook">
            <div className="section">
            <h1>Add Book</h1>
            <div style={{textAlign:'center'}} className="form">
                <form action=""  onSubmit={handleSubmit}>
                    <div className="title">
                        <input type="text" placeholder="Title of the book" value={title} onChange={(x) => setTitle(x.target.value)} />
                    </div>
                    <div className="authors">
                        <input type="text" placeholder="Author of the book" value={authors} onChange={(x) => setAuthors(x.target.value)} />
                    </div>
                    <div className="categories">
                        <input type="text" placeholder="categories" value={categories} onChange={(x) => setCategories(x.target.value)} />
                    </div>
                    <div className="pageCount">
                        <input type="number" placeholder="Number of the pages" value={pageCount} onChange={(x) => setPage(x.target.value)} />
                    </div>
                    <div className="shortDescription">
                        <textarea name="" type="text" placeholder="Short Description " id="" cols="46" rows="2" required value={shortDescription} onChange={(x) =>setshortDesc(x.target.value)} ></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea name="" type="text" placeholder="Long Description " id="" cols="46 " rows="2" required value={longDescription} onChange={(x) => setlongDesc(x.target.value)}></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input type="text" value={thumbnailUrl} onChange={(x)=>setthumbnailUrl(x.target.value)} placeholder="URL" />
                    </div>
                    <button  className="bt">Add Book</button>

                </form>
            </div>
            </div>
        </div>
    );
}

export default AddBook;