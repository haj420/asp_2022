<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package asp_2022
 */

?>

	<footer id="colophon" class="site-footer">
		<div id="footer">


	    <!-- <nav>
	        <ul>
	            <li class="footerNav"><a href="https://as-unbranded.i2snapsite03.biz/autoservice/virtualweb/featured_categories.asp" target='_blank' class="nav-link" >Browse Products</a></li>

	            <li class="footerNav"><a href="https://autoformsandsupplies.cld.bz/AUTOCAT2020FULL" class="nav-link" target="iframe">View Catalog</a></li>

	            <li class="footerNav"><a href="https://autoformsandsupplies.cld.bz/AUTOCAT2020FULL/II/" class="nav-link" target="iframe">View By Dept.</a></li>

	            <li class="footerNav"><a href="https://autoformsandsupplies.cld.bz/AUTOCAT2020FULL/174/" class="nav-link" target="iframe">View By Item</a></li>




	            <li class="footerNav"><a href="https://autoformsandsupplies.com/pdf/info.pdf" class="nav-link" >Info</a></li>
	        </ul>
	    </nav> -->
	        <div class="row" style="background-color: #fff3e4;">
					<div class="col-4">
						<div class="">
							<div id="footerLogo">
				                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" id="homelink"><img src="<?=get_site_icon_url();?>" /></a>
				            </div>
				</div><!-- .site-branding -->
			</div>
			<div class="col-8 pt-4">

				<nav id="site-navigation" class="main-navigation align-bottom">
					<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'asp_2022' ); ?></button>
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
	</div>

<?php wp_footer(); ?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"></script>
</body>
</html>
