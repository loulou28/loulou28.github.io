import React from 'react';
import styles from './learn_detail.module.css';

const LearnDetail = ({ eduList }) => {
    return (
        <div>
            <div>
                <img class={styles.topImg} src={eduList.IMGURL}/>
            </div>
            <div className={styles.info}>
                <table>
                    <colgroup>
                        <col width="90px" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>배움명</th>
                            <td>{eduList.SVCNM}</td>
                        </tr>
                        <tr>
                            <th>대상</th>
                            <td>{eduList.USETGTINFO}</td>
                        </tr>
                        <tr>
                            <th>기간</th>
                            <td>{eduList.SVCOPNBGNDT} ~ {eduList.SVCOPNENDDT}</td>
                        </tr>
                        <tr>
                            <th>장소</th>
                            <td>{eduList.PLACENM}</td>
                        </tr>
                        <tr>
                            <th>이용료</th>
                            <td>{eduList.PAYATNM}</td>
                        </tr>
                        <tr>
                            <th>모집정원</th>
                            <td>{eduList.RCRPERCAP} {eduList.UNICODE_NM}</td>
                        </tr>
                        <tr>
                            <th>신청제한</th>
                            <td>{eduList.ONEREQMINPR} ~ {eduList.ONEREQMXMPR} {eduList.UNICODE_NM}</td>
                        </tr>
                        <tr>
                            <th>접수방법</th>
                            <td>인터넷</td>
                        </tr>
                        <tr>
                            <th>접수기간</th>
                            <td>{eduList.RCPTBGNDT} ~ {eduList.RCPTENDDT}</td>
                        </tr>
                        <tr>
                            <th>취소기간</th>
                            <td>{eduList.REVSTDDAY} {eduList.REVSTDDAYNM}</td>
                        </tr>
                        <tr>
                            <th>문의전화</th>
                            <td><span>{eduList.TELNO}</span></td>
                        </tr>
                        <tr>
                            <th>선별방법</th>
                            <td>{eduList.ELMTHDCODE_NM}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LearnDetail;