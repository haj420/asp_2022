<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package asp_2022
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?></script>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"></script> -->
	 <script src="https://www.google.com/recaptcha/api.js"></script>
	 <script>
	 function onSubmit(token) {
	 	 document.getElementById(".qof-form").submit();
	    }
		</script>
</head>

<body <?php body_class(); ?>>
<div class="row top-bar">
</div>

<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'asp_2022' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="row">
			<div class="col-sm-12 col-md-4">
				<div class="">
					<a href="<?=get_site_url();?>">
					<img src="<?=get_site_url();?>/wp-content/uploads/2022/04/Serving-all-of-your-needs033022.png" class="custom-logo" alt="Auto Forms and Supplies" srcset="<?=get_site_url();?>/wp-content/uploads/2022/01/Screen-Shot-2022-01-06-at-15.25.05.png 920w, <?=get_site_url();?>wp-content/uploads/2022/04/Serving-all-of-your-needs033022.png 300w, <?=get_site_url();?>/wp-content/uploads/2022/04/Serving-all-of-your-needs033022.png 768w" sizes="(max-width: 920px) 100vw, 920px" style="
		height: 176px;
		">			</a>	<!--<h1 class="site-title"><a href="https://startwebservicesbackup.com/afs/" rel="home">Auto Forms and Supplies</a></h1>
								<p class="site-description">Your one-stop shop!</p>-->
					</div>

	</div>
	<div class="col-sm-12 col-md-8 text-center">
		<div class="site-branding">
		<?php
		// the_custom_logo();
		if ( is_front_page() && is_home() ) :
		?>
		<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
		<?php
		else :
		?>
		<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
		<?php
		endif;
		$asp_2022_description = get_bloginfo( 'description', 'display' );
		if ( $asp_2022_description || is_customize_preview() ) :
		?>
		<p class="site-description"><?php echo $asp_2022_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
		<?php endif; ?>
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation align-bottom text-center">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" style="margin:auto;"><?php esc_html_e( 'Primary Menu', 'asp_2022' ); ?></button>
			<?php
			switch_to_blog( '1' ); 	//switch to the main site of the network (it has ID 1)
			wp_nav_menu(
				['menu'            => '16', //grab menu that has ID 16 from it
				]);
				restore_current_blog();	//switch back to the current site
			?>
		</nav><!-- #site-navigation -->
	</div>
</div>
	</header><!-- #masthead -->

	<!-- Quick Order Form -->

