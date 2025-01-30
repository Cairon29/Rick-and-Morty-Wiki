import { useContext } from "react";
import { CharacterFilterContext } from "../../../contexts/CharacterFilterContext";

interface HdlFunctions {
    hdlPrevPage: ( event: React.MouseEvent<HTMLButtonElement>) => void;
    hdlNextPage: ( event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface HdlProps {
    HdlFunctions: HdlFunctions;
}

export const PaginationStructure = ( { HdlFunctions }: HdlProps ) => {

    const { filter } = useContext(CharacterFilterContext)

    const isPrevDisabled = filter.page === 1;
    const isNextDisabled = filter.page >= filter.totalPages;

    return (
        <section className="pagination-section">
            <button 
                disabled={isPrevDisabled}  
                onClick={HdlFunctions.hdlPrevPage}
                className={isPrevDisabled ? "disabledButton" : "enabledButton"}
                >
                    Prev Page
            </button>
            <h3 style={{ color: "white"}}> Page {filter.page}</h3>
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
