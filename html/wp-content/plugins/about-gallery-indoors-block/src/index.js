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

registerBlockType("create-block/about-gallery-indoors-block", {
	title: "About gallery indoors block",
	description: "About gallery indoors block",
	icon: "heart",
	category: "common",

	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, setAttributes }) => {
		const ALLOWED_BLOCKS = ["core/image"];
		return (
			<div {...useBlockProps()}>
				<section>
					<div>
						<h2>Bildgalleri inomhus</h2>
						<div>
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
			<section className="about__gallery">
				<div className="about__gallery__container indoors">
					<h3>Inomhus</h3>
					<div className="about__gallery__grid">
						<InnerBlocks.Content />
					</div>
				</div>
			</section>
		);
	},
});
