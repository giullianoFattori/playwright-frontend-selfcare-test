import { z } from 'zod';

const EnvironmentSchema = z.object({
  BASE_URL: z.string().url().optional()
});

type Environment = z.infer<typeof EnvironmentSchema>;

const parsedEnv = EnvironmentSchema.safeParse(process.env);

if (!parsedEnv.success) {
  throw new Error(`Invalid environment configuration: ${parsedEnv.error.message}`);
}

export const env: Environment = parsedEnv.data;
