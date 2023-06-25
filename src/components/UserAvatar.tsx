import { User } from 'next-auth'
import  { FC } from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Icons } from './Icons'
import Image from 'next/image'
import { AvatarProps } from '@radix-ui/react-avatar'

interface UserAvatarProps extends AvatarProps {
    user: Pick<User, 'name' | 'image'>
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props  }) => {
  return (
    <Avatar {...props} >
        {user.image ? (
            <div className="relative aspect-square h-full w-full ">
            <Image fill src={user.image} referrerPolicy='no-referrer' alt='profile image'  />
            </div>
        ): (
            <AvatarFallback>
                <span className='sr-only'>
                <Icons.user  className='h-4 w-4'  />
                </span>
            </AvatarFallback>
        )}
        </Avatar>
  )
}

export default UserAvatar