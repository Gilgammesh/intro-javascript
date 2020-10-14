const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , ele3] = personajes;
console.log(ele3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. el primer valor del arreglo se llamara nombre
// 2. el segundo valor del arreglo se llamara setNombre

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();
