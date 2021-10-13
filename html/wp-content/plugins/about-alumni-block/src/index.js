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

registerBlockType("create-block/about-alumni-block", {
	title: "About alumni block",
	description: "About alumni block",
	icon: "heart",
	category: "common",

	attributes: {
		title: {
			source: "text",
			selector: ".alumni__title",
		},
		subtitle: {
			source: "text",
			selector: ".alumni__subtitle",
		},
		body: {
			type: "array",
			source: "children",
			selector: ".alumni__body",
		},
		imageAlt: {
			attribute: "alt",
			selector: ".alumni__image",
		},
		imageUrl: {
			attribute: "src",
			selector: "alumni__image",
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
				<section className="alumni">
					<MediaUpload
						onSelect={(media) => {
							setAttributes({ imageAlt: media.alt, imageUrl: media.url });
						}}
						type="image"
						value={attributes.imageID}
						render={({ open }) => getImageButton(open)}
					/>
					<div className="teacher__card__content__container">
						<div className="teacher__card__content">
							<PlainText
								onChange={(content) => setAttributes({ title: content })}
								value={attributes.title}
								placeholder="Alumni name"
								className="heading"
							/>
							<PlainText
								onChange={(content) => setAttributes({ subtitle: content })}
								value={attributes.subtitle}
								placeholder="Your Alumni Subtitle"
								className="heading"
							/>
							<RichText
								onChange={(content) => setAttributes({ body: content })}
								value={attributes.body}
								multiline="p"
								placeholder="Your Alumni Text"
							/>
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
		const cardImage = (src, alt) => {
			if (!src) return null;

			if (alt) {
				return <img className="teacher__card__image" src={src} alt={alt} />;
			}

			// if no alt selected
			return (
				<img
					className="teacher__card__image"
					src={src}
					alt=""
					aria-hidden="true"
				/>
			);
		};

		return (
			<section className="alumni" id="alumni">
				<div className="alumni__container">
					<h3 className="alumni__container__title">Alumni</h3>
					<div className="alumni__content__container">
						{cardImage(attributes.imageUrl, attributes.imageAlt)}
						<div className="alumni__content">
							<h2 className="alumni__title">{attributes.title}</h2>
							<h3 className="alumni__subtitle">{attributes.subtitle}</h3>
							<div className="alumni__body">{attributes.body}</div>
						</div>
					</div>
				</div>
			</section>
		);
	},
});
