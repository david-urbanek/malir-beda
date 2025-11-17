import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Malíř Béďa',
        short_name: 'Malíř Béďa',
        description: 'Dekorativní stěrky a malířské práce - Malíř Béďa',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '32x32',
                type: 'image/x-icon',
            },
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/apple-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    }
}
