import {
    SecondRepositoryImpl,
    FirstRepositoryImpl,
} from '@webstorm-inference/firestore';

export const createRepositories = async () => {
    const secondRepository = new SecondRepositoryImpl();
    const firstRepository = new FirstRepositoryImpl();

    return {
        secondRepository: secondRepository,
        firstRepository: firstRepository,
    };
};
