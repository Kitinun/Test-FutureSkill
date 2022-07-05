import React from 'react'

function BoxCard({ className, children }) {
    return (
        <div className={`shadow-box box-radius bg-white ${className}`}>
            <div className="px-3 py-2">{children}</div>
        </div>
    )
}

export default BoxCard