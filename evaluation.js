function show(val) {
  document.getElementById("disp-field").value = val;
}

function values(val) {
  document.getElementById("disp-field").value += val;
}

function result() {
  try {
    show(eval(document.getElementById("disp-field").value));
  } catch (result) {
    show("Error");
  }
}
