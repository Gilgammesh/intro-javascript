// Funcion en JS

const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

const saludar1 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => `Hola ${nombre}`;

console.log(saludar("Carlos"));
console.log(saludar1("Santander"));
console.log(saludar2("Goku"));

const getUser = () => {
  return {
    id: "ABAS",
    user: "asdadad",
  };
};

const getUser1 = () => ({
  id: "ABAS",
  user: "asdadad",
});

console.log(getUser());
console.log(getUser1());

// Tarea
// 1. Transformar a funcion flecha
// 2. Tiene que retornar un objeto implícito
// 3. Probar o testear
function getUsuarioActivo(nombre) {
  return {
    uid: "ABC567",
    username: nombre,
  };
}

const getUsuarioActivo1 = (username) => ({ uid: "ABC567", username });

const usuarioActivo = getUsuarioActivo("Carlos");
const usuarioActivo1 = getUsuarioActivo1("Carlos1");
console.log(usuarioActivo);
console.log(usuarioActivo1);
