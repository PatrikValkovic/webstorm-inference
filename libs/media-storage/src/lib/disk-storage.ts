import { ReadStream } from 'fs';
import { MediaStorage } from './media-storage';

export class DiskStorage implements MediaStorage {
    private getPath(_name: string): string {
        throw new Error('Method not implemented.');
    }

    exists(_name: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    getStream(_name: string): ReadStream {
        throw new Error('Method not implemented.');
    }

    async getBuffer(_name: string): Promise<Buffer> {
        throw new Error('Method not implemented.');
    }

    async deleteFile(_fileName: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    isMissingFileError(_error: Error): boolean {
        throw new Error('Method not implemented.');
    }
}
