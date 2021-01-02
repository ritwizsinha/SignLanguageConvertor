import React from 'react';
import { ListItem, TextField } from '@material-ui/core'

export default ({ text, setText, index, link }) => {
    const isValidLink = () => {
        return !text.includes(".com");
    }
    return (
        <ListItem>
            <TextField id="outlined-basic" label={(link ? "Link " : "Sign ") + index} variant="outlined" color="primary" value={text} fullWidth="100%" onChange={setText} error={link ? isValidLink() : false }/>
        </ListItem>
    )
};