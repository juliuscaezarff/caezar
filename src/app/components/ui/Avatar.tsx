'use client';

import { Avatar } from '@base-ui-components/react/avatar';

export default function UserAvatar() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <Avatar.Root className="inline-flex size-6 items-center justify-center overflow-hidden rounded-full bg-gray-100 align-middle text-base font-medium text-black select-none">
        <Avatar.Image
          src="https://avatars.githubusercontent.com/u/105185487?v=4"
          width="32"
          height="32"
          className="size-full object-cover"
        />
        <Avatar.Fallback className="flex size-full items-center justify-center text-xs">
          LT
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
}
