/* eslint-disable react/prop-types */


const MovieCard = ({ Poster, Title, Type }) => {
    return (
        <article className="movie__card">

            <img src={Poster === "N/A" ? "https://placehold.co/400" : Poster} alt={Title} className="poster__img" />

            <div className="movie__info">
                <small>{Type}</small>
                <h4>{Title}</h4>
                {/* <small>{Year}</small> */}
            </div>

        </article>
    )
}

export default MovieCard