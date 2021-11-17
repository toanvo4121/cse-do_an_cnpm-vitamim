import { useState, useEffect } from 'react';
import axios from 'axios';

function ShowTemplate() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      const { data } = await axios.get('/templates/');
      setTemplates(data);
    };

    fetchTemplates();
  }, []);

  return (
    <div className='template-overlay'>
      {templates.map((template, index) => (
        <div
          className='template'
          style={{ backgroundImage: template.image }}
        ></div>
      ))}
    </div>
  );
}

export default ShowTemplate;
