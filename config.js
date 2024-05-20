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
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

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
			id: '6',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Spotify',
			icon: 'music',
			link: 'spotify://collection/tracks',
		},
		{
			id: '1',
			name: 'Discord',
			icon: 'bot',
			link: 'discord:\\',
		},
		{
			id: '5',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://instagram.com',
		},
		{
			id: '3',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '4',
			name: 'Pinterest',
			icon: 'pin',
			link: 'https://pinterest.com/home/',
		},
	],
	secondButtonsContainer: [
		{
			id: '6',
			name: 'ChatGPT',
			icon: 'brain-cog',
			link: 'https://open.ai/chat',
		},
		{
			id: '2',
			name: 'Telegram',
			icon: 'send',
			link: 'https://telegram.com',
		},
		{
			id: '1',
			name: 'Notion',
			icon: 'highlighter',
			link: 'Notion:\\',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'bot-message-square',
			link: 'https://reddit.com',
		},
		{
			id: '3',
			name: 'Whatsapp',
			icon: 'message-circle-more',
			link: 'https://web.whatsapp.com/',
		},
		{
			id: '4',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://gmail.com/',
		},
	]};