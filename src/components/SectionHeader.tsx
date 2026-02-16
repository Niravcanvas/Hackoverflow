import React from 'react';

interface SectionHeaderProps {
    badge?: string;
    title: string;
    gradientText?: string;
    subtitle?: string;
    className?: string;
    id?: string;
    align?: 'left' | 'center' | 'right';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    badge,
    title,
    gradientText,
    subtitle,
    className = "",
    id,
    align = 'center'
}) => {
    return (
        <div className={`section-header-wrapper ${className}`} id={id}>
            <style>{`
        .section-header-wrapper {
          text-align: ${align};
          margin-bottom: 3.5rem;
          position: relative;
          z-index: 10;
        }

        .common-badge {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          background: rgba(231, 88, 41, 0.15);
          border: 1px solid rgba(231, 88, 41, 0.4);
          border-radius: 50px;
          color: #e75829;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .common-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -1.5px;
          color: #FFFFFF;
          margin-bottom: 0.8rem;
          line-height: 1.1;
        }

        .common-gradient-text {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 35%, #D91B57 70%, #63205F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .common-subtitle {
          font-size: 1rem;
          color: #B0B0B0;
          max-width: 620px;
          margin: ${align === 'center' ? '0 auto' : '0'};
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .common-title {
            font-size: 2rem;
            letter-spacing: -0.5px;
          }
          
          .common-subtitle {
            font-size: 0.85rem;
            padding: ${align === 'center' ? '0 1rem' : '0'};
          }
        }

        @media (max-width: 480px) {
          .common-title {
            font-size: 1.6rem;
          }
        }
      `}</style>

            {badge && <span className="common-badge">{badge}</span>}
            <h2 className="common-title">
                {title} {gradientText && <span className="common-gradient-text">{gradientText}</span>}
            </h2>
            {subtitle && (
                <p className="common-subtitle">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;