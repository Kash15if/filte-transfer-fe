const FilterBar = () => {
    return (     <div class="filter-container">
        <input type="text" id="searchInput" placeholder="Search..." />
        <select id="tagSelect">
            <option value="">Select Tag</option>
            <option value="#tag1">#tag1</option>
            <option value="#tag2">#tag2</option>
            <option value="#tag3">#tag3</option>
        </select>
        <button id="filterButton">Filter</button>
    </div>
 );
}
 
export default FilterBar;