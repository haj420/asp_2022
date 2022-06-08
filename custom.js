

document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }

        });


		jQuery(".qof-form").submit(function() {
		event.preventDefault();
			alert('this has a class apparently!');
		})

		// QOF SUBMIT event listener (uses FOF submit)
		// jQuery("#qof-form").submit(function() {
		   function send_qof() {
			//prevent default
			event.preventDefault();
			console.log('form submission function started.');

			// alert('.qof-submit');
			if(distributorName === undefined) { var distributorName = jQuery('#distributorname').val(); }
			var data = jQuery('#qof-form').serialize();

			//send ajax request
			jQuery.ajax({
				type: "POST",
				dataType: "json",
				url: fof_ajax_object.ajax_url,
				data: data,
				success: function(response){
					// console.log(form);
					jQuery('.qof-clear').hide();
					jQuery('.qof-submit').hide();
					jQuery('#qof-form > .modal-body').html('<h4 class="text-center">Thank you for your order!</h4><br><h5>(If you do not receive an order acknowledgement within 24 hours, Please contact us)</h5><br><p class="text-center">Close this box using the x in the top right hand corner.</p>');
					jQuery('#qof-header > button.close').click(function() {
						location.reload();
					})
					console.log(response.responseText);
				},
				error: function(response) {
					alert('error: '+response.responseText);
				}
			});
		}

		function onSubmit(token) {
			console.log('form submitted. Token received: '+token);
			 // document.getElementById("qof-form").submit();
			 send_qof();
		   }


jQuery('input[name="shippingAddress"]').change(function() {
	console.log('sof address BTN CLICKED.');
	jQuery('#shipAddressGroup').toggle();
})

var rownum = 0;
function addProduct(sku) {
	jQuery("#suggestions").empty();
	const myArray = sku.split("|");
	// if(rownum === undefined) {var rownum = 0;console.log('rownum undefined.');}
	var newInput = 	"<div class='row mt-1 cart_item'>";
	newInput += 		"<div class='col-2 text-center'>";
	// newInput += 			"<label for='itemnum"+rownum+"'>Item #</label><br/>";
	newInput +=				"<input name='itemnum"+rownum+"' value='"+myArray[0]+"' style='width:80%;border-width:1px;'/>"
	newInput += 		"</div>";
	newInput +=			"<div class='col-8 text-center'>";
	// newInput +=				"<label for='itemDesc"+rownum+"'>Description (Not required)</label><br/>";
	newInput += 			"<input name='itemdesc"+rownum+"' value='"+myArray[1]+"'  style='width:80%;border-width:1px;'/>";
	newInput +=			"</div>";
	newInput +=			"<div class='col-2 text-center'>";
	// newInput +=				"<label for='itemquan"+rownum+"'>Quantity</label><br/>";
	newInput +=				"<input name='itemquan"+rownum+"' type='number' placeholder='#' style='width:90%;'/>"
	newInput +=			"</div>";
	newInput +=		"</div>";
	jQuery(".modal-body").append(newInput);
	rownum = ++rownum;

	jQuery(this).closest('.row').find('.item-quan').focus();
}

(function( $ ) {



$('.qof-btn > a').click(function(){
event.preventDefault();
$('#quick-order-form').show();
$('#quick-order-form').draggable();
})

$('button.close').click(function(){
	$('#quick-order-form').hide();
})
$('.qof-clear').click(function(){
	$('#qof-form')[0].reset();
	jQuery('.cart_item').remove();
	$('#shipAddressGroup').hide();
})
$('input[name=shippingAddress]').change(function() {
	$('#shipAddressGroup').toggle();
})

// NAV BTNS
$(".browse > a").click(function() {
	event.preventDefault();
	$("main").html("<iframe src='https://as-unbranded.i2snapsite03.biz/autoservice/virtualweb/featured_categories.asp' id='homeFrame'></iframe>");
})
$(".viewCat > a").click(function() {
	event.preventDefault();
	$("main").html("<iframe src='https://autoformsandsupplies.cld.bz/AUTO-CAT-2021' id='homeFrame'></iframe>");
})
$(".viewDept > a").click(function() {
	event.preventDefault();
	$("main").html("<iframe src='https://autoformsandsupplies.cld.bz/AUTO-CAT-2021/II/' id='homeFrame'></iframe>");
})
$(".viewItem > a").click(function() {
	event.preventDefault();
	$("main").html("<iframe src='https://autoformsandsupplies.cld.bz/AUTO-CAT-2021/183/' id='homeFrame'></iframe>");
})
$(".customPrinting > a").click(function() {
	event.preventDefault();
	$("main").html("<iframe src='https://startwebservicesbackup.com/afs/alphabiz/wp-content/uploads/sites/3/2022/01/customInfo.pdf' id='homeFrame'></iframe>");
})
$(".info > a").click(function() {
	event.preventDefault();
	$("main").html("<iframe src='https://startwebservicesbackup.com/afs/alphabiz/wp-content/uploads/sites/3/2022/01/info.pdf' id='homeFrame'></iframe>");
})

})(jQuery);
