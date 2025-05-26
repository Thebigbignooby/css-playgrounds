// FLEX CONTAINER
const flexDirection = {
	default: 'row',
	options: ['row', 'row-reverse', 'column', 'column-reverse']
};

const flexWrap = {
	default: 'wrap',
	options: ['nowrap', 'wrap', 'wrap-reverse']
};

const justifyContent = {
	default: 'space-between',
	options: [
		'flex-start',
		'flex-end',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
		'start',
		'end',
		'left',
		'right'
	] // + safe | unsafe;
};

const alignItems = {
	default: 'center',
	options: [
		'stretch',
		'flex-start',
		'flex-end',
		'center',
		'baseline',
		'first baseline',
		'last baseline',
		'start',
		'end',
		'self-start',
		'self-end'
	] //+ safe | unsafe
};

export const container = {
	flexDirection,
	flexWrap,
	justifyContent,
	alignItems
};

// FLEX ITEMS
