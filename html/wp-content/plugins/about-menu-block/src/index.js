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

registerBlockType("create-block/about-menu-block", {
	title: "About menu block",
	description: "About menu block",
	icon: "heart",
	category: "common",

	/**
	 * @see ./edit.js
	 */
	edit: ({ attributes, className, setAttributes }) => {
		return (
			<div {...useBlockProps()}>
				<section className="about__menu" id="about__menu">
					<div className="about__menu__container">
						<div className="about__menu__container__grid">
							<nav>
								<ul>
									<h3>Allmän information</h3>
								</ul>
								<ul>Skolans upplägg</ul>
								<ul>Fritids</ul>
								<ul>Köket</ul>
								<ul>Lärare</ul>
							</nav>
							<nav>
								<ul>
									<h3>Waldorfpedagogik</h3>
								</ul>
								<ul>Värdegrund</ul>
								<ul>Kursträd</ul>
								<ul>Alumni</ul>
							</nav>
							<nav>
								<ul>
									<a href="#parents">
										<h3>Förälder på skolan</h3>
									</a>
								</ul>
								<ul>
									<a href="#association">Föräldraledning</a>
								</ul>
								<ul>
									<a href="#board">Styrelsen</a>
								</ul>
								<ul>
									<a href="#member">Bli medlem</a>
								</ul>
							</nav>
							<nav>
								<ul>
									<a href="#gallery">
										<h3>Bildgalleri</h3>
									</a>
								</ul>
							</nav>
						</div>
					</div>
				</section>{" "}
			</div>
		);
	},

	/**
	 * @see ./save.js
	 */
	save: ({ attributes }) => {
		return (
			<section className="about__menu" id="about__menu">
				<div className="about__menu__container">
					<div className="about__menu__container__grid">
						<div>
							<a className="category" href="#general">
								Allmän information
							</a>

							<div className="sub__category">
								<a href="#structure">Skolans upplägg</a>
								<a href="#fritids">Fritids</a>
								<a href="#kitchen">Köket</a>
								<a href="#teacher">Lärare</a>
							</div>
						</div>
						<div>
							<a className="category" href="#waldorf">
								Waldorfpedagogik
							</a>

							<div className="sub__category">
								<a href="#waldorf">Värdegrund</a>
								<a href="#waldorf">Kursträd</a>
								<a href="#alumni">Alumni</a>
							</div>
						</div>
						<div>
							<a className="category" href="#parents">
								Förälder på skolan
							</a>

							<div className="sub__category">
								<a href="#association">Föräldraledning</a>

								<a href="#board">Styrelsen</a>

								<a href="#member">Bli medlem</a>
							</div>
						</div>
						<div>
							<a className="category" href="#gallery">
								Bildgalleri
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	},
});
