import React from "react"

function StripedTable() {
  const thClass =
    "px-4 py-4 text-left bg-blue-900 text-white text-sm font-medium"
  const tdClass = "px-4 py-8 border-t border-b border-gray-300 text-sm"
  const trClass = "border-gray-300 even:bg-gray-300"
  return (
    <table className="w-[90%] table-auto rounded-sm">
      <thead>
        <tr>
          <th className={thClass}>Date</th>
          <th className={thClass}>Subject Code</th>
          <th className={thClass}>Subject Name</th>
          <th className={thClass}>Faculty</th>
          <th className={thClass}>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className={trClass}>
          <td className={tdClass}>02-02-2022</td>
          <td className={tdClass}>AIR4C4</td>
          <td className={tdClass}>Maths</td>
          <td className={tdClass}>Mr. Rohit Pathak</td>
          <td className={tdClass}>Present</td>
        </tr>

        <tr className={trClass}>
          <td className={tdClass}>02-02-2022</td>
          <td className={tdClass}>AIR4C4</td>
          <td className={tdClass}>Maths</td>
          <td className={tdClass}>Mr. Rohit Pathak</td>
          <td className={tdClass}>Present</td>
        </tr>

        <tr className={trClass}>
          <td className={tdClass}>02-02-2022</td>
          <td className={tdClass}>AIR4C4</td>
          <td className={tdClass}>Maths</td>
          <td className={tdClass}>Mr. Rohit Pathak</td>
          <td className={tdClass}>Present</td>
        </tr>

        <tr className={trClass}>
          <td className={tdClass}>02-02-2022</td>
          <td className={tdClass}>AIR4C4</td>
          <td className={tdClass}>Maths</td>
          <td className={tdClass}>Mr. Rohit Pathak</td>
          <td className={tdClass}>Present</td>
        </tr>

        <tr className={trClass}>
          <td className={tdClass}>02-02-2022</td>
          <td className={tdClass}>AIR4C4</td>
          <td className={tdClass}>Maths</td>
          <td className={tdClass}>Mr. Rohit Pathak</td>
          <td className={tdClass}>Present</td>
        </tr>

        <tr className={trClass}>
          <td className={tdClass}>02-02-2022</td>
          <td className={tdClass}>AIR4C4</td>
          <td className={tdClass}>Maths</td>
          <td className={tdClass}>Mr. Rohit Pathak</td>
          <td className={tdClass}>Present</td>
        </tr>

        <tr className={trClass}>
          <td className={tdClass}>02-02-2022</td>
          <td className={tdClass}>AIR4C4</td>
          <td className={tdClass}>Maths</td>
          <td className={tdClass}>Mr. Rohit Pathak</td>
          <td className={tdClass}>Present</td>
        </tr>

        <tr className={trClass}>
          <td className={tdClass}>02-02-2022</td>
          <td className={tdClass}>AIR4C4</td>
          <td className={tdClass}>Maths</td>
          <td className={tdClass}>Mr. Rohit Pathak</td>
          <td className={tdClass}>Present</td>
        </tr>

        <tr className={trClass}>
          <td className={tdClass}>02-02-2022</td>
          <td className={tdClass}>AIR4C4</td>
          <td className={tdClass}>Maths</td>
          <td className={tdClass}>Mr. Rohit Pathak</td>
          <td className={tdClass}>Present</td>
        </tr>
      </tbody>
    </table>
  )
}

export default StripedTable