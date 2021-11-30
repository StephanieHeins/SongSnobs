import React from 'react';
import { SignUpForm } from '../components/SignupForm.js'
import { LoginForm } from '../components/LoginForm.js'

const SignInUp = () => {

    return (
        <div>
          <div class="container">
            <div class="divider"></div>
              <div class="row">
                <div class="col s12">
                  <ul class="tabs blue-grey darken-2 tabs-fixed-width" id="tabs">
                    <li class="tab col m3 s12"><a class="white-text" href="#signin">Sign In</a></li>
                    <li class="tab col m3 s12"><a class="white-text" href="#signup">Sign Up</a></li>
                  </ul>
                </div>
              </div>
            </div>

        <div class="container center-align">
            <div id="signin" class="col s12 center-align">{LoginForm}</div>
            <div id="signup" class="col s12 center-align">{SignUpForm}</div>
        </div>
    </div>
    )
}

export default SignInUp;
