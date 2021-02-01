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
        console.log({preferences})
        const passwordGenerated = generatePassword({
            length: preferences.passwordLength,
            initialText: preferences.initialText,
            useChars: {
              lowercase: preferences.lowercase,
              numbers: preferences.numbers,
              symbols: preferences.symbols,
              uppercase: preferences.uppercase,
              pronounceable: preferences.pronounceable,
            },
          });
        setPassword(passwordGenerated);
        console.log({passwordGenerated})
      }  

      const handleTogglePronounceable = () => {
          if(preferences.pronounceable == false ) {
              setPreferences({
                  ...preferences,
                  uppercase: true,
                    lowercase: false,
                    numbers: true,
                    symbols: false,
                    pronounceable: true,
              })
          }  else{
              setPreferences({
                  ...preferences,
                  pronounceable: false,
              })
          }
          }
      

    return (
        <div className='conditions' >
            <label >{password}</label><p />
           Password Length <input type="text" value={preferences.passwordLength}  onChange={(e) => {setPreferences({...preferences,passwordLength: Number(e.target.value),});}} placeholder="6" /><p />
           Add Initial Text<input type="input" value={preferences.initialText}  onChange={(e) => {setPreferences({...preferences,initialText: (e.target.value),});}}  /><p />
           Pronouncable<input type="checkbox" value={preferences.pronounceable}  onChange={handleTogglePronounceable}  /><p />
           Include Uppercase Characters<input type="checkbox" value={preferences.uppercase} onChange={() => { setPreferences({...preferences, uppercase: !preferences.uppercase, });}} disabled={preferences.pronounceable} /> <p />
           Include Lowerase Characters<input type="checkbox" value={preferences.lowercase} onChange={() => { setPreferences({...preferences, lowercase: !preferences.lowercase, });}} disabled={preferences.pronounceable}/><p />
           Include Numbers<input type="checkbox" value={preferences.numbers} onChange={() => { setPreferences({...preferences, numbers: !preferences.numbers, });}} disabled={preferences.pronounceable}/><p />
           Include Symbols<input type="checkbox" value={preferences.symbols} onChange={() => { setPreferences({...preferences, symbols: !preferences.symbols, });}} disabled={preferences.pronounceable}/><p />
           <button type="submit" onClick = {onSubmit}>Generate Password</button>
        </div>
    )
}

export default Conditions
