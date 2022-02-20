import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import LearnDetail from './components/learn_detail/learn_detail';
import LearnList from './components/learn_list/learn_list';
import SearchHeader from './components/search_header/search_header';

function App ({ learnseoul }) {
  const [educations, setEduList] = useState([]); // education에 변수 저장, setEduList 함수로 educations 업데이트
  const [selectedEducation, setSelectedEducation] = useState(null);
  const selectEducation = (education) => {
    setSelectedEducation(education);
  };
  useEffect( () => {
    setSelectedEducation(null);
    learnseoul
      .education()
      .then(educations => {setEduList(educations)})
  }, [learnseoul]);
  return (
    <div className={styles.app}>
      <SearchHeader />
      {selectedEducation && (
          <div className={styles.detail}>
            <LearnDetail eduList={selectedEducation} />
          </div> 
        )}
      <div className={styles.list}>
        <LearnList eduList={educations} onEduListClick={selectEducation} display={selectedEducation? 'list' : 'grid'}/>
      </div>
    </div>
  );
};

export default App;
