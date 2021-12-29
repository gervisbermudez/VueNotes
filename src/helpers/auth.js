export const Auth = {
    isLoggedIn: function () {
        return !!JSON.parse(localStorage.getItem('userdata'));
    }
}