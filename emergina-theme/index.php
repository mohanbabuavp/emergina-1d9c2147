<?php
/**
 * Fallback template.
 * @package Emergina
 */
get_header(); ?>

<section style="padding:8rem 0;">
	<div class="container">
		<?php if ( have_posts() ) : ?>
			<h1><?php single_post_title(); ?></h1>
			<?php while ( have_posts() ) : the_post(); ?>
				<article <?php post_class(); ?>>
					<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
					<div class="muted"><?php echo esc_html( get_the_date() ); ?></div>
					<div><?php the_excerpt(); ?></div>
				</article>
			<?php endwhile; ?>
			<div style="margin-top:2rem;"><?php the_posts_pagination(); ?></div>
		<?php else : ?>
			<h1>Nothing found</h1>
			<p class="muted">Try the homepage.</p>
		<?php endif; ?>
	</div>
</section>

<?php get_footer(); ?>
