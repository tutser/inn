$("#party").suggestions({
	token: "c11dd243fcba49fced8c84b44bc97b617279bec5", 
	type: "PARTY", 
	count: 5, 
	onSelect: showSuggestion
});



function CopyToClipboard() {

	var rel_name_org = showSuggestion();
	console.log("Внешняя переменная из другой функции:" + rel_name_org);
	navigator.clipboard.writeText(name_org);
}


function showSuggestion(suggestion) {

  var name_org = suggestion.value;
  var inn_org = suggestion.data.inn;
  console.log(name_org);
  var ext_name_org = name_org;
  console.log("ext_name_org: " + ext_name_org);
  

var string_inn = new String(inn_org);     // превращаем строку в массив
var inn = string_inn[0] + string_inn[1]; // Выделяем первые два символа

if      ( (inn == 13) || 
          (inn == 12) || 
          (inn == 16) || 
          (inn == 21) || 
          (inn == 52) || 
          (inn == 43) ||
          (inn == 33)) 
  {document.getElementById('region_bank').innerHTML = "Волго-Вятский банк Сбербанка";}
else if ( (inn == 77) || 
          (inn == 97)) 
  {document.getElementById('region_bank').innerHTML = "Московский банк Сбербанка";}
else if ( (inn == 66) || 
          (inn == 74) || 
          (inn == 45) || 
          (inn == 02)) 
  {document.getElementById('region_bank').innerHTML = "Уральский банк Сбербанка";}
else if ( (inn == 50) || 
          (inn == 69) || 
          (inn == 40) || 
          (inn == 32) || 
          (inn == 67) || 
          (inn == 71) || 
          (inn == 62)) 
  {document.getElementById('region_bank').innerHTML = "Среднерусский банк Сбербанка";}
else if ( (inn == 54) || 
          (inn == 70) || 
          (inn == 42) || 
          (inn == 22) || 
          (inn == 04) || 
          (inn == 24) || 
          (inn == 17) || 
          (inn == 19)) 
  {document.getElementById('region_bank').innerHTML = "Сибирский банк Сбербанка";}
else if ( (inn == 61) || 
          (inn == 23) || 
          (inn == 01) || 
          (inn == 26) || 
          (inn == 06) || 
          (inn == 15) || 
          (inn == 07) || 
          (inn == 05) || 
          (inn == 09) || 
          (inn == 08) || 
          (inn == 20)) 
  {document.getElementById('region_bank').innerHTML = "Юго-Западный банк Сбербанка";}
else if ( (inn == 72) || 
          (inn == 55) || 
          (inn == 86) || 
          (inn == 89)) 
  {document.getElementById('region_bank').innerHTML = "Западно-Сибирский банк Сбербанка";}
else if ( (inn == 27) || 
          (inn == 25) || 
          (inn == 28) || 
          (inn == 56) || 
          (inn == 79) || 
          (inn == 49) || 
          (inn == 41) || 
          (inn == 87)) 
  {document.getElementById('region_bank').innerHTML = "Дальневосточный банк Сбербанка";}
else if ( (inn == 75) || 
          (inn == 38) || 
          (inn == 03) || 
          (inn == 80) || 
          (inn == 14)) 
  {document.getElementById('region_bank').innerHTML = "Байкальский банк Сбербанка";}
else if ( (inn == 59) || 
          (inn == 11) || 
          (inn == 18)) 
  {document.getElementById('region_bank').innerHTML = "Западно-Уральский банк Сбербанка";}
else if ( (inn == 36) || 
          (inn == 57) || 
          (inn == 48) || 
          (inn == 46) || 
          (inn == 31) || 
          (inn == 68)) 
  {document.getElementById('region_bank').innerHTML = "Центрально-Черноземный банк Сбербанка";}
else if ( (inn == 44) || 
          (inn == 76) || 
          (inn == 35) || 
          (inn == 37) || 
          (inn == 29) || 
          (inn == 83)) 
  {document.getElementById('region_bank').innerHTML = "Северный банк Сбербанка";}
else if ( (inn == 78) || 
          (inn == 47) || 
          (inn == 51) || 
          (inn == 39) || 
          (inn == 60) || 
          (inn == 53) || 
          (inn == 10)) 
  {document.getElementById('region_bank').innerHTML = "Северо-западный банк Сбербанка";}
else if ( (inn == 63) || 
          (inn == 73) || 
          (inn == 56) || 
          (inn == 64) || 
          (inn == 34) || 
          (inn == 30) || 
          (inn == 58)) 
  {document.getElementById('region_bank').innerHTML = "Поволжский банк Сбербанка";}
else {document.getElementById('region_bank').innerHTML = "Иные территории: Крым, Севастополь, Байконур";}



document.getElementById('result_name_org').innerHTML = name_org;
document.getElementById('result_inn_org').innerHTML = inn_org;




return ext_name_org;
}







