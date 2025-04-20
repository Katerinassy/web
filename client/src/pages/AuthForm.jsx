import React from 'react';

const AuthForm = ({ title, formData, onChange, onSubmit, buttonText, extraButtonText, onExtraClick }) => (
  <div className="block">
    <div className="form-container">
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Электронная почта:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            required
          />
        </div>
        {formData.name !== undefined && (
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
            />
          </div>
        )}
        <button type="submit" className="submit-button">{buttonText}</button>
        {extraButtonText && (
          <button onClick={onExtraClick} type="button" className="submit-button">
            {extraButtonText}
          </button>
        )}
      </form>
    </div>
  </div>
);

export default AuthForm;
