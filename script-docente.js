const mapaDeValores = {
  pensamientoCritico: {
    conocimiento: null,
    metodo: null,
  },
};
const mapaDeMedallas = {
  plata: 0,
  bronce: 1,
  oro: 2,
};

function obtenerNombreDeMedalla(numeroDeMedalla) {
  if (numeroDeMedalla === 0) {
    return "plata";
  } else if (numeroDeMedalla === 1) {
    return "bronce";
  } else if (numeroDeMedalla === 2) {
    return "oro";
  }
  return "medalla no es valida";
}

function actualizarResultados(
  areaDeEvaluacion,
  idDelContenedorDeLosResultados
) {
  const elementoDeResultados = document.getElementById(
    idDelContenedorDeLosResultados
  );
  const contenedoresDeResultados =
    elementoDeResultados.getElementsByTagName("span");

  // elementos html en javascript
  const resultadoPlataDom = contenedoresDeResultados[0];
  const resultadoBronceDom = contenedoresDeResultados[1];
  const resultadoOroDom = contenedoresDeResultados[2];

  // el area de evaluacion en el mapa de valores
  const resultadosDelArea = mapaDeValores[areaDeEvaluacion];

  // medallas obtenidas
  const resultadoConocimiento = resultadosDelArea.conocimiento;
  const resultadoMetodo = resultadosDelArea.metodo;

  const bolsaDeMedallas = [resultadoConocimiento, resultadoMetodo];

  let totalDePlatas = 0,
    totalDeBronces = 0,
    totalDeOros = 0;

  // obtenemos el valor de cada medalla
  for (const medalla of bolsaDeMedallas) {
    if (medalla === "plata") {
      totalDePlatas++;
    } else if (medalla === "bronce") {
      totalDeBronces++;
    } else if (medalla === "oro") {
      totalDeOros++;
    }

    resultadoPlataDom.innerHTML = totalDePlatas;
    resultadoBronceDom.innerHTML = totalDeBronces;
    resultadoOroDom.innerHTML = totalDeOros;
  }

  console.log(elementosDeLosResultados);
}

function anadirEventosARadios(
  nombreDeLosBotones,
  areaDeEvaluacion,
  topicoAEvaluar,
  idDelContenedorDeLosResultados
) {
  const botonesPensamientCriticoConocimiento =
    document.getElementsByName(nombreDeLosBotones);
  for (
    let medallaIndex = 0;
    medallaIndex < botonesPensamientCriticoConocimiento.length;
    medallaIndex++
  ) {
    const radioButton = botonesPensamientCriticoConocimiento[medallaIndex];

    radioButton.addEventListener("change", function () {
      const nombreDeMedalla = obtenerNombreDeMedalla(medallaIndex);
      mapaDeValores[areaDeEvaluacion][topicoAEvaluar] = nombreDeMedalla;
      actualizarResultados(areaDeEvaluacion, idDelContenedorDeLosResultados);
    });
  }
}

anadirEventosARadios(
  "pensamiento_critico_conocimiento",
  "pensamientoCritico",
  "conocimiento",
  "pc3"
);

anadirEventosARadios(
  "pensamiento_critico_metodo",
  "pensamientoCritico",
  "metodo",
  "pc3"
);
 