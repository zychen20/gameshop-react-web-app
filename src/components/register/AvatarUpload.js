import { Avatar, Button as MuiButton, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import {
  CloudUpload as MuiCloudUpload,
  Delete as MuiDelete,
} from "@material-ui/icons";
import { spacing } from "@material-ui/system";
import React, { createRef, useState } from "react";
import styled from "styled-components";

const Button = styled(MuiButton)(spacing);
const UploadIcon = styled(MuiCloudUpload)(spacing);
const DeleteIcon = styled(MuiDelete)(spacing);

const CenteredContent = styled.div`
  text-align: center;
`;

const BigAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;`;

const AvatarUpload = () => {
  const [image, _setImage] = useState(null);
  const inputFileRef = createRef(null);

  const cleanup = () => {
    URL.revokeObjectURL(image);
    inputFileRef.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];

    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
  };

  /**
   *
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  const handleClick = (event) => {
    if (image) {
      event.preventDefault();
      setImage(null);
    }
  };

  return (
      <CenteredContent>
        <BigAvatar
            $withBorder
            alt="Avatar"
            src={image || "/static/img/avatars/default-profile.svg"}
            imgProps={{
              style: {
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "cover",
              },
            }}
        />
        <input
            ref={inputFileRef}
            accept="image/*"
            hidden
            id="avatar-image-upload"
            type="file"
            onChange={handleOnChange}
        />
        <label htmlFor="avatar-image-upload">
          <Button
              variant="contained"
              color="primary"
              component="span"
              mb={2}
              onClick={handleClick}
          >
            {image ? <DeleteIcon mr={2} /> : <UploadIcon mr={2} />}
            {image ? "Remove" : "Upload"}
          </Button>
        </label>
        <Typography variant="caption" display="block" gutterBottom>
          Upload your avatar
        </Typography>
      </CenteredContent>
  );
};

export default AvatarUpload;