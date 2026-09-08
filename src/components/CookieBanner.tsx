import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAccepted = localStorage.getItem('cookies-accepted');
        if (!hasAccepted) {
            setIsVisible(true);
        }
    }, []);

     const handleAccept = () => {
         localStorage.setItem('cookies-accepted', 'true');
         setIsVisible(false);
         
         window.dispatchEvent(new StorageEvent('storage', {
             key: 'cookies-accepted',
             newValue: 'true'
         }));
     };

    const handleReject = () => {
        localStorage.setItem('cookies-accepted', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '1rem',
            right: '1rem',
            backgroundColor: 'var(--gc-surface)',
            color: 'var(--gc-text)',
            border: '1px solid var(--gc-border)',
            padding: '1.5rem',
            borderRadius: 'var(--gc-radius, 20px)',
            maxWidth: '380px',
            zIndex: 9999,
            boxShadow: '0 12px 32px rgba(7, 5, 44, 0.18)'
        }}>
            <h3 style={{
                fontFamily: 'var(--gc-font-display)',
                fontSize: '1.15rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                margin: '0 0 0.6rem 0'
            }}>
                Cookie settings
            </h3>

            <span style={{
                display: 'block',
                fontSize: '0.85rem',
                lineHeight: 1.5,
                color: 'var(--gc-text-muted)'
            }}>
                We use tracking technologies to collect data relating to you to perform analytics. By clicking on Accept you consent to this and to the sharing of this data with our partners. You can change your mind at any time. To read more about our practices, please see our{' '}
                <a
                    href="https://www.gnosis.io/legal/cookie-policy"
                    style={{
                        color: 'var(--gc-accent)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '2px',
                        display: 'inline',
                        padding: '0'
                    }}
                >
                    Cookie Policy
                </a>.
            </span>

            <div style={{
                display: 'flex',
                marginTop: '1.25rem',
                gap: '0.5rem'
            }}>
                <button
                    onClick={handleReject}
                    style={{
                        backgroundColor: 'transparent',
                        color: 'var(--gc-text)',
                        border: '1px solid var(--gc-border)',
                        padding: '0.6rem 1.25rem',
                        fontFamily: 'inherit',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        borderRadius: '100px'
                    }}
                >
                    Reject
                </button>
                <button
                    onClick={handleAccept}
                    style={{
                        backgroundColor: 'var(--gc-cta)',
                        color: 'var(--gc-cta-ink)',
                        border: '1px solid transparent',
                        padding: '0.6rem 1.25rem',
                        fontFamily: 'inherit',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        borderRadius: '100px'
                    }}
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
