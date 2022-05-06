import { Controller, Get } from '@nestjs/common';

@Controller('my-team')
export class MyTeamController {
  constructor(private readonly myTeamService) {}

  @Get()
  getPlayers() {
    return this.myTeamService.getMyPlayers();
  }
}
