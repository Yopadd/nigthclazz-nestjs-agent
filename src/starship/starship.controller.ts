import { HttpService } from '@nestjs/axios';
import { Body, Controller, Post } from '@nestjs/common';
import { map } from 'rxjs';

interface TeamInput {
  name: string;
}

@Controller('starship')
export class StarshipController {
  constructor(private readonly httpService: HttpService) {}

  @Post('/teams')
  createTeam(@Body() input: TeamInput) {
    return this.httpService
      .post('http://localhost:3000/teams', input)
      .pipe(map((response) => response.data));
  }
}
