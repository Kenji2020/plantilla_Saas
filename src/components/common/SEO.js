import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function SEO(props) {
    const {title} = props;

    return(
        <HelmetProvider>
            <Helmet>
                <title>{title} | Saasbox - Multipurpose React Template for Saas & Agency</title>
            </Helmet>
        </HelmetProvider>
    )
}