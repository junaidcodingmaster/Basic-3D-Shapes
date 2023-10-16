// made By Junaid

function getRandomHexColor() {

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor.padStart(6, '0');

  }
  
function changeColorOfShapes() {

    let cube =          document.querySelector('#cube')
    let sphere =        document.querySelector('#sphere')
    let cylinder =      document.querySelector('#cylinder')
    let cone =          document.querySelector('#cone')
    let octahedron =    document.querySelector('#octahedron')
    let ring =          document.querySelector('#ring')
    let icosahedron =   document.querySelector('#icosahedron')

     cube           .setAttribute('color', getRandomHexColor());
     sphere         .setAttribute('color', getRandomHexColor()); 
     cylinder       .setAttribute('color', getRandomHexColor());
     cone           .setAttribute('color', getRandomHexColor());
     octahedron     .setAttribute('color', getRandomHexColor());
     ring           .setAttribute('color', getRandomHexColor());
     icosahedron    .setAttribute('color', getRandomHexColor());

     console.log("color changed.")

}
  