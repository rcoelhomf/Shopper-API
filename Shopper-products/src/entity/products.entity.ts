import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Pack } from './packs.entity';

@Entity('Products')
export class Product {
    @PrimaryGeneratedColumn('identity')
    code: number;

    @Column({ length: 100 })
    name: string;

    @Column({ type: 'decimal', precision: 9, scale: 2 })
    cost_price: string | number;

    @Column({ type: 'decimal', precision: 9, scale: 2 })
    sales_price: string | number;

    @OneToMany(() => Pack, (packs) => packs.pack)
    pack: Pack[]
}