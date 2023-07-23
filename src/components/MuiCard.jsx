import React from 'react'
import {
Box,
Card,
CardContent,
Typography,
CardActions,
Button,
CardMedia
} from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width={'400px'} padding={4}>
            <Card>
                <CardMedia component={'img'} height={'140'} image='https://source.unsplash.com/random' alt='unsplash image'></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant='h5' component={'div'}>React</Typography>
                    <Typography variant='body2'>
                        React is a javascripts libray for bulding user interfaces. React can be used as a base in the development of single-page or mobile applications
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'> Share </Button>
                    <Button variant='contained' size='small'> Learn More </Button>
                </CardActions>
            </Card>
    </Box>
  )
}
