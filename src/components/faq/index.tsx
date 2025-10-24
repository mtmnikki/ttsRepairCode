import React from "react";
import Breadcrumb from "@/common/Breadcrumb";
import FaqArea from "../services-single/FaqArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import AppointmentForm from "../appointment/AppointmentForm";

const Faq = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb subtitle="Faq" />
			<FaqArea />
			<AppointmentForm />
			<FooterOne />
		</>
	);
};

export default Faq;
