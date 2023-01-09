export async function GET({ fetch, request }) {
  return new Response(JSON.stringify({ name: 'kim' }))
}

export async function POST({ fetch, request }) {
  return new Response(JSON.stringify({ name: 'kim' }))
}
