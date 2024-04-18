

const Dropdown = ({handleChange}) => {
    const options = [5, 6, 7, 8, 9, 10];
  return (
    <div className="flex items-center ml-6">
    <label htmlFor="perPage" className="mr-2">
      Rows per page:
    </label>
    <select id="perPage" className="border rounded px-2 py-1" onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
  )
}

export default Dropdown