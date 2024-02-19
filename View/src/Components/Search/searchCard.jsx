import React from 'react'
import styles from "./style.module.css";

export default function SearchCard({ searchResult,searchText }) {

    return (
        <>
            <div className="row text-center">
                <h2 className={styles.title}>SEARCH RESULTS FOR: {searchText.toUpperCase()}</h2>
            </div>

            <div className='row py-4'>

                {searchResult.length == 0 ? <div className='col-12'>
                <div className={`d-flex align-items-center ${styles.searchCard}`}>
                    <div className={`${styles.searchCardTitle}`}>No Match Found!!</div>
                </div>
            </div>
             : searchResult.map((result, index) => {

                return <div className='col-12' key={index}>
                        <div className={`${styles.searchCard}`}>
                            <div className={`${styles.searchCardTitle}`}>{result.title}</div>
                            <a href={result.url} className={`${styles.careeCardLinkJob}`}>Learn More</a>
                        </div>
                    </div>
                })}

            </div>
        </>

    )
}

