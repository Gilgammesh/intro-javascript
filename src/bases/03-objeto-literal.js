const persona = {
  nombre: "Carlos",
  apellido: "Santander",
  edad: 38,
  direccion: {
    ciudad: "New York",
    zip: 511231,
    lat: 14.3232,
    lng: 34.92311,
  },
};

console.log({ persona });

const persona1 = { ...persona };

console.log({ persona1 });
