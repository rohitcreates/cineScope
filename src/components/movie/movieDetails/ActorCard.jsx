


function ActorCard({actor}) {

    
const imageUrl = actor.profile_path
  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
  : "/placeholder.png";


    return (
        <div className="actor-card actor-card w-40 flex-shrink-0">
            <img src={imageUrl} alt={actor.name} />
            <h3>{actor.name}</h3>
            <p>as {actor.character}</p>
        </div>
    );
  
}

export default ActorCard;