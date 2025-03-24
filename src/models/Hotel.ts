import { Table, Column, Model, DataType, ForeignKey, HasOne, HasMany, BelongsTo } from 'sequelize-typescript';
import { Location } from './Location';
import { Room } from './Room';
import { Review } from './Review';
import { HotelChain } from './HotelChain';

@Table
export class Hotel extends Model {
    @Column({ type: DataType.STRING, allowNull: false })
    name!: string;

    @HasOne(() => Location)
    location!: Location;

    @HasMany(() => Room)
    rooms!: Room[];

    @HasMany(() => Review)
    reviews!: Review[];

    @ForeignKey(() => HotelChain)
    @Column({ type: DataType.INTEGER })
    hotelChainId!: number;

    @BelongsTo(() => HotelChain)
    hotelChain!: HotelChain;
}
