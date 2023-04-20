import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import axios from 'axios'
import { IMAGE_API_URL, POKEMON_API_URL } from '../config'
import { CircularProgress, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PokemonCard from '../components/PokemonCard'

const useStyle = makeStyles((theme) => ({
    pokedexContainer: {
        textAling: 'center',
        padding: '60px 10px 0',
        backgroundColor: 'rgb(68, 68, 68)'
    }
}))

export default function Pokedex() {
    const [pokemonData, setPokemonData] = useState([]);
    const classes = useStyle();
    useEffect(() => {
        axios.get(POKEMON_API_URL + "?limit=100").then((response) => {
            if (response.status >= 200 && response.status < 300) {
                const { results } = response.data
                let newPokemonData = []
                results.forEach((pokemon, index) => {
                    index++
                    let pokemonObject = {
                        id: index,
                        url: IMAGE_API_URL + index + '.png',
                        name: pokemon.name
                    }

                    newPokemonData.push(pokemonObject)
                });
                setPokemonData(newPokemonData)
            }
            
        })
    }, [])
    return (
        <Box>
            {pokemonData ? (
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {pokemonData.map((pokemon) => {
                        return (
                            <PokemonCard key={pokemon.id} pokemon={pokemon} image={pokemon.url} />
                        )
                    })}
                </Grid>
            ) : ( <CircularProgress style={{marginTop: 100}} /> )}
        </Box>
    )
}
