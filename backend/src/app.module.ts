import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyTeamController } from './controllers/my-team/my-team.controller';
import { MyTeamService } from './services/my-team/my-team.service';

@Module({
  imports: [],
  controllers: [AppController, MyTeamController],
  providers: [AppService, MyTeamService],
})
export class AppModule {}
