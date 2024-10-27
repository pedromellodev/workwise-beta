import { useState } from "react";
import { Input } from "../ui/input";

export const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	// const handleChange = (value) =>{
	//     setSearchTerm(value)
	// }
	return <Input placeholder="Buscar" className="text-slate-50" />;
};
