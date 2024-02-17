import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function ChoicesLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <header className="mb-6">
                <Link href="/"><Button>← Back</Button></Link>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}
