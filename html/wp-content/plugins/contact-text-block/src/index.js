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

registerBlockType("create-block/contact-text-block", {
	title: "Contact text block",
	description: "Contact text block",
	icon: "heart",
	category: "common",

	attributes: {
		title: {
			source: "text",
			selector: ".contact__text__title",
		},
		bodyleft: {
			type: "array",
			source: "children",
			selector: ".contact__text__body__left",
		},
		bodycenter: {
			type: "array",
			source: "children",
			selector: ".contact__text__body__center",
		},
		bodyright: {
			type: "array",
			source: "children",
			selector: ".contact__text__body__right",
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, className, setAttributes }) => {
		return (
			<div {...useBlockProps()}>
				<section className="contact__text">
					<div className="contact__text__container">
						<div>
							<h2>
								<PlainText
									onChange={(content) => setAttributes({ title: content })}
									value={attributes.title}
									placeholder="Your Title"
									className="heading"
								/>
							</h2>
						</div>
						<div className="contact__text__wrapper">
							<div className="contact__text_body__left">
								<RichText
									onChange={(content) => setAttributes({ bodyleft: content })}
									value={attributes.bodyleft}
									multiline="p"
									placeholder="Adress fields, multiline works"
								/>
							</div>
							<div className="contact__text__body__center">
								<RichText
									onChange={(content) => setAttributes({ bodycenter: content })}
									value={attributes.bodycenter}
									multiline="p"
									placeholder="Your text"
								/>
							</div>
							<div className="contact__text__body__right">
								<RichText
									onChange={(content) => setAttributes({ bodyright: content })}
									value={attributes.bodyright}
									multiline="p"
									placeholder="Your text"
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
			<section className="contact__text">
				<div className="contact__text__container">
					<div>
						<h2 className="contact__text__title">{attributes.title}</h2>
					</div>
					<div className="contact__text__wrapper">
						<div className="contact__text__body__left">
							{attributes.bodyleft}
						</div>
						<div className="contact__text__body__center">
							{attributes.bodycenter}
						</div>
						<div className="contact__text__body__right">
							{attributes.bodyright}
						</div>
					</div>
				</div>
			</section>
		);
	},
});
