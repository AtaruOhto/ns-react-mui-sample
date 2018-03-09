import React from 'react'
import ReactDOM from 'react-dom'
import {MuiThemeProvider, getMuiTheme, darkBaseTheme, lightBaseTheme} from 'material-ui/styles'

import Buttons from 'components/Buttons'
import TextField from 'components/TextField'
import Progress from 'components/Progress'
import Datepicker from 'components/Datepicker'

const render = (component, root) => {
    ReactDOM.render(
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            {component}
        </MuiThemeProvider>
        ,
        root
    );
};

const button = document.querySelector('#button');
const textField = document.querySelector('#text-field');
const progress = document.querySelector('#progress');
const datePicker = document.querySelector('#date-picker');

if(button) render(<Buttons/>, button);
if(textField) render(<TextField/>, textField);
if(progress) render(<Progress/>, progress);
if(datePicker) render(<Datepicker/>, datePicker);
