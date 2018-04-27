window.onload = function () {
    const nomDiv =div=> document.getElementById(div);
    //suma
    const sumafraccionarios = () => {
        let numeradoruno = nomDiv("numeradoruno").value;
        let numeradordos = nomDiv("numeradordos").value;
        let denominadoruno = nomDiv("denominadoruno").value;
        let denominadordos = nomDiv("denominadordos").value;
        //Espacios vacios en las fracciones.
        if (numeradoruno.length===0 || numeradordos.length===0 || denominadoruno.length===0 || denominadordos.length===0) {
            alert ("Rellena todos los campos");
            nomDiv(numeradoruno.length===0 ? "numeradoruno":denominadoruno.length===0 ? "denominadoruno" : numeradordos.length===0 ? "numeradordos":"denominadordos").focus();
        }
        //denominadores fracciones igual a 0.
        if (denominadoruno==0 || denominadordos==0) {
            alert ("El denominador no puede ser cero");
            nomDiv(denominadoruno==0 ? "denominadoruno" : "denominadordos").focus();
        }
        //Suma general
        else{
            operacion1 = numeradoruno*denominadordos;
            operacion2 = numeradordos*denominadoruno;
            operacion3 = denominadoruno*denominadordos;
            resultado1= operacion1+operacion2;
            resultado2= operacion3;
        }
        //Cuando el numerador de la fracción(1) es 0.
        if (numeradoruno/denominadoruno===0) {
            resultado1= numeradordos*1;
            resultado2= denominadordos*1;
        }
        //Cuando el numerador de la fracción(2) es 0.
        else if(numeradordos/denominadordos===0){   
            resultado1= numeradoruno*1;
            resultado2= denominadoruno*1;
        }
        //Cuando el denominador y el numerador de la Fraccion(1) son iguales.
        else if (numeradoruno/denominadoruno===1) {
            operacion1 = 1*denominadordos;
            operacion2 = 1*numeradordos;
            operacion3 = 1*denominadordos;
            resultado1= operacion1+operacion2;
            resultado2= operacion3;
        }
        //Cuando el denominador y el numerador de la Fraccion(2) son iguales.
        else if (numeradordos/denominadordos===1) {
            operacion1 = 1*numeradoruno;
            operacion2 = 1*denominadoruno;
            operacion3 = 1*denominadoruno;
            resultado1= operacion1+operacion2;
            resultado2= operacion3;
        }
        //Resultado
        if (resultado1/resultado2===resultado1) {
            nomDiv("Resultado").innerHTML = resultado1;
        }else if (resultado1/resultado2===1) {
            nomDiv("Resultado").innerHTML = 1;
        }else {
            nomDiv("Resultado").innerHTML = resultado1 + "/"+ resultado2;
        }
        //*Cuando el numerador y el denominador de ambas Fracciones son iguales.
         if (numeradoruno/denominadoruno===1 && numeradordos/denominadordos===1){
            operacion1 = numeradoruno/denominadoruno;
            operacion2 = numeradordos/denominadordos;
            operacion3 = operacion1+operacion2;
            resultado=operacion3;
            nomDiv("Resultado").innerHTML = resultado;
        }for (i=1;i<1000;i++) {
            if (resultado1%i===0 && resultado2%i===0){
                resultado1simp=resultado1/i;
                resultado2simp=resultado2/i;
            }
            nomDiv("Resultado").innerHTML = resultado1simp + "/" +resultado2simp;
        }
        if (resultado1%resultado2===0) {
            resultado=resultado1/resultado2;
            nomDiv("Resultado").innerHTML = resultado;
        }
    };
    //resta
    const restafraccionarios = () => {
        let numeradoruno = nomDiv("numeradoruno").value;
        let numeradordos = nomDiv("numeradordos").value;
        let denominadoruno = nomDiv("denominadoruno").value;
        let denominadordos = nomDiv("denominadordos").value;
        //Espacios vacios en las fracciones.
        if (numeradoruno.length===0 || numeradordos.length===0 || denominadoruno.length===0 || denominadordos.length===0) {
            alert ("Rellena todos los campos");
            nomDiv(numeradoruno.length===0 ? "numeradoruno":denominadoruno.length===0 ? "denominadoruno" : numeradordos.length===0 ? "numeradordos":"denominadordos").focus();
        }
        //denominadores fracciones igual a 0.
        if (denominadoruno==0 || denominadordos==0) {
            alert ("El denominador no puede ser cero");
            nomDiv(denominadoruno==0 ? "denominadoruno" : "denominadordos").focus();
        }
        //Resta general
        else{
            operacion1 = numeradoruno*denominadordos;
            operacion2 = numeradordos*denominadoruno;
            operacion3 = denominadoruno*denominadordos;
            resultado1= operacion1-operacion2;
            resultado2= operacion3;
        }
        //Cuando el numerador de la fracción(1) es 0.
        if (numeradoruno/denominadoruno===0) {
            resultado1= numeradordos*-1;
            resultado2= denominadordos*1;
        }
        //Cuando el numerador de la fracción(2) es 0.
        else if(numeradordos/denominadordos===0){   
            resultado1= numeradoruno*1;
            resultado2= denominadoruno*1;
        }
        //Cuando el denominador y el numerador de la Fraccion(1) son iguales.
        else if (numeradoruno/denominadoruno===1) {
            operacion1 = 1*denominadordos;
            operacion2 = 1*numeradordos;
            operacion3 = 1*denominadordos;
            resultado1= operacion1-operacion2;
            resultado2= operacion3;
        }
        //Cuando el denominador y el numerador de la Fraccion(2) son iguales.
        else if (numeradordos/denominadordos===1) {
            operacion1 = -1*numeradoruno;
            operacion2 = -1*denominadoruno;
            operacion3 = -1*denominadoruno;
            resultado1= operacion1-operacion2;
            resultado2= operacion3;
        }
        //Resultado
        if (resultado1/resultado2===resultado1) {
            nomDiv("Resultado").innerHTML = resultado1;
        }else if (resultado1/resultado2===1) {
            nomDiv("Resultado").innerHTML = 1;
        }else {
            nomDiv("Resultado").innerHTML = resultado1 + "/"+ resultado2;
        }
        //*Cuando el numerador y el denominador de ambas Fracciones son iguales.
        if (numeradoruno/denominadoruno===1 && numeradordos/denominadordos===1){
            operacion1 = numeradoruno/denominadoruno;
            operacion2 = numeradordos/denominadordos;
            operacion3 = operacion1-operacion2;
            resultado=operacion3;
            nomDiv("Resultado").innerHTML = resultado;
        }for (i=1;i<1000;i++) {
            if (resultado1%i===0 && resultado2%i===0){
                resultado1simp=resultado1/i;
                resultado2simp=resultado2/i;
            }
            nomDiv("Resultado").innerHTML = resultado1simp + "/" +resultado2simp;
        }
        if (resultado1%resultado2===0) {
            resultado=resultado1/resultado2;
            nomDiv("Resultado").innerHTML = resultado;
        }
    };
    const multiplicacionfraccionarios = () => {
        let numeradoruno = nomDiv("numeradoruno").value;
        let numeradordos = nomDiv("numeradordos").value;
        let denominadoruno = nomDiv("denominadoruno").value;
        let denominadordos = nomDiv("denominadordos").value;
        //Cuando no se rellenan todos los campos
        if (numeradoruno.length===0 || numeradordos.length===0 || denominadoruno.length===0 || denominadordos.length===0) {
            alert ("Rellena todos los campos");
            nomDiv(numeradoruno.length===0 ? "numeradoruno":denominadoruno.length===0 ? "denominadoruno" : numeradordos.length===0 ? "numeradordos":"denominadordos").focus();
        }
        //Cuando los denominadores son 0 en cualquiera de las fracciones
        if (denominadoruno==0 || denominadordos==0) {
            alert ("El denominador no puede ser cero");
            nomDiv(denominadoruno==0 ? "denominadoruno" : "denominadordos").focus();
        }
        //Multiplicacion
        else {
            resultado1= numeradoruno*numeradordos;
            resultado2= denominadoruno*denominadordos;
        }
        //Cuando los denominadores son 1 en ambas fracciones
        if (denominadoruno==1 && denominadordos==1){
            resultado=numeradoruno*numeradordos; 
            nomDiv("Resultado").innerHTML = resultado;
        }else if (numeradoruno/denominadoruno===1) {
            resultado1=numeradordos*1;
            resultado2=denominadordos*1;
  
        }else if (numeradordos/denominadordos===1) {
            resultado1=numeradoruno*1;
            resultado2=denominadoruno*1;
        }
      //Resultado
        if (resultado1/resultado2===resultado1) {
            nomDiv("Resultado").innerHTML = resultado1;
        }else if (resultado1/resultado2===1) {
            nomDiv("Resultado").innerHTML = 1;
        }else {
            nomDiv("Resultado").innerHTML = resultado1 + "/"+ resultado2;
        } 
        //*Cuando el numerador y el denominador de ambas Fracciones son iguales.
        if (numeradoruno/denominadoruno===1 && numeradordos/denominadordos===1){
            operacion1 = numeradoruno/denominadoruno;
            operacion2 = numeradordos/denominadordos;
            operacion3 = operacion1*operacion2;
            resultado=operacion3;
            nomDiv("Resultado").innerHTML = resultado;
        }for (i=1;i<1000;i++) {
            if (resultado1%i===0 && resultado2%i===0){
                resultado1simp=resultado1/i;
                resultado2simp=resultado2/i;
            }
            nomDiv("Resultado").innerHTML = resultado1simp + "/" +resultado2simp;
        }
        if (resultado1%resultado2===0) {
            resultado=resultado1/resultado2;
            nomDiv("Resultado").innerHTML = resultado;
        } 
        //Cuando los numeradores son cero en cualquiera de las fracciones
        if (numeradoruno==0 || numeradordos==0) {
           nomDiv("Resultado").innerHTML=0;
        }    
    };
    const divisionfraccionarios = () => {
        let numeradoruno = nomDiv("numeradoruno").value;
        let numeradordos = nomDiv("numeradordos").value;
        let denominadoruno = nomDiv("denominadoruno").value;
        let denominadordos = nomDiv("denominadordos").value;
        if (numeradoruno.length===0 || numeradordos.length===0 || denominadoruno.length===0 || denominadordos.length===0) {
            alert ("Rellena todos los campos");
            nomDiv(numeradoruno.length===0 ? "numeradoruno":denominadoruno.length===0 ? "denominadoruno" : numeradordos.length===0 ? "numeradordos":"denominadordos").focus();
        }
        if (denominadoruno==0 || denominadordos==0) {
            alert ("El denominador no puede ser cero");
            nomDiv(denominadoruno==0 ? "denominadoruno" : "denominadordos").focus();
        }else {
            resultado1= numeradoruno*denominadordos;
            resultado2= numeradordos*denominadoruno;

        }
         //Cuando los denominadores son 1 en ambas fracciones
         if (denominadoruno==1 && denominadordos==1){
             resultado1=numeradoruno*1;
             resultado2=numeradordos*1;
        }else if (numeradoruno/denominadoruno===1) {
            resultado1=denominadordos*1;
            resultado2=numeradordos*1;
        }else if (numeradordos/denominadordos===1) {
            resultado1=numeradoruno*1;
            resultado2=denominadoruno*1;
        }
      //Resultado
        if (resultado1/resultado2===resultado1) {
            nomDiv("Resultado").innerHTML = resultado1;
        }else if (resultado1/resultado2===1) {
            nomDiv("Resultado").innerHTML = 1;
        }else {
            nomDiv("Resultado").innerHTML = resultado1 + "/"+ resultado2;
        } 
        //*Cuando el numerador y el denominador de ambas Fracciones son iguales.
        if (numeradoruno/denominadoruno===1 && numeradordos/denominadordos===1){
            operacion1 = numeradoruno/denominadoruno;
            operacion2 = numeradordos/denominadordos;
            operacion3 = operacion1/operacion2;
            resultado=operacion3;
            nomDiv("Resultado").innerHTML = resultado;
        }for (i=1;i<1000;i++) {
            if (resultado1%i===0 && resultado2%i===0){
                resultado1simp=resultado1/i;
                resultado2simp=resultado2/i;
            }
            nomDiv("Resultado").innerHTML = resultado1simp + "/" +resultado2simp;
        }
        if (resultado1%resultado2===0) {
            resultado=resultado1/resultado2;
            nomDiv("Resultado").innerHTML = resultado;
        } 
        //Cuando los numeradores son cero en cualquiera de las fracciones
        if (numeradoruno==0 || numeradordos==0) {
           nomDiv("Resultado").innerHTML=0;
        }    

    };
    nomDiv("suma").addEventListener("click", event => {
        sumafraccionarios();
    });
    nomDiv("resta").addEventListener("click", event => {
        restafraccionarios();
    });  
    nomDiv("multiplicacion").addEventListener("click", event => {
        multiplicacionfraccionarios();
    });
    nomDiv("division").addEventListener("click", event => {
        divisionfraccionarios();
    });  
}
