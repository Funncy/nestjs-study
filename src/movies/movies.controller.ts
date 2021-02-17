import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('/search')
  search(@Query('year') searchingYear: string) {
    return `This will search a moive ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    const movie = this.movieService.getOne(movieId);
    if (!movie) {
      throw new NotFoundException(`Movie id ${movieId} not found.`);
    }
    return movie;
  }

  @Post()
  create(@Body() movieData) {
    return this.movieService.create(movieData);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return this.movieService.update(movieId, updateData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.movieService.deleteOne(movieId);
  }
}
