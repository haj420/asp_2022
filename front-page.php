<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package asp_2022
 */


 if( 1 === get_current_blog_id() ) :
 	get_header( 'base' );
 else:
 	get_header();
 endif;
?>

	<main id="primary" class="site-main">

		<?php


			if ( is_home() && is_front_page() ) :
				get_template_part( 'template-parts/content', 'home' );
			endif;
		?>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
