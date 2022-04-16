import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { loadingActions } from "../../../../store/loadingSlice"

function AttendanceTable(props) {
  const thClass = "px-3 py-4 text-left bg-blue-900 text-white text-xs font-medium sm:text-sm sm:px-4"
  const tdClass = "px-3 py-4 border-t border-b border-gray-300 text-xs sm:text-sm sm:px-4"
  const trClass = "border-gray-300 even:bg-gray-300"

  const [attendanceData, setAttendanceData] = useState([{ roll_number: "rn", name: "name" }]);
  const filterData = useSelector(state => state.filterData.data)
  const dispatch = useDispatch()
  const [subject, setSubject] = useState({});

  useEffect(async () => {
    const url = "https://sasietdavv-backend.herokuapp.com/api/data/getclassstudents";
    dispatch(loadingActions.setLoading({ loading: true, msg: "Loading Attendance" }))
    const temp = await axios.post(url, filterData).catch(err => alert(err))
    setSubject(temp.data.subject[0])
    setAttendanceData(temp.data.students)
    dispatch(loadingActions.setLoading({ loading: false, msg: "loading" }))
  }, [filterData]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    // console.log(data)

    const list = []

    await attendanceData.forEach(element => {
      const listdata = {
        roll_number: element.roll_number, subject_code: subject.subject_code,
        status: data[element.roll_number] ? data[element.roll_number] : "Absent",
        date: props.date.substr(0, 10)
      }
      list.push(listdata)
    });

    const url = "https://sasietdavv-backend.herokuapp.com/api/data/feedattendance";
    dispatch(loadingActions.setLoading({ loading: true, msg: "Feeding Attendance" }))
    const temp = await axios.post(url, {list:list}).catch(err => alert(err))
    dispatch(loadingActions.setLoading({ loading: false, msg: "loading" }))
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className="w-full max-h-screen overflow-y-scroll">
      <table className="w-full table-auto rounded-sm">
        <thead>
          <tr>
            <th className={thClass}>Student Roll Number</th>
            <th className={thClass}>Student Name</th>
            <th className={thClass}>Present</th>
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
                    <td className={tdClass}><input type="checkbox" name={value.roll_number} value={"Present"} /></td>
                  </tr>
                )
              })
              : null
          }

        </tbody>
      </table>
      <button>Submit</button>
    </form>
  )
}

export default AttendanceTable