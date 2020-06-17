// The interface representing our entire store model
import pokemonModel, { PokemonModel } from '../models/pokemon';

export interface StoreModel {
    pokemon: PokemonModel;
}

export const storeModel: StoreModel = {
    pokemon: pokemonModel,
};
