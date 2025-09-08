
"use client";
import { useState } from "react";

const tabContents = [
  {
    title: "Mission",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys stan. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Vision",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. been the industrys stanLorem Ipsum has.",
  },
  {
    title: "History",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys stan.",
  },
];

const CompanyArea = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
		<div className="container">
		<div className="ak-height-125 ak-height-lg-80"></div>
		<div className="company-tab">
			<ul className="tabs">
				{tabContents?.map((tab, index) => (
					<li
						key={index}
						className={activeTab === index ? "active-tab" : ""}
						onClick={() => handleTabClick(index)}
					>
						{tab.title}
					</li>
				))}
			</ul>

			<div className="tabs-content">
				<div className="list">
					<div className="ak-section-heading ak-style-1 ak-type-1">
						<div className="background-text">About Company</div>
						<h3 className="desp">{tabContents[activeTab].description}</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default CompanyArea;
