import { Link } from "react-router";

export default function BookTitle({titleName, bookKey}){

 

    return(
        <div key={bookKey}>
            <Link to={`/book/${bookKey}`}>
                <h6>{titleName}</h6>
            </Link>
        </div>
    )
}