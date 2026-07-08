<?php
/**
 * Header template
 * @package Emergina
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Emergina — Digital marketing, impersonation removal & anti-piracy takedowns for creators and brands in India.">
<meta property="og:title" content="Emergina — Protect. Promote. Prevail.">
<meta property="og:description" content="Digital marketing, impersonation removal & anti-piracy takedowns.">
<meta property="og:type" content="website">
<link rel="profile" href="https://gmpg.org/xfn/11">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
	<div class="container">
		<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>">
			<?php if ( has_custom_logo() ) : the_custom_logo(); else : ?>
				<span class="text-gradient"><?php bloginfo( 'name' ); ?></span>
			<?php endif; ?>
		</a>

		<nav class="nav-primary" aria-label="Primary">
			<?php
			if ( has_nav_menu( 'primary' ) ) {
				wp_nav_menu( array(
					'theme_location' => 'primary',
					'container'      => false,
					'items_wrap'     => '%3$s',
					'depth'          => 1,
				) );
			} else {
				echo '<a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a>';
			}
			?>
		</nav>

		<a class="btn btn-primary hide-mobile" href="#contact" style="padding:.55rem 1.1rem;font-size:.85rem;">Get Started</a>

		<button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu">
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
		</button>
	</div>
	<div id="mobile-menu" class="mobile-menu">
		<?php
		if ( has_nav_menu( 'primary' ) ) {
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'container'      => false,
				'items_wrap'     => '%3$s',
				'depth'          => 1,
			) );
		} else {
			echo '<a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a>';
		}
		?>
	</div>
</header>

<main id="site-main">
