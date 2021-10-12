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

registerBlockType("create-block/about-general-text-block", {
	title: "About general text block",
	description: "About general text block",
	icon: "heart",
	category: "common",

	attributes: {
		bodyOne: {
			type: "array",
			source: "children",
			selector: ".structure__body",
		},
		bodyTwo: {
			type: "array",
			source: "children",
			selector: ".fritids__body",
		},
		bodyThree: {
			type: "array",
			source: "children",
			selector: ".kitchen__body__one",
		},
		bodyFour: {
			type: "array",
			source: "children",
			selector: ".kitchen__body__two",
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, className, setAttributes }) => {
		return (
			<div {...useBlockProps()}>
				<section className="general" id="general">
					<div className="general__wrapper">
						<h2>Allmän information</h2>
						<div>
							<div className="structure" id="structure">
								<h3>Skolans upplägg</h3>
								<RichText
									onChange={(content) => setAttributes({ bodyOne: content })}
									value={attributes.bodyOne}
									multiline="p"
									placeholder="Your text, multiline accepted"
								/>
							</div>
							<div className="fritids" id="fritids">
								<h3>Fritids</h3>
								<RichText
									onChange={(content) => setAttributes({ bodyTwo: content })}
									value={attributes.bodyTwo}
									multiline="p"
									placeholder="Your text, multiline accepted"
								/>
							</div>
							<div className="kitchen" id="kitchen">
								<h3>Köket</h3>
								<RichText
									onChange={(content) => setAttributes({ bodyThree: content })}
									value={attributes.bodyThree}
									multiline="p"
									placeholder="Your text, multiline accepted"
								/>
							</div>
							<div className="kitchen" id="kitchen">
								<RichText
									onChange={(content) => setAttributes({ bodyFour: content })}
									value={attributes.bodyFour}
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
			<section className="general" id="general">
				<div className="general__wrapper">
					<div className="general__grid">
						<h2 className="general__title">Allmän information</h2>
						<article className="structure" id="structure">
							<h3 className="structure__title">Skolans upplägg</h3>

							<div className="structure__body">{attributes.bodyOne}</div>
						</article>
						<article className="fritids" id="fritids">
							<h3 className="fritids__title">Fritids</h3>

							<div className="fritids__body">{attributes.bodyTwo}</div>
						</article>
						<article className="kitchen" id="kitchen">
							<h3 className="kitchen__title__one">Köket</h3>

							<div className="kitchen__body__one">{attributes.bodyThree}</div>
						</article>
						<article className="kitchen" id="kitchen">
							<h3 className="kitchen__title__two">Köket</h3>

							<div className="kitchen__body__two">{attributes.bodyFour}</div>
						</article>
					</div>
				</div>
			</section>
		);
	},
});