<div class="modal draggable" id="quick-order-form" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered " role="document">
    <div class="modal-content">
	<form id='qof-form'>
		<input type="hidden" name="action" value="send_message" />
      <div class="modal-header" id='qof-header'>
        <h5 class="modal-title text-white text-center">Quick Order Form</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
		  <div class='row'>
  			<div class='col-sm-12 col-md-6'>
  				<h5>Account Information</h5>
				<div class="form-group">
			      <label for="distributorName">Distributor Name</label>
			      <input type="text" class="form-control" id="distributorName" name="distributorName" required>

  			      <label for="distributorEmail">Distributor Email</label>
  			      <input type="email" class="form-control" id="distributorEmail" name="distributorEmail" required >

  			      <label for="name">Your Name</label>
  			      <input type="text" class="form-control" id="name" name="name" required>

				  <label for="companyName">Company Name</label>
				  <input type="text" class="form-control" id='companyName' name="accountno" required>

				  <label for="address">Address</label>
				  <input type="text" class="form-control" id="address" name="add" required>

				  <label for="city">City/Town</label>
				  <input type="text" class="form-control" id="city" name="city" required>

				  <div class='row'>
					  <div class='col-sm-12 col-md-6'>
				    	<label for="state">State</label>
				    	<input type="text" class="form-control" id="state" name="state" required>
				  	  </div>
					  <div class='col-sm-12 col-md-6'>
					    <label for="zip">Zip Code</label>
					    <input type="text" class="form-control" id="zip" name="zip" required>
					  </div>
				  </div>



			    </div>
			</div>
			<div class='col-sm-12 col-md-6 mt-3'>
				<label for="po" class="text-dark"><h6>Purchase Order Number</h6></label>
				<input type="text" class="form-control" id="po" name="customerpo" required>

				<label for="phone">Phone Number</label>
				<input type="phone" class="form-control" id="phone" name="phonenumber" required>

				<label for="email">Email Address</label>
				<input type="email" class="form-control" id="email" name="emailadd" required>

				<h5 class='mt-3'>Shipping Information</h5>
				<div class="form-group">
				  <label for="shippingMethod">Prefered Shipping Method</label>
				  <select name="shippingMethod" id="shippingMethod" name="shippingMethod" required>
					  <option value="">Choose Shipping Method</option>
					  <option value="UPS/FedEx Ground">UPS/FedEx Ground</option>
					  <option value="Next Day Air">Next Day Air</option>
					  <option value="Second Day Air">Second Day Air</option>
					  <option value="Three Day Air">Three Day Air</option>
				  </select>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="shippingAddress" id="shippingAddressSame" name="shippingAddressSame" value="Same Address" checked>
				  <label class="form-check-label" for="shippingAddressSame">
				    Same Address
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="shippingAddress" id="shippingAddressBelow" name="shippingAddressBelow" value="Below">
				  <label class="form-check-label" for="shippingAddressBelow">
				    Shipping Address Below
				  </label>
				</div>


				<div id='shipAddressGroup' class="form-group" style='display:none;'>
					<label for="attn">Company</label>
					<input type="text" class="form-control" id='shipaccountno'>

					<label for="shipattn">Attention</label>
					<input type="text" class="form-control" id='attn' name="shipattn">

					<label for="shipaddress">Address</label>
					<input type="text" class="form-control" id="attn" name="shipadd">

					<label for="shipcity">City/Town</label>
					<input type="text" class="form-control" id="shipcity" name="shipcity">

					<div class='row'>
						<div class='col-sm-12 col-md-6'>
						  <label for="shipstate">State</label>
						  <input type="text" class="form-control" id="shipstate" name="shipstate">
						</div>
						<div class='col-sm-12 col-md-6'>
						  <label for="shipzip">Zip Code</label>
						  <input type="text" class="form-control" id="shipzip" name="shipzip">
						</div>
					</div>
				</div>
			</div>
		</div>
      </div>
	  <div class="row">
		  <div class="col">
			  <h3 class='text-danger mt-3 text-center'>Drag Me Around</h3>
 			 <h5 class='text-center'>Search For Your Item</h5>
		 </div>
	 </div>
	  <div class="row">
		  <div class="col-10">
 			 <!-- <label for='qofSearchInput'>Search by Item Number</label> -->

 			 <input type='text' list="products" id='search' name='qofSearchInput' class='qof-search-input mr-3' style="width:100%;"  oninput='onInput()'/>
 			 <datalist id="products"></datalist>
 			 <script>
 			 function onInput() {
 			   var val = document.getElementById("search").value;
 			   var opts = document.getElementById('products').childNodes;
 			   for (var i = 0; i < opts.length; i++) {
 				 if (opts[i].value === val) {
 				   // An item was selected from the list!
 				   addProduct(opts[i].value);
 				   // alert(opts[i].value);
 				   break;
 				 }
 			   }
 			 }
 		   </script>
 			 <!-- <div id="suggestions"></div> -->
 		 </div>
		  <div class="col-2">
			  <!-- <button type="button" class="btn btn-secondary qofSearch">Search</button> -->
			  <button type="button" class="btn btn-secondary qofClear" onclick="jQuery('.qof-search-input').val('');" style='width:97%;'>Clear</button>
		  </div>
	  </div>
	  <div class="row">
		  <div class="col">
			   <div id="suggestionsHeadings">
				   <div class='row mt-3'>
			  	<div class='col-2 text-center'>
					<label for='itemnum"+rownum+"'>Item #</label>
		   		</div>
				<div class='col-8 text-center'>
					<label for='itemDesc"+rownum+"'>Description (Not required)</label>
				</div>
				<div class='col-2 text-center'>
					<label for='itemquan"+rownum+"'>Quantity</label>
				</div>
			</div>
			   </div>
		   </div>
	   </div>
	  <div class="row">
		  <div class="col">
			   <div id="suggestions"></div>
		   </div>
	   </div>
	   <div class="row">
		   <div class="col">
			   <label for="addcomments">Comments: </label>
  						<textarea name="addcomments" id="comments" rows="1" cols="50"></textarea>
					</div>
				</div>
  </div>
      <div class="modal-footer text-center" style="align-items: center; justify-content: center;">
		  <button type="button" class="btn btn-primary qof-submit g-recaptcha"
          data-sitekey="6LfwZtoUAAAAABBo9xlcJHOEd_2WXqiqYsZN5q5p"
          data-callback='onSubmit'
          data-action='submit' style='background-color:#C3151C;color:white;width:40%;border-radius:0px;border:none;
      font-size: 10px;padding: 10px;'>Submit Order</button>
          <button type="button" class="btn btn-dark qof-clear" data-dismiss="modal" style="width:40%;border-radius:0px;border:none;
      font-size: 10px;padding: 10px;">Reset Form</button>
      </div>
  </form>
    </div>
  </div>
</div>
