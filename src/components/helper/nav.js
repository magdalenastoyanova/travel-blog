const getNavigation = (userLoggedIn) => {
    const authenticatedLinks = [
        {
            title: 'All Posts',
            link: '/places'
        },
        {
            title: 'Add Post',
            link: '/create'
        },
        {
            title: 'Logout',
            link: `/logout`
        }
    ]

    const guestLinks = [
        {
            title: 'Posts',
            link: '/posts'
        },
        {
            title: 'Sign In',
            link: '/login'
        },
        {
            title: 'Sign Up',
            link: '/register'
        }
    ]

    return userLoggedIn ? authenticatedLinks : guestLinks
}

export default getNavigation