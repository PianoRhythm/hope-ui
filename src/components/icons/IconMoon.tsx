import { createIcon } from "../icon/create-icon";

export const IconMoon = createIcon({
  path: () => (
    <g fill="none" stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </g>
  ),
});