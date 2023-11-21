import React from 'react'

function PageHeader({ title, description }) {
    return (
        <>
           
            <div className='pageHeader'>
            <h3 className="pageTitle">{title}</h3>
            </div>

        </>
    )
}

export default PageHeader