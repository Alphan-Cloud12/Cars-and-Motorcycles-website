const buttonClickAlert = (elementId, carName) => {
  const button = document.getElementById(elementId);
  button.addEventListener("click", () =>
    alert(carName, " To see this car in action, click here!")
  );
};

const addCarImage = () => {
  const address = prompt(
    "Enter the address of image of the car you would like to add!> "
  );
  const image = document.createElement("img");
  image.id = "gasCarImage";
  const div = document.getElementById("gasCarDiv");
  image.src = address;
  div.appendChild(image);
  if (address == undefined) {
    div.removeChild(image);
  } else if (address) {
    const name = prompt("The name of the car image!> ");
    buttonClickAlert(image.id, String(name) + "!");
  }
};

const delGasCarImg = () => {
  const div = document.getElementById("gasCarDiv");
  const image = document.getElementById("gasCarImage");
  div.removeChild(image);
};

const addBikeImage = () => {
  const address = prompt(
    "Enter the address of the motorcycle you would like to add!> "
  );
  const image = document.createElement("img");
  image.id = "gasBikeImage";
  const div = document.getElementById("gasBikeDiv");
  image.src = address;
  div.appendChild(image);
  if (address == undefined) {
    div.removeChild(image);
  } else if (address) {
    const name = prompt("The name the motorcycle image!> ");
    buttonClickAlert(image.id, String(name) + "!");
  }
};

const delGasBikeImage = () => {
  const div = document.getElementById("gasBikeDiv");
  const image = document.getElementById("gasBikeImage");
  div.removeChild(image);
};

const addElectricCarImage = () => {
  const address = prompt(
    "Enter the address of the image of the car you would like to add!> "
  );
  const image = document.createElement("img");
  image.id = "electricCarImage";
  const div = document.getElementById("electricCarDiv");
  image.src = address;
  div.appendChild(image);
  if (address == undefined) {
    div.removeChild(image);
  } else if (address) {
    const name = prompt("The name of the electric car!> ");
    buttonClickAlert(image.id, String(name) + "!");
  }
};

const delElectricCarImage = () => {
  const div = document.getElementById("electricCarDiv");
  const image = document.getElementById("electricCarImage");
  div.removeChild(image);
};

const addElectricBikeImage = () => {
  const address = prompt(
    "Enter the address of the image of motorcycle you would like to add!> "
  );
  const image = document.createElement("img");
  image.id = "electricBikeImage";
  const div = document.getElementById("electricBikeDiv");
  image.src = address;
  div.appendChild(image);
  if (address == undefined) {
    div.removeChild(image);
  } else if (address) {
    const name = prompt("The name of the electric bike!> ");
    buttonClickAlert(image.id, String(name) + "!");
  }
};

const delElectricBikeImage = () => {
  const div = document.getElementById("electricBikeDiv");
  const image = document.getElementById("electricBikeImage");
  div.removeChild(image);
};

// Gas Vehicles
buttonClickAlert("chironButton", "Bugatti Chiron!");
buttonClickAlert("aventadorButton", "Lamborghini Aventador!");
buttonClickAlert("jeskoAttackButton", "Koenigsegg Jesko Attack!");
buttonClickAlert("Ninjah2rButton", "Kawasaki Ninja h2r!");
buttonClickAlert("MTT420-RRButton", "MTT 420-RR!");
buttonClickAlert("henesseyVenomButton", "Henessey Venom");
buttonClickAlert("supraButton", "Toyota Supra!");
buttonClickAlert("amgButton", "Mercedes Benz AMG!");

// Electric Vehicles
buttonClickAlert("deusVayenneButton", "Deus Vayenne!");
buttonClickAlert("voxanWattmanButton", "Voxan Wattman");
buttonClickAlert("tataNexonEVButton", "Tata Nexon EV");
buttonClickAlert("rollsRoyceEVButton", "Rolls Royce Spectre");
buttonClickAlert("bmwi7Button", "BMW i7");
buttonClickAlert("tesla3Button", "Tesla Model 3");
buttonClickAlert("bmwCButton", "BMW C Evolution");
buttonClickAlert("livewireButton", "Harley Davidson Livewire");
buttonClickAlert("zeroSrfButton", "Zero SR/F");
buttonClickAlert("arcVectorButton", "Arc Vector");
buttonClickAlert("porscheTaycanButton", "Porsche Taycan");
buttonClickAlert("hayabusaButton", "Suzuki Hayabusa");
buttonClickAlert("corvetteButton", "Chevorlet Corvette");
buttonClickAlert("enzoButton", "Ferrari Enzo");
