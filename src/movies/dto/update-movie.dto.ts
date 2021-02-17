import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;
//   @IsNumber()
//   readonly year?: number;
//   @IsString({ each: true })
//   readonly genres?: string[];
// }
//위랑 같은 의미
// CreateMovieDto와 같지만 Partial 즉, 부분만 있어도 된다는 의미
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
