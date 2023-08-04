import { apiSlice } from "../../../app/api/apiSlice"
import { formatDistance } from "date-fns"

export const postApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPost: builder.query({
            query: ({ page = 1 }) => ({
                url: `v1/post/user/?page=${page}&limit=10`,
            }),
            transformResponse: (responseData) => {
                const posts = responseData?.data?.posts

                const loadedPost = posts?.map((post) => {
                    post.createdAt = formatDistance(
                        new Date(post.createdAt),
                        new Date(),
                        {
                            addSuffix: true,
                        }
                    )

                    const comments = post?.comments

                    comments?.map((comment) => {
                        comment.createdAt = formatDistance(
                            new Date(comment.createdAt),
                            new Date(),
                            {
                                addSuffix: true,
                            }
                        )
                    })

                    return post
                })

                // console.log("loaded post ", loadedPost)

                return responseData
            },
            providesTags: (result) => {
                if (result?._ids) {
                    return [
                        { type: "Post", id: "LIST" },
                        ...result.ids.map((id) => ({ type: "Post", id })),
                    ]
                } else return [{ type: "Post", id: "LIST" }]
            },
        }),
        sendPost: builder.mutation({
            query: (formData) => ({
                url: "v1/post",
                method: "POST",
                body: formData,
            }),
            invalidatesTags: [{ type: "Post", id: "LIST" }],
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `v1/post/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, { id }) => {
                return [{ type: "Post", _id: id }]
            },
        }),
        addComment: builder.mutation({
            query: ({ id, formData }) => ({
                url: `v1/comment/post/${id}`,
                method: "POST",
                body: formData,
            }),
            invalidatesTags: [{ type: "Post", id: "LIST" }],
        }),
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `v1/comment/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, { id }) => {
                return [{ type: "Post", _id: id }]
            },
        }),
        addReaction: builder.mutation({
            query: ({ id, reaction }) => ({
                url: `v1/reaction/post/${id}`,
                method: "POST",
                body: reaction,
            }),
            invalidatesTags: [{ type: "Post", id: "LIST" }],
        }),
    }),
})
// future#, manually update the cache than invalidating it to minimize api request

export const {
    useGetPostQuery,
    useSendPostMutation,
    useDeletePostMutation,
    useAddCommentMutation,
    useDeleteCommentMutation,
    useAddReactionMutation,
} = postApiSlice
