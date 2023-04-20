import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { POKEMON_API_URL } from '../config';
import { useParams } from 'react-router';
import { CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system';

const useStyle = makeStyles((theme) => ({
    pokedexContainer: {
        height: '86vh',
        padding: '60px 10px 0',
        backgroundColor: 'black',
        color: 'white',
        marginTop: 60,
        textAlign: 'center',
        borderRadius: 5,
        paddingTop: 30
    },
    textTitle: {
        textTransform: 'upperCase',
        fontFamily: "Fantasy"
    }
}))

export default function PokemonDetails() {
    const { id } = useParams();
    const [ pokemon, setPokemon ] = useState(null);
    const classes = useStyle();
    
    useEffect(() => {        
        axios.get(POKEMON_API_URL + "/" + id).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                let pokemonObject = response.data
                setPokemon(pokemonObject)
            }
        })
    }, [id])
    return (
        <div>
            
        {pokemon ? (
            
            <Box className={classes.pokedexContainer}>
                <Typography className={classes.textTitle} variant="h1">
                    {pokemon.name}
                </Typography>
            </Box>
            ) : ( <CircularProgress style={{marginTop: 100}} /> )}
            
        </div>
    )
}