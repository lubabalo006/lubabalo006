import React, { ReactNode } from "react";

type SectionProps = {
    title?: string,
    children: ReactNode
}

export const Section = ({children, title = "USD/ZAR" }:
        SectionProps) => {
        return (
            <section className="text-base text-center">
                <h2> {title} </h2>
                <div className="p-2"> {children} </div>
            </section>
        )
    }