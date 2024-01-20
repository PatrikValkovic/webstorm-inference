import { createMediaStorage } from '@webstorm-inference/media-storage';
import { createRepositories } from './repositories';

export const createDIContainer = async () => {
    const [baseImageStorage, repositories] = await Promise.all([
        createMediaStorage(),
        createRepositories(),
    ]);

    // this also fix the issue
    // const baseImageStorage = await createMediaStorage();
    // const repositories = await createRepositories();

    return {
        repositories,
        baseImageStorage,
    };
};

export type DIContainer = Awaited<ReturnType<typeof createDIContainer>>;
