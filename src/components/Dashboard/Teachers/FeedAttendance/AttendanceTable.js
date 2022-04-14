import React from "react"
import { useSelector } from "react-redux"

function AttendanceTable() {
  const thClass =
    "px-3 py-4 text-left bg-blue-900 text-white text-xs font-medium sm:text-sm sm:px-4"
  const tdClass = "px-3 py-4 border-t border-b border-gray-300 text-xs sm:text-sm sm:px-4"
  const trClass = "border-gray-300 even:bg-gray-300"

  const attendanceData = useSelector(state => state.attendance.attendance)

  return (
    <table className="w-full table-auto rounded-sm">
      <thead>
        <tr>
          <th className={thClass}>Student Roll Number</th>
          <th className={thClass}>Student Name</th>
          <th className={thClass}>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          attendanceData.length > 0 ?
            attendanceData.map((value, index) => {
              return (
                <tr className={trClass} key={index}>
                  <td className={tdClass}>{value.date.substr(0,10)}</td>
                  <td className={tdClass}>{value.subject_code}</td>
                  <td className={tdClass}>{value.subject_name}</td>
                </tr>
              )
            })
            : null
        }
      </tbody>
    </table>
  )
}

export default AttendanceTable