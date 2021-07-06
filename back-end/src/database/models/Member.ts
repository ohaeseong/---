import { Entity, BaseEntity, PrimaryColumn, Column } from "typeorm";

// 사용자, 멤버 모델
@Entity()
export class Member extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 50, unique: true })
  id: string;

  @Column({ type: 'varchar', length: 50 })
  memberName: string;

  @Column({ type: 'varchar', length: 1000 })
  pw: string;

  @Column({ type: 'int' })
  accessLevel: number;

  @Column({ type: 'text', nullable: true })
  profileImage: string;

  @Column({ type: 'varchar', nullable: true })
  userLocation: string;

  @Column({ type: 'boolean', nullable: true, default: () => false })
  isCertificationLocation: boolean;

  @Column({ type: 'varchar', nullable: false, length: 500 })
  phoneNumber: string;
}