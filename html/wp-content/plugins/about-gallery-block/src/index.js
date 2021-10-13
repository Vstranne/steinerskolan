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

registerBlockType("create-block/about-gallery-block", {
	title: "About gallery block",
	description: "About gallery block",
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
						<h2>Bildgalleri</h2>
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
			<section className="about__gallery" id="gallery">
				<div className="about__gallery__container">
					<h2>Bildgalleri</h2>
					<h3>Utomhus</h3>
					<div className="about__gallery__grid">
						<InnerBlocks.Content />
					</div>
				</div>
			</section>
		);
	},
});
