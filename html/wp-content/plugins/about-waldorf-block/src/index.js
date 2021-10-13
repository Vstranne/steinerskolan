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

registerBlockType("create-block/about-waldorf-block", {
	title: "About waldorf block",
	description: "About waldorf block",
	icon: "heart",
	category: "common",

	attributes: {
		bodyleft: {
			type: "array",
			source: "children",
			selector: ".waldorf__left__body",
		},
		bodyright: {
			type: "array",
			source: "children",
			selector: ".waldorf__right__body",
		},
		imageAlt: {
			attribute: "alt",
			selector: ".waldorf__image",
		},
		imageUrl: {
			attribute: "src",
			selector: "waldorf__image",
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
			<div {...useBlockProps()}>
				<div className="waldorf__cms__container">
					<h3>Värdegrund</h3>
					<RichText
						onChange={(content) => setAttributes({ bodyleft: content })}
						value={attributes.bodyleft}
						multiline="p"
						placeholder="Your Text"
					/>
					<h3>Kursträd</h3>
					<RichText
						onChange={(content) => setAttributes({ bodyright: content })}
						value={attributes.bodyright}
						multiline="p"
						placeholder="Your Text"
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
				return <img className="waldorf__image" src={src} alt={alt} />;
			}

			// if no alt selected
			return (
				<img className="waldorf__image" src={src} alt="" aria-hidden="true" />
			);
		};

		return (
			<section className="waldorf" id="waldorf">
				<div className="waldorf__container">
					<h2>Waldorfpedagogik</h2>
					<div className="waldorf__body__wrapper">
						<article>
							<h3>Värdegrund</h3>
							<div className="waldorf__left__body">{attributes.bodyleft}</div>
						</article>
						<article>
							<h3>Kursträd</h3>
							{cardImage(attributes.imageUrl, attributes.imageAlt)}
							<div className="waldorf__right__body">{attributes.bodyright}</div>
						</article>
					</div>
				</div>
			</section>
		);
	},
});
