import { Card } from './index';

export default {
  title: 'Components/Card',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Card({
        style: 'background-color: pink; height: 700px',
        content: 'Mayra',
      })}
    </div>
  </div>
`;
