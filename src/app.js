/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["My dog", "Rigo", "Pikachu", "Voldemort"];
  let action = [" cried", " burned", " stole", " broke"];
  let what = [" my shorts", " my food", " my homework", " my hair"];
  let when = [" last week", " this morning", " yesterday noon"];

  let who1 = Math.floor(Math.random() * (who.length - 1) + 1);
  let action1 = Math.floor(Math.random() * (action.length - 1) + 1);
  let what1 = Math.floor(Math.random() * (what.length - 1) + 1);
  let when1 = Math.floor(Math.random() * (when.length - 1) + 1);
  return who[who1] + action[action1] + what[what1] + when[when1];
};
