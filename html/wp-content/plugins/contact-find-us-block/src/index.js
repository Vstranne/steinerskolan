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

registerBlockType("create-block/contact-find-us-block", {
	title: "Contact find us block",
	description: "Contact find us block",
	icon: "heart",
	category: "common",

	attributes: {
		title: {
			source: "text",
			selector: ".contact__find__us__title",
		},
		address: {
			source: "text",
			selector: ".contact__find__us__address",
		},
		body: {
			type: "array",
			source: "children",
			selector: ".contact__find__us__body",
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, className, setAttributes }) => {
		return (
			<div {...useBlockProps()}>
				<section className="contact__find__us">
					<div className="contact__find__us__container">
						<div className="contact__find__us__content">
							<h1>
								<PlainText
									onChange={(content) => setAttributes({ title: content })}
									value={attributes.title}
									placeholder="Your Title"
									className="heading"
								/>
							</h1>
							<p>Adressen hit här:</p>
							<PlainText
								onChange={(content) => setAttributes({ address: content })}
								value={attributes.address}
								placeholder="Your Title"
								className="heading"
							/>
							<div className="contact__find__us__body">
								<RichText
									onChange={(content) => setAttributes({ body: content })}
									value={attributes.body}
									multiline="p"
									placeholder="Your text, multiline works"
								/>
							</div>
						</div>
						<div className="contact__find__us__map">
							<div className="mapouter">
								<div className="gmap_canvas">
									<iframe
										width="600"
										height="500"
										id="gmap_canvas"
										src="https://maps.google.com/maps?q=tallh%C3%B6jdsgatan%201&t=&z=13&ie=UTF8&iwloc=&output=embed"
										frameborder="0"
										scrolling="no"
										marginheight="0"
										marginwidth="0"
									></iframe>
								</div>
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
			<section className="contact__find__us">
				<div className="contact__find__us__container">
					<div className="contact__find__us__content">
						<h1 className="contact__find__us__title">{attributes.title}</h1>
						<p>
							Adressen hit här:{" "}
							<span className="contact__find__us__address">
								{attributes.address}
							</span>
						</p>

						<div className="contact__find__us__body">{attributes.body}</div>
					</div>
					<div className="contact__find__us__map">
						<div className="mapouter">
							<div className="gmap_canvas">
								<iframe
									width="600"
									height="500"
									id="gmap_canvas"
									src="https://maps.google.com/maps?q=tallh%C3%B6jdsgatan%201&t=&z=13&ie=UTF8&iwloc=&output=embed"
									frameborder="0"
									scrolling="no"
									marginheight="0"
									marginwidth="0"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	},
});
