import { FirstRepository } from './first-repository';

export class FirstRepositoryImpl implements FirstRepository {
    getById(_id: string): Promise<string> {
        throw new Error('Method not implemented.');
    }
}
