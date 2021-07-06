export const typeDefs = `
    type Post {
        id: String
        title: String
        description: String
        createTime: String
        updateTime: String
        writer: String
        thumbnailAddress: String
    }
`;

export const resolver = {
    Query: {
        get_post:  () => {
                return [
                    {
                        id: 1,
                        title: "test1",
                        description: "test desctiption",
                        createTime:"2021-09-12",
                        writer: "tester",
                        updateTime: "2021-09-12",
                        thumbnailAddress: "String"
                    },
                    {
                        id: 2,
                        title: "test1",
                        description: "test desctiption",
                        createTime:"2021-09-12",
                        writer: "tester",
                        updateTime: "2021-09-12",
                        thumbnailAddress: "String"
                    },
                    {
                        id: 3,
                        title: "test1",
                        description: "test desctiption",
                        createTime:"2021-09-12",
                        writer: "tester",
                        updateTime: "2021-09-12",
                        thumbnailAddress: "String"
                    },
                ]
            }
    }
}
