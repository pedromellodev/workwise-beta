import Cookies from "universal-cookie";

const cookie = new Cookies();

type formData = {
	email: string;
	password: string;
};

const csrfToken = cookie.get("csrftoken");
export async function userLogin(data: formData) {
	try {
		const response = await fetch("http://127.0.0.1:8000/users/login", {
			method: "POST",
			credentials: "include",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-CSRFToken": csrfToken,
			},
			body: JSON.stringify(data),
		});
		const responseBody = await response.json();

		console.log(responseBody);
		return responseBody;
	} catch (error) {
		console.error("Erro no login:", error);
		return `Erro no login: ${error}`;
	}
}