import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"

export default function Book ({bookKey}){

    const {bookid} = useParams()
    const [bookName, setBookName] = useState("")
    const [bookInfo, setBookInfo] = useState([])

    function getBookInfo (){
    fetch(`https://the-one-api.dev/v2/book/${bookid}`)
        .then(res => res.json())
        .then(data=> {
            setBookName(data.docs[0].name)
        })
    fetch(`https://the-one-api.dev/v2/book/${bookid}/chapter`)
        .then(res => res.json())
        .then(data=> {
            setBookInfo(data.docs)
            console.log(data.docs)
        })
    }

    useEffect(getBookInfo, [])

    return(
        <>
            <Link className="text-xl" to="/">Home</Link >
            <h1 className="text-3xl">{bookName}</h1>
            <h2 className="text-xl">Chapters</h2>
            {bookInfo.map(function(info){
                return (    
                    <p key={info._id}>{info.chapterName}</p>
                )})}
        </>
    )
}