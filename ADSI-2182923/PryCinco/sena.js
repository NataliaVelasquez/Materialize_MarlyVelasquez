/* Imprimir mensaje desde la consola*/
console.log("Hola");
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
  
$(document).ready(function() {
    M.updateTextFields();
  });