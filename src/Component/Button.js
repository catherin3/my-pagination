import React from 'react'
import {Button} from "@material-ui/core";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div style={{marginTop: 20}}>
      {gotoPrevPage && <Button  variant="contained"onClick={gotoPrevPage}>Previous</Button>}
      {gotoNextPage && <Button variant="contained" onClick={gotoNextPage} style={{marginLeft: 15}}>Next</Button>}
    </div>
  )
}