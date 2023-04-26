export default interface ResetSession {
  data: {
    token: string;
  }
  success: boolean;
  errorMessage: string;
}
