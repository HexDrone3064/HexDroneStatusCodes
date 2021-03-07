/* Define how to create table body. */

/** list of images */
const images = [
	'CONVERTGIF.gif', 
	'DRONEGIF.gif', 
	'DRONEPOST.gif', 
	'HEXCORPGIF.gif', 
	'hexcorpspiral2.gif', 
	'HEXLATEXGIF.gif', 
	'OBEYGIF.gif', 
	'SERVEGIF.gif', 
	'SUBMITGIF.gif',
]

const createTableData = (text) => `<td>${text}</td>`;

const createIntentImage = (text) => {
	// See https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent
	const intent = `https://twitter.com/intent/tweet?text=${text}`;

	const image = `img/gif/${images[Math.floor(Math.random() * images.length)]}`;
	const size = 60;

	return createTableData(`<a href="${intent}" target="_blank" rel="noopener noreferrer"><img src="${image}" alt="${text}" width="${size}", height="${size}"></a>`);
}

const createTableRow = (droneId, obj) => {
	// These variable will use to display in other language.
	const lang = obj;
	const required = 'input required';

	let additionalMessage = lang['additional'];
	if (additionalMessage == null) {
		additionalMessage = ''
	} else if (additionalMessage == '') {
		additionalMessage = `<span class="italic">(${required})</span>`
	}

	return [
		'<tr>', 
		createIntentImage(buildMessage(droneId, obj)),
		createTableData(lang['code'] ? lang['code'] : 'Err'), 
		createTableData(lang['message'] ? lang['message'] : ''),
		createTableData(additionalMessage), 
		'</tr>'
	].join('');
};

const buildTable = (container, droneId) => {
	container.innerHTML = STATUS_CODES.map(x => createTableRow(droneId, x)).join('');
};
