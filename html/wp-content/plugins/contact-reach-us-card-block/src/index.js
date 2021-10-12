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
} from "@wordpress/block-editor";

import { PanelBody, TabbableContainer, Button } from "@wordpress/components";

import "./editor.scss";

registerBlockType("create-block/contact-reach-us-card-block", {
	title: "Contact reach us card block",
	description: "Contact reach us card block",
	icon: "heart",
	category: "cards",

	attributes: {
		title: {
			source: "text",
			selector: ".reach__us__card__title",
		},
		body: {
			type: "array",
			source: "children",
			selector: ".reach__us__card__body",
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, className, setAttributes }) => {
		return (
			<div {...useBlockProps()}>
				<div className="reach__us__card">
					<PlainText
						onChange={(content) => setAttributes({ title: content })}
						value={attributes.title}
						placeholder="Your Title"
						className="heading"
					/>
					<RichText
						onChange={(content) => setAttributes({ body: content })}
						value={attributes.body}
						multiline="p"
						placeholder="Your text, multiline accepted"
					/>
				</div>
			</div>
		);
	},

	/**
	 * @see ./save.js
	 */
	save: ({ attributes }) => {
		return (
			<div className="reach__us__card">
				<h3 className="reach__us__card__title">{attributes.title}</h3>
				<div className="reach__us__card__body">{attributes.body}</div>
			</div>
		);
	},
});
