import { Course } from './entities/course.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>
  ){}
  create(createCourseDto: CreateCourseDto) {
    return this.courseRepository.save(createCourseDto);
  }

  findAll() {
    return this.courseRepository.find();
  }

  findOne(id: number) {
    return this.courseRepository.findOne({where: {id: id}});
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.update(id, updateCourseDto);
  }

  remove(id: number) {
    return this.courseRepository.delete(id);
  }
}
