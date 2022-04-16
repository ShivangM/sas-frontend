import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { loadingActions } from "../../../../store/loadingSlice"
import { attendaceActions } from "../../../../store/attendanceSlice"
import { subjectActions } from "../../../../store/subjectSlice"

function AttendanceTable(props) {
  const thClass = "px-3 py-4 text-left bg-blue-900 text-white text-xs font-medium sm:text-sm sm:px-4"
  const tdClass = "px-3 py-4 border-t border-b border-gray-300 text-xs sm:text-sm sm:px-4"
  const trClass = "border-gray-300 even:bg-gray-300"

  const filterData = useSelector(state => state.filterData.data)
  const dispatch = useDispatch()

  const attendanceData = useSelector(state => state.attendance.classStudents)

  useEffect(async () => {
    const url = "https://sasietdavv-backend.herokuapp.com/api/data/getclassstudents";
    dispatch(loadingActions.setLoading({ loading: true, msg: "Loading Attendance" }))

    const temp = await axios.post(url, filterData).catch(err => alert(err))
    dispatch(subjectActions.setClassSubject(temp.data.subject[0]))
    dispatch(attendaceActions.setClassStudents(temp.data.students))

    dispatch(loadingActions.setLoading({ loading: false, msg: "loading" }))
  }, [filterData]);

  return (
      <table className="w-full table-auto rounded-sm max-h-screen overflow-y-scroll">
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
                    <td className={tdClass}>{value.roll_number}</td>
                    <td className={tdClass}>{value.name}</td>
                    <td className={tdClass}>Present</td>
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