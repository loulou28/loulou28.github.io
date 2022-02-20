import React, { memo } from 'react';
import styles from './learn_item.module.css';

const LearnItem = memo (({ eduList, onEduListClick, display }) => {
        const displayType = display === 'list' ? styles.list : styles.grid; 
        return (
            <tbody 
                className={`${styles.dataList} ${displayType}`}
                onClick={() => onEduListClick(eduList)}
            >
                <tr className={styles.education}>
                    <td>
                        <img className={styles.thumbnail} src={eduList.IMGURL} alt="education thumbnails" />
                    </td>
                    <td>
                        <div className={styles.titLine}>{eduList.SVCNM}</div>
                        <div className={styles.line}>{eduList.PAYATNM} / {eduList.USETGTINFO}</div>
                    </td>
                </tr>
            </tbody>
        );
    }   
);

export default LearnItem;