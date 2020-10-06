import React, { useEffect, useState } from "react";
import { Typography, Link, CircularProgress, Button} from "@material-ui/core";
import { toFirstCharUppercase } from "../Constants";
import axios from "axios";

const Pokemon = (props) => {
    const { match, history } = props;
    const { params } = match;
    const { pokemonId } = params;
    const [pokemon, setPokemon] = useState(undefined);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(function (response) {
                const { data } = response;
                setPokemon(data);
            })
            .catch(function (error) {
                setPokemon(false);
            });
    }, [pokemonId]);

    const generatePokemonJSX = (pokemon) => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;

        return (
            <>

                <Typography variant="h1" style={{padding: 5}}>
                    {`${id}.`} {toFirstCharUppercase(name)}
                    <img src={front_default}  alt="small" />
                </Typography>
                <img style={{ width: "270px", height: "270px" }} src={fullImageUrl}   alt="large"/>
                <Typography variant="h3">Pokemon Info</Typography>
                <Typography style={{padding: 5 }}>
                    {"Species: "}
                    <Link href={species.url}>{species.name} </Link>
                </Typography>
                <Typography style={{  padding: 5 }}>Height: {height} </Typography>
                <Typography style={{ padding: 5 }}>Weight: {weight} </Typography>
                <Typography variant="h6" style={{ fontSize: 20, padding: 5 }}> Types:</Typography>
                {types.map((typeInfo) => {
                    const { type } = typeInfo;
                    const { name } = type;
                    return <Typography style={{padding: 5}} key={name}> {`${name}`}</Typography>;
                })}
            </>
        );
    };
    return (
        <>
            {pokemon === undefined && <CircularProgress />}
            {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
            {/* {pokemon === false && <Typography> Pokemon not found</Typography>} */}
            
      <br/>
                <Button variant="contained" onClick={() => history.push("/home")}>
                    back to pokedex
                </Button>

        </>
    );
};
export default Pokemon;