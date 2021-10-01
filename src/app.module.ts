import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gpl' }),
    UsersModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
