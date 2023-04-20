/*
* インポート部分
* 追加することにより、モジュールを組み込んだり、
* 他で書かれたプログラムを繋ぎ合わせたりすることができる
*/
import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { promises } from 'fs';
const { readFile } = promises;

@Injectable()
export class MembersService {
  
  // メンバー登録
  create(createMemberDto: CreateMemberDto) {
    return 'This action adds a new member';
  }

  // 全体参照
  findAll() {
    return `This action returns all members`;
  }

  // 一部参照
  async findOne(id: number) {
    const contents = await readFile('src/members/members.json', 'utf-8');
    const json = JSON.parse(contents);
    let tmp = null;

    json.members.forEach((member: { id: number }) => {
      if (member.id == id) {
        tmp = member;
      }
    });
    return tmp;
  }

  // メンバー更新
  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  // メンバー削除
  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}