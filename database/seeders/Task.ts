import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TaskFactory from 'Database/factories/TaskFactory'

export default class extends BaseSeeder {
  public async run () {
    await TaskFactory.createMany(1000)
  }
}
