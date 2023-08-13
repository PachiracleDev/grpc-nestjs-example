import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  db: {
    type: 'postgres',
    uri: `postgresql://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@localhost:5432/${process.env.POSTGRES_DB}`,
  },
}));
