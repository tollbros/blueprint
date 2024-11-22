import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Drawer, DialogActions } from '@mui/material';

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
  city,
  county,
  state,
  stateAbbreviation,
  getCopy,
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
  const [newCopyJson, setNewCopyJson] = React.useState(copyJson);

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
    setAnchorEl(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    alert('JSON is saved locally it is up to you to commit the file.');
    // download copyJson as a json file
    saveJson(fileName, newCopyJson);
    setIsEditing(false);
  };

  const handleOnChange = ({ newValue, copyKey }) => {
    setNewCopyJson((prevNewCopy) => {
      return {
        ...prevNewCopy,
        [copyKey]: newValue,
      };
    });
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
    city: city,
    county: county,
    state: state,
    stateAbbreviation: stateAbbreviation,
  };

  return (
    <>
      <div
        onClick={handleOpen}
        style={{ border: '1px solid grey', padding: '8px', cursor: disabled ? 'not-allowed' : 'pointer' }}
      >
        <b>{targetToUpdate}</b>
        <div>{getCopy({ ...copyComponentProps })}</div>
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
      <Drawer open={isEditing} onClose={handleCancelEdit} anchor={'bottom'}>
        <div style={{ display: 'grid', gap: '16px', padding: '16px', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
          {Object.keys(copyJson).map((copyKey, index) => {
            return (
              <TextArea
                key={`textArea-${index}`}
                placeholder={`Edit ${copyKey}`}
                value={newCopyJson[copyKey]}
                onChange={(e) => handleOnChange({ newValue: e.target.value, copyKey })}
                autoFocus
                required
                margin='dense'
                id='name'
                name='copy'
                type='text'
              />
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button size='small' variant={'text'} onClick={handleCancelEdit}>
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} size={'small'} type='button'>
            Save JSON
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default EditableCopy;
