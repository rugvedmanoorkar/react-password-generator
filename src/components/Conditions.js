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
        
          <div class= "container-2">
            <div class="result"><input value= {password} ></input><p /></div>
            <div className='conditions' >
           <label>Password Length </label><input type="text" value={preferences.passwordLength}  onChange={(e) => {setPreferences({...preferences,passwordLength: Number(e.target.value),});}} placeholder="6" /><p />
           <label>Add Initial Text </label><input type="input" value={preferences.initialText}  onChange={(e) => {setPreferences({...preferences,initialText: (e.target.value),});}}  /><p />
           <label>Pronouncable</label><input type="checkbox" value={preferences.pronounceable}  onChange={handleTogglePronounceable}  /><p />
           <label>Include Uppercase Characters</label><input type="checkbox" value={preferences.uppercase} onChange={() => { setPreferences({...preferences, uppercase: !preferences.uppercase, });}} disabled={preferences.pronounceable} /> <p />
           <label>Include Lowerase Characters</label><input type="checkbox" value={preferences.lowercase} onChange={() => { setPreferences({...preferences, lowercase: !preferences.lowercase, });}} disabled={preferences.pronounceable}/><p />
           <label>Include Numbers</label><input type="checkbox" value={preferences.numbers} onChange={() => { setPreferences({...preferences, numbers: !preferences.numbers, });}} disabled={preferences.pronounceable}/><p />
           <label>Include Symbols</label><input type="checkbox" value={preferences.symbols} onChange={() => { setPreferences({...preferences, symbols: !preferences.symbols, });}} disabled={preferences.pronounceable}/><p />
           <div class='submit'><button class="btn" type="submit" onClick = {onSubmit}>Generate Password</button></div>
          </div>
        </div>
    )
}

export default Conditions
