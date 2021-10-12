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

registerBlockType("create-block/gallery-block", {
	title: "Gallery block",
	description: "Block with instagram gallery, manual picture upload",
	icon: "heart",
	category: "common",

	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, setAttributes }) => {
		const ALLOWED_BLOCKS = ["core/image"];
		return (
			<div {...useBlockProps()}>
				<div className="gallery-block">
					<p>Add 1 alumni card and 1 gallery block</p>
					<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
				</div>
			</div>
		);
	},

	/**
	 * @see ./save.js
	 */
	save: ({ attributes }) => {
		return (
			<div className="gallery">
				<div className="gallery__title">
					<h2>Följ vår instagram för att hålla dig uppdaterad</h2>
					<img
						src="/wp-content/uploads/instagramlogo.svg"
						alt="instagram logo"
					/>
				</div>
				<div className="gallery__image__wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
});
