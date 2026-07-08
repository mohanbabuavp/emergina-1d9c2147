<?php get_header(); ?>
<section style="padding:10rem 0;text-align:center;">
	<div class="container">
		<h1 class="text-gradient">404</h1>
		<p class="muted">The page you're looking for doesn't exist.</p>
		<a class="btn btn-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>">← Back home</a>
	</div>
</section>
<?php get_footer(); ?>
