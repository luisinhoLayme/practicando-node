import { CreateTodoDto, TodoDatasource, TodoEntity, TodoRepository, UpdateTodoDto } from "../../domain";


export class TodoRepositoryImpl implements TodoRepository {

  constructor(
    private readonly datasource: TodoDatasource
  ) {}

  craete(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
    return this.datasource.craete(createTodoDto);
  }

  getAll(): Promise<TodoEntity[]> {
    return this.datasource.getAll()
  }

  findById(id: number): Promise<TodoEntity> {
    return this.datasource.findById( id )
  }

  updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
    return this.datasource.updateById( updateTodoDto )
  }

  deleteById(id: number): Promise<TodoEntity> {
    return this.datasource.deleteById( id )
  }
}
