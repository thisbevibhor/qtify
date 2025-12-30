import React, { useEffect, useState } from 'react';
import styles from './GridSection.module.css';
import { Box, CircularProgress } from '@mui/material';
import Card from '../AlbumCard/AlbumCard.jsx';
import axios from 'axios';

const Section = ({ title, dataSource }) => {
    const [cards, setCards] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false); // State for collapse button

    useEffect(() => {
        // Fetch data using Axios
        axios.get(dataSource)
            .then((response) => {
                setCards(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [dataSource]);

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <button 
                    className={styles.collapseButton} 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? 'Show All' : 'Collapse'}
                </button>
            </div>

            {cards.length === 0 ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            ) : (
                <div className={styles.cardGrid}>
                    {cards.map((item) => (
                        // We pass "album" as type to handle data structure inside Card
                        <Card key={item.id} data={item} type="album" />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Section;