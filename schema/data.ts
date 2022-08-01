// DATA
/* Apollo Server is what we call data-source agnostic 
 * — this means that you can fetch data from any source you like (SQL & NoSQL databases, REST APIs, other GraphQL APIs, or even just static JSON)
 */

export const groups = [
    {
      id: 21,
      name: 'Administrators',
      description: 'admin role',
      users: [11, 13, 15]
    },
    {
      id: 22,
      name: 'Policy Makers',
      description: 'can make policies',
      users: [11, 12, 13, 14, 15, 16]
    },
    {
      id: 23,
      name: 'Access Managers',
      description: 'Some description',
      users: [11, 13, 14, 15]
    },
    {
      id: 24,
      name: 'Project Z',
      description: 'Collaborators in Project Z',
      users: [11, 12, 15]
    },
  ]
  
export const users = [
      {
        id: 11,
        name: 'Nehal Bhanushali',
        emailID: 'nrb1301@gmail.com',
        groups: groups
      },
      {
        id: 12,
        name: 'Vishal Gori',
        emailID: 'vg1112@gmail.com',
        groups: [groups[1], groups[3]]
      },
      {
        id: 13,
        name: 'John Doe',
        emailID: 'nrb1301@gmail.com',
        groups: [groups[0], groups[1], groups[2]]
      },
      {
        id: 14,
        name: 'Bob',
        emailID: 'vg1112@gmail.com',
        groups: [groups[1], groups[2]]
      },
      {
        id: 15,
        name: 'Alice',
        emailID: 'nrb1301@gmail.com',
        groups: groups
      },
      {
        id: 16,
        name: 'Venus',
        emailID: 'vg1112@gmail.com',
        groups: [groups[1]]
      },
  ]
  