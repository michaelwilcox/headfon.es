import * as React from 'react';
import './style.css';

export default function Logo(props) {
  const { fillColor, style = {} } = props;
  return (
    <svg
      className="headfones-logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="100%"
      viewBox="0 10 90 160"
      style={style}
    >
      <g>
        <defs />
        <g fill={fillColor} />
        <g
          fill={fillColor}
          transform="matrix(0.7582114353652567,0,0,0.7582114353652567,6.599465719447787,36.967152089278656)"
        >
          <g xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3,73.9c0.2,0.7,0.7,0.8,1,1c1.8,1,2.7,2.6,3.5,4.3c0.6,1.2,0.3,2.5-0.4,3.6c-0.6,0.9-1,1.9-1.3,2.8   c-0.5,1.7,0.3,3,2.4,3.2c1.6,0.2,3.1,0.3,4.7-0.2c2.8-0.9,5.6-1.6,8.5-2c0.6-0.1,1.3-0.2,1.9-0.5c3.1-1.2,6.5-1.4,9.7-2.1   c2.5-0.6,5.3,0.6,6.4,2.7c0.8,1.3,0.6,2.7-0.4,3.9c-0.5,0.5-1,1-1.5,1.6c-0.3,0.4-0.6,0.8-0.7,1.2c-0.6,1.7,0.1,2.2,1.8,2.1   c2.3-0.2,4.6-0.4,6.8-0.9c2.7-0.6,5.4-0.7,8.2-0.8c1.7-0.1,2.3,0.1,3.4,0.9c-0.3,0.5-0.8,0.3-1.2,0.2c-3.5-0.2-6.9,0.1-10.3,0.8   c-2.4,0.5-4.8,0.7-7.2,0.9c-2.5,0.2-3.5-0.9-2.9-3.1c0.3-1.1,1.3-1.8,2-2.7c0.5-0.5,1-1,1.1-1.7c0.4-2.3-2.2-4.7-4.8-4.1   c-2.9,0.6-6,0.9-8.8,1.8c-1.7,0.6-3.5,1-5.3,1.2c-2.2,0.3-4.3,1-6.4,1.6c-2,0.7-4,0.6-6,0.1c-2.3-0.6-3.3-2.3-2.6-4.3   c0.3-0.8,0.6-1.5,1-2.2c1.8-2.5,1.1-4.3-0.8-6.3c-1.5-1.6-3.6-2.8-6.1-3.2c-2-0.3-3.5-1.5-4.6-3c-0.5-0.6-0.8-1-1.9-0.8   c-2.8,0.4-4.6-0.6-5.3-3.1c-0.7-2.4-0.6-4.9-0.7-7.3c0-0.6,0-1.1,0-1.7C4.3,55,6.1,53,9.4,52.8c0.9-0.1,1.5-0.3,1.9-0.9   c1.2-1.6,2.8-3,5-3.6c1-0.3,1.1-0.9,1-1.6c-0.2-3-0.1-5.9,0.2-8.9c0.3-4.3,1.2-8.5,3-12.5c2.5-5.7,6.3-10.9,11.6-15   c0.5-0.4,1.1-0.8,1.6-1.3c4.4-3.4,9.6-4.9,15.5-5c5.4,0,10.5,1.2,15.3,3.3C67,8.3,69.1,10,70.8,12c4.5,5.4,7.5,11.4,9.9,17.6   c2.1,5.3,3.1,10.9,3.3,16.5c0,0.2,0,0.5,0,0.7c-0.2,2.2-0.2,2.2,2.2,3c1.7,0.6,3,1.6,4.1,2.8c0.4,0.4,0.7,0.7,1.4,0.8   c1.8,0.1,3,1,3.5,2.4c1.3,3.9,2.3,7.9,1,11.9c-0.7,2.3-2,4.4-5.3,4.5c-0.4,0-0.7,0.2-1,0.5c-0.4,0.3-0.8,0.6-1.1,1   c-1.8,1.8-4.1,2.5-6.8,2.5c-1.6,0-3.3-0.2-4.9-0.4c-1.9-0.2-3.2-1.5-3.9-3.1c-1.1-2.4-1.3-5-1.4-7.6c-0.1-1.8,0.1-3.5,0-5.3   c-0.1-2.3,0.7-4.4,1.6-6.5c0.6-1.5,1.9-2.6,3.6-3.2c0.9-0.3,1.2-0.8,1.5-1.6c0.5-1.7,0.4-3.4,0.2-5.1c-0.4-2.8-0.9-5.6-1.8-8.4   c-1.4-4.4-4-8.3-7.1-12c-1.3-1.5-2.3-3.2-3.9-4.5c-1.8-1.5-3.8-2.7-6.1-3.4c-3.6-1.1-7.2-2.2-11-2.3c-1.1,0-2.1-0.1-3.1,0.1   c-2.9,0.5-5.7,1.2-8.2,2.6c-4.5,2.5-7.5,6-9.4,10.2c-2.5,5.4-4.3,11-5.8,16.7c-0.3,1.1-0.5,2.2-0.7,3.4c-0.1,0.5-0.1,1,0.8,1.1   c3.3,0.3,4.8,2.3,5.5,4.7c1.2,4.3,2.2,8.6,1.9,13c-0.2,2.2-0.8,4.3-1.8,6.3c-0.7,1.4-2,2.3-3.8,2.2C23.2,73.3,22.3,73.7,21.3,73.9z    M18.5,41.5c-0.1,1.5-0.1,3.3,0.1,5c0.1,0.5,0.1,0.9,0.9,0.9c0.6,0,0.9-0.3,0.9-0.9c0-1.5,0.4-3,0.8-4.5c1.5-5.6,3.3-11.1,5.8-16.5   c1.9-4.2,4.8-7.8,9.2-10.4c5.2-3,10.8-3.9,16.9-2.7c2.2,0.4,4.3,1.2,6.4,1.7c3,0.7,5.4,2.2,7.6,4.1c1.2,1.1,2.2,2.4,3.2,3.7   c5.1,5.9,8.6,12.3,9.4,19.7c0.3,2.3,0.7,4.6,0.5,7c0,0.4-0.5,0.9,0,1.3c0.5,0.3,1-0.2,1.5-0.3c1-0.2,1-0.9,1-1.6   c0.4-6.3-1.1-12.3-3.3-18.2c-2.3-6-5.1-11.9-9.6-17c-2-2.3-4.4-4.3-7.5-5.3c-2.3-0.8-4.6-1.4-7-1.9c-3.5-0.7-7-0.8-10.5-0.2   c-3.1,0.5-6.1,1.4-8.6,3.1c-3,2.1-5.8,4.4-8.2,7.1c-3.1,3.5-5.5,7.4-7,11.6C19.4,31.7,18.5,36.4,18.5,41.5z M82.6,50.7   c0.1,0.5,0.7,0.7,0.4,1c-0.7,0.7-0.2,1.4-0.1,2.1C83,54.4,83,55,83,55.5c0.1,2.8-0.2,5.6-0.5,8.3c-0.4,3.5-0.6,7.1-2.5,10.3   c-0.3,0.5-0.2,0.9,0.5,1c0.4,0.1,0.9,0.2,1.3,0.2c3.8-0.2,6.7-1.7,8-4.8c2.1-5,2.3-10.1,0.5-15.2C89.2,52,86.6,50.5,82.6,50.7z    M19.3,48.7c-4.1,0.1-7.4,2.8-8,6.5c-0.1,0.8-0.4,1.6-0.5,2.4c-0.7,4.2,0,8.3,2.2,12.1c1.5,2.6,4.7,3.8,7.7,3.2   c1.4-0.3,1.4-0.3,0.8-1.4c-2.3-4.2-3.7-8.6-3.4-13.3C18.4,55,18.3,51.9,19.3,48.7z M19.4,56.9c0,4.1,0.3,7.8,2.1,11.3   c0.5,1,0.9,2.2,1.7,3.1c0.9,1.1,2.3,1.2,3.3,0.2c0.3-0.3,0.5-0.7,0.7-1c1.3-2.3,1.7-4.8,1.6-7.3c-0.1-3.5-0.9-7-1.7-10.5   c-0.3-1.2-0.9-2.4-1.9-3.4c-2.1-1.9-4.1-1.6-5,0.9c-0.1,0.3-0.2,0.5-0.2,0.8C19.7,53.1,19.5,55.2,19.4,56.9z M73.1,63.1   c-0.1,2.5,0,5.3,0.7,8c0.4,1.4,1,2.6,2.5,3.3c0.3,0.2,0.7,0.4,1.1,0.2c0.8-0.4,1.8-0.7,2.1-1.7c0.4-1.2,1-2.4,1.2-3.6   c0.8-4.7,1.2-9.5,1.1-14.3c0-0.9-0.4-1.7-0.6-2.5c-0.3-1-1-1.4-2.2-1.4c-1.2,0-2.3,0.3-3.2,1.1c-0.8,0.7-1.2,1.6-1.6,2.5   C73,57.3,73,60,73.1,63.1z M8.6,53.9c-0.6,0-1.3,0.3-1.9,0.9c-0.6,0.7-1,1.5-1,2.4c-0.1,3-0.1,6,0.6,9c0.2,0.9,0.7,1.7,1.5,2.3   c0.8,0.6,1.8,0.7,2.5,0.3c1-0.5,0.4-1.3,0.2-1.8c-0.9-2.2-1.1-4.6-1.2-6.9C9.2,58.4,9.8,56.7,10,55C10.1,54.1,9.9,53.9,8.6,53.9z    M95.5,63.8c0-2-0.4-4.2-1-6.4c-0.2-0.6-0.3-1.1-0.7-1.6c-0.4-0.5-0.9-1.3-1.6-1c-0.7,0.3-0.2,1-0.1,1.5c0.5,3,1,6,0.4,9   c-0.3,1.6-0.6,3.3-1.2,4.8c-0.1,0.3-0.2,0.6,0.1,0.8c0.3,0.2,0.6,0.1,0.9,0c0.6-0.3,1-0.7,1.5-1.1C95.3,68.1,95.6,66.2,95.5,63.8z" />
            <path d="M20.8,56.1c0-1.2,0-2.4,0.7-3.5c0.5-0.8,1.1-1.4,2.3-1.4c1.2,0,1.7,0.8,2,1.7c0.7,2,1.1,4,1.5,6c0.2,1.2,0.3,2.4,0.5,3.5   c0.2,1.5-0.2,2.8-0.8,4.2c-0.4,0.8-0.9,1.6-2.1,1.6c-1.2,0-1.7-0.8-1.9-1.7C21.9,63.1,20.7,59.7,20.8,56.1z M25,64   c0.4-0.5,1.7,0.2,1.5-1c-0.1-0.7,0-0.8-0.6-1.8C25.5,62.2,25.1,63.1,25,64c-0.2,0.7-0.4,1.4-0.6,2.1c-0.1,0.3-0.1,0.6,0.3,0.7   c0.2,0.1,0.4,0.1,0.5,0c0.3-0.2,0.3-0.4,0.1-0.7C24.6,65.5,24.9,64.8,25,64z M25.5,57.8c-0.8,1.4-1.4,2.9-1.3,4.5   C24.2,60.8,26.2,59.6,25.5,57.8z M24.9,55.4c-0.6,0.3-0.6,0.7-0.7,1.3C24.8,56.3,25.2,56.1,24.9,55.4z M22.2,58.7   c0.3-0.5,0.6-0.8,0.3-1.2C21.9,57.8,22.1,58.1,22.2,58.7z M23.4,54.7c-0.1,0.4-0.6,0.6-0.2,1.1C23.3,55.5,23.6,55.1,23.4,54.7z" />
            <path d="M81.1,59.6c-0.3,3.3-1,6.5-2.1,9.7c-0.5,1.5-1.4,2.2-2.2,2c-1.3-0.3-1.4-1.4-1.5-2.4c-0.3-2.6-0.8-5.2-0.8-7.8   c-0.1-1.9-0.1-3.9,1.1-5.7c0.6-0.9,1.4-1.2,2.6-1.1c1.2,0.1,2,0.3,2.4,1.4C81.1,57,81.2,58.3,81.1,59.6z M76,59.8   c-0.5,1.8-0.1,3.5,0.2,5.5c0.7-0.6,1.4-1.2,0.8-1.7c-0.9-0.8-0.4-1.4,0.1-2.1c0.8-1.1,1.3-2.3,2.5-3.2c0.2-0.2,0.3-0.5-0.1-0.9   c-0.8,1-1.5,2-2.2,3c-0.3,0.4-0.4,1-1.1,0.8c-0.7-0.2-0.2-0.8-0.2-1.2C76,59.9,76,59.8,76,59.8z M79.1,63.1c-1,1.2-1.1,2.8-2.7,3.5   c0,0,0,0.1-0.1,0.2c-0.1,1,0.1,2,0.4,3c0.1,0.2,0.4,0.3,0.6,0.2c0.6-0.2,0.8-1.2,0.3-1.4c-1.2-0.4-0.8-1-0.4-1.6   c0.5-0.7,1-1.4,1.5-2.2C79.1,64.3,79.5,63.8,79.1,63.1z M79.5,59.6c-0.5,0.8-1,1.3-1.2,2.2C79.3,61.2,80,60.8,79.5,59.6z    M78.2,56.9c0.5-0.2,0.8-0.4,0.8-0.9C78.6,56.2,78.4,56.4,78.2,56.9z" />
          </g>
        </g>
        <g
          id="SvgjsG3570"
          fill={fillColor}
          transform="matrix(1.1505843669523985,0,0,1.1505843669523985,9.539259541756682,98.78627714130785)"
        >
          <path d="M1.1426 23.154295 q0.15625 -0.33203125 0.361328125 -0.7177734375 t0.43945 -0.79102 t0.49805 -0.80566 t0.54688 -0.75195 q0.283203125 -0.341796875 0.5712890625 -0.4931640625 t0.54199 -0.15137 t0.44434 0.10254 t0.3125 0.27832 t0.18555 0.41016 t0.063477 0.50781 q0 0.224609375 -0.0439453125 0.6005859375 t-0.043945 0.78613 q0 0.234375 0.0244140625 0.4638671875 t0.087891 0.41016 t0.19043 0.29297 t0.33203 0.1123 q0.234375 0 0.46875 -0.1318359375 t0.45898 -0.35156 t0.42969 -0.48828 t0.37109 -0.53711 t0.29297 -0.51758 t0.20508 -0.41504 q0.09765625 -0.224609375 0.341796875 -0.224609375 q0.166015625 0 0.263671875 0.1171875 t0.097656 0.25391 q0 0.078125 -0.029296875 0.146484375 q-0.0390625 0.078125 -0.1513671875 0.322265625 t-0.30273 0.56641 t-0.44434 0.67383 t-0.56152 0.64941 t-0.66406 0.48828 t-0.74707 0.19043 q-0.44921875 0 -0.72265625 -0.1904296875 t-0.4248 -0.4834 t-0.20508 -0.6543 t-0.053711 -0.70313 q0 -0.17578125 0.0146484375 -0.3759765625 t0.03418 -0.39551 t0.03418 -0.36621 t0.014648 -0.28809 q0 -0.302734375 -0.0830078125 -0.41015625 t-0.19043 -0.10742 q-0.15625 0 -0.3564453125 0.1806640625 t-0.41992 0.47363 t-0.43945 0.65918 t-0.4248 0.72754 t-0.37109 0.68848 t-0.27344 0.54199 q-0.205078125 0.41015625 -0.4150390625 0.5517578125 t-0.37598 0.1416 q-0.302734375 0 -0.4638671875 -0.2392578125 t-0.16113 -0.58105 l0 -0.61523 q0 -1.845703125 0.0048828125 -3.520507813 t0.048828 -3.1152 t0.14648 -2.6074 t0.30762 -1.9922 t0.52246 -1.2744 t0.7959 -0.44922 q0.41015625 0 0.693359375 0.224609375 t0.45898 0.61035 t0.25391 0.89844 t0.078125 1.0791 q0 1.15234375 -0.2099609375 2.260742188 t-0.56152 2.1631 t-0.82031 2.0557 t-0.98633 1.9482 l0 0.41992 l0 0.48828 l0 0.45898 l0 0.3418 z M1.1426 19.550775 q0.41015625 -0.8984375 0.7470703125 -1.752929688 t0.57617 -1.7041 t0.37598 -1.7236 t0.13672 -1.8213 q0 -0.15625 -0.0146484375 -0.498046875 t-0.087891 -0.69336 t-0.22461 -0.61523 t-0.4248 -0.26367 q-0.21484375 0 -0.37109375 0.2880859375 t-0.27344 0.78125 t-0.19531 1.1475 t-0.12695 1.3867 t-0.073242 1.5039 t-0.03418 1.499 t-0.0097656 1.3623 l0 1.1035 z M9.052765625 22.910175 q0.205078125 0.283203125 0.52734375 0.4541015625 t0.79102 0.1709 q0.478515625 0 0.869140625 -0.2294921875 t0.71289 -0.60059 t0.57617 -0.83008 t0.45898 -0.91797 q0.048828125 -0.107421875 0.13671875 -0.1611328125 t0.19531 -0.053711 q0.166015625 0 0.2685546875 0.1171875 t0.10254 0.25391 q0 0.048828125 -0.009765625 0.0830078125 t-0.029297 0.073242 q-0.673828125 1.484375 -1.469726563 2.236328125 t-1.8018 0.77148 q-0.64453125 0 -1.11328125 -0.2490234375 t-0.77148 -0.64453 t-0.44922 -0.89355 t-0.14648 -0.99609 t0.12207 -0.91797 t0.35156 -0.73242 t0.54688 -0.48828 t0.69824 -0.17578 q0.224609375 0 0.4443359375 0.0927734375 t0.39551 0.26367 t0.2832 0.41504 t0.10742 0.55664 q0 0.400390625 -0.13671875 0.751953125 t-0.37598 0.6543 t-0.57129 0.55664 t-0.71289 0.43945 z M8.759765625 22.275375 q0.302734375 -0.126953125 0.5517578125 -0.322265625 t0.4248 -0.42969 t0.27344 -0.49316 t0.097656 -0.52246 q0 -0.29296875 -0.146484375 -0.4443359375 t-0.3418 -0.15137 q-0.263671875 0 -0.44921875 0.146484375 t-0.30273 0.38086 t-0.1709 0.52246 t-0.053711 0.57129 q0 0.17578125 0.0341796875 0.37109375 t0.083008 0.37109 z M20.5370875 21.259775 q-0.0390625 0.078125 -0.1611328125 0.3271484375 t-0.3125 0.57129 t-0.44434 0.67383 t-0.56641 0.64453 t-0.67383 0.4834 t-0.76172 0.19043 q-0.56640625 0 -0.9521484375 -0.361328125 t-0.56152 -0.9082 q-0.33203125 0.556640625 -0.791015625 0.8837890625 t-0.91797 0.32715 q-0.361328125 0 -0.654296875 -0.1318359375 t-0.49805 -0.37109 t-0.31738 -0.56152 t-0.1123 -0.70313 q0 -0.76171875 0.2587890625 -1.342773438 t0.65918 -0.97168 t0.88379 -0.58594 t0.93262 -0.19531 q0.302734375 0 0.556640625 0.0830078125 t0.43457 0.18066 t0.27832 0.18066 t0.10742 0.092773 q0.107421875 0.126953125 0.107421875 0.263671875 q0 0.146484375 -0.107421875 0.2587890625 t-0.25391 0.1123 q-0.15625 0 -0.263671875 -0.107421875 q-0.01953125 -0.01953125 -0.087890625 -0.0732421875 t-0.18555 -0.1123 t-0.27832 -0.10254 t-0.36621 -0.043945 q-0.302734375 0 -0.64453125 0.13671875 t-0.625 0.4248 t-0.47363 0.72266 t-0.19043 1.0303 q0 0.185546875 0.0390625 0.3759765625 t0.13672 0.34668 t0.26367 0.25391 t0.41016 0.097656 q0.17578125 0 0.4052734375 -0.1171875 t0.43945 -0.36133 t0.38086 -0.61523 t0.23926 -0.87891 q0.01953125 -0.13671875 0.126953125 -0.2294921875 t0.25391 -0.092773 q0.13671875 0 0.2392578125 0.107421875 t0.1123 0.24414 q0.009765625 0.185546875 0.0390625 0.5224609375 t0.13184 0.66895 t0.30762 0.57617 t0.56641 0.24414 q0.234375 0 0.4638671875 -0.126953125 t0.44922 -0.33691 t0.41992 -0.47852 t0.36621 -0.54199 t0.29297 -0.52734 t0.21484 -0.43945 q0.048828125 -0.107421875 0.1416015625 -0.166015625 t0.2002 -0.058594 q0.166015625 0 0.2685546875 0.1220703125 t0.10254 0.25879 q0 0.068359375 -0.029296875 0.13671875 z M23.6523875 21.142575 q0.478515625 2.255859375 1.38671875 2.255859375 q0.3515625 0 0.673828125 -0.2587890625 t0.60059 -0.63477 t0.49316 -0.7959 t0.35156 -0.73242 q0.09765625 -0.234375 0.341796875 -0.234375 q0.15625 0 0.263671875 0.1171875 t0.10742 0.25391 q0 0.078125 -0.029296875 0.13671875 q-0.068359375 0.166015625 -0.2001953125 0.4443359375 t-0.32227 0.5957 t-0.4248 0.64941 t-0.51758 0.5957 t-0.60059 0.43457 t-0.66895 0.1709 q-0.654296875 0 -1.123046875 -0.4541015625 t-0.81055 -1.499 q-0.46875 0.99609375 -0.947265625 1.4453125 t-1.0352 0.44922 q-0.29296875 0 -0.56640625 -0.0927734375 t-0.47852 -0.30762 t-0.33203 -0.55176 t-0.12695 -0.8252 q0 -0.673828125 0.234375 -1.240234375 t0.60547 -0.97168 t0.8252 -0.62988 t0.90332 -0.22461 q0.146484375 0 0.25390625 0.1025390625 t0.10742 0.25879 q0 0.13671875 -0.087890625 0.244140625 t-0.23438 0.12695 q-0.29296875 0.0390625 -0.625 0.185546875 t-0.61035 0.4248 t-0.45898 0.70801 t-0.18066 1.0254 q0 0.48828125 0.2001953125 0.76171875 t0.58105 0.27344 q0.15625 0 0.33203125 -0.0830078125 t0.37598 -0.32715 t0.43945 -0.69336 t0.53223 -1.1816 q-0.166015625 -0.859375 -0.302734375 -1.982421875 t-0.13672 -2.5098 q0 -0.60546875 0.0390625 -1.264648438 t0.12695 -1.2891 t0.23438 -1.1963 t0.35645 -0.99609 t0.49316 -0.67871 t0.64453 -0.24902 q0.322265625 0 0.546875 0.17578125 t0.36621 0.48828 t0.20996 0.75195 t0.068359 0.9668 q0 1.1328125 -0.1953125 2.265625 t-0.4834 2.168 t-0.61035 1.9141 t-0.58594 1.5137 z M24.7948875 13.271375 q0 -0.244140625 -0.0146484375 -0.52734375 t-0.068359 -0.53223 t-0.1416 -0.41504 t-0.23438 -0.16602 q-0.244140625 0 -0.4541015625 0.4296875 t-0.36621 1.1279 t-0.24902 1.582 t-0.092773 1.7822 q0 0.859375 0.068359375 1.71875 t0.15625 1.5332 q0.283203125 -0.751953125 0.537109375 -1.547851563 t0.44434 -1.626 t0.30273 -1.6748 t0.1123 -1.6846 z M27.929675 24.462895 q0.72265625 -0.322265625 1.313476563 -0.7421875 t1.0547 -0.88379 t0.79102 -0.94727 t0.52246 -0.92285 q0.087890625 -0.21484375 0.33203125 -0.21484375 q0.166015625 0 0.2685546875 0.1123046875 t0.10254 0.24902 q0 0.078125 -0.029296875 0.146484375 q-0.21484375 0.478515625 -0.546875 0.9912109375 t-0.80566 1.0059 t-1.1084 0.95215 t-1.4551 0.83984 q0.52734375 0.546875 0.91796875 1.215820313 t0.64941 1.3916 t0.39063 1.46 t0.13184 1.4111 q0 0.615234375 -0.1123046875 1.157226563 t-0.33203 0.94238 t-0.53223 0.62988 t-0.71289 0.22949 q-0.5859375 0 -0.908203125 -0.4345703125 t-0.47363 -1.2012 t-0.17578 -1.8066 t-0.024414 -2.2607 l0 -1.4111 t0.0048828 -1.7285 t0.0097656 -1.9336 t0.014648 -2.0264 t0.019531 -1.9971 t0.029297 -1.8604 q0.029296875 -1.6796875 0.1171875 -2.998046875 t0.2832 -2.2266 t0.53223 -1.3818 t0.85449 -0.47363 q0.41015625 0 0.693359375 0.2294921875 t0.45898 0.61523 t0.25391 0.90332 t0.078125 1.084 q0 1.19140625 -0.205078125 2.3046875 t-0.55664 2.1582 t-0.8252 2.041 t-1.0107 1.9629 l0 0.86426 l0 0.92773 t-0.0048828 0.88867 t-0.0048828 0.7373 z M27.958975 19.540975 q0.400390625 -0.751953125 0.7373046875 -1.586914063 t0.58105 -1.7236 t0.38086 -1.8164 t0.13672 -1.8652 q0 -0.46875 -0.0439453125 -0.849609375 t-0.13672 -0.64941 t-0.23438 -0.41992 t-0.32715 -0.15137 q-0.1953125 0 -0.341796875 0.234375 t-0.25391 0.625 t-0.18066 0.89844 t-0.12207 1.0596 t-0.078125 1.1035 t-0.043945 1.0352 t-0.019531 0.85449 t-0.0048828 0.55664 q-0.009765625 0.390625 -0.0146484375 0.693359375 t-0.014648 0.5957 t-0.014648 0.625 t-0.0048828 0.78125 z M27.929675 25.664075 q0 0.615234375 -0.0048828125 1.147460938 t-0.0048828 0.97168 q0 0.908203125 0.009765625 1.796875 t0.092773 1.5967 t0.25391 1.1426 t0.49316 0.43457 q0.29296875 0 0.478515625 -0.263671875 t0.28809 -0.625 t0.1416 -0.7373 t0.039063 -0.61035 q0 -0.595703125 -0.1123046875 -1.25 t-0.3418 -1.2939 t-0.56152 -1.2354 t-0.77148 -1.0742 z M36.113234375 22.910175 q-0.244140625 0 -0.4296875 -0.0390625 q-0.146484375 0.29296875 -0.3515625 0.5419921875 t-0.47363 0.43457 t-0.60059 0.29297 t-0.72266 0.10742 q-0.458984375 0 -0.83984375 -0.1611328125 t-0.66406 -0.44922 t-0.43945 -0.69336 t-0.15625 -0.89355 q0 -0.625 0.224609375 -1.088867188 t0.51758 -0.77148 t0.58594 -0.45898 t0.43945 -0.15137 q0.166015625 0 0.2490234375 0.087890625 t0.083008 0.23438 q0 0.166015625 -0.1025390625 0.2490234375 t-0.25879 0.16113 t-0.33203 0.21973 t-0.32715 0.35645 t-0.24902 0.50781 t-0.097656 0.6543 q0 0.322265625 0.09765625 0.6005859375 t0.2832 0.47852 t0.43945 0.3125 t0.56641 0.1123 q0.556640625 0 0.9228515625 -0.2587890625 t0.56152 -0.65918 q-0.576171875 -0.302734375 -0.947265625 -0.859375 t-0.37109 -1.25 q0 -0.556640625 0.2685546875 -0.908203125 t0.70801 -0.35156 q0.263671875 0 0.498046875 0.126953125 t0.41504 0.40039 t0.28809 0.70313 t0.10742 1.0254 q0 0.3125 -0.078125 0.654296875 q0.05859375 0.009765625 0.1171875 0.009765625 l0.12695 0 q0.33203125 0 0.595703125 -0.078125 t0.47852 -0.23438 t0.38574 -0.40039 t0.32715 -0.56641 q0.029296875 -0.05859375 0.126953125 -0.1123046875 t0.19531 -0.053711 q0.126953125 0 0.2392578125 0.1025390625 t0.1123 0.26855 q0 0.078125 -0.0390625 0.1708984375 t-0.078125 0.1709 q-0.166015625 0.29296875 -0.3857421875 0.5615234375 t-0.51758 0.46875 t-0.66895 0.31738 t-0.83008 0.10742 z M34.443334375 20.449175 q0 0.185546875 0.048828125 0.390625 t0.15137 0.40527 t0.25391 0.38086 t0.35645 0.30762 q0.029296875 -0.205078125 0.029296875 -0.400390625 q0 -0.263671875 -0.0390625 -0.537109375 t-0.1123 -0.50293 t-0.18066 -0.37109 t-0.25391 -0.1416 q-0.05859375 0 -0.15625 0.087890625 t-0.097656 0.38086 z M40.09769375 23.105465 q0.15625 -0.322265625 0.361328125 -0.7080078125 t0.43945 -0.78125 t0.49316 -0.78613 t0.54199 -0.74219 q0.283203125 -0.341796875 0.5712890625 -0.4931640625 t0.54199 -0.15137 q0.5078125 0 0.751953125 0.37109375 t0.24414 0.91797 q0 0.126953125 -0.0146484375 0.3076171875 t-0.029297 0.38574 t-0.029297 0.41504 t-0.014648 0.39551 q0 0.234375 0.0244140625 0.44921875 t0.092773 0.37598 t0.19531 0.25391 t0.33203 0.092773 q0.37109375 0 0.72265625 -0.2880859375 t0.64941 -0.68359 t0.51758 -0.80566 t0.32715 -0.66406 q0.048828125 -0.107421875 0.1416015625 -0.166015625 t0.2002 -0.058594 q0.166015625 0 0.2685546875 0.1220703125 t0.10254 0.25879 q0 0.068359375 -0.029296875 0.13671875 q-0.0390625 0.078125 -0.15625 0.322265625 t-0.30762 0.56152 t-0.44434 0.67383 t-0.56152 0.64941 t-0.66406 0.48828 t-0.74707 0.19531 q-0.439453125 0 -0.712890625 -0.1708984375 t-0.42969 -0.44922 t-0.20996 -0.61523 t-0.053711 -0.67871 q0 -0.146484375 0.0146484375 -0.33203125 t0.039063 -0.39063 t0.039063 -0.41016 t0.014648 -0.39063 q0 -0.3125 -0.09765625 -0.4248046875 t-0.17578 -0.1123 q-0.15625 0 -0.3564453125 0.1806640625 t-0.41992 0.47363 t-0.44922 0.65918 t-0.42969 0.72754 t-0.37109 0.68848 t-0.26855 0.54199 q-0.1953125 0.41015625 -0.390625 0.5517578125 t-0.40039 0.1416 q-0.283203125 0 -0.4541015625 -0.1708984375 t-0.1709 -0.4834 q0 -0.068359375 0.01953125 -0.2685546875 t0.048828 -0.47852 t0.058594 -0.60059 t0.058594 -0.63965 t0.048828 -0.59082 t0.019531 -0.45898 q0 -0.244140625 -0.01953125 -0.46875 t-0.078125 -0.27344 q-0.087890625 0.029296875 -0.3125 0.3662109375 t-0.57617 1.1865 q-0.048828125 0.107421875 -0.146484375 0.166015625 t-0.20508 0.058594 q-0.166015625 0 -0.263671875 -0.1123046875 t-0.097656 -0.25879 q0 -0.068359375 0.029296875 -0.146484375 q0.439453125 -1.044921875 0.8251953125 -1.538085938 t0.7666 -0.49316 q0.224609375 0 0.380859375 0.1123046875 t0.24902 0.29785 t0.13672 0.41016 t0.043945 0.45898 q0 0.17578125 -0.0244140625 0.546875 t-0.063477 0.7959 t-0.073242 0.84473 t-0.063477 0.70313 z M48.779278125 23.701175 q0 0.224609375 -0.1513671875 0.3759765625 t-0.37598 0.15137 t-0.37598 -0.15137 t-0.15137 -0.37598 q0 -0.21484375 0.1513671875 -0.3662109375 t0.37598 -0.15137 t0.37598 0.15137 t0.15137 0.36621 z M51.591828125 22.910175 q0.205078125 0.283203125 0.52734375 0.4541015625 t0.79102 0.1709 q0.478515625 0 0.869140625 -0.2294921875 t0.71289 -0.60059 t0.57617 -0.83008 t0.45898 -0.91797 q0.048828125 -0.107421875 0.13671875 -0.1611328125 t0.19531 -0.053711 q0.166015625 0 0.2685546875 0.1171875 t0.10254 0.25391 q0 0.048828125 -0.009765625 0.0830078125 t-0.029297 0.073242 q-0.673828125 1.484375 -1.469726563 2.236328125 t-1.8018 0.77148 q-0.64453125 0 -1.11328125 -0.2490234375 t-0.77148 -0.64453 t-0.44922 -0.89355 t-0.14648 -0.99609 t0.12207 -0.91797 t0.35156 -0.73242 t0.54688 -0.48828 t0.69824 -0.17578 q0.224609375 0 0.4443359375 0.0927734375 t0.39551 0.26367 t0.2832 0.41504 t0.10742 0.55664 q0 0.400390625 -0.13671875 0.751953125 t-0.37598 0.6543 t-0.57129 0.55664 t-0.71289 0.43945 z M51.298828125 22.275375 q0.302734375 -0.126953125 0.5517578125 -0.322265625 t0.4248 -0.42969 t0.27344 -0.49316 t0.097656 -0.52246 q0 -0.29296875 -0.146484375 -0.4443359375 t-0.3418 -0.15137 q-0.263671875 0 -0.44921875 0.146484375 t-0.30273 0.38086 t-0.1709 0.52246 t-0.053711 0.57129 q0 0.17578125 0.0341796875 0.37109375 t0.083008 0.37109 z M56.61135 20.371075 q-0.05859375 0.15625 -0.1416015625 0.3515625 t-0.19043 0.41016 q-0.087890625 0.166015625 -0.1806640625 0.2587890625 t-0.23926 0.092773 q-0.166015625 0 -0.263671875 -0.1025390625 t-0.097656 -0.23926 q0 -0.048828125 0.009765625 -0.0830078125 t0.048828 -0.1123 q0.25390625 -0.48828125 0.3759765625 -0.8544921875 t0.2002 -0.7666 q-0.068359375 -0.224609375 -0.09765625 -0.380859375 t-0.029297 -0.32227 q0 -0.322265625 0.13671875 -0.5224609375 t0.38086 -0.2002 q0.224609375 0 0.3564453125 0.1953125 t0.13184 0.47852 q0 0.15625 -0.029296875 0.3125 t-0.078125 0.39063 q0.224609375 0.556640625 0.44921875 0.986328125 t0.40039 0.78613 t0.28809 0.66895 t0.1123 0.625 q0 0.41015625 -0.166015625 0.78125 t-0.54688 0.625 q0.048828125 0.009765625 0.09765625 0.009765625 l0.097656 0 q0.556640625 0 1.025390625 -0.25390625 t0.84473 -0.65918 t0.66895 -0.89844 t0.50781 -0.98145 q0.09765625 -0.224609375 0.2734375 -0.224609375 q0.166015625 0 0.2587890625 0.1171875 t0.092773 0.25391 q0 0.078125 -0.029296875 0.146484375 q-0.107421875 0.263671875 -0.2783203125 0.6005859375 t-0.41016 0.69336 t-0.55176 0.69824 t-0.69824 0.61035 t-0.84473 0.42969 t-1.0059 0.16113 q-0.654296875 0 -1.215820313 -0.2294921875 t-0.91309 -0.75684 q-0.05859375 -0.087890625 -0.05859375 -0.185546875 q0 -0.146484375 0.1123046875 -0.2587890625 t0.25879 -0.1123 q0.15625 0 0.263671875 0.107421875 q0.009765625 0.01953125 0.068359375 0.0634765625 t0.1416 0.097656 t0.19531 0.092773 t0.22949 0.039063 q0.234375 0 0.3955078125 -0.09765625 t0.25879 -0.23926 t0.1416 -0.30273 t0.043945 -0.27832 q0 -0.244140625 -0.078125 -0.48828125 t-0.2002 -0.48828 t-0.26367 -0.50293 t-0.25879 -0.54199 z" />
        </g>
      </g>
    </svg>
  );
}
