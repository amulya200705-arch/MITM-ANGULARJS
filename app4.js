
const { useState } = React;

// CHILD COMPONENT 1
function BookForm({ bookName, setBookName, addBook }) {

    return (
        <div>
            <h2>Add a New Book</h2>

            {/* TWO-WAY DATA BINDING */}

            <input
                type="text"
                placeholder="Enter book name"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
            />

            <button onClick={addBook}>
                Add Book
            </button>
        </div>
    );
}


// CHILD COMPONENT 2
function BookList({ books, deleteBook }) {

    return (
        <div>
            <h2>Available Books</h2>

            {books.map((book, index) => (

                <div key={index}>
                    <span>
                        {index + 1}. {book}
                    </span>

                    <button onClick={() => deleteBook(index)}>
                        Delete
                    </button>
                </div>

            ))}

        </div>
    );
}


// PARENT COMPONENT
function Library() {

    const [bookName, setBookName] = useState("");

    const [books, setBooks] = useState([
        "Wings of Fire",
        "The Alchemist",
        "Harry Potter",
        "Rich Dad Poor Dad",
        "Atomic Habits"
    ]);


    // CONTROLLER METHOD: ADD BOOK

    function addBook() {

        if (bookName.trim() === "") {
            alert("Please enter a book name");
            return;
        }

        setBooks([...books, bookName.trim()]);

        setBookName("");
    }


    // CONTROLLER METHOD: DELETE BOOK

    function deleteBook(index) {

        const updatedBooks = books.filter(
            (_, i) => i !== index
        );

        setBooks(updatedBooks);
    }


    return (

        <div className="container">

            <h1>Library Management System</h1>

            <BookForm
                bookName={bookName}
                setBookName={setBookName}
                addBook={addBook}
            />

            <BookList
                books={books}
                deleteBook={deleteBook}
            />

        </div>

    );
}


// RENDER PARENT COMPONENT

ReactDOM.createRoot(
    document.getElementById("root")
).render(<Library />);
