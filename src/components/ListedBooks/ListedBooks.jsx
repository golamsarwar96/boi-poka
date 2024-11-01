import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();
  console.log(allBooks);
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    console.log(storedReadListInt);
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  return (
    <div>
      <h1 className="my-8 text-3xl text-center">Listed Books</h1>
      <Tabs>
        <TabList className="font-sans">
          <Tab>Mark as read</Tab>
          <Tab>Add to Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-3xl text-center my-5">
            Books I Read : {readList.length}
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-3xl text-center my-5">My Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
