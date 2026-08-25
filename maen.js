
alert("halo selamat datang di website kami,semoga kalian suka sama web kami terimakasih")

function change(x) {
    x.classList.toggle("change");
}

const apel = 5000
const pisang = 10000
const diskon = 0.1
const setengahHasil = (apel * 3 ) + (pisang * 2)
const hasil = setengahHasil - (setengahHasil * diskon)

console.log('jadi harga pembeli adalah' + hasil);







const pasword = false
if (pasword) {
    console.log('kamu boleh ke luar negri');
}else {
    console.log('kamu tidak boleh keluar negri');
}







const texts1 = 10 > 5 ? 'benar' : 'salah'
console.log(texts1);
const texts2 = 8 < 4 ? 'benar' : 'salah'
console.log(texts2);
const texts3 = -1 >= 2 ? 'benar' : 'salah'
console.log(texts3);
const texts4 = 0.5 <= 0 ? 'benar' : 'salah'
console.log(texts4);


console.log('abc' === 'abc');
console.log(false !== true);
console.log('cab' === 'cba');
console.log(false === false);









const angka = 110;

if (angka < 10) {
    console.log('angka satuhan');
}else if (angka < 100) {
    console.log('angka puluhan');
}else if (angka < 1000) {
    console.log('angka ratusan');
}else {
    console.log('angka valid');
}







const name = 'agus';
const age = 20;
const tanggalLahir = 2004;
const udahPekerja = true;

const person = {
    name: 'agus',
    age: 20,
    tanggalLahir: 2004,
    udahPekerja: true
}

console.log(person.name + ' lahir pada tahun ' + person.tanggalLahir);









const makananFavorit = [
    'nasi goreng', 
    'mie goreng',
    'sate ayam',
    'soto ayam', 
    'bakso'
];

console.log('makanan favorit saya adalah ' + makananFavorit[0] + ' dan ' + makananFavorit[1]);





const merekSepedaKamu = null;


function namaSaya() {
    console.log('nama saya adalah frido');
}

namaSaya();






function argumenAngka(nomor) {
    if (nomor > 0) {
        console.log('angka positif');
    }else if (nomor < 0) {
        console.log('angka negatif');
    }else {
        console.log('angka valid');
    }
};

argumenAngka(0);





function kakulator(x, y) {
    const z = x + y;
    return z;
}

const result = kakulator(2, 7);
console.log(result);





function sayBye(name) {
    console.log('bye ' + name);
}

const sayBye2 = name => {
    console.log('bye ' + name);
}



function add(x, y) {
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
}


const sayName = (name, age) => name + ' umur saya adalah ' + age;

console.log(sayName('frido', 20));
 