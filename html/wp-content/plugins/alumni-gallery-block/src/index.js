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

registerBlockType("create-block/alumni-gallery-block", {
	title: "Alumni card and gallery block",
	description: "Block with alumni card and instagram gallery block",
	icon: "heart",
	category: "common",

	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, setAttributes }) => {
		const ALLOWED_BLOCKS = [
			"create-block/alumni-card-block",
			"create-block/gallery-block",
		];
		return (
			<div {...useBlockProps()}>
				<div className="alumni-gallery-block">
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
			<section className="alumni__gallery">
				<InnerBlocks.Content />
			</section>
		);
	},
});
