import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenDmsDocModal } from '../redux/docuSlice';
import { Grid, Stack } from '@mui/material';
import pdfIcon from "../assets/icons/pdf.png"
import ExtractButton from './ExtractButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '0px', // we can replace this with 30%
    left: '50%',
    transform: 'translate(-50%)',  // we can add -50% also to avoid scaling issues
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

export default function DmsDocModal() {
    const dispatch = useDispatch();
    const { openDmsDocModal } = useSelector(state => state.docu);

    const handleClose = () => dispatch(setOpenDmsDocModal(false));
    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={openDmsDocModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Attachments
                    </Typography>
                    <Grid container spacing={2} marginTop={'2px'} maxHeight={'252px'} overflow={'auto'}>
                        {Array(6).fill("").map((itm,i) => {
                            return <Grid key={i} item md={4}>
                                <Stack border={'1px solid grey'} borderRadius={'10px'} padding={'18px 0'} alignItems={'center'} position={'relative'}>
                                    <CloseIcon color='error' sx={{ position: 'absolute', top: 0, right: 0, cursor:'pointer' }}/>
                                    <img src={pdfIcon} height={40} width={40} />
                                    <Typography marginTop={'8px'}>Document 1</Typography>  {/* max 10 letters */}
                                </Stack>
                            </Grid>
                        })}
                    </Grid>
                    <Box textAlign={'end'} marginTop={'10px'}>
                        <ExtractButton />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
