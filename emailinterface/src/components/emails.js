import React, { Component } from 'react';
import Mail1 from './mail1';
import Mail2 from './mail2';
import Mail3 from './mail3';

class Emails extends Component {
    state = { 
        emails: [
            { id: 1, },
            { id: 2, },
            { id: 3, },
        ]
     }
    render() { 
        return (<div>
           { this.state.emails.map(mail1 => < Mail1 key={mail1.id} />,
           mail2 =><Mail2 key={mail2.id}/>,
           mail3 =><Mail3 key={mail3.id}/>)}
        </div>);
    }
}
 
export default Emails;