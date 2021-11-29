import React from 'react';
import ReactDOM from 'react-dom';
function signup() {
    // history.pushState(null, '', '/signup')
    // history.go(1)
    ReactDOM.render(<RenderSignUpPage />, document.getElementById("root"))
}
export default signup