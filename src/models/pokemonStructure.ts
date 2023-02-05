/* eslint-disable max-params */
/* eslint-disable no-unused-vars */
type HasId = {
  id: number;
};

export type ProtoPokemonStructure = {
  name: string;
  picture: string;
  isFavorite: boolean;
  weight: number;
  height: number;
};

export type PokemonStructure = HasId & ProtoPokemonStructure;

export class Pokemon implements PokemonStructure {
  public isFavorite: boolean;
  public id!: number;

  constructor(
    public name: string,
    public picture: string,
    public weight: number,
    public height: number
  ) {
    this.isFavorite = false;
  }
}
