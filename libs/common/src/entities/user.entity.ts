import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  username: string;

  @Column()
  password: string;

  @Column({
    type: 'float8',
  })
  age: number;

  @Column({
    type: 'jsonb',
    default: () => '\'{"twitterUri": "", "fbUri": ""}\'',
  })
  socialMedia: { twitterUri: string; fbUri: string };

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;
}
