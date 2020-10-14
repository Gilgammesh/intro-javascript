// Desestructuracion de objetos en JS

const persona = {
  nombre: "Tony",
  edad: 45,
  codigo: "Ironman",
};

//const { nombre, edad, codigo } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(codigo);

const useContext = ({ nombre, edad, codigo, rango = "Capitan" }) => {
  //console.log(nombre, edad, rango);
  return {
    nombreClave: codigo,
    anios: edad,
    latlng: {
      lat: 14.12,
      lng: -12.32,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContext(persona);

console.log(nombreClave, anios, lat, lng);
