export function TablesInformation({ className, data, onEdit, onDelete }) {
  const menuTable = ["id", "title", "desc", "author", "action"];

  return (
    <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${className}`}>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {menuTable.map((header, idx) => (
              <th key={idx} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr className="odd:bg-white even:bg-gray-50" key={id}>
              <td className="px-6 py-4">{id + 1}</td>

              <td className="px-6 py-4">{item.title}</td>
              <td className="px-6 py-4">{item.desc}</td>
              <td className="px-6 py-4">{item.author}</td>
              <td className="px-6 py-4 flex items-center gap-2">
                <button
                  onClick={() => onEdit(item._id)}
                  className="font-medium text-blue-600 hover:underline mr-3"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item._id)}
                  className="font-medium text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
