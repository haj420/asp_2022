function addProduct(sku) {
jQuery("#suggestions").empty();
if(rownum === undefined) {var rownum = 0;}
var newInput = "<div class='row mt-3'><div class='col'><label for='itemnum"+rownum+"'>Item<input name='itemnum"+rownum+"' value='"+sku+"'/></div><div class='col'><input name='itemquan"+rownum+"' type='number' placeholder='Qty'></div>";
jQuery(".modal-body").append(newInput);

rownum++;
}
(function( $ ) {



	$('.qof-search-input').keyup(function() {
		var _this = $(this);
		$('#products').empty();
		$('[name=products]').empty();
		// AJAX url
		var qofSearchInput = $(this).val();
		console.log("SEARCH: "+qofSearchInput);
		$.ajax({
			type: "POST",
			dataType: "json",
			url: qof_ajax_object.ajax_url,
			data: {
				action : 'qof_search',
				'qof-search-input': qofSearchInput
			},
			success: function(response){
			$(response).each(function(i) {
				// sku = response[i].sku;
				// ds = response[i].ds;
				// console.log(sku+":"+ds);
				var line = '<div class="row overflow-auto"><div class="col item"><a href="#" onclick="addProduct('+response[i].sku+')">'+response[i].sku+" -- "+response[i].ds+'</a></div></div>';
				// var option = '<option value='+response[i].sku+' onChange=addProduct("'+response[i].sku+'", '+response[i].ds+'")>'+response[i].ds+'</option>';
				$('#suggestions').append(line);
				console.log(line+" added!");
					// $('#suggestions').append(option);
					_this.focus();
			});
			},
			error: function(response) {
				console.log(response);
			}
		});
	});

	// QOF SUBMIT event listener (uses FOF submit)
	$(".qof-submit").unbind('click').click(function() {
		//prevent default (despite above unbind and prevent default AND button type being button, this still submits)
		event.preventDefault();
		// alert('.qof-submit');
		if(distributorName === undefined) { var distributorName = $('#fofDistributorName').val(); }
		var data = $('#qof-form').serialize();

		//send ajax request
		$.ajax({
			type: "POST",
			dataType: "json",
			url: fof_ajax_object.ajax_url,
			data: data,
			success: function(response){
				alert('message sent.')
			},
			error: function(response) {
				alert('error');
			}
		});

	});



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
// 	$("main").html("<iframe src='"+Url+"/full-order-form/' id='homeFrame'></iframe>");
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

// $(document).ready(function(){
//   $("#search").keyup(function(){
//     var input = $("#search").val();
//     $.ajax({url: ajax_object.ajax_url,
// 		    action: 'search_items',
//             data: "?text="+input,
//             success: function(result){
//       // $("#suggestions").html(result);
//         alert('Got this from the server: ' + result);
//       //$("#input").value(result);
//     }});
//   });
// });

})(jQuery);
