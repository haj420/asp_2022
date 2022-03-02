(function( $ ) {

    "use strict";

	$('.qof-btn > a').click(function(){
	event.preventDefault();
	$('#quick-order-form').show();
	$('#quick-order-form').draggable();
})
$('button.close').click(function(){
	$('#quick-order-form').hide();
})
$('.qof-submit').click(function(){
	$('#qof-form').submit();
})
$('.qof-clear').click(function(){
	$('#qof-form')[0].reset();
})
$('input[name=shippingAddress]').change(function() {
	$('#shipAddressGroup').toggle();
})
$(".browse > a").click(function() {
	event.preventDefault();
	$("main").html("<iframe src='https://as-unbranded.i2snapsite03.biz/autoservice/virtualweb/featured_categories.asp' id='homeFrame'></iframe>");

	// $.get("https://as-unbranded.i2snapsite03.biz/autoservice/virtualweb/featured_categories.asp", function( data ) {
		// $("main").html(data);
	// })

})
$(".viewCat > a").click(function() {
	event.preventDefault();
	$("main").html("<iframe src='https://autoformsandsupplies.cld.bz/AUTO-CAT-2021' id='homeFrame'></iframe>");

	// $.get("https://as-unbranded.i2snapsite03.biz/autoservice/virtualweb/featured_categories.asp", function( data ) {
		// $("main").html(data);
	// })

})
$(".viewDept > a").click(function() {
	event.preventDefault();
	$("main").html("<iframe src='https://autoformsandsupplies.cld.bz/AUTO-CAT-2021/II/' id='homeFrame'></iframe>");

	// $.get("https://as-unbranded.i2snapsite03.biz/autoservice/virtualweb/featured_categories.asp", function( data ) {
		// $("main").html(data);
	// })

})
$(".viewItem > a").click(function() {
	event.preventDefault();
	$("main").html("<iframe src='https://autoformsandsupplies.cld.bz/AUTO-CAT-2021/183/' id='homeFrame'></iframe>");

	// $.get("https://as-unbranded.i2snapsite03.biz/autoservice/virtualweb/featured_categories.asp", function( data ) {
		// $("main").html(data);
	// })

})
$(".customPrinting > a").click(function() {
	event.preventDefault();
	$("main").html("<iframe src='https://startwebservicesbackup.com/afs/alphabiz/wp-content/uploads/sites/3/2022/01/customInfo.pdf' id='homeFrame'></iframe>");

	// $.get("https://as-unbranded.i2snapsite03.biz/autoservice/virtualweb/featured_categories.asp", function( data ) {
		// $("main").html(data);
	// })

})
$(".info > a").click(function() {
	event.preventDefault();
	$("main").html("<iframe src='https://startwebservicesbackup.com/afs/alphabiz/wp-content/uploads/sites/3/2022/01/info.pdf' id='homeFrame'></iframe>");

	// $.get("https://as-unbranded.i2snapsite03.biz/autoservice/virtualweb/featured_categories.asp", function( data ) {
		// $("main").html(data);
	// })

})
//full order form button
// $(".fof > a").click(function() {
// 	event.preventDefault();
// 	var url      = window.location.href;
// 	$("main").html("<iframe src='"+url+"/full-order-form/' id='homeFrame'></iframe>");
// })

// $(document).ready(function(){
//   $("#search").keyup(function(){
//     var input = $("#search").val();
//     $.ajax({url: "functions.php",
//             data: "function=lookup&text="+input,
//             success: function(result){
//       $("#suggestions").html(result);
//       //$("#input").value(result);
//     }});
//   });
// });

// $(document).ready(function(){
//   $("#search").keyup(function(){
// 	var url =  ajax_object.ajax_url;
//     var input = $("#search").val();
// 	var data = "function=lookup&text="+input;
//     $.get(url, data, function(response) {
//       $("#suggestions").html(response);
//       //$("#input").value(result);
//     });
//   });
// });

$(document).ready(function(){
  $("#search").keyup(function(){
    var input = $("#search").val();
    $.ajax({url: ajax_object.ajax_url,
		    action: 'search_items',
            data: "?text="+input,
            success: function(result){
      // $("#suggestions").html(result);
        alert('Got this from the server: ' + result);
      //$("#input").value(result);
    }});
  });
});

})(jQuery);
