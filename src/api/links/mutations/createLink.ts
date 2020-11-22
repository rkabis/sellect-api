export default async (
  args: {
    email: string;
  }
) => {

  const { email } = args

  return {
    isSuccessful: true,
    referenceCode: email
  }
}
