

const authState = {
	loggedIn : false
}
const isLoggedIn = () => {
	return authState.loggedIn;
}
const setAuthState = (state) => {
	authState.user = state.user;
	authState.password = state.password;
	authState.id = state.id;
	authState.loggedIn = true 
}
const getUserId = () => {
	return authState.id;
}
const getUserName = () => {
	return authState.user;
}

export default {isLoggedIn: isLoggedIn, setAuthState: setAuthState};