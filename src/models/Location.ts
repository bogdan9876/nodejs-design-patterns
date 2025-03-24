import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Hotel } from './Hotel';

@Table
export class Location extends Model {
    @Column({ type: DataType.STRING, allowNull: false })
    address!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    city!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    country!: string;

    @ForeignKey(() => Hotel)
    @Column({ type: DataType.INTEGER })
    hotelId!: number;

    @BelongsTo(() => Hotel, { onDelete: 'CASCADE' })
    hotel!: Hotel;
}
