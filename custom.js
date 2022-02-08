jQuery( document ).ready( function( $ ) {

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
} );
