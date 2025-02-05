import React from 'react'
import { ThemeToggle } from '../theme-toggle-btn'
import Link from 'next/link'
import { buttonVariants } from './button'

const Header = () => {
    return (
        <header className='flex justify-between p-1 py-10'>
            <Link
                href="/">
                <h1 className='text-4xl px-2'> MyTasky </h1>
            </Link>
            <div className='flex gap-x-2 items-start'>
                <Link
                    href='/newTask'
                    className={buttonVariants({ variant: 'secondary' })}>
                    Crear Tarea
                </Link>
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header