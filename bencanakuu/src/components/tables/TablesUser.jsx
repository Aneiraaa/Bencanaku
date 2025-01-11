export function TablesUser({ className, data }) {
  const menuTable = ["id", "username", "password", "fullname", "action"];

  return (
    <div
      className={`relative overflow-x-auto shadow-md sm:rounded-lg ${className}`}
    >
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
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {item.username}
              </th>
              <td className="px-6 py-4">{item.password}</td>
              <td className="px-6 py-4">{item.fullname}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline mr-3"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
