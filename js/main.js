let init = () => {
  /* ------------------------- Variables del proyecto ------------------------- */
  let btnSuma = document.getElementById("suma"),
    btnResta = document.getElementById("resta"),
    btnMultiplicacion = document.getElementById("multiplicacion"),
    btnDivision = document.getElementById("division"),
    btnResto = document.getElementById("resto"),
    btnPotencia = document.getElementById("potencia"),
    btnResult = document.getElementById("resultado_final"),
    btnLimpiar = document.getElementById("limpiar"),
    textView = document.getElementById("textView"),
    array = [],
    resultado_final = document.getElementById("resultado_final");

  /* ------------------- Funciones a utilizar en el proyecto ------------------ */
  //Funcion para la suma
  function suma(...rest) {
    let suma = textView.innerHTML.indexOf("+");
    if (suma !== -1) {
      array = textView.innerHTML.split("+", 2);
      suma = parseInt(array[0]) + parseInt(array[1]);
      textView.innerHTML = suma;
    }
  }
  //Funcion para la resta
  function resta(...rest) {
    let resta = textView.innerHTML.indexOf("-");
    if (resta !== -1) {
      array = textView.innerHTML.split("-", 2);
      resta = parseInt(array[0]) - parseInt(array[1]);
      textView.innerHTML = resta;
    }
  }
  //Funcion para la multiplicacion
  function multiplicacion(...rest) {
    let multiplicacion = textView.innerHTML.indexOf("x");
    if (multiplicacion !== -1) {
      array = textView.innerHTML.split("x", 2);
      multiplicacion = parseInt(array[0]) * parseInt(array[1]);
      textView.innerHTML = multiplicacion;
    }
  }
  //Funcion para la division
  function division(...rest) {
    let division = textView.innerHTML.indexOf("/");
    if (division !== -1) {
      array = textView.innerHTML.split("/", 2);
      division = parseInt(array[0]) / parseInt(array[1]);
      textView.innerHTML = division;
    }
  }
  //Funcion para el resto
  function resto(...rest) {
    let resto = textView.innerHTML.indexOf("%");
    if (resto !== -1) {
      array = textView.innerHTML.split("%", 2);
      resto = parseInt(array[0]) % parseInt(array[1]);
      textView.innerHTML = resto;
    }
  }
  //Funcion para la potencia
  function potencia(...rest) {
    let potencia = textView.innerHTML.indexOf("^");
    if (potencia !== -1) {
      array = textView.innerHTML.split("^", 2);
      potencia = Math.pow(parseInt(array[0]), parseInt(array[1]));
      textView.innerHTML = potencia;
    }
  }

  //Funcion para mostrar los numeros en el textview
  function textViewFunction() {
    let generalButtons = document.getElementsByTagName("button");
    for (let i = 0; i < generalButtons.length; i++) {
      generalButtons[i].addEventListener("click", (e) => {
        e.preventDefault();
        textView.innerHTML = textView.textContent + generalButtons[i].value;
      });
    }
  }

  /* ---------------------- Eventos a usar en el proyecto --------------------- */
  btnSuma.addEventListener("click", suma);
  btnResta.addEventListener("click", resta);
  btnMultiplicacion.addEventListener("click", multiplicacion);
  btnDivision.addEventListener("click", division);
  btnResto.addEventListener("click", resto);
  btnPotencia.addEventListener("click", potencia);

  //Evento para limpiar el textview
  btnLimpiar.addEventListener("click", (e) => {
    e.preventDefault();
    textView.innerHTML = "";
  });

  //Evento para mostrar el resultado final
  resultado_final.addEventListener("click", (e) => {
    e.preventDefault();
    suma();
    resta();
    multiplicacion();
    division();
    resto();
    potencia();
  });

  textViewFunction();
};

init();
