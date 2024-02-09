import fs from 'node:fs'

export interface SaveFileUseCase {
  execute: (options: Options) => boolean
}

export interface Options {
  fileContent: string
  fileDestination?: string
  fileName?: string
}

export class SaveFile implements SaveFileUseCase {
  constructor(
    // repository: StorageRepository
  ) { }

  execute({
    fileContent,
    fileDestination = 'outputs',
    fileName = 'table'
  }: Options): boolean {

    try {
      fs.mkdirSync(fileDestination, { recursive: true })
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent)
      return true
    } catch (err) {
      console.log(err)
      return false
    }


  }
}

