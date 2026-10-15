/** Personal Agent Protocol draft 0.1. Discovery-only: browse signed out. */
export function GET() {
  return Response.json({
    protocol_version: "0.1",
    organization: { name: "llms.txt hub", domain: "llmstxthub.com" },
    web: {},
  });
}
