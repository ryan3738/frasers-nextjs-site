import Image from 'next/image';

export default function Hero(props) {
  return (
    <>
      <div className='welcome-container'>
        <div className='welcome-box'>
          <div>
            <div className='spaced-text'>Est. | 2006</div>
            <Image
              src='/images/frasers-logo.gif'
              alt='frasers logo'
              unsized={true}
            />
            <title>Frasers</title>
            <h3>Home of exquisite tastes and service</h3>
            <p>
              191 SE Dock St #101
              <br />
              Oak Harbor, WA 98277 <b>360-279-1231</b>
              <br />
            </p>
            <p>
              Tue - Sat / 4:30PM to 9:30PM
              <br />
              Sun - Mon / Closed
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
