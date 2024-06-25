import { Blog, SearchAndFilterType } from "@/types/type";
import React, { ChangeEvent, ReactElement, useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce"

interface props {
	blogs: Blog[];
	searchAndFilters: SearchAndFilterType;
    setSearchAndFilters: (prev: SearchAndFilterType) => void;
}

const SearchAndFilter = ({ blogs, searchAndFilters, setSearchAndFilters }: props) => {
	const [options, setOptions] = useState<React.JSX.Element[]>([]);
	const [filter, setFilter] = useState<string>("");
	const [search, setSearch] = useState<string>("")

	const getOptions = () => {
		const tagsList: string[] = ["All"];
		blogs.forEach((e) => {
			e?.tags.forEach((o) => {
				if (!tagsList.includes(o?.toUpperCase())) tagsList.push(o?.toUpperCase());
			});
		});
		setOptions(
			tagsList.map((tag, index) => {
				return <option key={index}>{tag}</option>;
			})
		);
	};

    const filterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSearchAndFilters({...searchAndFilters, filter: value === "All" ? "" : value})
		setFilter(value);
    }
	
	const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchAndFilters({...searchAndFilters, search: value})
	}

	const debouncedFunction = useCallback(debounce(searchHandler, 800), []);

	useEffect(() => {
		getOptions();
	}, [blogs]);

	return (
		<div id='searchAndFilterContainer'>
			<div id='filterContainer'>
				<label htmlFor='filter'>Filter</label>
				<select value={filter} onChange={filterHandler} id='filter'>{options}</select>
			</div>
			<div id='searchContainer'>
				<input 
					onChange={(e) => {
						debouncedFunction(e);
						setSearch(e.target.value)
					}} 
					placeholder='Search Blog' 
					type='text'
					value={search}
				/>
			</div>
		</div>
	);
};

export default SearchAndFilter;
