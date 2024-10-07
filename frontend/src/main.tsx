// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./cli/AuthContext.tsx";

const queryClient = new QueryClient();
// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<AuthProvider>
			<App />,
		</AuthProvider>
	</QueryClientProvider>,
);
