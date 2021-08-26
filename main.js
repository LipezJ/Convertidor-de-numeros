'use strict'

var xd = Number;
var xd1 = String;
var xdv = Number;
var xdvd = Number;
var xdvs = String;
var xdf = Number;
var beta = "";
var alpha = "";
var alpha1 = "";
var result = String;
var v = 0;
var v1 = Number;
var v2 = Number;
var v3 = 0;
var v4 = 0;
var n = 0;

function binario() {

 //obtencion de datos
    xd = document.getElementById("dato").value;
    xd1 = document.getElementById("dato1").value;

 //CALCULADORA

 //DECIMAL A BINARIO
    if (xd1 == "decimal a binario") {

        for (var i = 1; i > 0; i++) {
            xdvd = xd/2;
            xdvd = Math.trunc(xdvd);
            xdv = xd%2;
            xdvs = xdv.toString();

            xd = xdvd;

            beta = beta + xdvs;

            if (xd == 0) {
                break;
            }
        }
 //conversion del resultado
    alpha = beta.split("");
    alpha1 = alpha.reverse();
    result = alpha1.join("");

 //resultado
    document.getElementById("result").innerHTML = result;
        
    }
 //BINARIO A DECIMAL
    if (xd1 == "binario a decimal") {
        
        xdv = xd.toString();
        xdv = xdv.split("");
        xdv = xdv.reverse();
        xdf = xdv.length;
        

        for (let i = 1; i > 0; i++) {            

            v1 = xdv[v];

            v2 = Math.pow(2, n);
            v3 = v1 * v2;

            v4 = v3 + v4;
            beta = v4;
            
            n = n + 1;
            v = v + 1;
            xdf = xdf - 1;

            if (xdf == 0) {
                result = beta;
                document.getElementById("result").innerHTML = result;
                break;
            }
        }
        
    }

 //limpieza
    xd = 0;
    xd1 = "";
    xdv = 0;
    xdvd = 0;
    xdvs = "";
    beta = "";
    alpha = "";
    alpha1 = "";
    result = "";
    v = 0;
    v1 = 0;
    v2 = 0;
    v3 = 0;
    v4 = 0;
    n = 0;
}