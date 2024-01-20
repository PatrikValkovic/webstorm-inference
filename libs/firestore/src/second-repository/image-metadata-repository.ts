export interface SecondRepository {
    saveById(id: string): Promise<number>;
}
