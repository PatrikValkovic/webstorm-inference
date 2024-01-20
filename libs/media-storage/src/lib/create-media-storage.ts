import { MediaStorage } from './media-storage';
import { DiskStorage } from './disk-storage';

export const createMediaStorage = async (): Promise<MediaStorage> => new DiskStorage();
