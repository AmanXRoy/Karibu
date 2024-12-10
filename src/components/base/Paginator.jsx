import React, { useState } from 'react'

function Paginator({ active, totalPages }) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    const [currentPage, setCurrentPage] = useState(1);

    function handlePageClick(page) {

    }
    function nextPage() {

    }
    return (
        <div className='flex justify-center items-center gap-3'>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    style={{
                        padding: "10px",
                        backgroundColor: page === active ? " #FFA500" : "rgba(255, 165, 0, 0.2)",
                        color: page === active ? "#fff" : "#000",
                        border: "1px solid #ccc",
                    }}
                    className='rounded-full h-12 w-12'
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => nextPage()}
                style={{
                    padding: "10px",
                    backgroundColor: "#FFA500",
                    color: "#000",
                    border: "1px solid #ccc",
                }}
                className='rounded-full h-12 w-12 flex items-center justify-center'
            >
                <i className='rightArrow'></i>
            </button>
        </div>
    )
}

export default Paginator