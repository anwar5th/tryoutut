//soal 1
function test_01() {
	let angka = 42;

	if (angka >= 90) {
		console.log (angka + "Grade A");
	}else if (angka >= 80 && angka <= 89) {
		console.log (angka + "Grade B");
	}else if (angka >= 70 && angka <= 79) {
		console.log (angka + "Grade C");
	}else if (angka >= 60 && angka <= 69) {
		console.log (angka + "Grade D");
	}else if (angka <= 59) {
		console.log (angka + "Grade E");
	}else{
		console.log ("kosong");
	}
}

//soal 2
function test_02() {
	let bilangan = 3;
	let hasil = bilangan % 2;

	if (hasil == 0) {
		console.log ("genap");
	}else{
		console.log ("ganjil");
	}
}

//soal 3
function test_03() {
	let deret_angka = [40,54, 25, 46, 37, 55, 57, 66, 67, 70, 80];
	let hasilMax = Math.max.apply(null, deret_angka);
	let hasilMin = Math.min.apply(null, deret_angka);
	let total = 0;

	for(i = 0; i <deret_angka.length; i++){
   		total += deret_angka[i];
	}

	console.log(hasilMin+"dan"+hasilMax+"dan"+total);
}

//soal 4
function test_04(palindrom)
{

    for( var i = palindrom.length; i > 0; i-- )
    {
        if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
        {
            document.write('the word is palindrome.');
        }else{
            document.write('the word is not palindrome!');
        }
    }
}
('wordthatwillbechecked');

//soal 5
function test_05(){
	let tahun = 2020;
	if ((tahun%4)===0){
  		if ((tahun%100)!==0){
    		console.log(tahun + ' adalah tahun kabisat');
  	}
  	else {
    	if((tahun%400)===0) {
      		console.log(tahun + ' adalah tahun kabisat');
    	}
    	else {
      		console.log(tahun + 'adalah bukan tahun kabisat');
    	}
  	}
  }	
	else {
  			console.log(tahun + ' adalah bukan tahun kabisat');
	}
}

//soal 6
function test_06(){
	let x;
	x = document.getElementById("txtInput").value;
	document.getElementById("txtOutput").value = x;
}

//soal 7
function test_07(){
	let str = 'semua kata-kata';
	console.log(str.split('').reverse().join(''));
}

