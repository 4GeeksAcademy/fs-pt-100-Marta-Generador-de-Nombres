import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our', 'his', 'their'];
  let adj = ['great', 'big', 'amazing', 'silly'];
  let noun = ['jogger', 'racoon', 'uncle', 'brother'];
  const dominio = ['.com', '.net', '.us', '.io'];

  pronoun.forEach(pro => {
    adj.forEach(ad => {
      noun.forEach(no => {
        dominio.forEach(dom => {
          console.log(`${pro}${ad}${no}${dom}`);
        });
      });
    });
  });
};
