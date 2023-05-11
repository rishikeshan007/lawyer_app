import '../App.css'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField'
import { AccountCircle } from '@mui/icons-material';

const Login = () => {
    return <div className='container'>
        <section className='login'>
            <header className='header'>
                <div style={{ display: 'flex', fontWeight: 'bolder' }}>
                    <h1 style={{ marginLeft: 35, fontSize: 35 }}><span style={{ color: '#6534d9', fontWeight: 'bolder' }}>L</span>awyer App</h1>
                    <section className='registration'>
                        <span style={{ marginRight: 5 }}>New User?</span>
                        <a href='/' style={{ color: '#6534d9', textDecoration: 'none' }}>  Sign Up</a>
                    </section>
                </div>
            </header>
            <section className='loginform'>
                <img style={{ widht: '40%', height: '80%', marginLeft: 35 }} src='./login.png'></img>
                <div style={{ width: '60%' }}>
                    <div>
                        <div style={{ fontSize: 40, fontWeight: 'bold', marginTop: 20 }}>Welcome back!</div>
                        <div style={{ fontSize: 18, color: 'gray', marginTop: 10 }}>Login to continue</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 30 }}>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                                style: { width: '80%', marginTop: 30  }
                            }}
                            variant="standard"
                        />
                        <br />
                        <br />
                        <TextField
                            id="input-with-icon-textfield"
                            label="Password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                                style: { width: '80%', marginTop: 30  }
                            }}
                            variant="standard"
                        />
                    </div>
                </div>
            </section>
        </section>
    </div>
}

export default Login