/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
// import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
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

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType("create-block/hero-block", {
	title: "Hero Block hehehe",
	description: "hero block shown on the front page",
	icon: "carrot",
	category: "common",

	attributes: {
		title: {
			source: "text",
			selector: ".card__title",
		},
		body: {
			type: "array",
			source: "children",
			selector: ".card__body",
		},
		imageAlt: {
			attribute: "alt",
			selector: ".card__image",
		},
		imageUrl: {
			attribute: "src",
			selector: "card__image",
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, className, setAttributes }) => {
		const getImageButton = (openEvent) => {
			if (attributes.imageUrl) {
				return (
					<img
						src={attributes.imageUrl}
						onClick={openEvent}
						className="image"
					/>
				);
			} else {
				return (
					<div className="button-container">
						<Button onClick={openEvent} className="button button-large">
							Pick an image
						</Button>
					</div>
				);
			}
		};

		return (
			<div className="hero-container">
				<PlainText
					onChange={(content) => setAttributes({ title: content })}
					value={attributes.title}
					placeholder="Your Hero Title"
					className="heading"
				/>
				<RichText
					onChange={(content) => setAttributes({ body: content })}
					value={attributes.body}
					multiline="p"
					placeholder="Your Hero Text"
				/>
				<MediaUpload
					onSelect={(media) => {
						setAttributes({ imageAlt: media.alt, imageUrl: media.url });
					}}
					type="image"
					value={attributes.imageID}
					render={({ open }) => getImageButton(open)}
				/>
			</div>
		);
	},

	/**
	 * @see ./save.js
	 */
	save: ({ attributes }) => {
		const cardImage = (src, alt) => {
			if (!src) return null;

			if (alt) {
				return <img className="card__image" src={src} alt={alt} />;
			}

			// if no alt selected
			return (
				<img className="card__image" src={src} alt="" aria-hidden="true" />
			);
		};

		return (
			<div className="card">
				<div className="card__content">
					<h3 className="card__title">{attributes.title}</h3>
					<div className="card__body">{attributes.body}</div>
				</div>
				{cardImage(attributes.imageUrl, attributes.imageAlt)}
			</div>
		);
	},
});
