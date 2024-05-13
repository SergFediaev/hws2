import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid #00CC22',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: 6,
                        height: 6,
                        backgroundColor: '#00CC22',
                        borderRadius: '50%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    },
                },
                '& .MuiSlider-track': {
                    color: '#00CC22',
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                    opacity: 1,
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange