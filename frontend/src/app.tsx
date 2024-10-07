import { useAuthContext } from "./cli/AuthContext";
import { AdminRouter } from "./routes/admin.route";
import { UserRouter } from "./routes/user.route";

export function App() {
	const { auth } = useAuthContext();
	console.log(auth);
	return auth?.is_staff === true ? <UserRouter /> : <AdminRouter />;
}
