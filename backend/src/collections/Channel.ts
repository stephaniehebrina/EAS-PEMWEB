import { CollectionConfig } from 'payload/types'

const Channel: CollectionConfig = {
  slug: 'channel',
  access: {
    create: () => true, 
    read: () => true,

  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
  ],
}

export default Channel
