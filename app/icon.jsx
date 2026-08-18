import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        }}
      >
        <div
          style={{
            width: '86%',
            height: '86%',
            borderRadius: '50%',
            background: '#020617',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: '#22d3ee',
              letterSpacing: '-0.02em',
            }}
          >
            SD
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
