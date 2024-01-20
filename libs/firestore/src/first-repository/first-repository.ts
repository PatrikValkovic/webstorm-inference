export interface FirstRepository {
    getById(id: string): Promise<string>;
}
