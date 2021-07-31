import {useState} from 'react';
import { tourConfig } from '../../utilities/utilities';
import Tour from "reactour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const AppTour = () => {
  const [isTourOpen, setIsTourOpen] = useState(true);

  const disableBody = target => disableBodyScroll(target);
  const enableBody = target => enableBodyScroll(target);

  const closeTour = () => setIsTourOpen(false)

  return (
    <Tour
      onRequestClose={closeTour}
      steps={tourConfig}
      isOpen={isTourOpen}
      maskClassName="mask"
      onAfterOpen={disableBody}
      onBeforeClose={enableBody}
    />
  );
}

export default AppTour;
