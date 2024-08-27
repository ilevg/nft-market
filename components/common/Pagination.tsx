import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const pagesCount = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="mb-20 flex justify-center items-center gap-3">
            <button
                className="cursor-pointer hover:text-[rgba(57,255,20,0.9)] transition-colors text-[24px]"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                ≪
            </button>
            {Array.from({ length: pagesCount }, (_, index) => (
                <button
                    className="shadow-for-box cursor-pointer h-20 w-[46px] border rounded-[5px]"
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    style={{ backgroundColor: currentPage === index + 1 ? 'rgba(57,255,20,0.9)' : 'transparent' }}
                >
                    {index + 1}
                </button>
            ))}

            <button
                className="cursor-pointer hover:text-[rgba(57,255,20,0.9)] transition-colors text-[24px]"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === pagesCount}
            >
                ≫
            </button>
        </div>
    );
};

export default Pagination;
