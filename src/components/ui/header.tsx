import React from 'react'
import { ThemeToggle } from '../theme-toggle-btn'
import Link from 'next/link'
import { buttonVariants } from './button'

const Header = () => {
    return (
        <header className='flex justify-between p-1 py-10'>
            <h1 className='text-3xl'> MyTasky </h1>
            <div className='flex gap-x-2 items-start'>
                <Link href='/newTask'
                    className={buttonVariants({ variant: 'secondary' })}
                >
                    Crear Tarea
                </Link>
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header