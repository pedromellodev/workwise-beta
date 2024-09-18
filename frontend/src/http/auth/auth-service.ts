type formData = {
	username: string;
	password: string;
};

export async function userLogin(data: formData) {
	try {
		const response = await fetch("http://127.0.0.1:8000/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		});
		const responseBody = await response.json();
		console.log(responseBody);
		return responseBody;
	} catch (error) {
		console.error(error);
	}
}
