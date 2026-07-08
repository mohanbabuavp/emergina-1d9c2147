<?php
/**
 * Emergina theme functions
 *
 * @package Emergina
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! function_exists( 'emergina_setup' ) ) :
	function emergina_setup() {
		load_theme_textdomain( 'emergina', get_template_directory() . '/languages' );

		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'custom-logo', array(
			'height'      => 80,
			'width'       => 80,
			'flex-height' => true,
			'flex-width'  => true,
		) );
		add_theme_support( 'html5', array( 'search-form','comment-form','comment-list','gallery','caption','style','script' ) );
		add_theme_support( 'responsive-embeds' );
		add_theme_support( 'align-wide' );

		register_nav_menus( array(
			'primary' => __( 'Primary Menu', 'emergina' ),
			'footer'  => __( 'Footer Menu', 'emergina' ),
		) );
	}
endif;
add_action( 'after_setup_theme', 'emergina_setup' );

/**
 * Enqueue styles & scripts.
 */
function emergina_enqueue_assets() {
	// Google Fonts
	wp_enqueue_style(
		'emergina-fonts',
		'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
		array(),
		null
	);

	// Main stylesheet
	wp_enqueue_style(
		'emergina-style',
		get_stylesheet_uri(),
		array( 'emergina-fonts' ),
		wp_get_theme()->get( 'Version' )
	);

	// Theme JS
	wp_enqueue_script(
		'emergina-script',
		get_template_directory_uri() . '/assets/js/main.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'emergina_enqueue_assets' );

/**
 * Customizer settings.
 */
function emergina_customize_register( $wp_customize ) {

	$wp_customize->add_section( 'emergina_business', array(
		'title'    => __( 'Business Info', 'emergina' ),
		'priority' => 30,
	) );

	$fields = array(
		'emergina_phone'   => array( 'label' => 'Phone Number',    'default' => '+91 83446 47098' ),
		'emergina_email'   => array( 'label' => 'Email Address',   'default' => 'mb@emergina.in' ),
		'emergina_address' => array( 'label' => 'Address',         'default' => '34/1, Poovandivalasu, Avalpoondurai, Erode, Tamil Nadu 638115' ),
		'emergina_gstin'   => array( 'label' => 'GSTIN',           'default' => '33DEBPM4017M1ZK' ),
		'emergina_whatsapp'=> array( 'label' => 'WhatsApp Number (digits only, incl. country code)', 'default' => '918344647098' ),
		'emergina_map_url' => array( 'label' => 'Google Map URL',  'default' => 'https://g.page/r/CcuLglS_spyJEAE/' ),
		'emergina_map_embed' => array( 'label' => 'Google Map Embed URL', 'default' => 'https://www.google.com/maps?q=Avalpoondurai,Erode&output=embed' ),
		'emergina_ig'      => array( 'label' => 'Instagram URL',   'default' => 'https://www.instagram.com/_emergina/' ),
		'emergina_fb'      => array( 'label' => 'Facebook URL',    'default' => 'https://www.facebook.com/emergina1' ),
		'emergina_yt'      => array( 'label' => 'YouTube URL',     'default' => 'https://www.youtube.com/@Emergina' ),
		'emergina_li'      => array( 'label' => 'LinkedIn URL',    'default' => 'https://www.linkedin.com/company/emergina/' ),
		'emergina_hero_title'    => array( 'label' => 'Hero Title (HTML allowed)', 'default' => 'Protect. <span class="text-gradient">Promote.</span><br> Prevail online.' ),
		'emergina_hero_subtitle' => array( 'label' => 'Hero Subtitle', 'default' => 'Emergina combines aggressive digital marketing with impersonation removal and anti-piracy takedowns — so your brand grows without losing revenue to fakes and pirates.' ),
	);

	foreach ( $fields as $id => $field ) {
		$wp_customize->add_setting( $id, array(
			'default'           => $field['default'],
			'sanitize_callback' => 'wp_kses_post',
			'transport'         => 'refresh',
		) );
		$wp_customize->add_control( $id, array(
			'label'   => __( $field['label'], 'emergina' ),
			'section' => 'emergina_business',
			'type'    => 'text',
		) );
	}
}
add_action( 'customize_register', 'emergina_customize_register' );

/**
 * Helper: get a customizer field with default.
 */
function emergina_opt( $key, $default = '' ) {
	$defaults = array(
		'emergina_phone'         => '+91 83446 47098',
		'emergina_email'         => 'mb@emergina.in',
		'emergina_address'       => '34/1, Poovandivalasu, Avalpoondurai, Erode, Tamil Nadu 638115',
		'emergina_gstin'         => '33DEBPM4017M1ZK',
		'emergina_whatsapp'      => '918344647098',
		'emergina_map_url'       => 'https://g.page/r/CcuLglS_spyJEAE/',
		'emergina_map_embed'     => 'https://www.google.com/maps?q=Avalpoondurai,Erode&output=embed',
		'emergina_ig'            => 'https://www.instagram.com/_emergina/',
		'emergina_fb'            => 'https://www.facebook.com/emergina1',
		'emergina_yt'            => 'https://www.youtube.com/@Emergina',
		'emergina_li'            => 'https://www.linkedin.com/company/emergina/',
		'emergina_hero_title'    => 'Protect. <span class="text-gradient">Promote.</span><br> Prevail online.',
		'emergina_hero_subtitle' => 'Emergina combines aggressive digital marketing with impersonation removal and anti-piracy takedowns — so your brand grows without losing revenue to fakes and pirates.',
	);
	$fallback = ( '' === $default && isset( $defaults[ $key ] ) ) ? $defaults[ $key ] : $default;
	$value    = get_theme_mod( $key, $fallback );
	// If the customizer stored an empty string, fall back to the hardcoded default.
	if ( '' === $value || null === $value ) {
		$value = $fallback;
	}
	return $value;
}

/**
 * Handle contact form submission (admin-post).
 */
function emergina_handle_contact() {
	if ( ! isset( $_POST['emergina_contact_nonce'] ) || ! wp_verify_nonce( $_POST['emergina_contact_nonce'], 'emergina_contact' ) ) {
		wp_die( 'Invalid submission.' );
	}
	$name    = sanitize_text_field( $_POST['name'] ?? '' );
	$email   = sanitize_email( $_POST['email'] ?? '' );
	$message = sanitize_textarea_field( $_POST['message'] ?? '' );

	if ( $name && $email && $message ) {
		$to      = emergina_opt( 'emergina_email', get_option( 'admin_email' ) );
		$subject = 'New enquiry from ' . $name;
		$body    = "Name: $name\nEmail: $email\n\n$message";
		$headers = array( 'Reply-To: ' . $email );
		wp_mail( $to, $subject, $body, $headers );
	}
	wp_safe_redirect( add_query_arg( 'sent', '1', wp_get_referer() ?: home_url( '/#contact' ) ) . '#contact' );
	exit;
}
add_action( 'admin_post_nopriv_emergina_contact', 'emergina_handle_contact' );
add_action( 'admin_post_emergina_contact', 'emergina_handle_contact' );
