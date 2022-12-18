import React from "react";
import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [data, setData] = useState({ items: [], num: 0 });
	return (
		<>
			<DataContext.Provider value={{ data, setData }}>
				{children}
			</DataContext.Provider>
		</>
	);
};

export default DataContext;
