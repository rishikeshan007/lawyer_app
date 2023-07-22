import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './dashboard.css'

const sidePanelLinks = [
    {
        title: 'H1B',
        route: 'start',
        children: [
            {
                title: 'Overview',
                route: 'overview'
            },
            {
                title: 'Examples',
                route: 'examples'
            },
            {
                title: 'Installation',
                route: 'installation'
            },
            {
                title: 'Templates',
                route: 'templates'
            }
        ]
    },
    {
        title: 'Green Card',
        route: 'start',
        children: [
            {
                title: 'Overview',
                route: 'overview'
            },
            {
                title: 'Examples',
                route: 'examples'
            },
            {
                title: 'Installation',
                route: 'installation'
            },
            {
                title: 'Templates',
                route: 'templates'
            },
            {
                title: 'Overview',
                route: 'overview'
            },
            {
                title: 'Examples',
                route: 'examples'
            },
            {
                title: 'Installation',
                route: 'installation'
            },
            {
                title: 'Templates',
                route: 'templates'
            }

        ]
    },
    {
        title: 'B1- Tourist',
        route: 'start',
        children: [
            {
                title: 'Overview',
                route: 'overview'
            },
            {
                title: 'Examples',
                route: 'examples'
            },
            {
                title: 'Installation',
                route: 'installation'
            },
            {
                title: 'Templates',
                route: 'templates'
            },
            {
                title: 'Overview',
                route: 'overview'
            },
            {
                title: 'Examples',
                route: 'examples'
            },
            {
                title: 'Installation',
                route: 'installation'
            },
            {
                title: 'Templates',
                route: 'templates'
            }

        ]
    },
]
const SidePanel = () => {
    return sidePanelLinks.map(x => {
        return <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white", fontSize: 40 }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ background: '#3a3a3a', borderBottom: '0.5px solid white' }}
            >
                <Typography fontStyle={{ color: 'white', fontWeight: 800 }}>{x.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {x.children.length ? <div style={{ display: 'flex', flexDirection: 'column' }}>{x.children.map(d => {
                    return <span className='accordionItem' style={{ cursor: 'pointer', padding: 10 }}>
                        {d.title}
                    </span>
                })}</div> : null}
            </AccordionDetails>
        </Accordion>
    })
}

export default SidePanel