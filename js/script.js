let vyrazhenie = "";
let rezultat = "";
let chislo_v_pamyati = "";
let ranee_bylo_vychislenie = false;

regressionnoe_testirovanie();

function vvesti_plus_minus(){
  let pervyj_simvol = "";
  let prefiks = "";  
  // let reg_exp = /[0-9]{1}/ ;
  let reg_exp = /\d{1}/ ; 
  pervyj_simvol = vyrazhenie.substring(0, 1);

  console.log("Первый символ:", pervyj_simvol);    
  console.log( "Результат reg_exp: ", reg_exp.test( pervyj_simvol) );

  if( reg_exp.test( pervyj_simvol ) ) {       
    prefiks = '-';
    vyrazhenie = prefiks + vyrazhenie; 
  } else if ( pervyj_simvol === '+' ) {
    prefiks = '-';
    vyrazhenie = prefiks + vyrazhenie.substring(1);
  } else if ( pervyj_simvol === '-' ) {
    prefiks = '';
    vyrazhenie = prefiks + vyrazhenie.substring(1);
  }
  panel_vyrazheniya.innerHTML = vyrazhenie;
  console.log("Выражение:", vyrazhenie);  
}

function udalit_poslednij_simvol(){
  vyrazhenie = vyrazhenie.substring(0, vyrazhenie.length - 1);
  panel_vyrazheniya.innerHTML = vyrazhenie;
  console.log("Выражение:", vyrazhenie);  
}
function ochistit_vyrazhenie(){
  console.log("Нажата - ", "C");
  vyrazhenie = "";
  panel_vyrazheniya.innerHTML = vyrazhenie;
  console.log("Выражение:", vyrazhenie);
  }
function vvesti_0(){
  vvesti_simvol( '0' );
}
function vvesti_1(){
  vvesti_simvol( '1' );
}
function vvesti_2(){
  vvesti_simvol( '2' );
}
function vvesti_3(){
  vvesti_simvol( '3' );
}
function vvesti_plyus(){
  vvesti_simvol( '+' );
}
function vvesti_4(){
  vvesti_simvol( '4' );
}
function vvesti_5(){
  vvesti_simvol( '5' );
}
function vvesti_6(){
  vvesti_simvol( '6' );
}
function vvesti_minus(){
  vvesti_simvol( '-' );
}
function vvesti_7(){
  vvesti_simvol( '7' );
}
function vvesti_8(){
  vvesti_simvol( '8' );
}
function vvesti_9(){
  vvesti_simvol( '9' );
}
function vvesti_umnozhit(){
  vvesti_simvol( '*' );
}
function vvesti_tochku(){
  vvesti_simvol( '.' );
}
function vvesti_razdelit(){
  vvesti_simvol( '/' );
}
function vvesti_simvol( simvol ){
  // 
  // Очистка панели выражения после вычисления при вводе цифр.
  // 
  if( ( ranee_bylo_vychislenie === true ) && ( simvol === '0' ||  simvol === '1'  ||  simvol === '2' ||  simvol === '3' ||  simvol === '4' ||  simvol === '5' ||  simvol === '6'
     ||  simvol === '7' ||  simvol === '8' ||  simvol === '9' ) ){
    vyrazhenie = simvol;
  } else {
    vyrazhenie += simvol;    
  }
  ranee_bylo_vychislenie = false;
  // vyrazhenie += simvol;
  panel_vyrazheniya.innerHTML = vyrazhenie;
  // console.log("Выражение:", vyrazhenie);
}
function vvesti_ravno(){
  if( vyrazhenie === "") {}
  else {
    vvesti_simvol( '=' );
    ranee_bylo_vychislenie = true;

  massiv_reg_vyrazhenij = new Array();

  let vyrazhenie_dlya_vydeleniya_operandov = "";
  vyrazhenie_dlya_vydeleniya_operandov = vyrazhenie.substring(0, vyrazhenie.length - 1);
  // console.log( vyrazhenie_dlya_vydeleniya_operandov );

  let massiv_operandov = new Array();  
  let znak = "";

  // vyrazhenie_dlya_vydeleniya_operandov = "123.456+789.123";
  massiv_reg_vyrazhenij[0] = /((\d{1,}[.]?\d{1,})|\d+)([+]{1})((\d{1,}[.]?\d{1,})|\d+)/ ;  
  massiv_reg_vyrazhenij[1] = /((\d{1,}[.]?\d{1,})|\d+)([-]{1})((\d{1,}[.]?\d{1,})|\d+)/ ;  
  massiv_reg_vyrazhenij[2] = /((\d{1,}[.]?\d{1,})|\d+)([*]{1})((\d{1,}[.]?\d{1,})|\d+)/ ;  
  massiv_reg_vyrazhenij[3] = /((\d{1,}[.]?\d{1,})|\d+)([/]{1})((\d{1,}[.]?\d{1,})|\d+)/ ;  
  // console.log( massiv_reg_vyrazhenij[0].test(vyrazhenie_dlya_vydeleniya_operandov ) );

  for( let i = 0; i <= massiv_reg_vyrazhenij.length - 1; i++ )
  {
    // console.log( i );
    if( massiv_reg_vyrazhenij[i].test(vyrazhenie_dlya_vydeleniya_operandov ) ) {
      switch ( i ) {
        case 0: 
          massiv_operandov = vyrazhenie_dlya_vydeleniya_operandov.split( "+" );
          // console.log( massiv_operandov );
          simvol_operatsii = "+";
          break;
        case 1: 
          pervyj_simvol = vyrazhenie_dlya_vydeleniya_operandov.substring(0, 1);
          if( pervyj_simvol === "-" ) {
            znak = "-";
            vyrazhenie_dlya_vydeleniya_operandov = vyrazhenie_dlya_vydeleniya_operandov.substring(1);
          }
          massiv_operandov = vyrazhenie_dlya_vydeleniya_operandov.split( "-" );
          // console.log( massiv_operandov );
          simvol_operatsii = "-";          
          break;          
        case 2: 
          massiv_operandov = vyrazhenie_dlya_vydeleniya_operandov.split( "*" );
          // console.log( massiv_operandov );
          simvol_operatsii = "*";          
          break;          
        case 3: 
          massiv_operandov = vyrazhenie_dlya_vydeleniya_operandov.split( "/" );
          // console.log( massiv_operandov );
          simvol_operatsii = "/";          
          break;          
      }
// Вычислить выражение и выйти из цикла.
      vychislit_vyrazhenie( znak, massiv_operandov[0], massiv_operandov[1], simvol_operatsii );
      break;
    }
  }
  }
}

