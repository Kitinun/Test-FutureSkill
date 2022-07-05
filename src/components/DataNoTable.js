import React from 'react'

function DataNoTable({ colSpan }) {
    return (
        <tr>
            <td scope="col" colSpan={colSpan} className="text-center font14">ไม่พบข้อมูล</td>
        </tr>
    )
}

export default DataNoTable