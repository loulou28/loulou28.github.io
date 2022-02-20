import React, { memo } from 'react';
import LearnItem from '../learn_item/learn_item';
import styles from './learn_list.module.css';

const LearnList = memo (( { eduList, onEduListClick, display } ) => {
        return (
            <table className={styles.educations}>
                <colgroup>
                        <col width="25%" />
                        <col width="75%" />
                </colgroup>
                {eduList.map(education => (
                    <LearnItem key={education.SVCID} eduList={education} onEduListClick={onEduListClick} display={display}/>
                ))}
            </table>
        );
    }
);

export default LearnList;