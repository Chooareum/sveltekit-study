import { error, redirect } from "@sveltejs/kit"

let contacts = [
  {
    id: '123',
    name: '알미',
    email: 'ar8350@naver.com',
    company: 'mintech',
    job: 'developer'
  }
]

export const load = () => {
  return {
    contacts
  }
}

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData()

    const name = formData.get('name')
    const email = formData.get('email')
    const company = formData.get('company')
    const job = formData.get('job')
    const id = crypto.randomUUID()


    if (name.length < 2) {
      return error(400, {
        error: true,
        message: 'Name must be at least two characters.',
        name,
        email,
        company,
        job
      }).body
    }

    const contact = {
      id,
      name,
      email,
      company,
      job
    }

    contacts.push(contact)
    
    throw redirect(303,'/')
    
    return {
      success: true,
    }
  },

  delete: async ({ request }) => {
    const formData = await request.formData()
    const id = formData.get('id')

    contacts = contacts.filter(contact => contact.id != id)

    return {
      success: true,
    }
  }

}