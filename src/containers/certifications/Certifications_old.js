import React, {Component} from 'react';
import './Certifications.css';
import {Fade} from "react-reveal";
import {certifications} from "../../portfolio";
import CertificationCard from '../../components/certificationCard/CertificationCard';

export default function Certifications() {
	return (
		<Fade bottom duration={2000} distance="20px">
			
			<div className="main" id="certs">	
				<div className="certs-header-div">
					<h1 className="certs-header">Certifications</h1>
				</div>
				<div className="certs-main-div">
					<div className="certs-body-div">
						{certifications.certifications.map(cert => {
							return <CertificationCard certificate={cert} />;
						})}
					</div>
				</div>
			</div>
		</Fade>
	);
}