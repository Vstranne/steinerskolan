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

registerBlockType("create-block/card-block-message", {
	title: "Card block with message",
	description: "hero block shown on the front page",
	icon: "heart",
	category: "common",

	attributes: {
		body: {
			source: "text",
			selector: ".message__body",
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, setAttributes }) => {
		const blockProps = useBlockProps();
		const ALLOWED_BLOCKS = ["create-block/card-block"];
		return (
			<div className="message-block">
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
				<PlainText
					onChange={(content) => setAttributes({ body: content })}
					value={attributes.body}
					placeholder="Your Message"
					className="heading"
				/>
			</div>
		);
	},

	/**
	 * @see ./save.js
	 */
	save: ({ attributes }) => {
		const blockProps = useBlockProps.save();

		return (
			<div className="message">
				<div className="message__cards__wrapper">
					<InnerBlocks.Content />
				</div>
				<div className="message__wrapper">
					<h1 className="message__body">{attributes.body}</h1>
				</div>
			</div>
		);
	},
});
