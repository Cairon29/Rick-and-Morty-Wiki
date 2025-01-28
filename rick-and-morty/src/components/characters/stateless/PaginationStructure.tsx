import React from 'react'

interface HdlFunctions {
    hdlPrevPage: ( event: React.MouseEvent<HTMLButtonElement>) => void;
    hdlNextPage: ( event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface HdlProps {
    HdlFunctions: HdlFunctions;
}

export const PaginationStructure = ( { HdlFunctions }: HdlProps ) => {
    return (
        <section className="pagination-section">
            <button onClick={HdlFunctions.hdlPrevPage}>Prev Page</button>
            <button onClick={HdlFunctions.hdlNextPage}>Next Page</button>
        </section>
    )
}
