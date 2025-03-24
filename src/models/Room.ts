import { Table, Column, Model, DataType, ForeignKey, HasMany, BelongsTo } from 'sequelize-typescript';
import { Booking } from './Booking';
import { Hotel } from './Hotel';

@Table
export class Room extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false })
    number!: number;

    @Column({ type: DataType.STRING, allowNull: false })
    type!: string;

    @Column({ type: DataType.FLOAT, allowNull: false })
    price!: number;

    @Column({ type: DataType.BOOLEAN, allowNull: false })
    isAvailable!: boolean;

    @HasMany(() => Booking)
    bookings!: Booking[];

    @ForeignKey(() => Hotel)
    @Column({ type: DataType.INTEGER })
    hotelId!: number;

    @BelongsTo(() => Hotel)
    hotel!: Hotel;
}
