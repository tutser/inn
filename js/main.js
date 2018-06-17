function ext_Copy(get_text) {
  	navigator.clipboard.writeText(get_text.innerHTML); 			// Копируем текст в буфер
}

function clearInput() {
	document.getElementById('party').value = '';
}



function showSuggestion(suggestion) {

  var name_org = suggestion.value;
  var inn_org = suggestion.data.inn;
    
var string_inn = new String(inn_org);     // превращаем строку в массив
var inn = string_inn[0] + string_inn[1]; // Выделяем первые два символа

// ----------  Сравниваем с номером региона и выводим нужный территориальный банк -------------

if      ( (inn == "13") || 			// Республика Мордовия
          (inn == "12") || 			// Республика Марий Эл
          (inn == "16") || 			// Республика Татарсттан
          (inn == "21") || 			// Республика Чувашия
          (inn == "52") || 			// Нижегородская область
          (inn == "43") ||			// Кировская область
          (inn == "33")) 			// Владимирская область
  {document.getElementById('region_bank').innerHTML = "Волго-Вятский банк Сбербанка";}
else if ( (inn == "77") || 			// Москва
          (inn == "97")) 			// Москва
  {document.getElementById('region_bank').innerHTML = "Московский банк Сбербанка";}
else if ( (inn == "66") || 			// Свердловская область
          (inn == "74") || 			// Челябинская область
          (inn == "45") || 			// Курганская область
          (inn == "02")) 			// Республика Башкортостан
  {document.getElementById('region_bank').innerHTML = "Уральский банк Сбербанка";}
else if ( (inn == "50") || 			// Московская область
          (inn == "69") || 			// Тверская область
          (inn == "40") || 			// Калужская область
          (inn == "32") || 			// Брянская область
          (inn == "67") || 			// Смоленская область
          (inn == "71") || 			// Тульская область
          (inn == "62")) 			// рязанская область
  {document.getElementById('region_bank').innerHTML = "Среднерусский банк Сбербанка";}
else if ( (inn == "54") || 			// Новосибирская область
          (inn == "70") || 			// Томская область
          (inn == "42") || 			// Кемеровская область
          (inn == "22") || 			// Алтайский край
          (inn == "04") || 			// Республика Алтай
          (inn == "24") || 			// Красноярский край
          (inn == "17") || 			// Республика Тыва
          (inn == "19")) 			// Республика Хакасия
  {document.getElementById('region_bank').innerHTML = "Сибирский банк Сбербанка";}
else if ( (inn == "61") || 			// Ростовская область
          (inn == "23") || 			// Краснодарский край
          (inn == "01") || 			// Республика Адыгея
          (inn == "26") || 			// Ставропольский край
          (inn == "06") || 			// Республика Ингушетия
          (inn == "15") || 			// Республика Северная Осетия
          (inn == "07") || 			// Кабардино-Балкарская Республика
          (inn == "05") || 			// Республика Дагестан
          (inn == "09") || 			// Карачаево-Черкесская Республика
          (inn == "08") || 			// Республика Калмыкия
          (inn == "20")) 			// Чеченская Республика
  {document.getElementById('region_bank').innerHTML = "Юго-Западный банк Сбербанка";}
else if ( (inn == "72") || 			// Тюменская область
          (inn == "55") || 			// Омская область
          (inn == "86") || 			// Ханты-Мансийский автономный округ
          (inn == "89")) 			// Ямало_ненецкий автономный округ
  {document.getElementById('region_bank').innerHTML = "Западно-Сибирский банк Сбербанка";}
else if ( (inn == "27") || 			// Хабаровский край
          (inn == "25") || 			// Приморский край
          (inn == "28") || 			// Амурская область
          (inn == "56") || 			// Оренбургская область
          (inn == "79") || 			// Еврейская автономная область
          (inn == "49") || 			// Магаданская область
          (inn == "41") || 			// Камчатский край
          (inn == "87")) 			// Чукотский автономный округ
  {document.getElementById('region_bank').innerHTML = "Дальневосточный банк Сбербанка";}
else if ( (inn == "75") || 			// Забайкальский край
          (inn == "38") || 			// Иркутская область
          (inn == "03") || 			// Республика Бурятия
          (inn == "80") || 			// Забайкальский край
          (inn == "14")) 			// Республика Саха (Якутия)
  {document.getElementById('region_bank').innerHTML = "Байкальский банк Сбербанка";}
else if ( (inn == "59") || 			// Пермский край
          (inn == "11") || 			// Республика Коми
          (inn == "18")) 			// Удмуртская Республика
  {document.getElementById('region_bank').innerHTML = "Западно-Уральский банк Сбербанка";}
else if ( (inn == "36") || 			// Воронежская область
          (inn == "57") || 			// Орловская область
          (inn == "48") || 			// Липецкая область
          (inn == "46") || 			// Курская область
          (inn == "31") || 			// Белгородская область
          (inn == "68")) 			// Тамбовская область
  {document.getElementById('region_bank').innerHTML = "Центрально-Черноземный банк Сбербанка";}
else if ( (inn == "44") || 			// Костромская область
          (inn == "76") || 			// Ярославская область
          (inn == "35") || 			// Вологодская область
          (inn == "37") || 			// Ивановская область
          (inn == "29") || 			// Архангельская область
          (inn == "83")) 			// Ненецкий автономный округ
  {document.getElementById('region_bank').innerHTML = "Северный банк Сбербанка";}
else if ( (inn == "78") || 			// Санкт-Петербург
          (inn == "47") || 			// Ленинградская область
          (inn == "51") || 			// Мурманская область
          (inn == "39") || 			// Калининградская область
          (inn == "60") || 			// Псковская область
          (inn == "53") || 			// Новгородская область
          (inn == "10")) 			// Республика Карелия
  {document.getElementById('region_bank').innerHTML = "Северо-западный банк Сбербанка";}
else if ( (inn == "63") || 			// Самарская область
          (inn == "73") || 			// Ульяновская область
          (inn == "56") || 			// Оренбургская область
          (inn == "64") || 			// Саратовская область
          (inn == "34") || 			// Волгоградская область
          (inn == "30") || 			// Астраханская область
          (inn == "58")) 			// Пензенская область
  {document.getElementById('region_bank').innerHTML = "Поволжский банк Сбербанка";}
else {document.getElementById('region_bank').innerHTML = "Иные территории: Крым, Севастополь, Байконур";}

document.getElementById('result_name_org').innerHTML = name_org;
document.getElementById('result_inn_org').innerHTML = inn_org;
}



$("#party").suggestions({
	token: "c11dd243fcba49fced8c84b44bc97b617279bec5", 
	type: "PARTY", 
	count: 5, 
	onSelect: showSuggestion
});