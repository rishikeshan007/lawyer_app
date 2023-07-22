import TextField from '@mui/material/TextField';
import { useState } from 'react';
import GeneratedSection from '../GeneratedSection';
import Button from '@mui/material/Button';
import { generateCompletion } from '../ChatGpt'
import CircularProgress from '@mui/material/CircularProgress';

const FMPeronsalStatement = () => {
    const [generatedLetter, setGeneratedLetter] = useState('')
    const [experience, setExperience] = useState('')
    const [loading, setLoading] = useState(false)
    const generateFMLetter = async () => {
        setLoading(true)
        const content = `Craft a letter detailing the professional achievements, experiences working with U.S. professionals or organizations, and motivations for wanting to reside in the United States. With the keys provided in Experience and Achievements: ${experience} Experiences: ${experience}, Provide a 100-word “Desire to Reside in the United States” content directly, Provide a 100-word “Family Consideration” content directly. Can you remove the salutations`
        const response = await generateCompletion(content)
        setGeneratedLetter(response.replaceAll('\n', '<br />'))
        setLoading(false)
    }
    return <div>
        <h1 style={{ marginLeft: 10, color: 'rgb(0, 114, 229)' }}>FM Personal Statement</h1>
        <div style={{ width: '100%' }}>
            <TextField required rows={10} multiline fullWidth label='Experience and Acheivements in Detail' id="outlined-basic" variant="outlined" onChange={(e) => setExperience(e.target.value)} />
        </div>
        <div style={{ position: 'absolute', right: 25, marginTop: 10 }}>
            <Button onClick={generateFMLetter} variant="outlined">Generate FM Personal statement</Button>
            {loading && <CircularProgress />}
        </div>
        <GeneratedSection generatedLetter={generatedLetter} setGeneratedLetter={setGeneratedLetter} />
    </div>
}

export default FMPeronsalStatement