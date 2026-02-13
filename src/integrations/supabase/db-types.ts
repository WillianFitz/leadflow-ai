export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string
          name: string
          cnpj: string
          plan: string
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          cnpj: string
          plan?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          cnpj?: string
          plan?: string
          status?: string
          updated_at?: string
        }
      }
      leads: {
        Row: {
          id: string
          company_id: string
          name: string
          email: string | null
          phone: string | null
          status: string
          source: string | null
          value: number | null
          notes: string | null
          assigned_to: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          name: string
          email?: string | null
          phone?: string | null
          status?: string
          source?: string | null
          value?: number | null
          notes?: string | null
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          name?: string
          email?: string | null
          phone?: string | null
          status?: string
          source?: string | null
          value?: number | null
          notes?: string | null
          assigned_to?: string | null
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          company_id: string | null
          full_name: string | null
          avatar_url: string | null
          created_at: string
        }
        Insert: {
          id: string
          company_id?: string | null
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
        }
        Update: {
          company_id?: string | null
          full_name?: string | null
          avatar_url?: string | null
        }
      }
      campaigns: {
        Row: {
          id: string
          company_id: string
          name: string
          platform: string
          status: string
          spend: number
          leads_count: number
          cpl: number | null
          ctr: number | null
          conversions: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          name: string
          platform: string
          status?: string
          spend?: number
          leads_count?: number
          cpl?: number | null
          ctr?: number | null
          conversions?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          name?: string
          platform?: string
          status?: string
          spend?: number
          leads_count?: number
          cpl?: number | null
          ctr?: number | null
          conversions?: number
          updated_at?: string
        }
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
}
