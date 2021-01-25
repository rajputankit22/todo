import React from 'react'
import TableHeaderCom from './TableHeader'
import TableDataCom from './TableData'
import tableCss from './Css/table.css'

export default function MainTable() {
    return (
        <React.Fragment>
            <table className={tableCss}>
                <TableHeaderCom />
                <TableDataCom />
            </table>
        </React.Fragment>
    )
}