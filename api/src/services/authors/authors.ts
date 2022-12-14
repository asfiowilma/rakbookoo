import type {
  QueryResolvers,
  MutationResolvers,
  AuthorResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const authors: QueryResolvers['authors'] = () => {
  return db.author.findMany()
}

export const author: QueryResolvers['author'] = ({ id }) => {
  return db.author.findUnique({
    where: { id },
  })
}

export const createAuthor: MutationResolvers['createAuthor'] = ({ input }) => {
  return db.author.create({
    data: input,
  })
}

export const updateAuthor: MutationResolvers['updateAuthor'] = ({
  id,
  input,
}) => {
  return db.author.update({
    data: input,
    where: { id },
  })
}

export const deleteAuthor: MutationResolvers['deleteAuthor'] = ({ id }) => {
  return db.author.delete({
    where: { id },
  })
}

export const Author: AuthorResolvers = {
  Book: (_obj, { root }) =>
    db.author.findUnique({ where: { id: root.id } }).Book(),
}
