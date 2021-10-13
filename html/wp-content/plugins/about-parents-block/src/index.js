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

registerBlockType("create-block/about-parents-block", {
	title: "About parents block",
	description: "About parents block",
	icon: "heart",
	category: "common",

	attributes: {
		bodyOne: {
			type: "array",
			source: "children",
			selector: ".association__body",
		},
		bodyTwo: {
			type: "array",
			source: "children",
			selector: ".board__body",
		},
		bodyThree: {
			type: "array",
			source: "children",
			selector: ".member__body",
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, className, setAttributes }) => {
		return (
			<div {...useBlockProps()}>
				<section className="parents" id="parents">
					<div className="parents__container">
						<h2>Förälder på skolan</h2>
						<div>
							<div className="association">
								<h3>Föräldraförening</h3>
								<RichText
									onChange={(content) => setAttributes({ bodyOne: content })}
									value={attributes.bodyOne}
									multiline="p"
									placeholder="Your text, multiline accepted"
								/>
							</div>
							<div className="board">
								<h3>Styrelsen</h3>
								<RichText
									onChange={(content) => setAttributes({ bodyTwo: content })}
									value={attributes.bodyTwo}
									multiline="p"
									placeholder="Your text, multiline accepted"
								/>
							</div>
							<div className="member">
								<h3>Medlem</h3>
								<RichText
									onChange={(content) => setAttributes({ bodyThree: content })}
									value={attributes.bodyThree}
									multiline="p"
									placeholder="Your text, multiline accepted"
								/>
							</div>
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
			<section className="parents" id="parents">
				<div className="parents__container">
					<h2 className="parents__title">Förälder på skolan</h2>
					<div className="parents__grid">
						<article className="association" id="association">
							<h3 className="association__title">Föräldraförening</h3>

							<div className="association__body">{attributes.bodyOne}</div>
						</article>
						<article className="board" id="board">
							<h3 className="board__title">Styrelsen</h3>

							<div className="board__body">{attributes.bodyTwo}</div>
						</article>
						<article className="member" id="member">
							<h3 className="member__title">Medlem</h3>

							<div className="member__body">{attributes.bodyThree}</div>
						</article>
					</div>
				</div>
			</section>
		);
	},
});
