import profileReducer, {addPostAC, removePostAC} from './profile-reducer';
const state = {
    posts: [
        {id: 1, message: 'hello my darling', likesCounter: 12},
        {id: 2, message: 'Its my first post ', likesCounter: 0},
        {id: 3, message: 'hello my darling', likesCounter: 1}
    ]
}
test('add post', () => {
    const startState = state
    const endState= profileReducer(startState, addPostAC('React'))
    expect(endState.posts.length).toBe(4)
});
test('remove post', () => {
    const startState = state
    const endState= profileReducer(startState, removePostAC(1))
    expect(endState.posts.length).toBe(2)
    expect(endState.posts[0].id).toBe(2)
});
