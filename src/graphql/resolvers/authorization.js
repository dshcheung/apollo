const { ForbiddenError } = require('apollo-server')
const { skip } = require('graphql-resolvers')

module.exports.isAuthenticated = (_, __, { me }) => (me ? skip : new ForbiddenError('Not Authorized. Please log in'))

module.exports.isItemOwner = async (_, { ItemId }, { models, me }) => {
  try {
    const item = await models.Item.findByPk(ItemId, { raw: true })
    if (!item) throw new Error('Couldn\'t find Item')
    if (item.UserId !== me.id) throw new ForbiddenError('Not Authorized. User not the owner of this resource.')

    return skip
  } catch (err) {
    return err
  }
}

module.exports.isAddressOwner = async (_, { AddressId }, { models, me }) => {
  try {
    const address = await models.Address.findByPk(AddressId, { raw: true })
    if (!address) throw new Error('Couldn\'t find address')
    if (address.UserId !== me.id) throw new ForbiddenError('Not Authorized. User not the owner of this resource.')

    return skip
  } catch (err) {
    return err
  }
}
