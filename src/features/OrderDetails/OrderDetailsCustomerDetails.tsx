import React from 'react';
import { Grid, Typography, Box, FormControl, TextField } from '@mui/material';

const OrderDetailsCustomerDetails: React.FC = () => {
    return (
        <>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant='h6' sx={{ pb: 2 }}>
                    Shipping *
                </Typography>
                <Typography variant='caption'>* Demonstration Only</Typography>
                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id='streetAddress'
                        label='Street Address'
                        value='1234 Normal Lane'
                        disabled
                    />
                </FormControl>
                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id='city'
                        label='City'
                        value='Higgsville'
                        disabled
                    />
                </FormControl>
                <Box sx={{ my: 2 }}>
                    <FormControl sx={{ mr: 1 }}>
                        <TextField
                            id='state'
                            label='State'
                            value='NY'
                            disabled
                        />
                    </FormControl>
                    <FormControl sx={{ ml: 1 }}>
                        <TextField
                            id='zip'
                            label='Zip'
                            value='10010'
                            disabled
                        />
                    </FormControl>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant='h6' sx={{ pb: 2 }}>
                    Payment *
                </Typography>
                <Typography variant='caption'>* Demonstration Only</Typography>
                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id='cardNumber'
                        label='Credit Card Number'
                        value='0000-0000-0000'
                        disabled
                    />
                </FormControl>
                <Box sx={{ my: 2 }}>
                    <FormControl sx={{ mr: 1 }}>
                        <TextField
                            id='expiration'
                            label='Expiration'
                            value='3/23'
                            disabled
                        />
                    </FormControl>
                    <FormControl sx={{ ml: 1 }}>
                        <TextField id='cvc' label='CVC' value='227' disabled />
                    </FormControl>
                </Box>
            </Grid>
        </>
    );
};

export default OrderDetailsCustomerDetails;
