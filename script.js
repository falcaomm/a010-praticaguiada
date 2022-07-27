//ARRAY STRING 
console.log(`\nARRAY STRING`);
const arrayString = ["a", "b", "c"]
console.log(arrayString);
console.log(`Tamanho do arrayString: ${arrayString.length}`);
console.log(`Índice3: ${arrayString[3]}`);

//ARRAY NUMBER
console.log(`\nARRAY NUMBER`);
const arrayNumber = [0, 1, 2]
console.log(arrayNumber);

//ARRAY MISTO 
console.log(`\nARRAY MISTO`);
const arrayMisto = ["a", 1, "a"!=1 ]
console.log(arrayMisto);
console.log(arrayMisto.includes("a"));
console.log(arrayMisto.includes(1));
console.log(arrayMisto.includes(true));
//esse último retorna true pq ele encontrou a operação verdadeira

//ARRAY UNICO 
console.log(`\nARRAY UNICO`);
const arrayUnico = [0]
console.log(arrayUnico);
console.log(`Tamanho: ${arrayUnico.length}`);
console.log(`Índice0: ${arrayUnico[0]}`);

//ARRAY VAZIO 
console.log(`\nARRAY VAZIO`);
const arrayVazio = []
console.log(arrayVazio);

//SLICE - CÓPIA
console.log(`\nCÓPIA`);
const copiaArrayString = arrayString.slice()

//PUSH - ADICIONANDO FINAL
console.log(`\nPUSH`);
console.log("Sem adicionar");
console.log(copiaArrayString, arrayString);

console.log("Adicionando o d só na cópia");
copiaArrayString.push("d")
console.log(copiaArrayString, arrayString);

//SPLICE - RETIRANDO
console.log(`\nSPLICE`);
console.log("retirando os indices 2 e 3");
copiaArrayString.splice(2,2) //no splice posição1 = indice e posição2 = quantidade
console.log(copiaArrayString);

//SORT -ORDENANDO 
console.log(`\nORDENANDO - ordem alfabética e crescente`);
//o sort não funciona direito em numbers, ele ve só o primeiro número, de 0 a 9 funciona bem, mas depois do 10 ele comlica pq ele le o primeiro número primeiro
// exemplo 4,56,10
// ficaria 10,4,56 pq ele leu 1,4,5 (só os primeiros números)
// ele organiza os maiusculos antes também 
console.log(arrayString);
console.log(arrayNumber);
console.log(arrayString.sort());
console.log(arrayNumber.sort());
