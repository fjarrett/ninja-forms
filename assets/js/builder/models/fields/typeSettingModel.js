/**
 * Model that represents our type setting.
 *
 * When the model is created, we trigger the init event in two radio channels.
 *
 * This lets specific types of settings modify the model before anything uses it.
 *
 * Fieldset, for instance, uses this hook to instantiate its settings as a collection.
 * 
 * @package Ninja Forms builder
 * @subpackage Fields
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */
define( [], function() {
	var model = Backbone.Model.extend( {
		defaults: {
			settings: false,
			placeholder: ''
		},

		initialize: function() {
			// Send out two messages saying that we've initialized a setting model.
			nfRadio.channel( 'fields' ).trigger( 'init:fieldTypeSettingModel', this );
			nfRadio.channel( 'fields-' + this.get( 'type' ) ).trigger( 'init:fieldTypeSettingModel', this );
		}
	} );
	
	return model;
} );