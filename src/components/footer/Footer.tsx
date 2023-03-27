import React from "react";
import "./footer.css";
import logoGitHub from "../../assets/logos/github-logo.svg";

export const Footer = () => {
	return (
		<div className="footer-container">
			<a
				className="footer-link"
				href="https://github.com/Lucasoviedo/Portfolio/"
				target="_blank"
				rel="noreferrer"
			>
				<h4>Created and designed by Lucas Oviedo</h4>
				<img src={logoGitHub} alt="imagen gitHub" className="footer-git-logo" />
			</a>
		</div>
	);
};
