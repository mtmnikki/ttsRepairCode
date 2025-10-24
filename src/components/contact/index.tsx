import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import ContactArea from "./ContactArea";

const Contact = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb subtitle="Contact" />
      <ContactArea />
			<FooterOne />
		</>
	);
};

export default Contact;
