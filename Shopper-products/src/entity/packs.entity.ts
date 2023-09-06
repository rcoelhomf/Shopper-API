import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from './products.entity'

@Entity('packs')
export class Pack {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    qty: number;

    @ManyToOne(() => Product, (products) => products.code)
    pack: Product;

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product;
}