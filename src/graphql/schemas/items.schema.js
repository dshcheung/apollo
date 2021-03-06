module.exports = `
  type Item {
    id: String!
    name: String!
    minPrice: Int!
    description: String
    picUrl1: String
    picUrl2: String
    picUrl3: String
    auctionEnd: String!
    minimumBid: Int
    bidder: ID
    user: User!
    category: Category
  }

  input ItemUpdate {
    name: String!
    minPrice: Int!
    description: String
    picUrl1: String
    picUrl2: String
    picUrl3: String
    auctionEnd: String
    CategoryId: ID
  }

  extend type Query {
    get_item_by_Id(id: ID!): Item
    get_items: [Item]
    won_item_list: [Item]
  }

  extend type Mutation {
    create_item(item: ItemUpdate!): Item!
    delete_item_by_id(ItemId: ID!): Boolean!
    update_item(ItemId: ID!, item: ItemUpdate!): Item!
    place_a_bid(ItemId: ID!, biddingPrice: Int): Item
  }
`
