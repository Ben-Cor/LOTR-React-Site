export default function FilmTitle({titleName, filmKey}){
    return(
        <div key={filmKey}>
            <h6>{titleName}</h6>
        </div>
    )
}