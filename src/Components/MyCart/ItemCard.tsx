import React from 'react'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { Button, IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

const ItemCard = ({ data,handleDelete }) => {

    const { _id,doner, title, img, time } = data

  

 



    return (
        <div>
            <div className='flex md:flex-row flex-col justify-center items-center gap-10'>
                <div className='h-64 w-64 flex items-center justify-center'>
                    <img src={img} className='object-contain max-h-full max-w-full' alt="" />
                </div>
                <div>
                    <h3 className='text-3xl'>{title}</h3>
                    <p><span className="bold">Donor: </span>{doner}</p>
                    <p><span className="bold">Time: </span>{time}</p>
                    <Button variant="outlined" startIcon={<CommentOutlinedIcon />}>
                        Chat
                    </Button>
                    <Button variant="contained" color='error' onClick={()=>handleDelete(_id)} className='bg-red-600' startIcon={<DeleteOutline/>}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard