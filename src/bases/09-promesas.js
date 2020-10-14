import { getHeroeById } from "./08-import-export";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {    
    const heroe = getHeroeById(2);
    resolve(heroe);
    //reject("No se puedo encontrar el heroe");
  }, 4000);
});

promesa
  .then((heroe) => {
    console.log("then de la promesa, 4 segundos después");
    console.log(heroe);
  })
  .catch((err) => {
    console.warn(err);
  }); */

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se puedo encontrar el heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(2)
  //.then((heroe) => console.log(heroe))
  .then(console.log)
  //.catch((err) => console.warn(err));
  .catch(console.warn);
