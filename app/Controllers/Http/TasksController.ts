import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Task from 'App/Models/Task'
import { DateTime } from 'luxon'

export default class TasksController {
  public async index({ request }: HttpContextContract) {
    const data = await request.validate({
      schema: schema.create({
        page: schema.number.optional([ rules.unsigned() ]),
        perPage: schema.number.optional([ rules.range(1, 500) ]),
      })
    })

    return await Task
      .query()
      .paginate(data.page ?? 1, data.perPage ?? 10)
  }

  public async create({ request }: HttpContextContract) {
    const data = await request.validate({
      schema: schema.create({
        content: schema.string(),
      })
    })

    return await Task.create(data)
  }

  public async markCompleted({ request }: HttpContextContract) {
    const id = request.param('id')

    const task = await Task.findOrFail(id)
    task.completedAt = DateTime.now()
    await task.save()

    return await task.refresh()
  }

  public async updateContent({ request }: HttpContextContract) {
    const id = request.param('id')

    const data = await request.validate({
      schema: schema.create({
        content: schema.string(),
      })
    })

    const task = await Task.findOrFail(id)
    task.content = data.content

    await task.save()

    return await task.refresh()
  }

  public async delete({ request, response }: HttpContextContract) {
    const id = request.param('id')

    await Task
      .query()
      .delete()
      .where('id', id)

    return response.noContent()
  }
}
