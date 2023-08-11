import styles from "./Paginator.module.css"
import React from "react";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curPF = (currentPage - 5) < 0 ? 0 : currentPage - 5;
    let curPL = currentPage + 5;
    let slicedPages = pages.slice(curPF, curPL);
    return <div>
        {slicedPages.map((p) => (
            <span
                key={p}
                className={currentPage === p ? styles.selectedPage : null}
                onClick={() => onPageChanged(p)}
            >{p}
                        </span>
        ))}
    </div>
}
export default Paginator;