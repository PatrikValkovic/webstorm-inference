import { SecondRepository } from './image-metadata-repository';

export class SecondRepositoryImpl implements SecondRepository {
    saveById(_id: string): Promise<number> {
        throw new Error('Not implemented');
    }

}
