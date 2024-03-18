import React, { useState } from 'react';
import LoginSingup from './../../composants/login/LoginSingup';

const FormulaireEnregistrement = () => {
  const [nomComplet, setNomComplet] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateDeNaissance, setDateDeNaissance] = useState('');
  const [lieuDeNaissance, setLieuDeNaissance] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (validation, registration)
    console.log('Nom complet :', nomComplet);
    console.log('Email :', email);
    console.log('Téléphone :', telephone);
    console.log('Mot de passe :', password);
    console.log('Confirmation mot de passe :', confirmPassword);
    console.log('Date de naissance :', dateDeNaissance);
    console.log('Lieu de naissance :', lieuDeNaissance);
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <label htmlFor="nomComplet">Nom complet</label>
      <input
        type="text"
        className="form-control"
        id="nomComplet"
        placeholder="Nom complet"
        value={nomComplet}
        onChange={(e) => setNomComplet(e.target.value)}
        required
        style={{ marginBottom: '10px' }}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ marginBottom: '10px' }}
      />
      <label htmlFor="telephone">Numéro de téléphone</label>
      <input
        type="text"
        className="form-control"
        id="telephone"
        placeholder="Numéro de téléphone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        required
        style={{ marginBottom: '10px' }}
      />
      <label htmlFor="dateDeNaissance">Date de naissance</label>
      <input
        type="date"  // Change type to "date" for date picker
        className="form-control"
        id="dateDeNaissance"
        placeholder="Date de naissance"
        value={dateDeNaissance}
        onChange={(e) => setDateDeNaissance(e.target.value)}
        required
        style={{ marginBottom: '10px' }}
      />
      <label htmlFor="lieuDeNaissance">Lieu de naissance</label>
      <input
        type="text"
        className="form-control"
        id="lieuDeNaissance"
        placeholder="Lieu de naissance"
        value={lieuDeNaissance}
        onChange={(e) => setLieuDeNaissance(e.target.value)}
        required
        style={{ marginBottom: '10px' }}
      />
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ marginBottom: '10px' }}
      />
      <label htmlFor="confirmPassword">Confirmer mot de passe</label>
      <input
        type="password"
        className="form-control"
        id="confirmPassword"
        placeholder="Confirmer mot de passe"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        style={{ marginBottom: '10px' }}
      />
      

      <div className="mt-3 d-flex justify-content-between">
      <button type="submit" className="btn btn-primary">
         Créer un compte cool
      </button>
      
    </div>

      
      <div className="mt-3 d-flex justify-content-between">
        <a href="#" className="text-muted">
          Déjà un compte ? Se connecter
        </a>
      </div>
    </form>
  );
};

export default FormulaireEnregistrement;
