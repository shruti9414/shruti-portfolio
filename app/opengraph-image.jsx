import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#020617',
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(6,182,212,0.25), transparent 50%), radial-gradient(circle at 80% 80%, rgba(59,130,246,0.25), transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 104,
              height: 104,
              borderRadius: '50%',
              background: '#020617',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: 40, fontWeight: 700, color: '#22d3ee' }}>SD</span>
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, color: '#ffffff' }}>
          Shruti Dodiya
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            fontWeight: 600,
            marginTop: 12,
            color: '#22d3ee',
          }}
        >
          Full Stack Web & App Developer
        </div>
        <div style={{ display: 'flex', fontSize: 22, marginTop: 20, color: '#94a3b8' }}>
          Node.js · React · Next.js · Laravel · React Native · AI Integration
        </div>
      </div>
    ),
    { ...size }
  );
}
