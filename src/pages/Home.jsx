import { use, useEffect, useState } from "react";
import BookTitle from "../components/BookTitle";
import FilmTitle from "../components/FilmTitle";

export default function Home (){

    const [books, setBooks] = useState([])
    const [films, setFilms] = useState([])

    function getData(){
        fetch('https://the-one-api.dev/v2/movie', {
            headers: {
            'Authorization': 'Bearer Y5_RKgaejBC1BnyhtPR6'
            }
        })
            .then(res => res.json())
            .then(data=> {
            console.log(data)
            setFilms(data.docs)
            })

        fetch('https://the-one-api.dev/v2/book', {
            headers: {
                'Authorization': 'Bearer Y5_RKgaejBC1BnyhtPR6'
            }
            })
            .then(res => res.json())
            .then(data=> {
                console.log(data)
                setBooks(data.docs)
            })
    }

    useEffect(getData, [])

    

    return(
        <main>
            <div className="mb-10 mt-4">
                <h2 className="text-3xl">Books</h2>
                {books.map(function(book){
                    return (
                        <BookTitle titleName={book.name} bookKey={book._id} />
                    )
                })}
            </div>
            <div>
                <h2 className="text-3xl">Films and TV</h2>
                {films.map(function(film){
                    return (
                        <FilmTitle titleName={film.name} filmKey={film._id} />
                    )
                })}
            </div>
        </main>
    )
}