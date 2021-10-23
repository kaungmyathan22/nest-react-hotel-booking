import React from 'react'
import { APP_NAME } from '../../shared/config/envData'
import { Helmet } from "react-helmet";

interface ISEOHeaderProps {
    title: string;
    description: string;
}

export default function SEOHeader ({ title, description }: ISEOHeaderProps) {
    return (
        <Helmet>
            <title>{APP_NAME} | {title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}
