import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity({ name: 'search_history' })
export class SearchHistory {
  constructor(partial: Partial<SearchHistory>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Index()
  @Column({ type: 'uuid', nullable: false })
  sessionId: string;

  @Column({ type: 'json', nullable: false })
  response: any;
}
