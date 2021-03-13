import React from 'react'
import Continent from '../continents/Continent'
import styles from './Ocean.module.css'

function Ocean() {
    return (
        <div className={styles.Ocean}>
            <Continent />
            <Continent />
            <Continent />
            <Continent />
        </div>
    )
}

export default Ocean
