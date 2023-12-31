import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { DisciplineType } from "../discipline_types/discipline_types.model";
import { LoadTeach } from "../load_teach/load_teach.model";
import { MaketTimetable } from "../maket_timetable/maket_timetable.model";
import { EditTimetable } from "../edit_timetable/edit_timetable.model";
import { CTS } from "../cts/cts.model";
import { ApiProperty } from "@nestjs/swagger";


interface DisciplineCreationAttrs {
    code: string, // 10
    title: string,
}

@Table({tableName: 'disciplines', timestamps: false})
export class Discipline extends Model<Discipline, DisciplineCreationAttrs> {
    @ApiProperty()
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    code: string

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    title: string

    @ApiProperty()
    @ForeignKey(() => DisciplineType)
    @Column({type: DataType.INTEGER, allowNull: false})
    discipline_type_id: number
    @BelongsTo(() => DisciplineType)
    discipline_type: DisciplineType

    @HasMany(() => LoadTeach)
    loadteaches: LoadTeach[]

    @HasMany(() => MaketTimetable)
    maket_timetables: MaketTimetable[]

    @HasMany(() => EditTimetable)
    edit_timetables: EditTimetable[]
}