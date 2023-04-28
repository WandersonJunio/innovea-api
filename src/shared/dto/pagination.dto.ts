import { IsInt, IsOptional } from 'class-validator';
import { IPagination } from '../interfaces';
import { Transform } from 'class-transformer';

export class PaginationDto implements IPagination {
  @IsOptional()
  @Transform(({ value }) => +value)
  @IsInt()
  pageSize?: number;

  @IsOptional()
  @Transform(({ value }) => +value)
  @IsInt()
  page?: number;
}
