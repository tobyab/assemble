export async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/gpt2",
		{
			headers: { Authorization: "Bearer process.env.AI_API_KEY" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": "Can you please let us know more details about your "}).then((response) => {
	console.log(JSON.stringify(response));
});

// needs to be able to return the person the quote is by!, and also potentially in what channel.