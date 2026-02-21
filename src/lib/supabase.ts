import { createClient } from '@supabase/supabase-js';

// 환경 변수에서 Supabase 접속 정보 로드
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Supabase 클라이언트 생성 및 내보내기 (어디서든 임포트해서 사용 가능)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
