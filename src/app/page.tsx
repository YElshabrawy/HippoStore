import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';
import Link from 'next/link';

const perks = [
    {
        name: 'Instant Delevery',
        Icon: ArrowDownToLine,
        description:
            'Get your account deleivered to your email in a seconds and use it instantly.',
    },
    {
        name: 'Guaranteed Quality',
        Icon: CheckCircle,
        description:
            'Every account on our platform is verified by our team to ensure highest quality. Not happy? We offer a 30-day refund guarantee.',
    },
    {
        name: 'Free Palestine',
        Icon: Leaf,
        description: "We've pledged 5% of sales to Palestine.",
    },
];

export default function Home() {
    return (
        <>
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    {/* Hero */}
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Your marketplace for high-quality{' '}
                        <span className="text-primary">gaming accounts</span>.
                    </h1>
                    <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                        Welcome to HippoStore. Every account on our platform is
                        verified by our team to ensure our highest quality
                        standrds.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link href={'/products'} className={buttonVariants()}>
                            Browse Trending
                        </Link>
                        <Button variant={'ghost'}>
                            Our quality promise &rarr;
                        </Button>
                    </div>
                </div>
                {/* TODO: List products */}
            </MaxWidthWrapper>
            <section className="border-t border-gray-200 bg-gray-50">
                <MaxWidthWrapper className="py-20">
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                        {perks.map((el, i) => (
                            <div
                                key={i}
                                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                            >
                                <div className="md:flex-shrink-0 flex justify-center">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-primary">
                                        {<el.Icon className="w-1/3 h-1/3" />}
                                    </div>
                                </div>
                                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-base font-medium text-gray-900">
                                        {el.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {el.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
}
