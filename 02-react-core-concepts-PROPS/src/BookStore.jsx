import Book from './Book'

export default function BookStore({books}){
    return (
        <div>
            <h3>Book Length: {books.length}</h3>
            {
                
                //books.map(book=> <Book key={book.id} book={book}/>)
                books.map(book=> <Book book={book}></Book>)
            }
        </div>
    )
}

// books.map(book=> <Book key={book.id} book={book}/>)