export interface Perfil {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  telefone?: string; // Opcional
  tipo: string; // Ex: 'cliente' ou 'admin'
}