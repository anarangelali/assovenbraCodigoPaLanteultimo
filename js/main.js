console.log("Hola Mundo!");
console.log("Este es un proyecto de la Asociación de Venezolanos en Porto Velho - Brasil")
console.log("Desarrollador - ANA RANGEL ALI")
console.log("ASSOVENBRA - RONDÔNIA - BRASIL")

//***********DECLARANDO VARIABLES***********/
let num1 = 50;
let num2 = 10;
let saludo = "Hola!";
let nombreCurso = "Código LATAM";

//************CREAANDO OPERAIONES MATEMÁTICAS******************//

let resultadoSuma = num1 + num2;
let resultadoResta = num1 - num2;
let resultadoMultiplicacion = num1 * num2;

//**********MÉTODO PARA PRESENTAR RESULTADOS EN LA CONSOLA***************//
console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(saludo + " Esto es " + nombreCurso)

//***********PROBANDO CON COMPARADORES AND & OR**********************

let variable1 = true;
let variable2 = true;
let variable3 = false;
let variable4 = false;



//************PROBANDO CON && "AND" ************/
console.log(variable1 && variable2);
console.log(variable1 && variable3);



//************PROBANDO CON || "OR" ***************************//
console.log(variable1 || variable3);
console.log(variable3 || variable4);

//************PROBANDO BUCLES************************//

for(let i = 2; i <23; i = i+2){
    console.log(i);
}

//******************************** */
for(let u = 0; u <= 25; u = u + 5){
    console.log(u)
}

/*************NUMELROS DE 5 EN 5 DE MAYOR A MENOR*******/
for(let l = 25; l >=0; l = l - 5){
    console.log(l)
}

//*****PROBANDO*/
for(let i = 0; i <= 10; i++){
    console.log(i)
}
for(let k = 10; k >=0; k--){
    console.log(k)
}

//**********PROBANDO ARRAYS**************/
let frutas = ["Manzana", "Limón", "Toromja", "Fresa"];
console.log(frutas[3]);

frutas.push("Mandarina");
frutas.unshift("Pera");
//**********ORDEANDO EL ARRAY POR ORDEN ALFABETICO DE FORMA CRECIENTE******/
frutas.sort();
console.log(frutas[0]);
console.log(frutas);


let colores = ["Verde", "Violeta", "Naranja", "Carne"];

console.log(colores.length);
colores.unshift("Marrón", "Dorado");
colores.push("Salmón");
//**********ORDEANDO EL ARRAY POR ORDEN ALFABETICO DE FORMA CRECIENTE******/
colores.sort();
console.log(colores);




/********************ACTIVANDO EL BOTON DE MENÚ *********/
addEventListener("DOMContentLoaded", () => {
    const btn_menu = document.querySelector(".btn_menu")
    if(btn_menu){
        btn_menu.addEventListener("click" , () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("show")
        })
    }
    


})















