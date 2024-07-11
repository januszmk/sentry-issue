import { AppService } from './app.service';
import { Query, Resolver, Float } from '@nestjs/graphql';

@Resolver(() => Float)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Query(() => Float)
  getHello(): string {
    return this.appService.getHello();
  }
}