function vychislit_vyrazhenie( znak, operand_1, operand_2, simvol_operatsii ){

  rezultat = 0;
  switch (simvol_operatsii) {
    case "+": 
    rezultat = Number.parseFloat( operand_1 ) + Number.parseFloat( operand_2 );
      panel_rezultata.innerHTML = rezultat;      
      break;
    case "-": 
      if( znak === "-" ) {
        rezultat = (-1)*Number.parseFloat( operand_1 ) - Number.parseFloat( operand_2 );
      } else {
        rezultat = Number.parseFloat( operand_1 ) - Number.parseFloat( operand_2 );
      }
      panel_rezultata.innerHTML = rezultat;     
      break;      
    case "*": 
      rezultat = Number.parseFloat( operand_1 ) * Number.parseFloat( operand_2 );
      panel_rezultata.innerHTML = rezultat;              
      break;      
    case "/": 
      rezultat = Number.parseFloat( operand_1 ) / Number.parseFloat( operand_2 );
      panel_rezultata.innerHTML = rezultat;      
      break;      
  }
}
function zaglushka(){
  console.log("Резерв.");
}

function zapisat_chislo_v_pamyat(){
  chislo_v_pamyati = vyrazhenie;
}

function steret_chislo_v_pamyati(){
  chislo_v_pamyati = "";
}

function prochitat_chislo_iz_pamyati(){
  vyrazhenie = chislo_v_pamyati;
  panel_vyrazheniya.innerHTML = vyrazhenie;  
}

function regressionnoe_testirovanie(){
  let testovye_varazheniya = new Array();
  testovye_varazheniya = [
    ["1+2",         3],
    ["-11+9",       -2],    
    ["1.1+2.2",     3.3],
    ["-1.1+4.51",   3.41],    
    ["1-2",         -1],
    ["1.1*2.345",   2.5795],
    ["-1.1*2.345",   -2.5795],    
  ];
  for (let i = 0; i <= testovye_varazheniya.length - 1; i++){
    vyrazhenie = testovye_varazheniya[i][0];
    vvesti_ravno();
    ozhid_rezultat = new Number();
    ozhid_rezultat = testovye_varazheniya[i][1];
    // Ошибка порядка 0.0000000000000003.
    let oshibka = Math.abs(ozhid_rezultat - rezultat);
    console.log( i, testovye_varazheniya[i][0].padEnd(15, ' '), ozhid_rezultat.toString().padStart( 10, ' '), rezultat.toString().padStart( 20, ' '), ( oshibka < Math.E**(-15) ? 'нет ошибки' : 'ошибка'  ).padStart( 15, ' ') ) ;    
  }

}