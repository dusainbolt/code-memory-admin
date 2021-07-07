import React from 'react';

import { Loading } from 'src/common/loading';

export const LoginPages = () => {
    return (
        <div className="contact">
            <h3 className="contact-heading">LOGIN</h3>
          <form action="#" className="contact-form" autoComplete="off">
            <div className="contact-form-group">
              <input id="name" type="text" name="username" className="contact-form-input"
              placeholder="Username"
              />
            </div>
            <div className="contact-form-group">
              <input id="password" type="password" className="contact-form-input"
              placeholder="Your Password"/>
            </div>
            <button type="submit" className="contact-form-submit">Login</button>
          </form>
        </div>
    );
};
