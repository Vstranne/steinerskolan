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

registerBlockType("create-block/card-block", {
	title: "Small card block",
	description: "Card blocks for Card block message",
	icon: "heart",
	category: "common",

	attributes: {
		title: {
			source: "text",
			selector: ".small__card__title",
		},
		body: {
			type: "array",
			source: "children",
			selector: ".small__card__body",
		},
		imageAlt: {
			attribute: "alt",
			selector: ".small__card__image",
		},
		imageUrl: {
			attribute: "src",
			selector: "small__card__image",
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
				<div className="card-container">
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
				return <img className="small__card__image" src={src} alt={alt} />;
			}

			// if no alt selected
			return (
				<img
					className="small__card__image"
					src={src}
					alt=""
					aria-hidden="true"
				/>
			);
		};

		return (
			<div className="small__card">
				{cardImage(attributes.imageUrl, attributes.imageAlt)}
				<div className="small__card__content">
					<h3 className="small__card__title">{attributes.title}</h3>
					<div className="small__card__body">{attributes.body}</div>
					<a href="">Läs mer</a>
				</div>
			</div>
		);
	},
});
