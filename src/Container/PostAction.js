export const PostActions = (obj, action, post) => {
        return obj[action]([post]);
}