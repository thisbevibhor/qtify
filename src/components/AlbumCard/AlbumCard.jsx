import React from 'react';
import styles from './AlbumCard.module.css';
import { Chip, Tooltip } from '@mui/material';

const Card = ({ data, type }) => {
  // If no data is passed (dummy card fallback), use placeholders
  const getCardData = (data) => {
     switch (type) {
        case 'album': {
            const { image, follows, title, songs } = data;
            return {
                image: image,
                follows: follows,
                label: `${follows} Follows`,
                title: title,
                tooltip: `${songs?.length} songs`
            }
        }
        // Add cases for 'song' later if needed
        default: 
            return data;
     }
  }

  const { image, label, title, tooltip } = getCardData(data);

  return (
    // Wrap in Tooltip to show number of songs on hover (optional UI enhancement)
    <Tooltip title={tooltip} placement="top" arrow>
        <div className={styles.card}>
            <div className={styles.wrapper}> 
                {/* Main Image Container */}
                <div className={styles.cardImageWrapper}>
                    <img src={image} alt={title} loading="lazy" />
                </div>
                {/* Bottom Section with Chip */}
                <div className={styles.cardContent}>
                    <Chip 
                        label={label} 
                        size="small" 
                        sx={{ 
                            backgroundColor: 'black', 
                            color: 'white',
                            fontSize: '10px',
                            fontFamily: 'Poppins',
                            height: '24px'
                        }} 
                    />
                </div>
            </div>
            {/* Album Title outside the wrapper */}
            <p className={styles.cardTitle}>{title}</p>
        </div>
    </Tooltip>
  );
};

export default Card;