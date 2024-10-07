import { useState, useEffect } from "react";

const CSRFToken = () => {
	const [csrftoken, setcsrftoken] = useState("");

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const getCookie = (name: string | any[]) => {
		let cookieValue = null;
		if (document.cookie && document.cookie !== "") {
			const cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				// biome-ignore lint/style/useTemplate: <explanation>
				if (cookie.substring(0, name.length + 1) === name + "=") {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const fetchData = async () => {
			try {
				await fetch("http://127.0.0.1:8000/users/csrf-cookie", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
			} catch (err) {}
		};

		fetchData();
		setcsrftoken(getCookie("csrftoken") ?? "");
	}, []);

	return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />;
};

export default CSRFToken;
