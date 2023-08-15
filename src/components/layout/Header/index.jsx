import React from "react";
import SearchBar from "@/components/ui/SearchBar";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 px-3 py-5 bg-zinc-800 sticky top-0 z-10 border-b border-zinc-500 ">
      <select class="rounded-sm bg-zinc-500 py-2 md:py-1 ">
        <option selected value="messageFreqCount">
          Message Frequency Count
        </option>
        <option value="emojiFreqCount">Emoji Frequency Count</option>
      </select>

      <SearchBar className="flex-1" />
    </div>
  );
};

export default Header;
