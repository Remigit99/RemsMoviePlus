/* eslint-disable react/prop-types */


const MovieCard = ({ Poster, Title, Type, Year }) => {
    return (
        <article className="movie__card">

            <img src={Poster} alt={Title} />

            <div className="movie__info">
                <h5>{Type}</h5>
                <h3>{Title}</h3>
                <small>{Year}</small>
            </div>

        </article>
    )
}

export default MovieCard