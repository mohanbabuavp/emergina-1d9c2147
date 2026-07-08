<?php
/**
 * Front page (one-page layout)
 * @package Emergina
 */
get_header(); ?>

<!-- HERO -->
<section class="hero" id="home">
	<div class="container">
		<span class="hero-badge">✦ Trusted brand protection since day one</span>
		<h1 style="margin-top:1.5rem;"><?php echo wp_kses_post( emergina_opt( 'emergina_hero_title' ) ); ?></h1>
		<p class="lead"><?php echo esc_html( emergina_opt( 'emergina_hero_subtitle' ) ); ?></p>
		<div class="hero-actions">
			<a href="#contact" class="btn btn-primary">Start a project →</a>
			<a href="#services" class="btn btn-outline">Explore services</a>
		</div>
		<div class="hero-stats">
			<div><div class="num text-gradient">10,000+</div><div class="lbl">Takedowns</div></div>
			<div><div class="num text-gradient">250+</div><div class="lbl">Brands</div></div>
			<div><div class="num text-gradient">24/7</div><div class="lbl">Monitoring</div></div>
		</div>
	</div>
</section>

<!-- SERVICES -->
<section id="services">
	<div class="container">
		<div class="reveal">
			<p class="eyebrow">What we do</p>
			<h2 style="margin-top:.5rem;">Three services. One mission — your brand wins.</h2>
			<p class="muted" style="max-width:560px;">Marketing that moves brands. Protection that defends them.</p>
		</div>
		<div class="services-grid">
			<div class="service-card reveal">
				<svg viewBox="0 0 24 24"><path d="M3 11l18-8-8 18-2-8-8-2z"/></svg>
				<h3>Marketing</h3>
				<p class="muted">Branding, digital, postal & political campaigns — built to move audiences and win attention.</p>
				<div class="service-tags"><span>Branding</span><span>Digital</span><span>Postal</span><span>Political</span></div>
			</div>
			<div class="service-card reveal">
				<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/></svg>
				<h3>Impersonation Removal</h3>
				<p class="muted">We hunt down fake profiles and get them removed across every platform.</p>
				<div class="service-tags"><span>Instagram</span><span>Facebook</span><span>YouTube</span></div>
			</div>
			<div class="service-card reveal">
				<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
				<h3>Anti-Piracy Takedowns</h3>
				<p class="muted">DMCA & platform takedowns for pirated films, courses, music and IP.</p>
				<div class="service-tags"><span>DMCA</span><span>Telegram</span><span>Google</span></div>
			</div>
		</div>
	</div>
</section>

<!-- ABOUT / PROCESS -->
<section id="about">
	<div class="container">
		<div class="process-grid">
			<div class="reveal">
				<p class="eyebrow">How we work</p>
				<h2 style="margin-top:.5rem;">A relentless system built for creators &amp; brands.</h2>
				<p class="muted">From daily monitoring to weekly campaign optimisation, our team runs a tight operating system so nothing slips through.</p>
				<ul class="check-list">
					<li>Deep audit of your brand footprint &amp; piracy exposure</li>
					<li>24/7 detection with human + automated review</li>
					<li>Fast takedowns across Google, Meta, YouTube, Telegram &amp; more</li>
					<li>Growth playbook: ads, SEO, content, community</li>
				</ul>
			</div>
			<div class="process-card reveal">
				<?php
				$steps = array(
					array( '01', 'Discover', 'We map your assets, keywords, and infringement surface.' ),
					array( '02', 'Deploy',   'Campaigns go live. Monitoring goes 24/7.' ),
					array( '03', 'Defend',   'We remove fakes, pirates and copies at scale.' ),
					array( '04', 'Report',   'Weekly transparent dashboards & wins.' ),
				);
				foreach ( $steps as $s ) : ?>
					<div class="process-step">
						<div class="n"><?php echo esc_html( $s[0] ); ?></div>
						<div>
							<div style="font-weight:600;"><?php echo esc_html( $s[1] ); ?></div>
							<div class="muted" style="font-size:.9rem;"><?php echo esc_html( $s[2] ); ?></div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<!-- CONTACT -->
<section id="contact">
	<div class="container">
		<div class="reveal">
			<p class="eyebrow">Get in touch</p>
			<h2 style="margin-top:.5rem;">Let's protect &amp; grow your brand.</h2>
		</div>
		<div class="contact-grid" style="margin-top:2.5rem;">
			<div class="contact-info reveal">
				<p>📞 <a href="tel:<?php echo esc_attr( emergina_opt( 'emergina_phone' ) ); ?>"><?php echo esc_html( emergina_opt( 'emergina_phone' ) ); ?></a></p>
				<p>✉️ <a href="mailto:<?php echo esc_attr( emergina_opt( 'emergina_email' ) ); ?>"><?php echo esc_html( emergina_opt( 'emergina_email' ) ); ?></a></p>
				<p>📍 <?php echo esc_html( emergina_opt( 'emergina_address' ) ); ?></p>
				<div class="map-embed">
					<iframe src="<?php echo esc_url( emergina_opt( 'emergina_map_embed' ) ); ?>" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
			<form class="contact-form reveal" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
				<input type="hidden" name="action" value="emergina_contact">
				<?php wp_nonce_field( 'emergina_contact', 'emergina_contact_nonce' ); ?>

				<?php if ( isset( $_GET['sent'] ) ) : ?>
					<p style="color:#7CFF9F;">✓ Thanks — we'll reach out within 24 hours.</p>
				<?php endif; ?>

				<label for="name">Name</label>
				<input id="name" name="name" type="text" required>

				<label for="email">Email</label>
				<input id="email" name="email" type="email" required>

				<label for="message">Message</label>
				<textarea id="message" name="message" rows="5" required></textarea>

				<button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Send message →</button>
			</form>
		</div>
	</div>
</section>

<!-- CTA -->
<section>
	<div class="container">
		<div class="cta-box reveal">
			<h2>Ready to own your <span class="text-gradient">digital space?</span></h2>
			<p class="muted" style="max-width:520px;margin:1rem auto 2rem;">Book a free 20-minute discovery call. We'll audit your brand's exposure and show you exactly where the leaks are.</p>
			<a href="#contact" class="btn btn-primary">Book discovery call →</a>
		</div>
	</div>
</section>

<?php get_footer(); ?>
