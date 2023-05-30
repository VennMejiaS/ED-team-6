//Pensamiento
const mapaDeValoresPen = {
    pensamientoCritico: {
      conocimiento: null,
      metodo: null,
    },
  };
  const mapaDeMedallasPen = {
    plataPen: 0,
    broncePen: 1,
    oroPen: 2,
  };
  
  function obtenerNombreDeMedallaPen(numeroDeMedallaPen) {
    if (numeroDeMedallaPen === 0) {
      return "plata";
    } else if (numeroDeMedallaPen === 1) {
      return "bronce";
    } else if (numeroDeMedallaPen === 2) {
      return "oro";
    }
    return "medalla no es valida";
  }
  
  function actualizarResultadosPen(
    areaDeEvaluacionPen,
    idDelContenedorDeLosResultadosPen
  ) {
    const elementoDeResultadosPen = document.getElementById(
      idDelContenedorDeLosResultadosPen
    );
    const contenedoresDeResultadosPen =
      elementoDeResultadosPen.getElementsByTagName("span");
  
    // elementos html en javascript
    const resultadoPlataDom = contenedoresDeResultadosPen[0];
    const resultadoBronceDom = contenedoresDeResultadosPen[1];
    const resultadoOroDom = contenedoresDeResultadosPen[2];
  
    // el area de evaluacion en el mapa de valores
    const resultadosDelAreaPen = mapaDeValoresPen[areaDeEvaluacionPen];
  
    // medallas obtenidas
    const resultadoConocimientoPen = resultadosDelAreaPen.conocimiento;
    const resultadoMetodoPen = resultadosDelAreaPen.metodo;
  
    const bolsaDeMedallasPen = [resultadoConocimientoPen, resultadoMetodoPen];
  
    let totalDePlatas = 0,
      totalDeBronces = 0,
      totalDeOros = 0;
  
    // obtenemos el valor de cada medalla
    for (const medalla of bolsaDeMedallasPen) {
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
  
    console.log(elementosDeLosResultadosPen);
  }
  
  function anadirEventosARadiosPen(
    nombreDeLosBotones,
    areaDeEvaluacion,
    topicoAEvaluar,
    idDelContenedorDeLosResultados
  ) {
    const botonesPensamientoCriticoConocimiento =
      document.getElementsByName(nombreDeLosBotones);
    for (
      let medallaIndex = 0;
      medallaIndex < botonesPensamientoCriticoConocimiento.length;
      medallaIndex++
    ) {
      const radioButton = botonesPensamientoCriticoConocimiento[medallaIndex];
  
        radioButton.addEventListener("change", function () {
        const NombreDeMedallaPen = obtenerNombreDeMedallaPen(medallaIndex);
        mapaDeValoresPen[areaDeEvaluacion][topicoAEvaluar] = NombreDeMedallaPen;
        actualizarResultadosPen(areaDeEvaluacion, idDelContenedorDeLosResultados);
      });
    }
  }
  
  anadirEventosARadiosPen(
    "pensamiento_critico_conocimiento",
    "pensamientoCritico",
    "conocimiento",
    "pc3"
  );
  
  anadirEventosARadiosPen(
    "pensamiento_critico_metodo",
    "pensamientoCritico",
    "metodo",
    "pc3"
  );
  
//Comunicación
const mapaDeValoresCom = {
    habilidadComunicacion: {
      activa: null,
      expresion: null,
    },
  };
  const mapaDeMedallasCom = {
    plata: 0,
    bronce: 1,
    oro: 2,
  };
  
  function obtenerNombreDeMedallaCom(numeroDeMedalla) {
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
    const resultadosDelArea = mapaDeValoresCom[areaDeEvaluacion];
  
    // medallas obtenidas
    const resultadoActiva = resultadosDelArea.activa;
    const resultadoExpresion = resultadosDelArea.expresion;
  
    const bolsaDeMedallas = [resultadoActiva, resultadoExpresion];
  
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
    const botonesHabilidadConocimientoActiva =
      document.getElementsByName(nombreDeLosBotones);
    for (
      let medallaIndex = 0;
      medallaIndex < botonesHabilidadConocimientoActiva.length;
      medallaIndex++
    ) {
      const radioButton = botonesHabilidadConocimientoActiva[medallaIndex];
  
      radioButton.addEventListener("change", function () {
        const nombreDeMedalla = obtenerNombreDeMedallaCom(medallaIndex);
        mapaDeValoresCom[areaDeEvaluacion][topicoAEvaluar] = nombreDeMedalla;
        actualizarResultados(areaDeEvaluacion, idDelContenedorDeLosResultados);
      });
    }
  }
  
  anadirEventosARadios(
    "comunicacion_activa",
    "habilidadComunicacion",
    "activa",
    "hc6"
  );
  
  anadirEventosARadios(
    "comunicacion_expresion",
    "habilidadComunicacion",
    "expresion",
    "hc6"
  );

//Trabajo
const mapaDeValoresTra = {
    trabajoColaborativo: {
      inquietudes: null,
      compromisos: null,
    },
  };
  const mapaDeMedallasTra = {
    plataTra: 0,
    bronceTra: 1,
    oroTra: 2,
  };
  
  function obtenerNombreDeMedallaTra(numeroDeMedallaTra) {
    if (numeroDeMedallaTra === 0) {
      return "plata";
    } else if (numeroDeMedallaTra === 1) {
      return "bronce";
    } else if (numeroDeMedallaTra === 2) {
      return "oro";
    }
    return "medalla no es valida";
  }
  
  function actualizarResultadosTra(
    areaDeEvaluacionTra,
    idDelContenedorDeLosResultadosTra
  ) {
    const elementoDeResultadosTra = document.getElementById(
      idDelContenedorDeLosResultadosTra
    );
    const contenedoresDeResultadosTra =
      elementoDeResultadosTra.getElementsByTagName("span");
  
    // elementos html en javascript
    const resultadoPlataDom = contenedoresDeResultadosTra[0];
    const resultadoBronceDom = contenedoresDeResultadosTra[1];
    const resultadoOroDom = contenedoresDeResultadosTra[2];
  
    // el area de evaluacion en el mapa de valores
    const resultadosDelAreaTra = mapaDeValoresTra[areaDeEvaluacionTra];
  
    // medallas obtenidas
    const resultadoInquietudesTra = resultadosDelAreaTra.inquietudes;
    const resultadoCompromisosTra = resultadosDelAreaTra.compromisos;
  
    const bolsaDeMedallasTra = [resultadoInquietudesTra, resultadoCompromisosTra];
  
    let totalDePlatas = 0,
      totalDeBronces = 0,
      totalDeOros = 0;
  
    // obtenemos el valor de cada medalla
    for (const medalla of bolsaDeMedallasTra) {
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
  
    console.log(elementosDeLosResultadosTra);
  }
  
  function anadirEventosARadiosTra(
    nombreDeLosBotones,
    areaDeEvaluacion,
    topicoAEvaluar,
    idDelContenedorDeLosResultados
  ) {
    const botonesTrabajoColaborativoInquietudes =
      document.getElementsByName(nombreDeLosBotones);
    for (
      let medallaIndex = 0;
      medallaIndex < botonesTrabajoColaborativoInquietudes.length;
      medallaIndex++
    ) {
      const radioButton = botonesTrabajoColaborativoInquietudes[medallaIndex];
  
        radioButton.addEventListener("change", function () {
        const NombreDeMedallaTra = obtenerNombreDeMedallaTra(medallaIndex);
        mapaDeValoresTra[areaDeEvaluacion][topicoAEvaluar] = NombreDeMedallaTra;
        actualizarResultadosTra(areaDeEvaluacion, idDelContenedorDeLosResultados);
      });
    }
  }
  
  anadirEventosARadiosTra(
    "trabajo_colaborativo_inquietudes",
    "trabajoColaborativo",
    "inquietudes",
    "tc9"
  );
  
  anadirEventosARadiosTra(
    "trabajo_colaborativo_compromisos",
    "trabajoColaborativo",
    "compromisos",
    "tc9"
  );

  //Creatividad
const mapaDeValoresCre = {
    habilidadCreatividad: {
      visuales: null,
      perspectiva: null,
    },
  };
  const mapaDeMedallasCre = {
    plataCre: 0,
    bronceCre: 1,
    oroCre: 2,
  };
  
  function obtenerNombreDeMedallaCre(numeroDeMedallaCre) {
    if (numeroDeMedallaCre === 0) {
      return "plata";
    } else if (numeroDeMedallaCre === 1) {
      return "bronce";
    } else if (numeroDeMedallaCre === 2) {
      return "oro";
    }
    return "medalla no es valida";
  }
  
  function actualizarResultadosCre(
    areaDeEvaluacionCre,
    idDelContenedorDeLosResultadosCre
  ) {
    const elementoDeResultadosCre = document.getElementById(
      idDelContenedorDeLosResultadosCre
    );
    const contenedoresDeResultadosCre =
      elementoDeResultadosCre.getElementsByTagName("span");
  
    // elementos html en javascript
    const resultadoPlataDom = contenedoresDeResultadosCre[0];
    const resultadoBronceDom = contenedoresDeResultadosCre[1];
    const resultadoOroDom = contenedoresDeResultadosCre[2];
  
    // el area de evaluacion en el mapa de valores
    const resultadosDelAreaCre = mapaDeValoresCre[areaDeEvaluacionCre];
  
    // medallas obtenidas
    const resultadoVisualesCre = resultadosDelAreaCre.visuales;
    const resultadoPerspectivaCre = resultadosDelAreaCre.perspectiva;
  
    const bolsaDeMedallasCre = [resultadoVisualesCre, resultadoPerspectivaCre];
  
    let totalDePlatas = 0,
      totalDeBronces = 0,
      totalDeOros = 0;
  
    // obtenemos el valor de cada medalla
    for (const medalla of bolsaDeMedallasCre) {
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
  
    console.log(elementosDeLosResultadosCre);
  }
  
  function anadirEventosARadiosCre(
    nombreDeLosBotones,
    areaDeEvaluacion,
    topicoAEvaluar,
    idDelContenedorDeLosResultados
  ) {
    const botonesHabilidadCreatividadVisuales =
      document.getElementsByName(nombreDeLosBotones);
    for (
      let medallaIndex = 0;
      medallaIndex < botonesHabilidadCreatividadVisuales.length;
      medallaIndex++
    ) {
      const radioButton = botonesHabilidadCreatividadVisuales[medallaIndex];
  
        radioButton.addEventListener("change", function () {
        const NombreDeMedallaCre = obtenerNombreDeMedallaCre(medallaIndex);
        mapaDeValoresCre[areaDeEvaluacion][topicoAEvaluar] = NombreDeMedallaCre;
        actualizarResultadosCre(areaDeEvaluacion, idDelContenedorDeLosResultados);
      });
    }
  }
  
  anadirEventosARadiosCre(
    "creatividad_visuales",
    "habilidadCreatividad",
    "visuales",
    "cr12"
  );
  
  anadirEventosARadiosCre(
    "creatividad_perspectiva",
    "habilidadCreatividad",
    "perspectiva",
    "cr12"
  );

  function cargarVideo(videoId) {
    var videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '<iframe width="429" height="270" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
  }

//Total de medallas
const mapaDeValoresTot = {
  totalMedallas: {
    conocimiento: null,
    metodo: null,
    activa: null,
    expresion: null,
    inquietudes: null,
    compromisos: null,
    visuales: null,
    perspectiva: null,
  },
};
const mapaDeMedallasTot = {
  plataTot: 0,
  bronceTot: 1,
  oroTot: 2,
};

function obtenerNombreDeMedallaTot(numeroDeMedallaTot) {
  if (numeroDeMedallaTot === 0) {
    return "plata";
  } else if (numeroDeMedallaTot === 1) {
    return "bronce";
  } else if (numeroDeMedallaTot === 2) {
    return "oro";
  }
  return "medalla no es valida";
}

function actualizarResultadosTot(
  areaDeEvaluacionTot,
  idDelContenedorDeLosResultadosTot
) {
  const elementoDeResultadosTot = document.getElementById(
    idDelContenedorDeLosResultadosTot
  );
  const contenedoresDeResultadosTot =
    elementoDeResultadosTot.getElementsByTagName("span");

  // elementos html en javascript
  const resultadoPlataDom = contenedoresDeResultadosTot[0];
  const resultadoBronceDom = contenedoresDeResultadosTot[1];
  const resultadoOroDom = contenedoresDeResultadosTot[2];

  // el area de evaluacion en el mapa de valores
  const resultadosDelAreaTot = mapaDeValoresTot[areaDeEvaluacionTot];

  // medallas obtenidas
  const resultadoConocimientoTot = resultadosDelAreaTot.conocimiento;
  const resultadoMetodoTot = resultadosDelAreaTot.metodo;
  const resultadoActivaTot = resultadosDelAreaTot.activa;
  const resultadoExpresionTot = resultadosDelAreaTot.expresion;
  const resultadoInquietudesTot = resultadosDelAreaTot.inquietudes;
  const resultadoCompromisosTot = resultadosDelAreaTot.compromisos; 
  const resultadoVisualesTot = resultadosDelAreaTot.visuales;
  const resultadoPerspectivaTot = resultadosDelAreaTot.perspectiva;

  const bolsaDeMedallasTot = [resultadoConocimientoTot, resultadoMetodoTot, resultadoActivaTot, resultadoExpresionTot, resultadoInquietudesTot, resultadoCompromisosTot, resultadoVisualesTot, resultadoPerspectivaTot];

  let totalDePlatas = 0,
    totalDeBronces = 0,
    totalDeOros = 0;

  // obtenemos el valor de cada medalla
  for (const medalla of bolsaDeMedallasTot) {
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

  console.log(elementosDeLosResultadosTot);
}

function anadirEventosARadiosTot(
  nombreDeLosBotones,
  areaDeEvaluacion,
  topicoAEvaluar,
  idDelContenedorDeLosResultados
) {
  const botonesTotalTarjetas =
    document.getElementsByName(nombreDeLosBotones);
  for (
    let medallaIndex = 0;
    medallaIndex < botonesTotalTarjetas.length;
    medallaIndex++
  ) {
    const radioButton = botonesTotalTarjetas[medallaIndex];

      radioButton.addEventListener("change", function () {
      const NombreDeMedallaTot = obtenerNombreDeMedallaTot(medallaIndex);
      mapaDeValoresTot[areaDeEvaluacion][topicoAEvaluar] = NombreDeMedallaTot;
      actualizarResultadosTot(areaDeEvaluacion, idDelContenedorDeLosResultados);
    });
  }
}

anadirEventosARadiosTot(
  "pensamiento_critico_conocimiento",
  "totalMedallas",
  "conocimiento",
  "tct"
);

anadirEventosARadiosTot(
  "pensamiento_critico_metodo",
  "totalMedallas",
  "metodo",
  "tct"
);

anadirEventosARadiosTot(
  "comunicacion_activa",
  "totalMedallas",
  "activa",
  "tct"
);

anadirEventosARadiosTot(
  "comunicacion_expresion",
  "totalMedallas",
  "expresion",
  "tct"
);

anadirEventosARadiosTot(
  "trabajo_colaborativo_inquietudes",
  "totalMedallas",
  "inquietudes",
  "tct"
);

anadirEventosARadiosTot(
  "trabajo_colaborativo_compromisos",
  "totalMedallas",
  "compromisos",
  "tct"
);
anadirEventosARadiosTot(
  "creatividad_visuales",
  "totalMedallas",
  "visuales",
  "tct"
);

anadirEventosARadiosTot(
  "creatividad_perspectiva",
  "totalMedallas",
  "perspectiva",
  "tct"
);

// Obtén una referencia al botón de guardar
var guardarBoton = document.getElementById('Save');

// Agrega un evento de clic al botón de guardar
guardarBoton.addEventListener('click', function() {
  // Obtén los valores de los <span>
  var totalPlata = document.getElementById('total-plata').textContent;
  var totalBronce = document.getElementById('total-bronce').textContent;
  var totalOro = document.getElementById('total-oro').textContent;

  // Almacena los datos en el localStorage
  localStorage.setItem('total-plata', totalPlata);
  localStorage.setItem('total-bronce', totalBronce);
  localStorage.setItem('total-oro', totalOro);

  // Notifica al usuario que los datos han sido guardados
  alert('La evaluación ha sido guardada con éxito');
});

var totalPlata = localStorage.getItem('total-plata');
var totalBronce = localStorage.getItem('total-bronce');
var totalOro = localStorage.getItem('total-oro');

document.getElementById('obtenidas-plata').textContent = totalPlata;
document.getElementById('obtenidas-bronce').textContent = totalBronce;
document.getElementById('obtenidas-oro').textContent = totalOro;