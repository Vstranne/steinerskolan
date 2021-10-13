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

registerBlockType("create-block/about-teacher-card-block", {
	title: "Teacher card block",
	description: "Teacher card block",
	icon: "heart",
	category: "cards",

	attributes: {
		title: {
			source: "text",
			selector: ".teacher__card__title",
		},
		subtitle: {
			source: "text",
			selector: ".teacher__card__subtitle",
		},
		body: {
			type: "array",
			source: "children",
			selector: ".teacher__card__body",
		},
		imageAlt: {
			attribute: "alt",
			selector: ".teacher__card__image",
		},
		imageUrl: {
			attribute: "src",
			selector: "teacher__card__image",
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
				<div className="teacher__card">
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
								placeholder="Teacher Name"
								className="heading"
							/>
							<PlainText
								onChange={(content) => setAttributes({ subtitle: content })}
								value={attributes.subtitle}
								placeholder="Your Teacher's Expertise"
								className="heading"
							/>
							<RichText
								onChange={(content) => setAttributes({ body: content })}
								value={attributes.body}
								multiline="p"
								placeholder="Your Teacher Text"
							/>
						</div>
					</div>
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
			<div className="teacher__card">
				{cardImage(attributes.imageUrl, attributes.imageAlt)}
				<div className="teacher__card__content__container">
					<div className="teacher__card__content">
						<h3 className="teacher__card__title">{attributes.title}</h3>
						<h4 className="teacher__card__subtitle">{attributes.subtitle}</h4>
						<div className="teacher__card__body">{attributes.body}</div>
					</div>
				</div>
			</div>
		);
	},
});
