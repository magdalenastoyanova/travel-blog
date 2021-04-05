function getNavigation(isLoggedIn, appUser) {

    const authLinksUser = [
        {
            title: 'All Posts',
            link: '/places'
        },
        {
            title: 'Add Post',
            link: '/create'
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

    return isLoggedIn ? authLinksUser : guestLinks;
}

export default getNavigation