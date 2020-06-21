import styles from './Pagination.module.css'
import React from "react";




const Pagination = (props) =>{

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let  sizePage =[]
    for (let i = 1; i <= pageCount; i++){
        sizePage.push(i)
    }
    return(
        <div>{sizePage.map(p => <span
            key={p}
            onClick={()=> props.onPageChanged(p)}
            className={props.currentPage === p ? styles.selected : ''}>{p}</span>)}
        </div>
    )
}
export default Pagination