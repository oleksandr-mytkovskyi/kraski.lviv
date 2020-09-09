window.addEventListener('DOMContentLoaded', ()=>{
/* Article FructCode.com */
// static form

const form - document.querySelector

$( document ).ready(function() {
    $("#btn").click(
		function(){
			
			var check_name = document.getElementById('namef').value;
			var check_phone = document.getElementById('numberf').value;
			if(''===check_name){
				document.getElementById('check_name').innerHTML = "* Введіть ім'я";
			}else{
				document.getElementById('check_name').innerHTML = "";
				var check1=1;
			}
			if(''===check_phone){
				document.getElementById('check_phone').innerHTML = "* Введіть номер";	
			}
			else{
				document.getElementById('check_phone').innerHTML = "";
				var check2=1;
			}
			if(check1 == 1 & check2 == 1){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			document.getElementById('sps').innerHTML = "Дякуємо за звернення!";

			
			setTimeout(clearn_sps, 5000);
			return false; }
		}
	);
});
// pop up
$( document ).ready(function() {
    $("#btn-popup").click(
		function(){
			
			var check_name = document.getElementById('namef-popup').value;
			var check_phone = document.getElementById('numberf-popup').value;
			if(''===check_name){
				document.getElementById('check_name-popup').innerHTML = "* Введіть ім'я";
			}else{
				document.getElementById('check_name-popup').innerHTML = "";
				var check1=1;
			}
			if(''===check_phone){
				document.getElementById('check_phone-popup').innerHTML = "* Введіть номер";	
			}
			else{
				document.getElementById('check_phone-popup').innerHTML = "";
				var check2=1;
			}
			if(check1 == 1 & check2 == 1){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			document.getElementById('sps-popup').innerHTML = "Дякуємо за звернення!";
			
			setTimeout(function(){$("#pop-up").css("display","none")}, 4000);
			setTimeout(clearn_sps, 5000);
			return false; }
		}
	);
});
function clearn_sps(){
	var tmp = document.getElementById('sps').innerHTML ="";
	var tmp1 = document.getElementById('sps-popup').innerHTML ="";
	return tmp, tmp1;
}

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        // 	result = $.parseJSON(response);
        // 	$('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
    	// },
    	// error: function(response) { // Данные не отправлены
        //     $('#result_form').html('Ошибка. Данные не отправленны.');
    	}
 	});
}
 
$( document ).ready(function() {
    $("#wws").click(
		function(){
			var $popup = $("#pop-up");
			$popup.css("display","block");
		})
});
 
$( document ).ready(function() {
    $("#close").click(
		function(){
			var $popup = $("#pop-up");
			$popup.css("display","none");
		})
});


const block4 = document.querySelector('.block-4');

block4.addEventListener('wheel', (e) =>{
	e.preventDefault();
});


});
