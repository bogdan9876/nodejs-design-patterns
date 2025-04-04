import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Booking } from './Booking';
import { Review } from './Review';

@Table
export class User extends Model {
    @Column({ type: DataType.STRING, allowNull: false })
    name!: string;

    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    email!: string;

    @HasMany(() => Booking, { onDelete: 'CASCADE' })
    bookings!: Booking[];

    @HasMany(() => Review)
    reviews!: Review[];
}
