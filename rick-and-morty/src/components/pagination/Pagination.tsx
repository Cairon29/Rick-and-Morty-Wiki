import { PageFilter } from "../../types/PageFilters";

interface HdlFunctions {
    hdlPrevPage: ( event: React.MouseEvent<HTMLButtonElement>) => void;
    hdlNextPage: ( event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface HdlProps {
    HdlFunctions: HdlFunctions;
    PageFilter: PageFilter;
}

export const Pagination = ( { HdlFunctions, PageFilter }: HdlProps ) => {

    const isPrevDisabled = PageFilter.page === 1;
    const isNextDisabled = PageFilter.page >= PageFilter.totalPages;

    return (
        <section className="pagination-section">
            <button 
                disabled={isPrevDisabled}  
                onClick={HdlFunctions.hdlPrevPage}
                className={isPrevDisabled ? "disabledButton" : "enabledButton"}
                >
                    Prev Page
            </button>
            <h3 style={{ color: "white"}}> Page {PageFilter.page}</h3>
            <button 
                onClick={HdlFunctions.hdlNextPage}
                disabled={isNextDisabled}
                className={isNextDisabled ? "disabledButton" : "enabledButton"}
                >
                    Next Page
            </button>
        </section>
    )
}
