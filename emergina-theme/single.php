<?php get_header(); ?>
<section style="padding:8rem 0;">
	<div class="container" style="max-width:800px;">
		<?php while ( have_posts() ) : the_post(); ?>
			<article <?php post_class(); ?>>
				<p class="eyebrow"><?php echo esc_html( get_the_date() ); ?></p>
				<h1><?php the_title(); ?></h1>
				<div class="entry-content"><?php the_content(); ?></div>
			</article>
		<?php endwhile; ?>
	</div>
</section>
<?php get_footer(); ?>
