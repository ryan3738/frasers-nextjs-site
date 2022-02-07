import LinkButton from './LinkButton';

const NewsLetter = (): JSX.Element => {
  return (
    <>
      <h3>Sign up for our newsletter to receive updates</h3>
      <LinkButton
        buttonText="SIGN UP"
        buttonLink="https://squareup.com/outreach/sgPDT7/subscribe"
      />
      <br />
      <br />
      <p>We respect your privacy</p>
    </>
  );
};

export default NewsLetter;
