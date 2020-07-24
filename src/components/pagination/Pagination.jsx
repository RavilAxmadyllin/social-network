import styles from './Pagination.module.css'
import React, {useState} from 'react';

const Pagination = (props) =>{
    let [portionNumber, setPortionNumber] = useState(1)
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let  sizePage =[]
    for (let i = 1; i <= pageCount; i++){
        sizePage.push(i)
    }
    const portionSize = 10
    const portionCount = Math.ceil(pageCount / portionSize)
    const leftPortion = (portionNumber - 1) * portionSize + 1
    const rightPortion = portionNumber * portionSize

    return(
        <div>{portionNumber > 1 &&  <button onClick={() => {setPortionNumber(portionNumber -1)}}> >> </button>}
            {sizePage.filter( p => p >= leftPortion && p <= rightPortion).map((p) => <span
                key={p}
                onClick={()=> props.onPageChanged(p)}
                className={props.currentPage === p ? styles.selected : ''}>{p}</span>)}
            {rightPortion &&  <button onClick={() => {setPortionNumber(portionNumber + 1)}}> >> </button>}

        </div>
    )
}
export default Pagination