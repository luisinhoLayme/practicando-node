import { CreateTable } from "../domain/use-case/create-table.use-case"
import { SaveFile } from "../domain/use-case/save-file.use-case"

interface RunOptions {
  base: number
  limit: number
  showTable: boolean
  name: string
  destination: string
}

export class ServerApp {

  static run({ base, limit, showTable, name, destination }: RunOptions) {
    console.log('server run')

    const table = new CreateTable().execute({ base, limit })
    const wasCreated = new SaveFile()
      .execute({
        fileContent: table,
        fileDestination: destination,
        fileName: name
      })

    if (showTable) console.log(table);

    ( wasCreated )
      ? console.log('File created')
      : console.log('File not created')
  }
}
