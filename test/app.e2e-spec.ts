import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../src/entities/post.entity';
import { Comment } from '../src/entities/comment.entity';
import { User } from '../src/entities/user.entity';
import { PostLike } from '../src/entities/post_like.entity';
import { ConfigService } from '@nestjs/config';
import { CommentModule } from '../src/comment/comment.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                CommentModule,
                TypeOrmModule.forRootAsync({
                    inject: [ConfigService],
                    useFactory: async (configService: ConfigService) => {
                        return {
                            type: 'mysql',
                            host: 'localhost',
                            port: 3306,
                            username: 'root',
                            password: 'win1358!',
                            database: 'TDD_STUDY_MOCK_DATA',
                            entities: [User, Post, Comment, PostLike],
                            synchronize: true,
                            charset: 'utf8mb4',
                            logging: false,
                        };
                    },
                }),
            ],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    // it('/ (GET)', () => {
    //     return request(app.getHttpServer()).get('/').expect(200).expect('Hello World!');
    // });

    it('/comment (GET)', () => {
        return request(app.getHttpServer())
            .post('/comment')
            .send({ userId: 1, postId: 1, content: '댓글4' })
            .expect(201);
    });
});
