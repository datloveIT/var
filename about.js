/**
 * Bài 1
 */
showVar();
rectangle();

function showVar() {
    let i = 10;
let f = 20.5;
let b = true;
let s = 'Hà Nội';
document.write('Bài 1: ')
document.write('i = ' +i);
document.write('<br/>');
document.write('f = '+f);
document.write('<br/>');
document.write('b = '+b);
document.write('<br/>');
document.write('s = '+s);
}

/**
 * Bài 2
 */
function rectangle() {
    let width = 20;
    let height = 10;
    let area = width * height;
    document.write('<br/>')
    document.write('Bài 2: ')
    document.write('Area = '+ area);
}
/**
 * Bài 3
 */
function promptVar() {
    let a = prompt("Nhập số a:");
    let b = prompt("Nhập số b:")
    if(a!='' && b!=''){
        multiplesVar(a,b);
    }
    else{
      promptVar();
    }

}
function multiplesVar(a,b) {
    isTrue = a%b;
    alert(isTrue==0 ? 'b là bội số của a':'b không là bội số của a');
}