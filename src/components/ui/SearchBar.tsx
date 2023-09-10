import { useGlobalContext } from "../../contexts/AppContext";
import { HiOutlineSearch } from "react-icons/hi";
import React from "react";

type SearchBarProps = {
  className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const { setSearchToken, fileContent } = useGlobalContext();

  return (
    <div className={`relative ${className}`}>
      <HiOutlineSearch className="text-xl text-zinc-600 absolute top-0 bottom-0 my-auto left-1" />
      <input
        className="pr-1 pl-9 py-1 rounded-sm bg-zinc-500 w-full"
        type="text"
        onChange={(e) => setSearchToken(e.target.value)}
        placeholder="Search token"
        disabled={fileContent.length < 1 ? true : false}
      />
    </div>
  );
};

export default SearchBar;
