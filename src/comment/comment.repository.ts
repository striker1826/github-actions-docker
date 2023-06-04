// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Comment } from '../entities/comment.entity';
// import { Repository } from 'typeorm';
// import { ICommentRepository } from './comment.interface';
// import { Post } from '../entities/post.entity';
// import { PostOutputDto } from './dto/output/post.dto';
// import { CommentOutputDto } from './dto/output/comment.dto';

// @Injectable()
// export class CommentRepository implements ICommentRepository {
//     constructor(
//         @InjectRepository(Comment) private commentModel: Repository<Comment>,
//         @InjectRepository(Post) private postModel: Repository<Post>,
//     ) {}

//     async createComment(userId: number, postId: number, content: string): Promise<void> {
//         console.time('create query');
//         // for (let i = 0; i < 100000; i++) {
//         await this.commentModel.insert({ userId, postId, content });
//         // }

//         // const newComment = this.commentModel.create();
//         // newComment.userId = userId;
//         // newComment.postId = postId;
//         // newComment.content = content;
//         // await this.commentModel.save(newComment);

//         console.timeEnd('create query');
//         return;
//     }

//     async findOnePost(postId: number): Promise<PostOutputDto> {
//         return await this.postModel
//             .createQueryBuilder('post')
//             .where('post.id = :postId', { postId })
//             .select(['post.id', 'post.userId', 'post.category', 'post.title', 'post.content', 'post.createdAt'])
//             .getOne();
//     }

//     async getCommentsByPostId(postId: number): Promise<CommentOutputDto[]> {
//         console.time('getComments');
//         // const result = await this.commentModel.find({ where: { postId } });
//         const result = await this.commentModel
//             .createQueryBuilder('comment')
//             .where('comment.postId = :postId', { postId })
//             .getMany();
//         console.timeEnd('getComments');
//         return result;
//     }

//     async updateComment(commentId: number, content: string): Promise<void> {
//         await this.commentModel.update(commentId, { content });
//         return;
//     }

//     // async createQueryRunner() {
//     //     const result = await this.commentModel.createQueryBuilder('comment').orderBy('comment.id', 'DESC').getOne();
//     //     console.log(result);
//     //     return result;
//     // }
// }
