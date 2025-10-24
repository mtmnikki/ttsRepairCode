const menu_data = [
	{
		title: "Home",
		link: "#", 
		has_dropdown: true,
    sub_menus: [
			{
				title: "Main Home",
				link: "/",
			},
			{
				title: "Car Workshop",
				link: "/home-2",
			},
			{
				title: "Auto Repair",
				link: "/home-3",
			},
		],

	},
	{
		title: "About",
		link: "/about", 
	},
			{
				title: "Service",
				link: "/service",
			},
			{
				title: "Blog",
				link: "/blog",
			},
			{
				title: "Team",
				link: "/team",
			},
			{
				title: "Faq",
				link: "/faq",
			},,
			{
				title: "404 || Error",
				link: "/404",
			},
	{
		title: "Contact",
		link: "/contact", 
		has_dropdown: false,
	},
];

export default menu_data;
