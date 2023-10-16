import { TaskProps } from '@/interface/interface';
import { makeAutoObservable } from 'mobx';

export default class taskStore {
	_tasks = []
	_isUpdate = false
	_page = 1
	_totalCount = 0
	_limit = 5
	constructor() {
		makeAutoObservable(this)
	}
	setTasks(tasks) {
		this._tasks = tasks
	}

	addTask(task) {
		this._tasks.push(task)
	}
	removeTask(id: number) {
		this._tasks = this._tasks.filter(task => task.id !== id)
	}
	completeTask(id: number) {
		this._tasks = this._tasks.map(item => item.id == id ? { ...item, isChecked: !item.isChecked } : item)
	}
	editTask(id: number, text: string) {
		this._tasks = this._tasks.map(item => item.id == id ? { ...item, title: text } : item)
	}
	setIsUpdate(bool: boolean) {
		this._isUpdate = bool
	}
	get IsUpdate() {
		return this._isUpdate
	}
	get tasks() {
		return this._tasks
	}

}
export interface TaskStore {
	_tasks: TaskProps[],
	setTask: (tasks: TaskProps[]) => void,
	addTask: (task: TaskProps) => void,
	removeTask: (id: number) => void,
	completeTask: (id: number) => void,
	tasks: () => TaskProps[]
}