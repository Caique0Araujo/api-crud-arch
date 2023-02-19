export interface EncryptPasswordRepository{
  encrypt(password: string): Promise<string>;
}