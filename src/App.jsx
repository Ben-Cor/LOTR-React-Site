import { BrowserRouter, Link, Route, Routes } from "react-router";
import Book from "./pages/Book";
import Film from "./pages/Film";
import Home from "./pages/Home";

export default function App(){
  return (
    <BrowserRouter >

      <div className="bg-amber-950 text-slate-100">
        {/* <nav className="flex justify-around py-6">
          <Link className=" hover:text-amber-200" to="/">Home</Link >
          <Link className=" hover:text-amber-200" to="/film/:id">Film</Link >
          <Link className=" hover:text-amber-200" to="/book/:bookid">Book</Link >
        </nav> */}

        <h1 className="text-5xl text-amber-200 text-center py-8">Gollum's Precious Resource</h1>
      </div>

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/film/:id" element={<Film />} />
        <Route path="/book/:bookid" element={<Book />} />
      </Routes>
    </BrowserRouter>
  )
}