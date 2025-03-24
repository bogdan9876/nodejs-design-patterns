export interface IHotelChainService {
    getAll(): Promise<any>;
    getById(id: any | string): Promise<any>;
    create(data: any): Promise<any>;
    update(id: any | string, data: any): Promise<any>;
    delete(id: any | string): Promise<any>;
}