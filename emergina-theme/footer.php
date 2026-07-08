<?php
/**
 * Footer template
 * @package Emergina
 */
?>
</main>

<footer class="site-footer">
	<div class="container">
		<div class="footer-grid">
			<div>
				<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<span class="text-gradient" style="font-size:1.25rem;font-weight:600;"><?php bloginfo( 'name' ); ?></span>
				</a>
				<p class="muted" style="margin-top:1rem;max-width:360px;font-size:.9rem;">
					<?php echo esc_html__( 'Digital marketing, impersonation removal, and anti-piracy protection built for creators and brands in India and beyond.', 'emergina' ); ?>
				</p>
				<div class="socials">
					<?php
					$socials = array(
						'emergina_ig' => '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7.1.1 5.8.1 5 .3 4.2.6 3.4.9 2.7 1.3 2 2s-1.1 1.4-1.4 2.2C.3 5 .1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c0 1.3.2 2.1.5 2.9.3.8.7 1.5 1.4 2.2s1.4 1.1 2.2 1.4c.8.3 1.6.5 2.9.5 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3 0 2.1-.2 2.9-.5.8-.3 1.5-.7 2.2-1.4s1.1-1.4 1.4-2.2c.3-.8.5-1.6.5-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c0-1.3-.2-2.1-.5-2.9-.3-.8-.7-1.5-1.4-2.2S20.6.9 19.8.6C19 .3 18.2.1 16.9.1 15.7 0 15.3 0 12 0zm0 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.5a1.4 1.4 0 1 1-1.4-1.4 1.4 1.4 0 0 1 1.4 1.4z"/></svg>',
						'emergina_fb' => '<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>',
						'emergina_yt' => '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6z"/></svg>',
						'emergina_li' => '<svg viewBox="0 0 24 24"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4zM22.2 0H1.8A1.8 1.8 0 0 0 0 1.8v20.4A1.8 1.8 0 0 0 1.8 24h20.4a1.8 1.8 0 0 0 1.8-1.8V1.8A1.8 1.8 0 0 0 22.2 0z"/></svg>',
					);
					foreach ( $socials as $key => $svg ) {
						$url = emergina_opt( $key );
						if ( $url ) printf( '<a href="%s" target="_blank" rel="noreferrer">%s</a>', esc_url( $url ), $svg );
					}
					?>
				</div>
			</div>
			<div>
				<h4>Explore</h4>
				<ul>
					<li><a href="#services">Services</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
			<div>
				<h4>Reach us</h4>
				<ul>
					<li>📞 <a href="tel:<?php echo esc_attr( emergina_opt( 'emergina_phone' ) ); ?>"><?php echo esc_html( emergina_opt( 'emergina_phone' ) ); ?></a></li>
					<li>✉️ <a href="mailto:<?php echo esc_attr( emergina_opt( 'emergina_email' ) ); ?>"><?php echo esc_html( emergina_opt( 'emergina_email' ) ); ?></a></li>
					<li>📍 <?php echo esc_html( emergina_opt( 'emergina_address' ) ); ?></li>
					<li>GSTIN <?php echo esc_html( emergina_opt( 'emergina_gstin' ) ); ?></li>
				</ul>
			</div>
		</div>
		<div class="footer-bottom">
			© <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. All rights reserved.
		</div>
	</div>
</footer>

<?php $wa = emergina_opt( 'emergina_whatsapp' ); if ( $wa ) : ?>
<a class="wa-float" href="https://wa.me/<?php echo esc_attr( $wa ); ?>" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
	<svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.3 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5H7.3c-.2 0-.5.1-.8.4A2.9 2.9 0 0 0 5.5 9c0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.8 5.2.8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.1-.3-.2-.6-.3zM12 2A10 10 0 0 0 2 12a10 10 0 0 0 1.5 5.2L2 22l4.9-1.4A10 10 0 0 0 22 12 10 10 0 0 0 12 2z"/></svg>
</a>
<?php endif; ?>

<?php wp_footer(); ?>
</body>
</html>
