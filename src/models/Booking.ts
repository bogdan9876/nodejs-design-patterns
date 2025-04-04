import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';
import { Room } from './Room';
import { User } from './User';
import { Review } from './Review';

@Table
export class Booking extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false })
    number!: number;

    @Column({ type: DataType.STRING, allowNull: false })
    type!: string;

    @Column({ type: DataType.FLOAT, allowNull: false })
    price!: number;

    @Column({ type: DataType.DATE, allowNull: false })
    checkInDate!: Date;

    @Column({ type: DataType.DATE, allowNull: false })
    checkOutDate!: Date;

    @HasOne(() => Review, { onDelete: 'CASCADE' })
    review!: Review;
    
    @ForeignKey(() => Room)
    @Column({ type: DataType.INTEGER })
    roomId!: number;

    @BelongsTo(() => Room)
    room!: Room;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId!: number;

    @BelongsTo(() => User)
    user!: User;
}
