import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import image1 from './image2.jpeg';
import image2 from './image6.jpeg';
import image3 from './image4.jpeg';
import image4 from './index.jpeg';
//import image5 from './image1.jpg';

import Box from "@material-ui/core/Box/Box";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            //overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        title: {
            color: theme.palette.primary.light,
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
    }),
);

interface OwnProps {
    //buttonText:string;
}


const Grid: React.FC<OwnProps> = () => {
    const classes = useStyles();
    const tileData = [
        {
            img: image1,
            title: 'Image',
            author: 'author',
        },
        {
            img: image2,
            title: 'Image',
            author: 'author',
        },
        {
            img: image3,
            title: 'Image',
            author: 'author',
        },
        {
            img: image4,
            title: 'Image',
            author: 'author',
        },
        // {
        //     img: image5,
        //     title: 'Image',
        //     author: 'author',
        // },

    ];

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <Box mt={1}>
                        <img src={tile.img} alt={tile.title}/>
                        </Box>
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`}>
                                    <StarBorderIcon className={classes.title}/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
export default Grid;
