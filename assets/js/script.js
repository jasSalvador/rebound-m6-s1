const mascotasJson = require("./animales.json");
console.log(mascotasJson);

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let mascotas = mascotasJson.mascotas;
            resolve(mascotas);
        }, 1000);
    });
};

const crearMascota = (nombre, mascota, animal, edadHumana) => {
    return new Promise((resolve, reject) => {
        let nuevaMascota = {
            nombre,
            mascota,
            animal,
            edadHumana,
        };
        setTimeout(() => {
            resolve(nuevaMascota);
        }, 500);
    });
};

const mostrarDatos = async () => {
    let animales = await getData();
    console.log("Array antes de modificar:");
    console.table(animales);
    console.log("Cantidad de elementos: ", animales.length);
    console.log("*******************************************");
    console.log("Creando mascota...");
    let nuevaMascota = await crearMascota("Cachupin", "true", "Perro", "5");
    console.log("Se ha creado la siguiente mascota:");
    console.table(nuevaMascota);
    console.log("*******************************************");
    animales.push(nuevaMascota);
    console.log("Array después de modificar:");
    console.table(animales);
    console.log("Cantidad de elementos: ", animales.length);
};

mostrarDatos();
