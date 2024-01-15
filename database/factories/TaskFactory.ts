import Task from 'App/Models/Task'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon'

export default Factory.define(Task, ({ faker }) => {
  return {
    content: faker.lorem.sentences({ min: 1, max: 3 }),
    completedAt: faker.datatype.boolean(({ probability: 0.33 })) ? DateTime.fromJSDate(faker.date.between({ from: '2024-01-01', to: '2024-01-14' })) : null,
  }
}).build()
