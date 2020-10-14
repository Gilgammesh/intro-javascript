//import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";

export const getHeroeById = (id) => {
  return heroes.find((ele) => ele.id === id);
};

export const getHeroeByOwner = (owner) => {
  return heroes.filter((ele) => ele.owner === owner);
};

//console.log(getHeroeById(3));

//console.log(getHeroeByOwner("Marvel"));

//console.log(owners);


