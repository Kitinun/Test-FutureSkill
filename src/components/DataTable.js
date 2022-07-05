import React from 'react'

function DataTable(props) {
    const { headColumns, headerClass, dataColumns, children, classNameTb } = props;

    const setHeaderColumns = () => {
        return (
            <tr>
                {headColumns && headColumns.length > 0 &&
                    headColumns.map((head, h) => {
                        return (
                            <th key={h} scope="col" className={head.sortFlg ? `cursor-p ${headerClass}` : `${headerClass}` &&
                                head.index_width ? "index-width" : ""}>
                                <div className={head.sortFlg ? "d-flex align-items-center justify-content-center" : "d-flex justify-content-center"}>
                                    {head.name}
                                </div>
                            </th>
                        )
                    })
                }
            </tr>
        )
    }

    const renderColumns = (data) => {
        return data.map((col, j) => {
            if (typeof col === 'object' && col.props && col.$$typeof) {
                return (<td key={j} className={`${col.class ? col.class : "text-center"}`}>{col}</td>);
            } else if (typeof col === 'object') {
                return (<td key={j} className={`${col.class ? col.class : "text-center"}`}>{col.value}</td>);
            } else {
                return (<td key={j}>{col}</td>);
            }

        })
    }

    return (
        <div>
            <div className="table-responsive">
                <table className={classNameTb ? `${classNameTb} table table-striped table-bordered my-3` : "table table-striped table-bordered my-3"}>
                    <thead>
                        {headColumns && setHeaderColumns()}
                    </thead>
                    <tbody>
                        {(!dataColumns) && children}
                    </tbody>
                </table>
            </div>

            <style jsx="true" global="true">{`
                .i-filter {
                    width: 16px;
                    height: 16px;
                }
            `}
            </style>
        </div>
    )
}

export default DataTable