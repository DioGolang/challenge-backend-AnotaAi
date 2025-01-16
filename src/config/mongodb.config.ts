import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
console.log('MONGODB_URI:', process.env.MONGODB_URI);

export const mongodbConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => ({
  uri: configService.get<string>('MONGODB_URI'),
});
