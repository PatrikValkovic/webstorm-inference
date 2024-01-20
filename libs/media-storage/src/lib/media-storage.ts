import { ReadStream } from 'fs';
import { Readable } from 'stream';

export interface MediaStorage {
    getStream(fileName: string): Readable | ReadStream;
    exists(fileName: string): boolean | Promise<boolean>;
    getBuffer(fileName: string): Promise<Buffer>;
    deleteFile(fileName: string): Promise<boolean>;
    isMissingFileError(error: Error): boolean;
}
