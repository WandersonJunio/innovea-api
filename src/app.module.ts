import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './modules/articles/article.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ArticleModule.register()],
  controllers: [],
  providers: [Logger],
})
export class AppModule implements OnModuleInit {
  private readonly log = new Logger(AppModule.name);

  public onModuleInit(): any {
    const env = process.env.NODE_ENV;
    this.log.debug(`App initialized ! The current env is: ${env}`);
    this.log.log(`AWS NODE ENV: ${env}`);
  }
}
