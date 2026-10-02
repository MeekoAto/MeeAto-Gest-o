import { supabase, isSupabaseConfigured } from '../lib/supabase';

export interface MeeAtoLead {
  id?: string;
  created_at?: string;
  name: string;
  business_name: string;
  whatsapp: string;
  email: string;
  city: string;
  state: string;
  business_type: string;
  interest: string;
  contact_preference: string;
  message?: string | null;
  status: string;
}

export interface CreateLeadPayload {
  name: string;
  business_name: string;
  whatsapp: string;
  email: string;
  city: string;
  state: string;
  business_type: string;
  interest: string;
  contact_preference?: string;
  message?: string | null;
  status?: string;
}

export interface CreateLeadResponse {
  success: boolean;
  data?: MeeAtoLead;
  error?: string;
}

/**
 * Persiste um novo lead na tabela public.meeato_leads do Supabase.
 * Se o Supabase não estiver configurado no ambiente local, opera em modo de desenvolvimento seguro.
 */
export async function submitMeeAtoLead(payload: CreateLeadPayload): Promise<CreateLeadResponse> {
  const record: Omit<MeeAtoLead, 'id' | 'created_at'> = {
    name: payload.name.trim(),
    business_name: payload.business_name.trim(),
    whatsapp: payload.whatsapp.trim(),
    email: payload.email.trim().toLowerCase(),
    city: payload.city.trim(),
    state: payload.state.trim().toUpperCase(),
    business_type: payload.business_type.trim(),
    interest: payload.interest.trim(),
    contact_preference: (payload.contact_preference || 'whatsapp').trim().toLowerCase(),
    message: payload.message?.trim() ? payload.message.trim() : null,
    status: 'novo', // Sempre inicializado como 'novo'
  };

  if (!isSupabaseConfigured) {
    console.info(
      'Aviso: Supabase ainda não configurado com VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY. Lead registrado em modo local:',
      record
    );
    // Simulação graciosa quando variáveis de ambiente não foram preenchidas no painel
    return {
      success: true,
      data: {
        ...record,
        id: 'local-preview-id',
        created_at: new Date().toISOString(),
      },
    };
  }

  try {
    const { data, error } = await supabase
      .from('meeato_leads')
      .insert([record])
      .select()
      .single();

    if (error) {
      console.error('Erro ao registrar lead no Supabase:', error.message);
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      data: data as MeeAtoLead,
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Erro inesperado na comunicação com o banco';
    console.error('Exceção ao enviar lead:', errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}
