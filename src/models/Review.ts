import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Booking } from './Booking';
import { Hotel } from './Hotel';
import { User } from './User';

@Table
export class Review extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false })
    rating!: number;

    @Column({ type: DataType.STRING, allowNull: true })
    comment!: string | null;

    @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
    date!: Date;

    @ForeignKey(() => Booking)
    @Column({ type: DataType.INTEGER })
    bookingId!: number;

    @BelongsTo(() => Booking, { onDelete: 'CASCADE' })
    booking!: Booking;

    @ForeignKey(() => Hotel)
    @Column({ type: DataType.INTEGER })
    hotelId!: number;

    @BelongsTo(() => Hotel)
    hotel!: Hotel;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId!: number;

    @BelongsTo(() => User)
    user!: User;
}
