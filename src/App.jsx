import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [principle, setPrinciple] = useState("");
  const [intrestRate, setInterestRate] = useState("");
  const [year, setYear] = useState("");
  const [Interest, setInterest] = useState(0);

  // use state for checking values are valid
  const [isPrincipleValid, setPrincipleValid] = useState(true);
  const [isRateValid, setRateValid] = useState(true);
  const [isYearValid, setYearValid] = useState(true);
  const [isZeroVlaid, setZeroValid] = useState(true)

  const isValid = (e) => {

    const fieldValue = e.target.value;
    const fieldName = e.target.name;

    // console.log(fieldName, fieldValue);

    if (fieldValue === '0') {
      setZeroValid(false);
    } else {
      setZeroValid(true);
    }

    if (!!fieldValue.match(/^[0-9]*$/)) {

      // console.log('value is valid');

      if (fieldName === "principleField") {
        setPrincipleValid(true);
        setPrinciple(fieldValue);
        // console.log(isPrincipleValid, principle);
      }

      if (fieldName === "interestField") {
        setRateValid(true);
        setInterestRate(fieldValue)
        // console.log(isRateValid, intrestRate);
      }
      if (fieldName === "yearField") {
        setYearValid(true)
        setYear(fieldValue)
        // console.log(isYearValid, year);

      }
    }
    else {
      // console.log('value is not valid');

      if (fieldName === "principleField") {
        setPrincipleValid(false);
        setPrinciple(fieldValue);
        // console.log(isPrincipleValid, principle);
      }
      if (fieldName === 'interestField') {
        setRateValid(false)
        setInterestRate(fieldValue)
        // console.log(isRateValid, intrestRate);
      }
      if (fieldName === "yearField") {
        setYearValid(false)
        setYear(fieldValue)
        // console.log(isYearValid, year);
      }
    }

  }

  const calculateInterest = (e) => {
    e.preventDefault();
    setInterest(Number((intrestRate / 100) * year * principle))
  }
  const reset = () => {
    setPrinciple("");
    setInterestRate("");
    setYear("");
    setInterest(0);
    setPrincipleValid(true);
    setRateValid(true);
    setYearValid(true);
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ width: "100%", height: '100vh', backgroundColor: 'black' }}>
        <div style={{ width: '500px', backgroundColor: 'white' }} className="rounded p-5 d-flex justfy-content-center flex-column align-items-center">
          <h1>Simple Interest</h1>
          <div style={{ backgroundColor: 'orange' }} className="p-3 rounded d-flex justfy-content-center flex-column align-items-center w-100">
            <h2 id='interestAmount'>{Interest}&nbsp;</h2>
            <p>Total Simple Interest</p>
          </div>
          <form action="" className='w-100' onSubmit={calculateInterest}>
            <div>
              <TextField id="amount" label="Principle" variant="outlined" className='w-100' style={{ marginTop: '20px' }} name='principleField' value={principle} onChange={(e) => isValid(e)} />
            </div>
            <div>
              <TextField id="rate" label="Intrest" variant="outlined" className='w-100' style={{ marginTop: '20px' }} name='interestField' value={intrestRate} onChange={(e) => isValid(e)} />
            </div>
            <div>
              <TextField id="year" label="Year" variant="outlined" className='w-100' style={{ marginTop: '20px' }} name='yearField' value={year} onChange={(e) => isValid(e)} />
            </div>
            <div style={{ marginTop: '20px' }} className='d-flex justify-content-between '>
              <Button type='submit' variant="contained" style={{ width: '190px' }} disabled={!isPrincipleValid || !isRateValid || !isYearValid || !isZeroVlaid}>Calculate Interest</Button>
              <Button variant="outlined" style={{ width: '190px' }} onClick={reset}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
