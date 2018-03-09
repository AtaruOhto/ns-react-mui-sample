import React from 'react';
import { IconButton, FlatButton, RaisedButton, FloatingActionButton} from 'material-ui';

const BtnsComponent = () => (
    <ul>
        <li>
            <h2>FlatButton</h2>
            <FlatButton label="Default"/>
            <FlatButton label="Primary" primary={true}/>
            <FlatButton label="Secondary" secondary={true}/>
            <FlatButton label="Disabled" disabled={true}/>
        </li>
        <li>
            <h2>RaisedButton</h2>
            <RaisedButton label="Default" style={{margin: '0 10px'}}/>
            <RaisedButton label="Primary" primary={true} style={{margin: '0 10px'}}/>
            <RaisedButton label="Secondary" secondary={true} style={{margin: '0 10px'}}/>
            <RaisedButton label="Disabled" disabled={true} style={{margin: '0 10px'}}/>
        </li>
        <li>
            <h2>Floating Action Button</h2>
            <FloatingActionButton style={{margin: '0 10px'}}>
                <i className="material-icons">add</i>
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={{margin: '0 10px'}}>
                <i className="material-icons">add</i>
            </FloatingActionButton>
            <FloatingActionButton secondary={true} style={{margin: '0 10px'}}>
                <i className="material-icons">add</i>
            </FloatingActionButton>
        </li>
        <li>
            <h2>Icon Button</h2>
            <IconButton>
                <i className="material-icons">star rate</i>
            </IconButton>
            <IconButton disabled color="primary">
                <i className="material-icons">delete</i>
            </IconButton>
        </li>
    </ul>
);

export default BtnsComponent;