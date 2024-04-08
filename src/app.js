import "bootstrap";

import "./style.css";

import "./assets/img/rigo-baby.jpg";

import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};

let excuseGenerator = () => {
  let pronoun = ["¡El(la)", "¡Un(a)"];
  let subject = ["Adulto", "Mascota", "Maestra", "Señor(a)"];
  let action = ["se le cayeron", "se comio", "asigno", "compró"];
  let possetion = [
    "en las escaleras",
    "Vehiculo",
    "las Tareas",
    "un Refresco",
    "las llaves"
  ];
  let where = ["del colegio", "en la casa", "en la clase", "en la tienda"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let possIndx = Math.floor(Math.random() * possetion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actionIndx] +
    " " +
    possetion[possIndx] +
    " " +
    where[whereIndx]
  );
};
