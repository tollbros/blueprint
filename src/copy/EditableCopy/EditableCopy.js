import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Dialog, DialogActions, DialogContent } from '@mui/material';

import { Button, TextArea } from '../../index.js';

const saveJson = (filename, dataObjToWrite) => {
  const blob = new Blob([JSON.stringify(dataObjToWrite)], { type: 'text/json' });
  const link = document.createElement('a');

  link.download = filename;
  link.href = window.URL.createObjectURL(blob);
  link.dataset.downloadurl = ['text/json', link.download, link.href].join(':');

  const evt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  link.dispatchEvent(evt);
  link.remove();
};

const EditableCopy = ({
  location,
  state,
  CopyComponent,
  copyJson,
  targetToUpdate,
  fileName,
  isNearBy,
  isPlural,
  isNoQMIs,
  isNoHomeDesigns,
  communityName,
  disabled,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [isEditing, setIsEditing] = React.useState(false);
  const [copy, setCopy] = React.useState(copyJson[targetToUpdate]);

  const handleOpen = (event) => {
    if (disabled) {
      return;
    }

    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    // download copyJson as a json file
    saveJson(fileName, {
      ...copyJson,
      [targetToUpdate]: copy,
    });
    setIsEditing(false);
  };

  const handleOnChange = (e) => {
    setCopy(e.target.value);
  };

  const copyComponentProps = {
    isTownhome: targetToUpdate === 'townhome',
    isCondo: targetToUpdate === 'condo',
    isActiveAdult: targetToUpdate === 'activeAdult',
    isSingleFamily: targetToUpdate === 'singleFamily',
    isFuture: targetToUpdate === 'future',
    isFuturePlural: targetToUpdate === 'futurePlural',
    isNearBy: isNearBy,
    isPlural: isPlural,
    isNoHomeDesigns: isNoHomeDesigns,
    isNoQMIs: isNoQMIs,
    communityName: communityName,
  };

  return (
    <>
      <div
        onClick={handleOpen}
        style={{ border: '1px solid grey', padding: '8px', cursor: disabled ? 'not-allowed' : 'pointer' }}
      >
        <b>{targetToUpdate}</b>
        <div>
          <CopyComponent location={location} state={state} {...copyComponentProps} />
        </div>
      </div>
      <Menu
        id={`menu-${fileName}-${targetToUpdate}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleOpenEdit}>Edit</MenuItem>
      </Menu>
      <Dialog
        open={isEditing}
        onClose={handleCancelEdit}
        PaperProps={{
          component: 'form',
          onSubmit: handleSaveEdit,
        }}
      >
        <DialogContent>
          <TextArea
            placeholder={`Edit ${targetToUpdate}`}
            value={copy}
            onChange={handleOnChange}
            autoFocus
            required
            margin='dense'
            id='name'
            name='copy'
            type='text'
          />
        </DialogContent>
        <DialogActions>
          <Button size='small' variant={'text'} onClick={handleCancelEdit}>
            Cancel
          </Button>
          <Button size={'small'} type='submit'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditableCopy;
