import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt'


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) { }

    async create(data: {
        fullName: string,
        email: string,
        password: string
    }) {
        const exists = await this.userRepository.findOne({ where: { email: data?.email } });

        if (exists) {
            throw new ConflictException('Email already exists!');
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await this.userRepository.save({
            fullName: data?.fullName,
            email: data?.email,
            password: hashedPassword
        });

        return user;
    }

    async findByEmail(email: string) {
        return this.userRepository.findOne({ where: { email } });
    }

    async findById(id: number) {
        return this.userRepository.findOne({ where: { id } });
    }

}