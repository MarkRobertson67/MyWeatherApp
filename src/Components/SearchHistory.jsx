
import React from "react";

function SearchHistory({ searchHistory, onSearchHistoryClick }) {
  return (
    <div>
      <h2>Search History</h2>
      {searchHistory.length === 0 ? (
        <p>No recent searches</p>
      ) : (
        <ul>
          {searchHistory.map((search, index) => (
            <li key={index} className="rightLi"  onClick={() => onSearchHistoryClick(search)}>
              {search.query}
              {search.data?.current_condition && (
                <span> {search.data.current_condition[0].temp_F}°F</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchHistory;
