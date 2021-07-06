
export const typeDefs = `

    type Comment {
        id: String
        postId: String
        commentTxt: String
        createTime: String
        writer: String
    }
`;

export const resolver = {
    Query: {
        get_comments: () => {
            return [
                {
                    id: 1,
                    commentTxt: "test desctiption",
                    createTime:"2021-09-12",
                    writer: "tester",
                    updateTime: "2021-09-12",
                    thumbnailAddress: "String"
                },
                {
                    id: 2,
                    commentTxt: "test desctiption",
                    createTime:"2021-09-12",
                    writer: "tester",
                    updateTime: "2021-09-12",
    
                },
                {
                    id: 3,
                    commentTxt: "test desctiption",
                    createTime:"2021-09-12",
                    writer: "tester",
                    updateTime: "2021-09-12",
                    thumbnailAddress: "String"
                },
            ]
        }
    }
}
