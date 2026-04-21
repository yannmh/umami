import { saveAuth } from '@/lib/auth';
import redis from '@/lib/redis';
import { parseRequest } from '@/lib/request';
import { badRequest, json } from '@/lib/response';

export async function POST(request: Request) {
  const { auth, error } = await parseRequest(request);

  if (error) {
    return error();
  }

  if (redis.enabled) {
    const token = await saveAuth({ userId: auth.user.id }, 86400);

    return json({ user: auth.user, token });
  }

  return badRequest({ message: 'SSO is not enabled.' });
}
