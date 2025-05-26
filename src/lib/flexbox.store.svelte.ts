import { items as initialItems } from '$lib/flexbox.init';

// ITEMS

// let items = $state({});
// let uuid = $state(10);

// // Initialize items with reactive properties
// for (const [id, item] of Object.entries(initialItems)) {
// 	items[id] = {
// 		id: $state(item.id),
// 		text: $state(item.text),
// 		width: $state(item.width),
// 		height: $state(item.height),
// 		fontSize: $state(item.fontSize)
// 	};
// }

// const addItem = ({ text = uuid.toString(), width, height, fontSize }) => {
// 	items[uuid] = {
// 		id: $state(uuid),
// 		text: $state(text),
// 		width: $state(width),
// 		height: $state(height),
// 		fontSize: $state(fontSize)
// 	};
// 	uuid++;
// };

// const updateItem = (id, { text, width, height, fontSize }) => {
// 	if (id in items) {
// 		if (text !== undefined) items[id].text = text;
// 		if (width !== undefined) items[id].width = width;
// 		if (height !== undefined) items[id].height = height;
// 		if (fontSize !== undefined) items[id].fontSize = fontSize;
// 	}
// };

// const deleteItem = (id) => {
// 	const { [id]: _, ...rest } = items;
// 	items = rest;
// };

// // Derived value for items as an array
// const itemsArray = $derived(() =>
// 	Object.entries(items).map(([id, item]) => ({
// 		id: item.id,
// 		text: item.text,
// 		width: item.width,
// 		height: item.height,
// 		fontSize: item.fontSize
// 	}))
// );

// export { items, itemsArray, addItem, updateItem, deleteItem };

const itemsArray = [
	{
		id: 1,
		text: 1,
		width: '80',
		height: '80',
		fontSize: '1.5'
	},
	{
		id: 2,
		text: 2,
		width: '80',
		height: '80',
		fontSize: '1.5'
	},
	{
		id: 3,
		text: 3,
		width: '80',
		height: '80',
		fontSize: '1.5'
	}
];

export { itemsArray };
