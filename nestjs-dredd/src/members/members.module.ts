import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';

@Module({
  // controller指定
  controllers: [MembersController],
  // service相当の指定
  providers: [MembersService],
})
export class MembersModule {}