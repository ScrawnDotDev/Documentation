import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(254,170,2,0.3) 0%, rgba(254,170,2,0) 70%)',
            borderRadius: '50%',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              color: '#feaa02',
              fontSize: 32,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Scrawn Docs
          </div>

          <div
            style={{
              color: '#ffffff',
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '900px',
            }}
          >
            {page.data.title}
          </div>

          {page.data.description && (
            <div
              style={{
                color: '#a1a1aa',
                fontSize: 36,
                lineHeight: 1.4,
                maxWidth: '850px',
                marginTop: '16px',
              }}
            >
              {page.data.description}
            </div>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#feaa02',
              }}
            />
            <div style={{ color: '#e4e4e7', fontSize: 28, fontWeight: 500 }}>
              docs.scrawn.dev
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: getPageImage(page).segments,
  }));
}
