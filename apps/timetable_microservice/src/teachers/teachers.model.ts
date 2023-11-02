import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Auditorium } from "../auditoriums/auditoriums.model";
import { MaketTimetable } from "../maket_timetable/maket_timetable.model";
import { EditTimetable } from "../edit_timetable/edit_timetable.model";
import { Group } from "../groups/groups.model";
import { LoadTeach } from "../load_teach/load_teach.model";


interface TeacherCreationAttrs {
    name: string,
    surname: string,
    middle_name: string
}

@Table({tableName: 'teachers', timestamps: false})
export class Teacher extends Model<Teacher, TeacherCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number

    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @Column({type: DataType.STRING, allowNull: false})
    surname: string

    @Column({type: DataType.STRING, allowNull: false})
    middle_name: string

    @HasMany(() => Auditorium)
    auditoriums: Auditorium[]

    @HasMany(() => MaketTimetable)
    maket_timetables: MaketTimetable[]

    @HasMany(() => EditTimetable)
    edit_timetables: EditTimetable[]

    @HasMany(() => Group)
    groups: Group[]

    @HasMany(() => LoadTeach)
    loadteaches: LoadTeach[]
}