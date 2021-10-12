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

registerBlockType("create-block/alumni-card-block", {
	title: "Alumni card block",
	description: "Card blocks for Alumni block",
	icon: "heart",
	category: "common",

	attributes: {
		title: {
			source: "text",
			selector: ".alumni__card__title",
		},
		subtitle: {
			source: "text",
			selector: ".alumni__card__subtitle",
		},
		quote: {
			source: "text",
			selector: ".alumni__card__quote",
		},
		body: {
			type: "array",
			source: "children",
			selector: ".alumni__card__body",
		},
		imageAlt: {
			attribute: "alt",
			selector: ".alumni__card__image",
		},
		imageUrl: {
			attribute: "src",
			selector: "alumni__card__image",
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
				<div className="alumni-card-container">
					<PlainText
						onChange={(content) => setAttributes({ title: content })}
						value={attributes.title}
						placeholder="Your Title"
						className="heading"
					/>
					<PlainText
						onChange={(content) => setAttributes({ subtitle: content })}
						value={attributes.subtitle}
						placeholder="Your Alumni Name"
						className="heading"
					/>
					<PlainText
						onChange={(content) => setAttributes({ quote: content })}
						value={attributes.quote}
						placeholder="Your Alumni Quote"
						className="heading"
					/>
					<RichText
						onChange={(content) => setAttributes({ body: content })}
						value={attributes.body}
						multiline="p"
						placeholder="Your Alumni Text"
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
				return <img className="alumni__card__image" src={src} alt={alt} />;
			}

			// if no alt selected
			return (
				<img
					className="alumni__card__image"
					src={src}
					alt=""
					aria-hidden="true"
				/>
			);
		};

		return (
			<div className="alumni__card">
				<div className="alumni__header__container">
					{cardImage(attributes.imageUrl, attributes.imageAlt)}
					<div className="alumni__title__container">
						<h2 className="alumni__card__title">{attributes.title}</h2>
						<h3 className="alumni__card__subtitle">{attributes.subtitle}</h3>
					</div>
				</div>
				<div className="alumni__card__content">
					<h1 className="alumni__card__quote">{attributes.quote}</h1>
					<div className="alumni__card__body">{attributes.body}</div>
				</div>
			</div>
		);
	},
});
