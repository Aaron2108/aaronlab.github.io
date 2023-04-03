//pregunta 1
let usuario = prompt('Ingrese el nombre de usuario:');
let mail = prompt('Ingrese el Gmail:');
document.write('Nombre de usuario ingresado: '+ usuario);
document.write('<br>');
document.write('Gmail ingresado: '+mail);

//pregunta 2
/*let a =parseInt(document.getElementsById('e').value);
let b = parseInt(document.getElementsById('f').value);
let c = parseInt(document.getElementsById('g').value);
let d =parseInt(document.getElementsById('h').value);*/
function suma(){
    let a =parseInt(document.getElementById('e').value);
    let b = parseInt(document.getElementById('f').value);
    let c = parseInt(document.getElementById('g').value);
    let d =parseInt(document.getElementById('h').value);
    let sum = a + b
    let pro= c*d
  /* return document.write(`<br> La suma de los dos primeros valores es: ${sum} <br>
    El producto del segundo y tercero es: ${pro} `)*/
    alert("La suma de los dos primeros valores es: "+sum)
    alert("El producto del segundo y tercero es: "+pro)

}

//pregunta 3
function mayorDe(){
    let primerNum = parseInt(document.getElementById('numpri').value);
let segundoNum = parseInt(document.getElementById('numse').value);
if(primerNum > segundoNum){
        alert(`Su suma es: ${parseInt(primerNum) + parseInt(segundoNum)} y su diferencia es: ${primerNum - segundoNum}`)
    }
    else{
        alert(`Su producto es: ${parseInt(primerNum) * parseInt(segundoNum)} Y su division es: ${primerNum/segundoNum}`)
    }
}
/*
let primerNum = prompt('Ingrese el primer numero')
let segundoNum = prompt('Ingrese el segundo numero')
if(primerNum > segundoNum){
        document.write(`<br>Su suma es: ${parseInt(primerNum) + parseInt(segundoNum)} <br> Su diferencia es: ${primerNum - segundoNum}`)
    }
    else{
        document.write(`Su producto es: ${parseInt(primerNum) * parseInt(segundoNum)} <br> Su division es: ${primerNum/segundoNum}`)
    }*/

    //pregunta 4
    function notas(){
        let nota1 = parseInt(document.getElementById('not1').value);
        let nota2 = parseInt(document.getElementById('not2').value);
        let nota3 = parseInt(document.getElementById('not3').value);
        let prom = (nota1+nota2+nota3)/3
        if(prom >= 4){
            alert(`Regular`)
        }
        else{
            alert(`Reprobado`)
        }
    
    }
    /*let nota1 = prompt('Ingrese el primer numero')
    let nota2 = prompt('Ingrese el segundo numero')
    let nota3 = prompt('Ingrese el tercer numero')
    let prom = (parseInt(nota1)+parseInt(nota2)+parseInt(nota3))/3
    if(prom >= 4){
        document.write(`<br> Regular`)
    }
    else{
        document.write(`<br> reprobado`)
    }*/

    //pregunta 5 
    function mayorQue(){
        let mayor1 = parseInt(document.getElementById('may1').value);
        let mayor2 =parseInt(document.getElementById('may2').value);
        let mayor3 =parseInt(document.getElementById('may3').value);
        if(mayor1 > mayor2 && mayor1 > mayor3){
            alert(`El numero mayor es: ${parseInt(mayor1)}`)
        }
        else if (mayor2 > mayor1 && mayor2 > mayor3){
            alert(`El numero mayor es: ${parseInt(mayor2)
            }`)
        }
        else if(mayor3 > mayor1 && mayor3 > mayor2){
            alert(` El numero mayor es: ${mayor3}`)
        }
    }
    /*let mayor1 = parseInt(prompt('Ingrese el primer numero'))
    let mayor2 =parseInt(prompt('Ingrese el segundo numero'))
    let mayor3 =parseInt(prompt('Ingrese el tercer numero'))
    if(mayor1 > mayor2 && mayor1 > mayor3){
        document.write(`<br> El numero mayor es: ${parseInt(mayor1)}`)
    }
    else if (mayor2 > mayor1 && mayor2 > mayor3){
        document.write(`<br> El numero mayor es: ${parseInt(mayor2)
        }`)
    }
    else if(mayor3 > mayor1 && mayor3 > mayor2){
        document.write(`<br> El numero mayor es: ${mayor3}`)
    }*/




