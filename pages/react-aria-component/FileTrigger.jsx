import React from 'react';
import { FileTrigger, Button } from 'react-aria-components';

function Example() {
  let [file, setFile] = React.useState(null);

  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          let files = Array.from(e);
          let filenames = files.map((file) => file.name);
          setFile(filenames);
        }}
      >
        <Button className='text-green-500'>Select a file</Button>
      </FileTrigger>
      {file && file}
    </>
  );
}

export default Example;
