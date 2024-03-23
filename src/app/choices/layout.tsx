import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';


export default function ChoicesLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <main className="flex h-full max-h-full min-h-full flex-col">
            <header className="fixed inset-x-0 top-0 z-10 bg-gradient-to-b from-violet-700 to-fuchsia-700 p-2 dark lg:static">
                <Link href="/">
                    <Button variant="light" isIconOnly aria-label="Back">
                        <IoArrowBack size={20} />
                    </Button>
                </Link>
            </header>
            {children}
        </main>
    );
}
