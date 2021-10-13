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

registerBlockType("create-block/about-teacher-block", {
	title: "About teacher block",
	description: "About teacher",
	icon: "heart",
	category: "common",

	attributes: {
		body: {
			type: "array",
			source: "children",
			selector: ".teacher__body",
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, setAttributes }) => {
		const ALLOWED_BLOCKS = ["create-block/about-teacher-card-block"];
		return (
			<div {...useBlockProps()}>
				<section className="teacher">
					<div className="teacher__container">
						<h2>Lärare</h2>
						<RichText
							onChange={(content) => setAttributes({ body: content })}
							value={attributes.body}
							multiline="p"
							placeholder="Your General Teacher Text"
						/>
						<div className="teacher__cards">
							<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
						</div>
					</div>
				</section>
			</div>
		);
	},

	/**
	 * @see ./save.js
	 */
	save: ({ attributes }) => {
		return (
			<section className="teacher" id="teacher">
				<div className="teacher__container">
					<h2>Lärare</h2>
					<div className="teacher__body">{attributes.body}</div>
					<div className="teacher__cards">
						<InnerBlocks.Content />
					</div>
				</div>
			</section>
		);
	},
});
