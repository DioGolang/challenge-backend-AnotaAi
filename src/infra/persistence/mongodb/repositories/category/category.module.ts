import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from '../../schema/category.schema';
import { CategoryRepositoryImpl } from './category.repository.impl';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  providers: [
    {
      provide: 'CategoryRepository',
      useClass: CategoryRepositoryImpl,
    },
  ],
  exports: ['CategoryRepository'],
})
export class CategoryModule {}
