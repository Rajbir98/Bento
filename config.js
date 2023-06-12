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
	imageBackground: false,
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
			name: 'Spotify',
			icon: 'headphones',
			link: 'spotify:\\',
		},
		{
			id: '2',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
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
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
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
					name: 'Anime',
					link: 'spotify://playlist/2gzO301mUyciY3BE2tzZZx?si=ccacbef3639043b0',
				},
				{
					name: 'Oldies',
					link: 'spotify:///playlist/1wYXDQKAGaVx8kUifjJeoJ?si=c0f01381a9804127',
				},
				{
					name: 'Rock',
					link: 'spotify://playlist/5AtP8mlCgQKeVTkpzHaj7j?si=82b0e79db2ca47fb',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Spotify',
					link: 'spotify:\\',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Books',
					link: 'file:///D:/Data/Note%20Dump%20Area/Books',
				},
				{
					name: 'Quora',
					link: 'https://www.quora.com',
				},
			],
		},
	],
};
