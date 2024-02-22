import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function ChoicesLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <header className="mb-3 py-2">
                <Link href="/"><Button variant="light">← Back</Button></Link>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}
