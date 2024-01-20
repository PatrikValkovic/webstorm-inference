import { randomUUID } from 'crypto';
import { DIContainer } from '../di';

// ramda seems to be causing the issue
import 'ts-toolbelt';

export const createSampleListener = (diContainer: DIContainer) => async () => {
    const { repositories } = diContainer;
    const { firstRepository, secondRepository } = repositories;
    const newData = randomUUID();

    const data1 = await firstRepository.getById(newData);
    const count = await secondRepository.saveById(newData);
    console.log(data1, count);
};
