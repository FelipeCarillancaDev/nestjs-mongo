import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreatePokemonDto } from "./dto/create-pokemon.dto";
import { UpdatePokemonDto } from "./dto/update-pokemon.dto";
import { Model } from "mongoose";
import { Pokemon } from "./entities/pokemon.entity";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ) {
  }

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `Pokemon exists in db ${JSON.stringify(error.keyValue)}`
        );
      }
      throw new InternalServerErrorException(`Can't create Pokemon - ${error}`);
    }
  }

  async findAll() {
    return this.pokemonModel.find();
  }

  async findOne(id: number) {
    return this.pokemonModel.findOne({ no: id });
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return this.pokemonModel.deleteOne({ no: id });
  }
}
