export interface IBookingRepository {
    getAll(): Promise<any>;
    getById(id: number): Promise<any>;
    create(data: any): Promise<any>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}