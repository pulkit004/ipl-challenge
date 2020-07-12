import React, {memo} from 'react';
import styles from './Loader.module.css'

const Loader = () => <div className={styles.loading} />

export default memo(Loader)