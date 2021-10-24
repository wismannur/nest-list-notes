import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersInfoDto } from './create-users-info.dto';

export class UpdateUsersInfoDto extends PartialType(CreateUsersInfoDto) {}
