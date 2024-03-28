import React from 'react';

function GetToken() {
  return (
    localStorage.getItem("accessToken")
  )
}

export default GetToken