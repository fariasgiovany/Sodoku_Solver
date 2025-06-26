import { url } from 'inspector';
import { JetBrains_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'


export async function POST(request: NextRequest) {
  
// This function handles POST requests to the /api/enviar endpoint
  // You can access the request body, headers, etc. here
  
  const body = await request.json();
  
  const local = process.env.BACK_HOST || 'http://localhost:3000/api/receber';
  console.log('Sending data to:', local);
  const resultado = await fetch(local ,{method:"PUT", body:JSON.stringify(body), headers: {'Content-Type': 'application/json'}})
  const resposta = await resultado.json();
  const status = resposta.solution;
   
  return new Response(JSON.stringify({status}), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello from Next.js!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}