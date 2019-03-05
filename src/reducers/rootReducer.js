const initState = {
	posts: [
		{
			id: '1',
			title: 'AAA',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero in nesciunt facere animi laudantium eius distinctio dignissimos? Impedit dolorum natus modi quos sunt cumque cum unde nobis, quo velit?',
		},
		{
			id: '2',
			title: 'BBB',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero in nesciunt facere animi laudantium eius distinctio dignissimos? Impedit dolorum natus modi quos sunt cumque cum unde nobis, quo velit?',
		},
		{
			id: '3',
			title: 'CCC',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero in nesciunt facere animi laudantium eius distinctio dignissimos? Impedit dolorum natus modi quos sunt cumque cum unde nobis, quo velit?',
		},
	],
}

const rootReducer = (state = initState, action) => {
	return state
}

export default rootReducer
