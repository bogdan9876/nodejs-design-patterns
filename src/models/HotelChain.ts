import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Hotel } from './Hotel';

@Table({ tableName: 'HotelChains' })
export class HotelChain extends Model {
    @Column({ allowNull: false })
    name!: string;

    @HasMany(() => Hotel)
    hotels!: Hotel[];
}