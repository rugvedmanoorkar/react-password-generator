import React ,{ useState } from 'react'
import { generatePassword, Preferences } from '@password-generator/package'

const Conditions = () => {

    const [preferences, setPreferences] = useState({
        initialText: '',
        passwordLength: 6,
        pronounceable: false,
        uppercase: true,
        lowercase: false,
        numbers: true,
        symbols: false,
      });
      const [password, setPassword] = useState('');
    
      const onSubmit = e => {
        e.preventDefault();
        const passwordGenerated = generatePassword(preferences);
        setPassword(passwordGenerated);
      }  

    return (
        <div className='conditions'>
           Password Length <input type="text" value={preferences.passwordLength}  onChange={(e) => {setPreferences({...preferences,passwordLength: Number(e.target.value),});}} placeholder="6" /><p />
           Add Initial Text<input type="text" value={preferences.pronounceable}  onChange={(e) => {setPreferences({...preferences,pronounceable: (e.target.value),});}}  /><p />
           Include Uppercase Characters<input type="checkbox" value="MALE" name="gender"/> <p />
           Include Lowerase Characters<input type="checkbox" value="FEMALE" name="gender"/><p />
           Include Numbers<input type="checkbox" value="FEMALE" name="gender"/><p />
           Include Symbols<input type="checkbox" value="FEMALE" name="gender"/><p />
        </div>
    )
}

export default Conditions
