import Pet from "./Pet";


let Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No pets found!</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            id = {pet.id}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
}

export default Results;
