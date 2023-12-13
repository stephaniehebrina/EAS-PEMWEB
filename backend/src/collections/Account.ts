import { CollectionConfig } from 'payload/types'

const Account: CollectionConfig = {
  slug: 'account',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    }
  ],
}

export default Account