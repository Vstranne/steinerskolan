import "./style.scss";
import { registerBlockType } from "@wordpress/blocks";
import {
	InspectorControls,
	PlainText,
	useBlockProps,
	ColorPalette,
	MediaUploadCheck,
	MediaUpload,
	RichText,
	InnerBlocks,
} from "@wordpress/block-editor";

import { PanelBody, TabbableContainer, Button } from "@wordpress/components";

import "./editor.scss";

registerBlockType("create-block/contact-reach-us-block", {
	title: "Contact reach us full section",
	description: "Contact reach us full section",
	icon: "heart",
	category: "common",

	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, setAttributes }) => {
		const ALLOWED_BLOCKS = ["create-block/contact-reach-us-card-block"];
		return (
			<div {...useBlockProps()}>
				<p>Add text cards</p>
				<section className="contact__reach__us">
					<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
				</section>
			</div>
		);
	},

	/**
	 * @see ./save.js
	 */
	save: ({ attributes }) => {
		return (
			<section className="contact__reach__us">
				<div className="contact__reach__us__cards__container">
					<InnerBlocks.Content />
				</div>
			</section>
		);
	},
});
