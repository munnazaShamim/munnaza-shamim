import { ImageResponse } from 'next/og';

export const alt ='Munnaza Shamim | Full-Stack Developer & Performance Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #050816 0%, #0F172A 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #5C7CFA, #8AA4FF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#050816',
              fontSize: '32px',
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ color: '#94A3B8', fontSize: '28px' }}>munnaza-shamim.vercel.app</div>
        </div>

        <div
          style={{
            color: '#F8FAFC',
            fontSize: '64px',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '24px',
          }}
        >
          Munnaza Shamim
        </div>
        <div
          style={{
            color: '#8AA4FF',
            fontSize: '36px',
            fontWeight: 600,
            marginBottom: '40px',
          }}
        >
          Full-Stack Developer & Performance Engineer
        </div>
        <div style={{ display: 'flex', gap: '14px' }}>
          {['Next.js', 'WordPress', 'Laravel', 'Core Web Vitals', 'Real-Time Systems'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  color: '#94A3B8',
                  fontSize: '24px',
                  padding: '10px 22px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.14)',
                  background: 'rgba(92,124,250,0.10)',
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
