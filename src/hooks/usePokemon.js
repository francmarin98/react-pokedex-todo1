import {useEffect, useState} from "react";
import {fetchPokemonDetail} from "../helpers";


export const usePokemon = ({name}) => {
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchPokemonDetail(name).then(data => {
            setPokemon(data);
        }).finally(() => setLoading(false));
    }, [name])

    return {pokemon, loading}
}
