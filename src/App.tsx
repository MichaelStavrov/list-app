import React, { useState } from 'react';

import Posts from './components/Posts';
import PostControls from './components/PostControls';
import AddPost from './components/AddPost';
import RemovePost from './components/RemovePost';
import styles from './App.module.scss';

function App() {
  const [isOpenAddPostModal, setIsOpenAddPostModal] = useState(false);
  const [isOpenRemovePostModal, setIsOpenRemovePostModal] = useState(false);

  return (
    <div className={styles.app}>
      <AddPost
        isOpen={isOpenAddPostModal}
        closeModal={() => setIsOpenAddPostModal(false)}
      />
      <RemovePost
        isOpen={isOpenRemovePostModal}
        closeModal={() => setIsOpenRemovePostModal(false)}
      />
      <PostControls
        openAddPostModal={() => setIsOpenAddPostModal(true)}
        openRemovePostModal={() => setIsOpenRemovePostModal(true)}
      />
      <Posts />
    </div>
  );
}

export default App;
