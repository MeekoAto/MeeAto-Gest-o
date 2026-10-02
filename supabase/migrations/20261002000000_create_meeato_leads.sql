-- Migration: Criar tabela meeato_leads para captura de leads do formulário de demonstração
-- Schema: public.meeato_leads

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS public.meeato_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    name TEXT NOT NULL,
    business_name TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    email TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    business_type TEXT NOT NULL,
    interest TEXT NOT NULL,
    contact_preference TEXT NOT NULL DEFAULT 'whatsapp',
    message TEXT,
    status TEXT NOT NULL DEFAULT 'novo'
);

-- Índices para buscas e ordenações frequentes
CREATE INDEX IF NOT EXISTS idx_meeato_leads_created_at ON public.meeato_leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_meeato_leads_status ON public.meeato_leads (status);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.meeato_leads ENABLE ROW LEVEL SECURITY;

-- Política de RLS: Permitir inserção anônima pelo formulário da landing page
CREATE POLICY "Permitir insercao anonima de leads"
ON public.meeato_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Política de RLS: Apenas leitura por usuários autenticados/administradores (quando implementado)
CREATE POLICY "Apenas administradores leem leads"
ON public.meeato_leads
FOR SELECT
TO authenticated
USING (true);

COMMENT ON TABLE public.meeato_leads IS 'Leads comerciais e solicitações de demonstração do ecossistema MeeAto';
COMMENT ON COLUMN public.meeato_leads.status IS 'Status do lead no funil: novo, em_contato, qualificado, etc.';
