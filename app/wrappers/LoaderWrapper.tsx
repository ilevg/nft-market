"use client";
import { useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation"; // Используем роутер из next/navigation
import Loader from "@/components/common/Loader";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
    const [isPending, startTransition] = useTransition(); // Хук для отслеживания состояния перехода
    const [loading, setLoading] = useState(true);
    const pathName = usePathname();

    useEffect(() => {
        setLoading(true);
        const handleTransitionEnd = () => {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 400)
            return () => clearTimeout(timer)
        };
        startTransition(() => {
            handleTransitionEnd();
        });
        return () => {
            setLoading(false);
        };
    }, [pathName, startTransition]);

    return (
        <>
            {loading || isPending ? <Loader loading={loading} /> : children}
        </>
    );
}
