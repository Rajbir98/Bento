// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Rajbir',
	imageBackground: false, // Grabs your current Desktop Wallpaper
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '78a74182d7964b1a99d10ff11c56a1af', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '26.727100',
	defaultLongitude: '88.395287',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Spotify',
			icon: 'headphones',
			link: 'spotify:\\home',
		},
		{
			id: '3',
			name: 'Discord',
			icon: 'bot',
			link: 'discord:\\',
		},
		{
			id: '4',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '5',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '6',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Sun Dew',
					link: 'spotify://playlist/2hI1zM4BqBu6LpbmlItsEE?si=c920c5ea6e77467d',
				},
				{
					name: 'Your Name',
					link: 'spotify://playlist/2gzO301mUyciY3BE2tzZZx?si=ccacbef3639043b0',
				},
				{
					name: 'This is Aimer',
					link: 'spotify://playlist/37i9dQZF1DZ06evO02uS96?si=04e37b00d7164a68',
				},
				{
					name: 'Beat Drops',
					link: 'spotify://playlist/5AtP8mlCgQKeVTkpzHaj7j?si=76f24932b9cb4717',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Godot Docs',
					link: 'https://docs.godotengine.org/en/4.0/',
				},
				{
					name: 'Github Desktop',
					link: 'x-github-client:\\',
				},
				{
					name: 'Notion',
					link: 'https://notion.so/',
				},
				{
					name: 'Quora',
					link: 'https://www.quora.com',
				},
			],
		},
	],
};
