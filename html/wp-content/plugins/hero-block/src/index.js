/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
// import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import { registerBlockType } from "@wordpress/blocks";
import {
	InspectorControls,
	PlainText,
	useBlockProps,
	ColorPalette,
	MediaUploadCheck,
	MediaUpload,
	RichText
} from "@wordpress/block-editor";

import { PanelBody, TabbableContainer } from "@wordpress/components";

import "./editor.scss";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('create-block/hero-block', {
	title: "Hero Block hehehe",
	description: "hero block shown on the front page",
	icon: "carrot",
	category: "common",

	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2'
		},
		body: {
			type: 'string',
			source: 'html',
			selector: 'p'
		}
	},
	
	
	/**
	 * @see ./edit.js
	 */
	 edit: ({ attributes, setAttributes }) => {
		const {
			title,
			body
		} = attributes;

		function onChangeTitle(newTitle) {
			setAttributes( { title: newTitle} );
		}


		function onChangeBody(newBody) {
			setAttributes( { body: newBody} );
		}

		return (
			<div class="cta-container">
				<RichText key="editable"
						  tagName= "h2"
						  placeholder= "Your CTA title"
						  value= { title }
						  onChange= { onChangeTitle } />
				<RichText key="editable"
						  tagName= "h2"
						  placeholder= "Your CTA body"
						  value= { body }
						  onChange= { onChangeBody } />
			</div>
		);
	},

	/**
	 * @see ./save.js
	 */
	save: ({ attributes }) => {
		const {
			title,
			body
		} = attributes;
		return (
			<div className="cta-container">
				<h2>{ title } </h2>
				<RichText.Content tagName="p"
								  value= { body } />
			</div>
		)
	}
});
