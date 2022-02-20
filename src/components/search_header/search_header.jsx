import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => {
    return (
        <header className={styles.search_box}>
            <div className={styles.logo}>
                <img className={styles.buttonImg} src="/images/app_logo.png" alt="logo" />
            </div>
            <table className={styles.btnMenu}>
                <colgroup>
                    <col width="50%" />
                    <col width="50%" />
                </colgroup>
                <tbody>
                    <tr>
                        <td className={styles.select} id="btnSvc">분류 전체</td>
                        <td className={styles.select} id="btnRegion">지역구 전체</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className={styles.full_search}>
                            <div className={styles.input}>
                                <input type="text" id="searchWord" />
                            </div>
                            <div className={styles.button} id="btnSearch">
                                &nbsp;
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </header>
    );
};

export default SearchHeader;