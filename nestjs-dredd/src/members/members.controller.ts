import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { ApiTags, ApiProduces, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Member } from './entities/member.entity';

@Controller('members')
@ApiTags('/members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  // Post(送信)のリクエストが送られた時の処理
  @Post()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体登録API' })
  @ApiResponse({
    status: 201,
    description: '登録したメンバー設定を返却',
    type: Member,
  })
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  // Get(全体参照)のリクエストが送られた時の処理
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '全体取得API' })
  @ApiResponse({
    status: 200,
    description: '登録済メンバー設定を複数返却',
    type: Member,
  })
  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  // Get(一部参照)のリクエストが送られた時の処理
  @Get(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体取得API' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: '指定されたIDのメンバー設定を返却',
    type: Member,
  })
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }

  // Patch(更新)のリクエストが送られた時の処理
  @Patch(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体更新API' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: '更新後のメンバー設定を返却',
    type: Member,
  })
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(+id, updateMemberDto);
  }

  // Delete(削除)のリクエストが送られた時の処理
  @Delete(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体削除API' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: '削除されたメンバーの設定を返却',
    type: Member,
  })
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }
}